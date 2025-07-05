const element = document.querySelector(".container");

async function blogpost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    posts.forEach(newfun);
  } catch (e) {
    console.log("Error fetching posts:", e);
  }
}

function newfun(post) {
  const newelement = document.createElement("div");
  newelement.className = "newelement";
  newelement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
  element.appendChild(newelement);
}

blogpost();
const addiselement=document.querySelector(".newelement").computedStyleMap.bacgroundColor="green"