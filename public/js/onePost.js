//when a user clicks on a post, it will trigger a fetch request to
// api/posts/:id
posts = document.getElementsByClassName("card");

const postClicked = async (event) => {
  event.stopPropagation();
  postId = event.target.parentNode.id.substring(5);
  console.log("/api/posts/" + postId);

  //fetch request to the individual post

  const response = await fetch(`/api/posts/${postId}`);

  //if requests worked, it will redirect to the onepost page
  if (response.ok) {
    document.location.replace(`/post/${postId}`);
  }
};

for (let post of posts) {
  post.addEventListener("click", postClicked);
}
