import React, { useState } from "react";
import styles from "./first.module.css";
import coffeeImage from "../image/coffee.jpg"; 
import natureImage from "../image/agrow.png"; 

const First = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDate = new Date().toLocaleDateString();
    setComments([...comments, { name, date: currentDate, text: comment }]);
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Exploring the Beauty of Nature</h1>
      <img src={natureImage} alt="Nature" className={styles.blogImage} />

      <div className={styles.authorInfo}>
        <img
          src={coffeeImage}
          alt="Author Avatar"
          className={styles.authorAvatar}
        />
        <div className={styles.authorDetails}>
          <div className={styles.authorName}>Birukan Abawey</div>
          <div className={styles.authorDate}>Published on July 2, 2025</div>
        </div>
      </div>

      <div className={styles.commentSection}>
        <h3>Leave a Comment</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            rows="5"
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
          <button type="submit">Post Comment</button>
        </form>
      </div>

      {comments.map((c, index) => (
        <div className={styles.comment} key={index}>
          <p>{c.name}</p>
          <p>Published on {c.date}</p>
          <h2>{c.text}</h2>
        </div>
      ))}
    </div>
  );
};

export default First;