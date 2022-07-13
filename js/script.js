let sumPoundElement = document.querySelector(".js-form__pound");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let fieldElement = document.querySelector(".js-form__field");
let markElement = document.querySelector(".js-mark");

formElement.addEventListener("click", () => {
    resultElement.innerText = "N/A"
    markElement.innerText = sumPoundElement.checked === true ? "£" : "€";
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let field = fieldElement.value;
    let result = resultElement.value;
    let euroCurrency = 4.76;
    let poundCurrency = 5.63;

    result = sumPoundElement.checked === true ? field * 1 / poundCurrency : field * 1 / euroCurrency;
    resultElement.innerText = result.toFixed(2);
});



