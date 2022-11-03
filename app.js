document.addEventListener("DOMContentLoaded", function () {
    let formSubmit = document.getElementById("form");
    let imageURL = document.getElementById("image-url");
    let topText = document.getElementById("top-text");
    let bottomText = document.getElementById("bottom-text");
    let mainDiv = document.getElementById("mainDiv");
  
    formSubmit.addEventListener("submit", function (event) {
      event.preventDefault();
  
      if (imageURL.value === "") return;
      if (imageURL.value.includes("https://") === false) return;
      let memeDiv = document.createElement("div");
      memeDiv.classList.add("meme");
  
      let memeImg = document.createElement("img");
      memeImg.src = imageURL.value;
      memeImg.classList.add("img");
  
      let memeTop = document.createElement("div");
      memeTop.classList.add("memeTop");
      memeTop.innerText = topText.value;
  
      let memeBottom = document.createElement("div");
      memeBottom.classList.add("memeBottom");
      memeBottom.innerText = bottomText.value;
  
      let removeMeme = document.createElement("button");
      removeMeme.innerText = "REMOVE";
      removeMeme.classList.add("removeButton", "button");
  
      mainDiv.appendChild(memeDiv);
      memeDiv.appendChild(memeTop);
      memeDiv.appendChild(memeImg);
      memeDiv.appendChild(memeBottom);
      memeDiv.append(removeMeme);
  
      formSubmit.reset();
    });
  
    document.addEventListener("click", function (event) {
      console.log(event.target.classList);
      if (event.target.classList[0] === "removeButton") {
        event.target.parentNode.remove();
      }
    });
  });