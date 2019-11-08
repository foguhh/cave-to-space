
var gameData = {
  wood: 0,
  woodPerClick: 1,
  woodPerClickCost: 10
}



function gatherWood() {
  gameData.wood += gameData.woodPerClick
  document.getElementById("woodGathered").innerHTML = gameData.wood + " Wood Gathered"
}

function buyWoodPerClick() {
  if (gameData.wood >= gameData.woodPerClickCost) {
    gameData.wood -= gameData.woodPerClickCost
    gameData.woodPerClick += 1
    gameData.woodPerClickCost *= 2
    document.getElementById("woodGathered").innerHTML = gameData.wood + " Wood Gathered"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Axe (Currently level " + gameData.woodPerClick + ")  Cost: " + gameData.woodPerClickCost + " Wood"
  }
}

function tab(tab) {
  document.getElementById("gatherWoodMenu").style.display = "none"
  document.getElementById("shopMenu").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}
tab("gatherWoodMenu")
