let dataFromApi;
let button = document.querySelector(".button");
let gridContainer = document.querySelector(".gridContainer");

function getApiData() {
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=PP2QQRvrZexmk2PtghhDeNM9E2cJMdakf54EsAFF&start_date=2025-02-01&end_date=2025-02-03`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dataFromApi = data;
      showData();
    })
    .catch((error) => console.error("Error:", error));
}

//getApiData();

function showData() {
  gridContainer.classList.remove("hidePhoto");
  console.log("working");
  for (item of dataFromApi) {
    let pictureImage = item.url;
    let dailyImage = document.createElement("img");
    dailyImage.src = pictureImage;
    gridContainer.appendChild(dailyImage);
    console.log(dailyImage);

    let pictureTitle = item.title;
    let title = document.createElement("p");
    title.textContent = pictureTitle;
    gridContainer.appendChild(title);
    console.log(title);

    let description = item.explanation;
    let descriptionText = document.createElement("p");
    descriptionText.textContent = description;
    gridContainer.appendChild(descriptionText);
    console.log(descriptionText);

    let dateOfDay = item.date;
    let pictureDate = document.createElement("p");
    pictureDate.textContent = dateOfDay;
    gridContainer.appendChild(pictureDate);
    console.log(dateOfDay);

    let photographer = item.copyright;
    let photographerName = document.createElement("p");
    photographerName.textContent = photographer;
    gridContainer.appendChild(photographerName);
    console.log(photographerName);
  }
}
//getApiData();

let box = document.querySelector(".box");

box.addEventListener("click", function () {
  box.style.display = "none";
  //getApiData();
});
//I found the above in a youtube video called hide button after click

let button1 = document.querySelector(".button1");
button1.addEventListener("click", getApiData);
console.log(button1);
//});

document.getElementById("button2").addEventListener("click", function () {
  window.location.reload();
});

// I found the above on MDN

//et box = document.getElementById("boxToHide");
//let hideBox = document.querrySelector("hideBox");

//function toggleButtonClick() {
//box.classList.toggle("hidden");
//hideBox.classList.toggle("hide");
//}

//toggleButtonClick();
