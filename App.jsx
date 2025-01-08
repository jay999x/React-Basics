import { React, useState, Stack } from 'react'
import { PostComponent } from './Post';

//import './App.css'

function App(){

  const[posts, setPosts] = useState([])
  const postcomp = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    description={post.description}
    time={post.time}
    image={post.image}
     />)

     function addPost(){
      setPosts([...posts,{
        name: "Jay",
        subtitle: "This is the first post",
        description:"Nothing to describe",
        time:"10m ago",
        image:"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"

      } ])
     }
return(
  <>
  <div style={{background: "#dfe6e9", height: "100vh" }}>
  
      <button onClick={addPost}>Add post</button>
      <div style={{display: "block", justifyContent: "center" , padding:"10px 40px"}}>
      
        <div>
          {postcomp}
           
        </div>
       
      </div>
    </div>
  </>
)
  }


export default App
