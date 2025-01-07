document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const mainMenu = document.getElementById('mainMenu');
  const menuLogo = document.getElementById('menuLogo');

  if (scrollPosition > 100) {
    // Reducir tamaño del logo al mostrar el nav
    mainMenu.classList.remove('-translate-y-full');
    menuLogo.classList.remove('text-3xl');
    menuLogo.classList.add('text-xl');
  } else {
    // Restaurar tamaño del logo al ocultar el nav
    mainMenu.classList.add('-translate-y-full');
    menuLogo.classList.remove('text-xl');
    menuLogo.classList.add('text-3xl');
  }
});
