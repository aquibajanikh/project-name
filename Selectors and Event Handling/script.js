// let postTitle = document.querySelector("h1");

// postTitle.addEventListener("mouseover", function () {
//   postTitle.style.backgroundColor = "yellow";
// });

// postTitle.addEventListener("mouseout", function () {
//   postTitle.style.backgroundColor = "transparent";
// });

// console.log(postTitle);

// let blogTitle = document.getElementById("blogTitle");
// console.log(blogTitle);

// blogTitle.addEventListener("change", (e) => {
//   e.target.value.length == 0
//     ? (blogTitle.style.border = "5px solid red")
//     : (blogTitle.style.border = "5px solid green");
// });

// let addPostButton = document.querySelector("button");

// addPostButton.addEventListener("click", storePost);

// function storePost() {
// Reading the <input> value
//   let blogTitle = document.getElementById("blogTitle").value;
// New <li> tag created
//   let newPostItem = document.createElement("li");
// New <p> tag created
//   let newPostContent = document.createElement("p");
// Adding content to the <p> tag
//   newPostContent.innerText = blogTitle;
// Adding <p> inside <li>
//   newPostItem.appendChild(newPostContent);
// Fetching <ul> from the document
//   let allPosts = document.getElementById("allPosts");
// Adding <li> inside <ul>
//   allPosts.appendChild(newPostItem);
// Empty the value of the <input> field
//   document.getElementById("blogTitle").value = "";
// }
let allParas = document.getElementsByClassName("intro");
console.log(allParas);

for (let i = 0; i < allParas.length; i++) {
  document.getElementsByClassName("intro")[i].style.backgroundColor = "pink";
}
