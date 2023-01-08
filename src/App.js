import React, {useState} from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'aa', body: 'ff'},
    {id: 2, title: 'dd', body: 'jj'},
    {id: 3, title: 'cc', body: 'dd'},
  ]) 

  const [selectedSort, setSelectedSort] = useState('');

  const [seacrhQuery, setSearchQuery] = useState('');

  function getSortedPosts() {
    console.log('WORKED')
    if(selectedSort){
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])) ;
    } else {
      return posts;
    }
  }

  const sortedPosts = getSortedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <hr style={{margin:'15px 0'}}></hr>
      <div>
        <MyInput
          placeholder='Search...'
          value={seacrhQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Sort by'
          option ={[
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By description'},
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={sortedPosts} title='list of posts 1'/>
        : <h1 style={{textAlign: 'center'}}>
            There is no posts
          </h1>
      }
     
    </div>
  )
}

export default App;
