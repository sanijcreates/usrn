import axios from 'axios';
import React, { useState, useEffect }from 'react'



export default function Profile() {

    const[author, setAuthor] = useState({
      firstName : "",
      lastName: "",
      id: ""
    });
    const [blogs, setBlogs] = useState(); 

    
useEffect(() => {
  const currUser = localStorage.getItem("user");
  if(currUser) {
      const fetchData = async() => {
          try {
              const res = await axios.get(`http://localhost:8080/getAccount/${currUser}`);
              setAuthor(res.data);
          } catch (error) {
              console.log(error);
          }
      };
      fetchData();
  }
}, []);

useEffect(() => {
  if (author) {
      const fetchPostData = async() => {
          try {
              const res2 = await axios.get(`http://localhost:8080/getPostsOnAccount/${author.id}`);
              console.log(res2);
              setBlogs(res2.data)
          } catch(err) {
              console.log(err);
          }
      };
      fetchPostData();
  }
}, [author]);

    return (
        <div className='author-profile-container'>
        <div className="author-profile">
        <div className="profile-logo">
          {/* Render the author's profile logo */}
          <img   />
        </div>
        <h2 className="author-name">{author.firstName + " " + author.lastName}</h2>
      </div>

      <h3 className="published-blogs-title">Published Blogs</h3>
      <ul className="blog-list">
        {blogs && blogs.map((blog) => (
          <li key={blog.id} className="blog-item">
            <h4 className="blog-title">{blog.title}</h4>
            <div className="blog-actions">
              <button
                className="blog-delete-btn"
                // onClick={() => handleBlogDelete(blog.id)
                
              >
                Delete
              </button>
              <button
                className="blog-edit-btn"
                // onClick={() => handleBlogEdit(blog.id)}
              >
                Edit
              </button>
            </div>
          </li>
        ))} 
      </ul>
        </div>
    )
    
}