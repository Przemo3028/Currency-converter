{
    const currencyToggle = () => {
        const markElement = document.querySelector(".js-mark");
        const resultElement = document.querySelector(".js-result");
        const sumPoundElement = document.querySelector(".js-form__pound");
        resultElement.innerText = "N/A"
        markElement.innerText = sumPoundElement.checked === true ? "£" : "€";
    }

    const calculateElement = () => {
        const fieldElement = document.querySelector(".js-form__field");
        const resultElement = document.querySelector(".js-result");
        const sumPoundElement = document.querySelector(".js-form__pound");
        const field = fieldElement.value;
        let result = resultElement.value;
        const euroCurrency = 4.7480;
        const poundCurrency = 5.5981;
        result = sumPoundElement.checked === true ? field * 1 / poundCurrency : field * 1 / euroCurrency;
        resultElement.innerText = result.toFixed(2);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("submit", calculateElement);
        formElement.addEventListener("click", currencyToggle);
    }

    init();
}


