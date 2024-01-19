//when a user clicks on a post, it will trigger a fetch request to
posts = document.getElementsByClassName("user-post");

const postClicked = async (event) => {
  event.stopPropagation();
  postId = event.target.parentNode.id.substring(5);
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

const updatePost = async (event) => {
  event.preventDefault();
  //grab values from the form and do a put request with the update info
  const post_id = window.location.href.split("=")[1];
  const title = document.querySelector("#post_title").value.trim();
  const content = document.querySelector("#post_content").value.trim();

  if (title && content) {
    // api to update post
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ post_title: title, post_content: content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
      console.log("Post updated");
    }
  }
};

document.querySelector("#update-post").addEventListener("submit", updatePost);
