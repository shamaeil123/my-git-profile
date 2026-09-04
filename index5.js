const numberInput = document.getElementById("numberInput");
const checkBtn = document.getElementById("checkBtn");
const resultDiv = document.getElementById("resultDiv");

// here we can see the   roydad

checkBtn.addEventListener("click", function (event) {
  // for avoiding of  un nessesary  pages refresh

  event.preventDefault();

  //  recieving the volium

  const inputValue = numberInput.value.trim();

  //  cleaning the perivous results

  resultDiv.innerHTML = "";

  // if the user dont entering the number

  if (inputValue === "") {
    resultDiv.innerHTML = "<p style='color: red;'>Please enter a number!</p>";
    return;
  }

  // تبدیل متن ورودی به عدد واقعی
  const userNumber = Number(inputValue);
  let statusText = "";

  //  checking the codations of (0,numbers >0,numbers <0)

  if (userNumber > 0) {
    statusText = "Number is Positive";
  } else if (userNumber < 0) {
    statusText = "Number is Negative";
  } else {
    statusText = "Number is Zero";
  }

  //  prenting the codiyions

  resultDiv.innerHTML = `<p><strong>${statusText}</strong></p>`;

  // if the number is bigger

  if (userNumber > 0) {
    let listHTML = "<ol>";
    for (let i = 1; i <= userNumber; i++) {
      listHTML += `<li>${i}</li>`;
    }
    listHTML += "</ol>";
    resultDiv.innerHTML += listHTML;
  }
});
