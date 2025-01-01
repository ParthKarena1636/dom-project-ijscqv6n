const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Validate height
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `<h1 style="color: red;">Please enter a valid height.</h1>`;
    return;
  }

  // Validate weight
  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `<h1 style="color: red;">Please enter a valid weight.</h1>`;
    return;
  }

  // Calculate BMI
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Determine category
  let category = '';
  if (bmi < 18.6) {
    category = 'Underweight';
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = 'Normal Range';
  } else {
    category = 'Overweight';
  }

  // Display BMI and category
  results.innerHTML = `
    <h4>Your BMI index is: ${bmi}</h4>
    <h5>You belong to the category: ${category}</h5>`;
});
