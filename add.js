const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const num1 = parseInt(document.querySelector("#num1").value);
  const num2 = parseInt(document.querySelector("#num2").value);
  const results = document.querySelector("#results");

  if (num1 === "" || num1 < 0 || isNaN(num1)) {
    results.innerHTML = `please give a valid height ${num1}`;
  } else if (num2 === "" || num2 < 0 || isNaN(num2)) {
    results.innerHTML = `please give a valid weight ${num2}`;
  } else {
    const add = num1 + num2;
    results.innerHTML = `<span> After additon result is ${add}</span>`;
   
  }
});
