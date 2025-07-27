// Copy IP
document.getElementById('copy-ip').addEventListener('click', () => {
  navigator.clipboard.writeText('frostmc.pro')
    .then(() => alert('Server IP copied: frostmc.pro'));
});

// Player Count
function updatePlayerCount() {
  fetch('https://api.mcsrvstat.us/2/frostmc.pro')
    .then(res => res.json())
    .then(data => {
      const players = data.players?.online ?? 0;
      document.getElementById('player-count').textContent =
        `Players online: ${players}`;
    })
    .catch(() => {
      document.getElementById('player-count').textContent = 'Players online: ?';
    });
}
updatePlayerCount();
setInterval(updatePlayerCount, 60000);

// Avatar Login
function updateAvatar() {
  const username = document.getElementById('mc-username').value.trim();
  if (username) {
    document.getElementById('mc-avatar').src =
      `https://crafatar.com/avatars/${username}?size=40&default=MHF_Steve`;
  }
}
