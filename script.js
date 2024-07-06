const principal = document.getElementById('principal');
const rate = document.getElementById('rate');
const samay = document.getElementById('samay');
const calculate = document.getElementById('btn');
const result = document.getElementById('result');

const calculateInterest = () => {
    if (principal.value === '' || rate.value === '' || samay.value === '')
       {
        result.innerHTML = "Please enter all fields";
    } else if (isNaN(principal.value) && isNaN(rate.value) ) {
        result.innerHTML = "Please enter a valid number";
    } else {
        const interest = (principal.value * rate.value * samay.value) / 100;
        result.innerHTML = `Your yearly Interest is Rs. ${interest} in ${samay.value} years.`;


    }
};
calculate.addEventListener('click', function (e) {
    e.preventDefault();
    calculateInterest();
});