function openUrl(url, newTab = false) {
  if (newTab) {
    window.open(url, '_blank');
  } else {
    window.location.href = url;
  }
}

document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('dragstart', e => e.preventDefault());
