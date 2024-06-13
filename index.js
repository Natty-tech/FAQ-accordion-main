//open and close function
let content = document.querySelectorAll(".content");
content.forEach((eachContent) => {
  eachContent.addEventListener("click", (e) => {
    //to show and close answer
    let answer = eachContent.querySelector(".answer-on");
    answer.classList.toggle("answer-off");
    //to toggle between plus and minus
    let minus = eachContent.querySelector(".minus");
    minus.classList.toggle("hidden");
    let plus = eachContent.querySelector(".plus");
    plus.classList.toggle("hidden");
  });
});
