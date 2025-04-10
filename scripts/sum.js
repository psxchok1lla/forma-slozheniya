function calculate() {
  const a = parseFloat(document.getElementById('num1').value) || 0;
  const b = parseFloat(document.getElementById('num2').value) || 0;
  document.getElementById('result').textContent = `Результат: ${a + b}`;
}

function setTheme(mode) {
  document.documentElement.className = mode === 'light' ? 'light' : '';
}