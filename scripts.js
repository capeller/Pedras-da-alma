document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('#gallery img');
  images.forEach(img => {
    img.addEventListener('click', () => {
      const model = img.dataset.model;
      alert(`Modelo selecionado: ${model}`);
    });
  });
});