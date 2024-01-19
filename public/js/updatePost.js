//when a user clicks on a post, it will trigger a fetch request to
posts = document.getElementsByClassName("user-post");

const postClicked = async (event) => {
  event.stopPropagation();
  const postId = event.target.parentNode.id.substring(5);
  console.log("/api/posts/" + postId);
  console.log(window.location.href.split("=")[1]);

  //fetch request to the individual post

  const response = await fetch(`/dashboard/edit/?post_id=${postId}`);
  //   const postInfo = await response.json();

  // if requests worked, it will redirect to the onepost page
  if (response.ok) {
    // console.log(response.json());
    document.location.replace(`/dashboard/edit/?post_id=${postId}`);
  }
};

for (let post of posts) {
  post.addEventListener("click", postClicked);
}

