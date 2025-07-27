// Copy IP
function copyIP() {
  navigator.clipboard.writeText('frostmc.pro').then(() => {
    alert('Server IP copied: frostmc.pro');
  });
}

// Player Count
function updatePlayerCount() {
  fetch('https://api.mcsrvstat.us/2/frostmc.pro')
    .then(res => res.json())
    .then(data => {
      document.getElementById('player-count').textContent =
        (data.players?.online ?? 0) + ' ONLINE';
    })
    .catch(() => {
      document.getElementById('player-count').textContent = '0 ONLINE';
    });
}

updatePlayerCount();
setInterval(updatePlayerCount, 60000);
