/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#the-domain-name").innerHTML = generateDomainName();
};

const generateDomainName = () => {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const final = [".com"];

  for (const pronoun = 0; i < 10; i++)
    for (const adj = 0; i < 10; i++)
      for (const noun = 0; i < 10; i++)
        for (const final = 0; i < 10; i++)
          return pronoun + " " + adj + " " + noun + " " + final;
};

console.log(generateDomainName);
