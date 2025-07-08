document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = form.elements[0].value;
      const comment = form.elements[2].value;
  
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");
  
      const commentHeader = document.createElement("p");
      commentHeader.textContent = name;
  
      const commentDate = document.createElement("p");
      const currentDate = new Date().toLocaleDateString();
      commentDate.textContent = `Published on ${currentDate}`;
  
      const commentText = document.createElement("h2");
      commentText.textContent = comment;
  
      commentDiv.appendChild(commentHeader);
      commentDiv.appendChild(commentDate);
      commentDiv.appendChild(commentText);
  
      const commentList = document.querySelector(".comments-list");
      if (commentList) {
        commentList.appendChild(commentDiv);
      } else {
        document.body.appendChild(commentDiv); // fallback
      }
  
      form.reset();
    });
  });
  