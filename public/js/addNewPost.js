//creates a new post request when the add a new post button is clicked

const addPost = async (event) => {
  event.preventDefault();
  console.log("clicked add a post");
  //grabs input from the form
  const title = document.querySelector("#post_title").value.trim();
  const content = document.querySelector("#post_content").value.trim();

  if (title && content) {
    //api to create a new post
    await fetch("/api/posts/", {
      method: "POST",
      body: JSON.stringify({ post_title: title, post_content: content }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("Post_created!");
    document.location.replace("/dashboard");
  }
};

document.querySelector("#new-post").addEventListener("submit", addPost);
