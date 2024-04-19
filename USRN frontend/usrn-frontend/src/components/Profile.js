import axios from 'axios';
import React, { useState, useEffect }from 'react'



export default function Profile() {

    const[author, setAuthor] = useState();

    useEffect(() => {
        const currUser = localStorage.getItem("user")
        console.log(currUser)
        if(currUser) {
            const fetchData = async() => {
                try {
                    const res = await axios.get(`http://localhost:8080/getAccount/${currUser}`)
                    setAuthor(res)
                    console.log(res)
                }
                catch (error) {
                  console.log(error)
                }
            }
            fetchData();  
        }
    })

    return (
        <div className='author-profile-container'>
        <div className="author-profile">
        <div className="profile-logo">
          {/* Render the author's profile logo */}
          <img   />
        </div>
        <h2 className="author-name">{}</h2>
      </div>

      <h3 className="published-blogs-title">Published Blogs</h3>
      <ul className="blog-list">
        {/* {blogs.map((blog) => (
          <li key={blog.id} className="blog-item">
            <h4 className="blog-title">{blog.title}</h4>
            <div className="blog-actions">
              <button
                className="blog-delete-btn"
                // onClick={() => handleBlogDelete(blog.id)}
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
        ))} */}
      </ul>
        </div>
    )
    
}