let sumPoundElement = document.querySelector(".js-form__pound");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let fieldElement = document.querySelector(".js-form__field");
let markElement = document.querySelector(".js-mark");

formElement.addEventListener("click", () => {
    resultElement.innerText = "N/A"
    if (sumPoundElement.checked === true) {
        markElement.innerText = "£"
    } else {
        markElement.innerText = "€"
    }
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let field = fieldElement.value;
    let result = resultElement.value;

    if (sumPoundElement.checked === true) {
        result = field * 1 / 5.63;
    } else {
        result = field * 1 / 4.76
    }
    resultElement.innerText = result.toFixed(2);
});



