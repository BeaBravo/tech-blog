const updatePost = async (event) => {
    event.preventDefault();
    event.stopPropagation();
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
  
      // console.log(response);
  
      if (response.ok) {
        document.location.replace("/dashboard");
        console.log("Post updated");
      }
    }
  };
  
  const deletePost = async (event) => {
    event.stopPropagation();
    const post_id = window.location.href.split("=")[1];
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/dashboard");
      console.log("Post deleted");
    }
  };
  
  document.querySelector("#update-post").addEventListener("submit", updatePost);
  document
    .querySelector("#delete-post-btn")
    .addEventListener("click", deletePost);
  