const rewards = {
  Ice: ["64 Diamonds", "32 Iron Ingots", "1 Enchanted Book", "XP Bottle (L)", "Netherite Chestplate"],
  Amethyst: ["Frost Sword", "250 Coins", "Mystery Key", "Protection V Armor", "Totem of Undying"]
};

function openCrate(crateType) {
  const crateResults = document.getElementById("crate-results");
  crateResults.innerHTML = "<p>Spinning...</p>";

  setTimeout(() => {
    const crateItems = rewards[crateType];
    const randomReward = crateItems[Math.floor(Math.random() * crateItems.length)];
    crateResults.innerHTML = `
      <h3>${crateType} Crate Result:</h3>
      <div class="crate-reward">${randomReward}</div>
    `;
  }, 1000);
}