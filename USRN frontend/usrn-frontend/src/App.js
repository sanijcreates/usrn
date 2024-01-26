import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import CreatePost from "./components/CreatePost";
import Register from "./components/auth/Register";
import Post from "./components/Post";

//TODO 
/*
1. CSS for the Login Page. 
2. Talk w Oshan and Prabesh for front-end
3. Single page blog. 
4. Look into saving images for the blog. 

*/

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/> 
        <Route path = "/createPost" element = {<CreatePost />}  />     
        <Route path = "/register" element = {<Register />} />
        <Route path = "/post/:postId" element = {<Post />}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
