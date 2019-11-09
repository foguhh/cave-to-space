
var gameData = {
  wood: 0,
  woodPerClick: 1,
  woodPerClickCost: 10,
  woodWorkerCost: 100,
  woodWorkers: 0,

  stone: 0,
  stonePerClick:0,
  stonePerClickCostWood: 1000,
  stonePerClickCostStone: 0,
  stoneWorkers: 0,
}

function gatherWood() {
  gameData.wood += gameData.woodPerClick
  document.getElementById("woodGathered").innerHTML = gameData.wood + " Wood Gathered | WPS: " + gameData.woodWorkers
}

function buyWoodPerClick() {
  if (gameData.wood >= gameData.woodPerClickCost) {
    gameData.wood -= gameData.woodPerClickCost
    gameData.woodPerClick += 1
    gameData.woodPerClickCost *= 2
    document.getElementById("woodGathered").innerHTML = gameData.wood + " Wood Gathered | WPS: " + gameData.woodWorkers
    document.getElementById("perClickUpgradeAxe").innerHTML = "Upgrade Axe" + "<br>" + "Level: " + gameData.woodPerClick + " | Cost: " + gameData.woodPerClickCost + " Wood | WPC: " + gameData.woodPerClick
  }
}

function buyWoodWorker() {
  if (gameData.wood >= gameData.woodWorkerCost){
    gameData.wood -= gameData.woodWorkerCost
    gameData.woodWorkers += 1
    gameData.woodWorkerCost = Math.floor(100*Math.pow(1.1,gameData.woodWorkers))
    document.getElementById("woodGathered").innerHTML = gameData.wood + " Wood Gathered | WPS: " + gameData.woodWorkers
    document.getElementById("woodWorkersBuy").innerHTML = "Train Lumberman" + "<br>" + "Owned: " + gameData.woodWorkers + " | Cost: " + gameData.woodWorkerCost + " | WPS: " + gameData.woodWorkers
  };
}

function woodWorkersGather(number){
  gameData.wood += gameData.woodWorkers
  document.getElementById("woodGathered").innerHTML = gameData.wood + " Wood Gathered | WPS: " + gameData.woodWorkers
}

function gatherStone() {
  gameData.stone += gameData.stonePerClick
  document.getElementById("stoneGathered").innerHTML = gameData.stone + " Stone Gathered | SPS: " + gameData.stoneWorkers
}

function buyStonePerClick() {
  if (gameData.stone >= gameData.stonePerClickCostStone & gameData.wood >= gameData.stonePerClickCostWood) {
    gameData.wood -= gameData.stonePerClickCostWood
    gameData.stonePerClick += 1
    gameData.stonePerClickCostStone = 10
    gameData.stonePerClickCostStone *= 2
    gameData.stonePerClickCostWood *= 2
    document.getElementById("stoneGathered").innerHTML = gameData.stone + " Stone Gathered | SPS: " + gameData.stoneWorkers
    document.getElementById("perClickUpgradePickaxe").innerHTML = "Upgrade Pickaxe" + "<br>" + "Level: " + gameData.stonePerClick + " | Cost: " + gameData.stonePerClickCostWood + " Wood | " + gameData.stonePerClickCostStone + " Stone | SPC: " + gameData.stonePerClick
    document.getElementById("gatherStoneButton").innerHTML = "Gather Stone"
  }
}

function tab(tab) {
  document.getElementById("gatheringMenu").style.display = "none"
  document.getElementById("workersMenu").style.display = "none"
  document.getElementById("upgradesMenu").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}
tab("gatheringMenu")

window.setInterval(function(){
  if (gameData.woodWorkers >= 1) {
    	 woodWorkersGather();
  }
  if (gameData.wood >= 1000 & gameData.woodWorkers>=10 & gameData.woodPerClick>=5) {
      document.getElementById("stoneGathered").style.visibility = "visible"
      document.getElementById("gatherStoneButton").style.visibility = "visible"
      document.getElementById("perClickUpgradePickaxe").style.visibility = "visible"
      document.getElementById("stoneWorkersBuy").style.visibility = "visible"
  }
}, 1000);
