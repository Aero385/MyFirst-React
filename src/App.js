import React, {useState} from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';

function App() {

  const [posts] = useState([
    {id: 1, title: 'Javascript', body: 'description'},
    {id: 2, title: 'Javascript 2', body: 'description'},
    {id: 3, title: 'Javascript 3', body: 'description'},
  ]) 

  return (
    <div className='App'>
      <form> 
        <MyInput type='text' placeholder='Post name'/>
        <MyInput type='text' placeholder='Post description'/>
        <MyButton>Create post</MyButton>
      </form>
      <PostList posts={posts} title='list of posts 1'/>
    </div>
  )
}

export default App;
