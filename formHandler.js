document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('userForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const userInput = document.getElementById('userInput').value;
    document.getElementById('displayInput').innerText = 'You entered: ' + userInput;
  });
});
