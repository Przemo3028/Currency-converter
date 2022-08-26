{
    const currencyToggle = (resultElement, sumPoundElement) => {
        const markElement = document.querySelector(".js-mark");
        resultElement.innerText = "N/A"
        markElement.innerText = sumPoundElement.checked === true ? "£" : "€";
    }

    const updateResult = (resultElement, result) => {
        resultElement.innerText = result.toFixed(2);
    }

    const calculateResult = (resultElement, sumPoundElement) => {
        const fieldElement = document.querySelector(".js-form__field");
        const field = fieldElement.value;
        let result = resultElement.value;
        const euroCurrency = 4.7480;
        const poundCurrency = 5.5981;
        result = sumPoundElement.checked === true ? field / poundCurrency : field / euroCurrency;
        updateResult (resultElement, result);
    }

    const onFormSubmit = (event, resultElement, sumPoundElement) => {
        event.preventDefault();
        calculateResult(resultElement, sumPoundElement);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const resultElement = document.querySelector(".js-result");
        const sumPoundElement = document.querySelector(".js-form__pound");
        formElement.addEventListener("submit", (event) => {
            onFormSubmit(event, resultElement, sumPoundElement);
        });
        formElement.addEventListener("click", () => {
            currencyToggle(resultElement, sumPoundElement)
        });
    }

    init();
}


