import React, { useState, useEffect } from "react";
import style from "./blogpost.module.css";
function Blogpost() {
  const [blogposts, setBlogposts] = useState([]); // Initialize as empty array
  const [error, setError] = useState("");

  const fetchdata = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setBlogposts(data);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      {error && <h1>{error}</h1>}

      {blogposts.map((post) => (
        <div className={style.blogpost} key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Blogpost;
