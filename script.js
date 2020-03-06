const fields = document.querySelectorAll(".container form > div");
const email = document.querySelector(".email");
const handleBack = () => {
  event.target.parentElement.classList.toggle("active-field");
  event.target.parentElement.previousElementSibling.classList.toggle(
    "active-field"
  );
};

const handleNext = () => {
  event.target.parentElement.classList.toggle("active-field");
  event.target.parentElement.nextElementSibling.classList.toggle(
    "active-field"
  );
};

window.addEventListener("load", event => {
  let i = 0;
  let push = 100;
  fields.forEach(field => {
    if (i === 0) {
      field.children[2].style.display = "none";

      console.log(field);
      field.classList.toggle("active-field");
      console.log(field);
    } else if (i === 4) {
      field.children[3].style.display = "none";
    } else {
    }

    i++;
  });
});

email.addEventListener("onblur", event => {
  event.target.style.oultine = "none";
});

const handleSubmit = event => {
  event.preventDefault();
  console.log(event);
};
