// buttons
let btns = document.querySelectorAll('.product-button');
let orderButton = document.getElementById("order-action");
let currency = document.getElementById("change-currency");

// links
let links = document.querySelectorAll(".menu-item a");

// inputs

const inputIds = [
	"burger",
	"name",
	"phone"
];

const inputs = inputIds.map(id => document.getElementById(id));

// prices
let prices = document.querySelectorAll(".products-item-price");

// events
btns.forEach((button) => {
	button.addEventListener('click', () => {
		document.getElementById("order").scrollIntoView({
			behavior: "smooth",
		});
	});
});

links.forEach((link) => {
	link.addEventListener('click', function(){
		document.getElementById(this.getAttribute("data-link"))
			.scrollIntoView({
				behavior: "smooth",
			});
	});
});


// validation
orderButton.addEventListener('click', function(event){
	event.preventDefault();

	let hasError = false;
	inputs.forEach(input => {
		if(!input.value){
			input.parentElement.style.background = "red";
			hasError = true;
		} else {
			input.parentElement.style.background = "";
		}
	});


	if(!hasError){
		alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
		inputs.forEach(input => {
			input.value = "";
		});
	} else {
		alert("Пожалуйста, заполните данные заказа!");
	}

});

currency.addEventListener('click', function(event) {
	event.preventDefault();

	let currentCurrency = event.target.innerText;
	let newCurrency = "$" // initial value
	let COEFFICIENT = 1;


	if(currentCurrency === "$") {
		newCurrency = "₽";
		COEFFICIENT = 80;
	} else if(currentCurrency === "₽") {
		newCurrency = "BYN";
		COEFFICIENT = 3;
	} else if (currentCurrency === 'BYN') {
    newCurrency = '€';
    coefficient = 0.9;
	} else if (currentCurrency === '€') {
	    newCurrency = '¥';
	    coefficient = 6.9;
	}

	event.target.innerText = newCurrency;
	


	prices.forEach(price => {
        price.innerText = 
        	(+price.getAttribute("data-base-price") * COEFFICIENT)
        		.toFixed(1) + " " + newCurrency;
    });

})