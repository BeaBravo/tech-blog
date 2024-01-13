//the user is prompt to add a comment

const addComment = async (event) => {
  event.preventDefault();
  console.log("clicked add a comment button");
  const commentContent = document
    .querySelector("#comment-content")
    .value.trim();
  console.log(commentContent);
  console.log(window.location.href);
  //   console.log(req.session.used_id);

  // send a post request to create a new comment with the creator_id = req.session.user_id
  // and the post id can be grabbed from the address
  const response = await fetch("/api/comments/", {
    method: "POST",
    body: JSON.stringify({ comment: commentContent, post_id: 1 }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to add a comment");
  }
};

document.querySelector(".comment-form").addEventListener("submit", addComment);
