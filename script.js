const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const symbolSet = "!@#$%^&*()_~+-";
const numSet = "1234567890";

// selectors
const passBox = document.getElementById("pass");
const total = document.getElementById("length");
const symbolInput = document.getElementById("sym");
const numInput = document.getElementById("num");
const upperInput = document.getElementById("upperc");
const lowerInput = document.getElementById("lowerc");

//randomData generator
const randomDataGenerator = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

// generate password
const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += randomDataGenerator(upperSet);
  }
  if (lowerInput.checked) {
    password += randomDataGenerator(lowerSet);
  }
  if (numInput.checked) {
    password += randomDataGenerator(numSet);
  }
  if (symbolInput.checked) {
    password += randomDataGenerator(symbolSet);
  }
  if (password.length < total.value) {
    return generatePassword(password);
  }

  passBox.value = password.substring(0, total.value);
};

document.getElementById("btn").addEventListener("click", function () {
  generatePassword();
});
