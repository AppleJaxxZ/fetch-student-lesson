document.querySelector("h1").style.color = "red";

fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
  .then((response) => response.json())
  .then((json) => {
    const divs = document.getElementById("newData");
    const img = document.createElement("img");

    img.setAttribute("src", json[0].thumbnailUrl);
    divs.appendChild(img);
    console.log(json[0].thumbnailUrl);
  });
