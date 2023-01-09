import React, { useState} from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';

function App() {

  const [posts, setPosts] = useState([]) 
  const [filter, setFilter] = useState({sort:'', query:''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className='App'>
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
     
      <hr style={{margin:'15px 0'}}></hr>
      <PostFilter 
        filter={filter} 
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='list of posts 1'/>
    </div>
  )
}

export default App;
