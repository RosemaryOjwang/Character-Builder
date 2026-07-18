document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('character');
  const img = document.getElementById('avengerImage');
  const nameP = document.getElementById('avengerName');
  const btn = document.getElementById('previewBtn');

  function updatePreview() {
    const val = select.value;
    if (!val) return;
    img.src = val;
    const text = select.options[select.selectedIndex].text;
    img.alt = text;
    nameP.textContent = text;
  }

  select.addEventListener('change', updatePreview);
  btn.addEventListener('click', updatePreview);

  // Initialize preview if a character is pre-selected
  if (select.value) updatePreview();
});
