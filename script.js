// Update profile privacy display
const profilePrivacy = document.getElementById("profilePrivacy");
const profileStatus = document.getElementById("profileStatus");

profilePrivacy.addEventListener("change", () => {
  const value = profilePrivacy.options[profilePrivacy.selectedIndex].text;
  profileStatus.textContent = value;
});

// Handle post creation
function postMessage() {
  const postContent = document.getElementById("postContent").value.trim();
  const privacy = document.getElementById("postPrivacy").value;
  const feed = document.getElementById("posts");

  if (!postContent) {
    alert("Post content cannot be empty!");
    return;
  }

  const postDiv = document.createElement("div");
  postDiv.className = "post";
  postDiv.innerHTML = `<strong>${privacy.toUpperCase()}</strong>: ${postContent}`;
  feed.prepend(postDiv); // newest post on top

  // Clear the input field
  document.getElementById("postContent").value = "";
}
