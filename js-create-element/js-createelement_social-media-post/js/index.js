console.clear();

function handleLikeButtonClick(event) {
    const buttonElement = event.target;
    buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const elementArticle = document.createElement("article");
const elementPost = document.createElement("p");
const elementFooter = document.createElement("footer");
const elementUsername = document.createElement("span");
const elementButton = document.createElement("button");

elementArticle.classList.add("post");
elementPost.classList.add("post__content");
elementFooter.classList.add("post__footer");
elementUsername.classList.add("post__username");
elementButton.classList.add("post__button");

elementPost.textContent = "Ich hasse Social Media.";
elementUsername.textContent = "@wilhelm2000";
elementButton.textContent = "♥ Like";

elementButton.addEventListener("click", handleLikeButtonClick);

document.body.append(elementArticle);
elementArticle.append(elementPost);
elementArticle.append(elementFooter);
elementFooter.append(elementUsername);
elementFooter.append(elementButton);
