"use strict";

const div = document.getElementById("api-users");

function getUsers() {
  const request = new XMLHttpRequest();

  request.open("GET", "https://reqres.in/api/unknown");

  request.addEventListener("load", function () {
    const responseText = this.responseText;
    const parsedRes = JSON.parse(responseText);
    console.log(parsedRes);
    const ulElement = document.createElement("ul");

    parsedRes.data.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = `${element.name} ${element.color}`;
      ulElement.appendChild(li);
    });
    div.appendChild(ulElement);
  });
  request.send();
}

getUsers();


