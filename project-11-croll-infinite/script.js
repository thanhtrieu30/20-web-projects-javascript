const inputBlog = document.getElementById("inputBlog");
const itemPost = document.getElementById("itemPost");
const post = document.getElementById("post");
const loading = document.getElementById("loading");

let limit = 4;
let page = 1;

async function getPost() {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

//show post in dom

async function showPost() {
  const post = await getPost();

  post.forEach((post) => {
    const element = document.createElement("div");
    element.classList.add("post");
    element.innerHTML = `<h2 class="post-title">
    ${post.title}
  </h2>
  <p class="post-body">
    ${post.body}
  </p>
  <small>${post.id}</small>`;

    itemPost.appendChild(element);
  });
}

function showLoading() {
  loading.classList.add("show");
  setTimeout(() => {
    loading.classList.remove("show");
    setTimeout(() => {
      page++;
      showPost();
    }, 300);
  }, 1000);
}

function filterPost(e) {
  const value = e.target.value.toLowerCase();
  const posts = document.querySelectorAll(".post");

  posts.forEach((post) => {
    const filterTitle = post.querySelector(".post-title").innerText;
    const filterBody = post.querySelector(".post-body").innerText;

    if (filterTitle.indexOf(value) > -1 || filterBody.indexOf(value) > -1) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}

showPost();

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

filter.addEventListener("input", filterPost);
