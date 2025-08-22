const btn = document.getElementById('toggle-mode');

btn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  btn.setAttribute('aria-pressed', String(isDark));
  console.log('Dark mode toggled:', isDark);
});
