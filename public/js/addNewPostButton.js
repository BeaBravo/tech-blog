function renderNewPostForm() {
  console.log("you clicked add a new post button");

  document.location.replace("/dashboard/addPost");
}

document
  .querySelector("#add-post")
  .addEventListener("click", renderNewPostForm);
