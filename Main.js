const ratingsEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selectedRating = "";

ratingsEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (e) => {
    // console.log(e.target.innerText || e.target.parentNode.innerText);
    remove();
    selectedRating = e.target.innerText || e.target.parentNode.innerText;
    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    // alert(`You've rated this product ${selectedRating}`);
    containerEl.innerHTML = ` 
    <strong>Thank You</strong>
     <br>
     <br>
     Feedback: ${selectedRating}
     <br> 
     <br> 
     Our Team will Support you.`;
    containerEl.style.background = "red";
  }
});

function remove() {
  ratingsEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
    ratingEl.parentNode.classList.remove("active");
  });
}
