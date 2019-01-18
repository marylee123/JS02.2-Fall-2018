let GameManager = {
	setGameStart: function(classType){
		this.resetPlayer(classType);
		this.setPreFight();
	},

	resetPlayer: function(){
		switch(){
			case "Warrior": 
				player = new Player(classType, 200, 0, 200, 100, 50);
				break;

			case "Rogue": 
				player = new Player(classType, 100, 0, 100, 150, 200);
				break;

			case "Mage": 
				player = new Player(classType, 80, 0, 50, 200, 50);
				break;

			case "Hunter": 
				player = new Player(classType, 200, 0, 50, 200, 100);
				break;
		}
		let getInterface = document.querySelector("div.interface");
		getInterface.innerHTML = "<img src='img/avatar-player/' + classType.toLowerCase() + '.png' class='img-avatar'><div><h3>" + classType + "</h3><p>Health: " + player.health + "</p>";
	},
	setPreFight: function(){

	},
}