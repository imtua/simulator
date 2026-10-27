const simulationOptions = document.querySelectorAll('.simulation-option');

simulationOptions.forEach((option) => {
  option.addEventListener('click', () => {
    simulationOptions.forEach((item) => {
      item.classList.remove('is-selected');
      item.setAttribute('aria-pressed', 'false');
    });

    option.classList.add('is-selected');
    option.setAttribute('aria-pressed', 'true');
  });
});
