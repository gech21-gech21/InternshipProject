"use client";
import { useState } from "react";

export default function CommentSection() {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [commentList, setcommentList] = useState([]);
  const [error, setError] = useState(false);

  function handleevent() {
    if (!name || !email || !comment) {
      setError(true);
      alert("Please fill all fields first");
      return;
    }

    setError(false);
    setcommentList([...commentList, { name, comment }]);
    setName("");
    setEmail("");
    setComment("");
  }

  return (
    <div>
      <div className="shadow-[2px_3px_3px_4px_rgba(0,0,0,0.2)] flex flex-col items-center p-4 bg-gray-200">
        <h1 className="text-3xl font-bold text-center mt-10 text-green-700 mb-10">
          leave your comment
        </h1>

        <span className="mt-2">Name:</span>
        <input
          className={`w-1/3 rounded-lg shadow-[2px_3px_3px_4px_rgba(0,0,0,0.2)] mt-2 p-2 ${
            error && !name ? "bg-pink-100" : "bg-amber-50"
          }`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          type="text"
        />
        <br />
        <span>Email:</span>
        <input
          className={`w-1/3 rounded-lg shadow-[2px_3px_3px_4px_rgba(0,0,0,0.2)] p-2 ${
            error && !email ? "bg-pink-100" : "bg-amber-50"
          }`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <br />
        <p>Comment</p>
        <textarea
          className={`w-2/3 rounded-lg mx-2 shadow-[2px_3px_3px_4px_rgba(0,0,0,0.2)] p-2 ${
            error && !comment ? "bg-pink-100" : "bg-amber-50"
          }`}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment.."
        ></textarea>

        <button
          className="mt-10 p-3 rounded-lg bg-amber-200 hover:bg-amber-300 "
          onClick={handleevent}
        >
          post comment
        </button>
      </div>
      <div className=" flex flex-col items-center">
        {commentList.map((list, index) => (
          <div
            key={index}
            className="shadow-[2px_3px_3px_4px_rgba(0,0,0,0.2)]  p-5 mt-7 w-2/3  rounded-lg"
          >
            <ul>
              <li>
                {list.name} {new Date().toLocaleDateString()}
              </li>
              <li>{list.comment}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
