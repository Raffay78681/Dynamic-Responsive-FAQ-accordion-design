let wrapper = document.querySelectorAll(".QnA-wrapper");
wrapper.forEach((element) => {
  element.querySelector(".interact").addEventListener("click", () => {
    element.classList.toggle("open");
    let plusIcon = element.querySelector(".plus-icon");
    let minusIcon = element.querySelector(".minus-icon");
    if (element.classList.contains("open")) {
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    } else {
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    }
  });
});
