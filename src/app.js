/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".us", ".mx", ".gob"];

  function generateRandom() {
    const ul = document.createElement("ul");
    ul.classList.add("my-list");

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < domain.length; l++) {
            const li = document.createElement("li");
            li.textContent = pronoun[i] + adj[j] + noun[k] + domain[l];
            ul.appendChild(li);
          }
        }
      }
    }

    const ulDiv = document.createElement("div");
    ulDiv.classList.add("ulDiv");
    ulDiv.appendChild(ul);
    document.body.appendChild(ulDiv);
  }

  const button = document.querySelector("button");
  button.addEventListener("click", generateRandom);
};
