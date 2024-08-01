function saveUsername() {
    let username = document.getElementById('usernameInput').value;
    localStorage.setItem('savedUsername', username);
    displaySavedUsername();

  }

  function displaySavedUsername() {
    let savedUsername = localStorage.getItem('savedUsername');
    let savedUsernameDiv = document.getElementById('savedUsername');
    if (savedUsername) {
      savedUsernameDiv.textContent = savedUsername;
    } else {
      savedUsernameDiv.textContent = 'Isim kiritilmagan. Iltimos ism kiriting';
    }
  }

  window.onload = function() {
    displaySavedUsername();
  };