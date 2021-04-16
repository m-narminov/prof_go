
// You can write more code here

/* START OF COMPILED CODE */

class game extends Phaser.Scene {
	
	constructor() {
	
		super("game");
		
	}
		
	/* START-USER-CODE */

	init(data){	
		this.scoreIndex = 0;	
		this.gamerPositionX = 980;
		this.gamerPosNomberRoad = 2;
		this.scorePerOne = 1;
		this.timeGame;
		this.timeRound;
		this.timeOverGame = 135;
		this.lvlNow = 0;
		this.cityCard = false;
		this.lenghtRound = 3;
		this.imageRound = [true,false,true,false,false,true]
		this.imageRoundNow = 0
		this.lenghtLvl = 5;	
		this.maxScore = 100;		
		this.whatLvl = 0;
		this.road;
		this.countFrames = 0;
		this.cityBank = [];
		this.aLife = 5;
	}
	
	create(){

		
		this.background = this.add.image(960,540,"background-1");
		
		this.transition = this.add.sprite(960,540, '').setOrigin(0.5);
		this.transition.setVisible(false)
		
			
		this.road = this.add.sprite(983.4, 694.5, "road");
		
	
		var graphics = this.add.graphics();
		graphics.fillStyle(0xffffff, 0.5);

		graphics.fillRoundedRect(210, 100, 1500, 10, 5);
		
		graphics.lineStyle(1, 0xffffff,0.7);

		graphics.strokeRoundedRect(206, 96, 1508, 18, 9);

		this.rectPersTime = this.add.graphics();
		this.rectPersNow = this.add.graphics();
			
		
		

		this.gamer = this.add.sprite(this.gamerPositionX , 865, "boy");	
		this.gamer.scale = 0.7;


		this.animationGamer();
		
		
		this.road.anims.play("mountains");	
		


		

		this.gamer.play("run");
		this.gamer.depth = 6;		
		
		this.cointGroupYes = this.add.group({
			classType: CointYes,
			maxSize: 15,
			runChildUpdate: true
		});

		this.itemsTextureObject = this.add.group({
			classType: ItemsTextureObject,
			maxSize: 8,
			runChildUpdate: true
		});


		this.scoreText = this.add.text(257.52216, 38.63262, "0", {
			"fontFamily": "GLI-Light",
			"fontSize": "46px"
		});

		this.aLifeText = this.add.text(960, 158.63262, this.aLife + ' жизней', {
			"fontFamily": "GLI-Light",
			"fontSize": "46px"
		}).setOrigin(0.5);
		this.aLifeText.setAlpha(0);
		this.aLifeText.depth = 6;

		this.add.image(220,60,'coin-status').scale = 0.15;


		this.timeText = this.add.text(1645.52216, 38.63262, this.maxScore, {
			"fontFamily": "GLI-Light",
			"fontSize": "46px"
		});

		this.timeCityCardText = this.add.text(960, 38.63262, "", {
			"fontFamily": "GLI-Light",
			"fontSize": "46px"
		});

		this.firstTextCounry = this.add.text(960, 220, "+1 рубль", {
			"fontFamily": "GLI-Light",
			"fontSize": "56px"
		});
		this.firstTextCounry.setOrigin(0.5);
		this.firstTextCounry.alpha = 0;

		var sound = this.add.sprite(95, 85, "sounds").setInteractive({ useHandCursor: true  });
		sound.scale = 0.6;
		sound.setFrame(1);

		sound.on('pointerdown', function (pointer) {
			if(this.sound.mute){
				this.sound.mute = false;
				sound.setFrame(0);
			}else{
				this.sound.mute = true;	
				sound.setFrame(1);
			}			
		},this);

		
		if (!this.sys.game.device.input.touch) {		
			this.cursors = this.input.keyboard.createCursorKeys();	
			this.cursors.left.on('down',() => { this.thatClick(0)},this);		
			this.cursors.right.on('down',() => { this.thatClick(1)},this);	
		} else {		
			this.buildMobileControls();				
		}

		this.offBackGame = this.add.rectangle(0, 0, 1920, 1080, 0xffffff).setOrigin(0);
		this.offBackGame.alpha = 0;
		this.offBackGame.depth = 10;
		
		this.startGame();

		

	}

	thatClick(index){	
		if(index == 0){
			if(this.gamerPositionX  > 720) {			
				this.gamerPositionX -= 300;
				this.tweens.add({
					targets: this.gamer,
					x: this.gamerPositionX ,
					ease: 'Power1',
					duration: 500					
				});
				if(this.gamerPosNomberRoad > 1) this.gamerPosNomberRoad--;
			} 	
		}
		if(index == 1){
			if(this.gamerPositionX  < 1220) {			
				this.gamerPositionX += 300;
				this.tweens.add({
					targets: this.gamer,
					x: this.gamerPositionX ,
					ease: 'Power1',
					duration: 500					
				});
				if(this.gamerPosNomberRoad < 3) this.gamerPosNomberRoad++;
			}
		}
		
	}

	
	buildMobileControls() {
		// Found this helps with multiple buttons being pressed at the same time on mobile
		this.input.addPointer(2)		
		// Only emitting events from the top-most Game Objects in the Display List.
		// Mainly useful if you have "background" button zones and you only want 
		// one to be triggered on a single tap.
		this.input.topOnly = true
		
		// Create an object mimicking what the keyboard version would be.
		// We are going to modify this on touch events so we can check in our update() loop
		this.cursors = {		
			'left': {},
			'right': {},			
		}
		var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

		if(!iOS){
			var fullScreen = this.add.image(1820,125,"fullscreen").setInteractive();
			fullScreen.alpha = 0.7;
			fullScreen.on('pointerup', function () {
					if (this.scale.isFullscreen){					
						this.scale.stopFullscreen();					
					}else{
						this.scale.startFullscreen();	
					}			
			},this);
		}
		
		// keyboard listeners to be user for each key
		const pointerDown = key => {
			// modifies this.cursors with the property that we check in update() method
			this.cursors[key].isDown = true
		}
		const pointerUp = key => {
			this.cursors[key].isDown = false
		}
		
		// button sizing
		const GAME_HEIGHT = 1080
		const GAME_WIDTH = 1900
		const WIDTH = 250
		const HEIGHT = 250
	
		// gutter width between buttons
		const GUTTER = 20
		var color = 0xff0000;
		// if( this.person != 'girl'){
		// 	
		// }

		color = 0xFFFFFF;
		
		

		var swipe = this.plugins.get('Phaser3Swipe');
		swipe.cargar(this);

		this.events.on("swipe", (e) => {
			if(e.right) {
				this.thatClick(1);
			}
			else if(e.left) {
				this.thatClick(0);
			}
		})
		
		// Create a button helper
		const createBtn = (key, x, y, width=WIDTH, height=HEIGHT) => {
			// Add a faded out red rectangle for our button
			this.add.rectangle(x, y, width, height, color, 0.15)
				.setOrigin(0,0)
				.setScrollFactor(0)
				.setInteractive()
				.on('pointerup', () => {this.thatClick(key);});

				this.add.image(x+125, y+125, "arrows-mob", key);
			 
		}

		
		// Y coordinate to place buttons
		const BTN_Y = GAME_HEIGHT - HEIGHT - GUTTER
	
		// create player control buttons
		createBtn(0, GUTTER, BTN_Y)
		createBtn(1, GAME_WIDTH - WIDTH, BTN_Y)
	
		
	}

	animationGamer(){			
			this.anims.create({
				key: 'run',
				frames: this.anims.generateFrameNames('boy'),
				frameRate: 11,
				repeat: -1
			});	
			
			
			var mas = {};
			mas.desert = [];
			mas.islands = [];
			mas.mountains = [];
			mas.valleys = [];
			mas.desertTransition = [];
			mas.islandsTransition = [];
			mas.mountainsTransition = [];

			for(let i=1; i<25; i++){
				mas.desert[i] = {key:'road-desert'};
				mas.islands[i] = {key:'road-islands'};
				mas.mountains[i] = {key:'road-mountains'};
				mas.valleys[i] = {key:'road-valleys'};
				mas.desert[i]['frame'] = 'road-'+i.toString();
				mas.islands[i]['frame'] = 'road-'+i.toString();
				mas.mountains[i]['frame'] = 'road-'+i.toString();
				mas.valleys[i]['frame'] = 'road-'+i.toString();

				if(i<24){
				mas.desertTransition[i-1] = {key:'transition_desert'};
				mas.desertTransition[i-1]['frame'] = 'transition-'+(i-1).toString();

				mas.islandsTransition[i-1] = {key:'transition_islands'};
				mas.islandsTransition[i-1]['frame'] = 'transition-'+(i-1).toString();

				mas.mountainsTransition[i-1] = {key:'transition_mountains'};
				mas.mountainsTransition[i-1]['frame'] = 'transition-'+(i-1).toString();
				}
			}
			
			this.anims.create({
				key: 'desert',
				frames: mas.desert,
				frameRate: 10,
				repeat: -1
			});	
			this.anims.create({
				key: 'islands',
				frames: mas.islands,
				frameRate: 10,
				repeat: -1
			});	
			this.anims.create({
				key: 'mountains',
				frames: mas.mountains,
				frameRate: 10,
				repeat: -1
			});	
			this.anims.create({
				key: 'valleys',
				frames: mas.valleys,
				frameRate: 10,
				repeat: -1
			});	



			this.anims.create({
				key: 'play_desert',
				frames: mas.desertTransition,
				frameRate: 10,
				repeat: 0
			});
			this.anims.create({
				key: 'play_islands',
				frames: mas.islandsTransition,
				frameRate: 10,
				repeat: 0
			});
			this.anims.create({
				key: 'play_mountains',
				frames: mas.mountainsTransition,
				frameRate: 10,
				repeat: 0
			});
	}

	getCountry(e){
		switch(e){
			case 1: return 'rus'; break;
			case 2: return 'usa'; break;
			case 3: return 'fr'; break;
			case 4: return 'ch'; break;
			case 5: return 'nz'; break;
			case 6: return 'jp'; break;
			case 7: return 'sg'; break;
			case 8: return 'gb'; break;
			case 9: return 'za'; break;
			case 10: return 'au'; break;
		}
	}

	getFirstTextCountry(e){
		switch(e){
			case 1: this.firstTextCounry.text = '+1 Российский рубль';  break;
			case 2: this.firstTextCounry.text = '+1 Американский доллар'; break;
			case 3: this.firstTextCounry.text = '+1 Евро'; break;
			case 4: this.firstTextCounry.text = '+1 Швейцарский франк'; break;
			case 5: this.firstTextCounry.text = '+1 Новозеландский доллар'; break;
			case 6: this.firstTextCounry.text = '+1 Японская иена'; break;
			case 7: this.firstTextCounry.text = '+1 Сингапурский доллар'; break;
			case 8: this.firstTextCounry.text = '+1 Фунт стерлингов'; break;
			case 9: this.firstTextCounry.text = '+1 Южноафриканский рэнд'; break;
			case 10: this.firstTextCounry.text = '+1 Австралийский доллар'; break;
			case 15: this.firstTextCounry.text = '+Мультивалютный кошелек'; break;
		}

		this.tweens.add({
			targets: this.firstTextCounry,
			alpha: 1,
			duration: 1000,
			ease: 'linear',
			onComplete: () => {
				this.tweens.add({
					targets: this.firstTextCounry,
					alpha: 0,
					duration: 1000,
					delay: 100,
					ease: 'linear'
				});
			}
		});
	}

	startGame(){
		var graphics = this.add.graphics({ fillStyle:{ color: 0x000000 } });
		var anotRect = new Phaser.Geom.Rectangle(0, 0, 1920, 1080);
		
		this.time.delayedCall(1000, function(){	
		this.goAnotTime('Смотрите на достопримечательности вокруг.');
		this.goLvl();
		graphics.fillRectShape(anotRect);
		graphics.alpha = 0.8;
		graphics.depth = 4;
		},[], this);
		this.time.delayedCall(4000, function(){						
			this.goAnotTime('Cобирайте валюту страны, в которой находитесь.');	
			graphics.depth = 5;
		},[], this);
		this.time.delayedCall(7500, function(){
			this.goAnotTime('И помните: если поймать эльбрус карту, валюта автоматически будет правильной.');
			
		},[], this);		
		this.time.delayedCall(11000, function(){
			this.goAnotTime('У вас есть право на 5 ошибок');
			graphics.depth = 6;
			this.aLifeText.setAlpha(1);
			this.time.delayedCall(3000, function(){graphics.destroy()},[],this)
		},[], this);	
	}

	goAnotTime(e){		
		
		var anotTxt = this.add.text(350, 409.1798, e, {
			"fontFamily": "GLI-Light",
			"fontSize": "56px",
			"fixedWidth": 1220,
			"fixedHeight": 450,
			"wordWrap.width": 1220,
			"lineSpacing": 30
		}).setAlign('center');
		anotTxt.depth = 6;
		


		this.time.delayedCall(3000, function(){			
			anotTxt.destroy();
					
		},[], this);
					
	}
	
	goToScoreNow(){			
		if( this.maxScore < this.scoreIndex){
			this.scoreText.text = 100;
			//this.rectPersNow.clear();	
			//this.rectPersNow.fillGradientStyle(0xe4419a, 0xe4419a, 0xf4cca0, 0xf4cca0, 1);	
			// this.rectPersNow.fillStyle(0xfcb06c, (0.8+(0.2*(this.scoreIndex/this.maxScore))));	
			// this.rectPersNow.fillRoundedRect(210, 100, (1500/(this.maxScore/this.scoreIndex)), 10, 5);
			this.sound.play('plusCoint', {volume: 0.1});
			
		} else {
			this.scoreText.text = this.scoreIndex = this.scoreIndex + this.scorePerOne;
			//this.rectPersNow.clear();	
			// this.rectPersNow.fillGradientStyle(0xe4419a, 0xe4419a, 0xf4cca0, 0xf4cca0, 1);	
			// this.rectPersNow.fillStyle(0xfcb06c, 1);		
			// this.rectPersNow.fillRoundedRect(210, 100, 1500, 10, 5);
		}
				
	}

	getRandomRaund(e, b){		
		if(e % this.lenghtRound == 0 || e % this.lenghtRound == this.lenghtRound-1 || (e < b-5 || e > b+5)){
			this.getRandomRaund(this.randomInteger(1, this.lenghtLvl), b);
		} else {			
			return this.cityBank.push(e);			
		}
	}

	randomRaund(){		
		var g = this.getRandomRaund(this.randomInteger(1, this.lenghtLvl), this.lenghtLvl);
		var k = this.getRandomRaund(this.randomInteger(1, this.lenghtLvl), g);	
	}

	goLvl(){
		
		this.goNextLvl(this.lvlNow);
		
		//this.randomRaund();	
		this.cityBank.push(7);
		this.cityBank.push(13);
		
		//console.log(this.cityBank);
		
		 //this.startTimeGame(this.timeOverGame);
		this.timeGame = this.time.delayedCall(this.timeOverGame * 1000, () => {			
			this.timeGame.destroy();			
			this.timeObjectGame.destroy();
			this.itemsTextureObject.clear();
			this.cointGroupYes.clear();
			this.road.anims.stop();
			this.gamer.anims.stop();
			this.time.delayedCall(2000, () => {
				//this.scene.start("finalgame", {score: this.scoreIndex});
				this.road.anims.stop();
				this.gamer.anims.stop();
				this.tweens.add({	
					targets: this.offBackGame,
					alpha: 1,
					duration: 2000,
					ease: 'linear',
					onComplete: () => {
						console.log(this)
						if(window.getMetaParams === ''){
							this.scene.start("finalgame", {score: this.scoreIndex});
							
						} else {
							this.scene.start("finalgame", {score: this.scoreIndex});
						}
						}
				})
			}, null, this);
		}, null, this);

	}

	onEvent(secs, lenghtLvl, e){
		if(this.lvlNow == 0){ lenghtLvl = 5;}
		return  this.time.addEvent({ delay: secs, callback: function() {	
			

			if(lenghtLvl != 0) {				
				var yes = this.cointGroupYes.get().setActive(true).setVisible(true);
				
				if(this.lvlNow == 0){						
						lenghtLvl--;
						if(yes){  yes.move(this, this.randomInteger(1, 3), true, 1);}	
					} else {
						if(lenghtLvl == this.lenghtRound){
							lenghtLvl--;
							if(yes){  yes.move(this, this.randomInteger(1, 3), this.imageRound[this.imageRoundNow], e);}	
							this.imageRoundNow++
						} else {							
							if(this.imageRound[this.imageRoundNow]){
								lenghtLvl--;
								this.whatLvl++;														
							}			
							if(yes){  yes.move(this, this.randomInteger(1, 3), this.imageRound[this.imageRoundNow], e);
								this.imageRoundNow++
							}				
						}
				}
			} else {
				this.timeRound.remove();
				this.timeObjectGame.remove();
				this.lvlNow++;

				if(this.lvlNow == 3){ 
					this.time.delayedCall(1500, () => {
						this.transition.setVisible(true);	
						this.transition.setAlpha(1);					
						this.transition.play('play_mountains');
						
						this.road.anims.stop();
						this.road.setAlpha(0);					
						
						this.transition.on('animationcomplete', function(){		
							this.road.setAlpha(1);		
							this.road.anims.play('valleys');					
							this.scorePerOne = 2;	
							this.transition.setAlpha(0);								
							this.background.setTexture('background-2');							
						}, this);
					}, null, this);
				}

				if(this.lvlNow == 6){ 
					this.time.delayedCall(1500, () => {
						
						this.transition.setAlpha(1);					
						this.transition.play('play_islands');
						
						this.road.anims.stop();
						this.road.setAlpha(0);				
											
						this.transition.on('animationcomplete', function(){
							this.scorePerOne = 4;
							this.transition.alpha = 0;
							this.road.setAlpha(1);	
							this.transition.setAlpha(0);
							this.road.anims.play('islands');	
							this.background.setTexture('background-3');											
						}, this);
					}, null, this);
				}

				if(this.lvlNow == 9){ 
					this.time.delayedCall(1500, () => {
						this.transition.setAlpha(1);					
						this.transition.play('play_desert'); 					
						this.road.anims.stop();
						this.road.setAlpha(0);						
						
						this.transition.on('animationcomplete', function(){
							this.scorePerOne = 4;	
							this.road.anims.play('desert');		
							this.transition.alpha = 0;					
							this.road.setAlpha(1);	
							this.transition.setAlpha(0);			
							this.background.setTexture('background-4');												
						}, this);
					}, null, this);
				}

				if(this.lvlNow < 11) {
					this.time.delayedCall(2000, () => {this.goNextLvl(this.lvlNow);}, null, this);
				} else {
					// this.time.delayedCall(2000, () => 
					// {
					// 	this.timeGame.destroy();			
					// 	this.timeObjectGame.destroy();
					// 	this.itemsTextureObject.clear();
					// 	this.cointGroupYes.clear();
					// 	this.road.anims.stop();
					// 	this.gamer.anims.stop();
					// 	this.time.delayedCall(2000, () => {
					// 		//this.scene.start("finalgame", {score: this.scoreIndex});
					// 		this.road.anims.stop();
					// 		this.gamer.anims.stop();
					// 		this.tweens.add({
					// 			targets: this.offBackGame,
					// 			alpha: 1,
					// 			duration: 2000,
					// 			ease: 'linear',
					// 			onComplete: () => {
					// 				if(window.getMetaParams === ''){
					// 					location.href = "gameresult.htm?score="+this.scoreIndex;
					// 				} else {
					// 					location.href = "gameresult.htm"+window.getMetaParams+"&score="+this.scoreIndex;
					// 				}
					// 				}
					// 		})
							
					// 	}, null, this);
					// })
				}

				
			}

		}, callbackScope: this, loop: true });
	}

	goNextLvl(e){				
		var lenghtLvl = this.lenghtRound;	
		
		var secs = 1000;	
		this.objLeft = true;
		this.firstTextCountryBolean = true;	
		this.countFrames = 0;
		
		if(this.lvlNow == 0){ e = 1;}
		this.timeObjectGame = this.time.addEvent({ delay: 800, callback: function() {
			this.countFrames++;
			var getObject = this.itemsTextureObject.get().setActive(true).setVisible(true);
			if(getObject) getObject.move(this, e, this.objLeft);
			
			this.objLeft = !this.objLeft; 
			

		}, callbackScope: this, loop: true });

		this.imageRoundNow = 0
		this.time.delayedCall(3000, () =>{ this.timeRound = this.onEvent(secs, lenghtLvl, e);}, null, this);
	}

	update(){	
		if(this.timeGame){		
			this.rectPersTime.clear();
			this.rectPersTime.fillStyle(0xffffff, 0.9).fillRoundedRect(210, 100, (1500 * this.timeGame.getProgress()), 10, 5);					
		}		
	}

	startTimeGame(e){
		var i = 0;
		this.time.addEvent({
			delay: 1000,
			callback: () => { //this.timeText.text = e-i;
				i++;},
			callbackScope: this,
			repeat: e
		});		
	}

	randomInteger(min, max) {
		let rand = min + Math.random() * (max - min);
		return Math.round(rand);
	  }
	
}

/* END OF COMPILED CODE */

// Custom coint item('s)

class CointYes extends Phaser.GameObjects.Sprite {

    constructor (scene, toX, why, country)
    {
		super(scene, toX, why, country);	
		
	}	

	getCorrect(e){
		this.setTexture('coins', this.scene.getCountry(e));	
	}

	getWrong(e){
		var random = 0;	
		switch(e){
			case 1:
			case 2:
					random = this.scene.randomInteger(1,4);
					if (random == 4) random = 6;
			break;
			case 3:
			case 4:
			case 5:
					random = this.scene.randomInteger(3,7);
					if (random == 6) random = 1;
					if (random == 7) random = 9;
			break;

			case 6:
			case 7:
			case 8:
					random = this.scene.randomInteger(6,10);
					if (random == 9) random = 3;
					if (random == 10) random = 4;
			break;

			case 9:
			case 10:
					random = this.scene.randomInteger(9,12);
					if (random == 11) random = 1;
					if (random == 12) random = 3;
			break;
		}		

		if(this.scene.getCountry(e) != this.scene.getCountry(random)){

			this.setTexture('coins', this.scene.getCountry(random));

		} else {this.getWrong(e);}
	}

	getCityBankCard(){
		this.setTexture('city-card');
		this.goCityCard = true;
	}

	move(scene, toX, why, country){
		this.one = true;
		this.scene = scene;
		this.toX = toX;
		this.why = why;
		this.speed = 2;
		this.angle = 1;
		this.country = country;	
		this.depth = 5;
		this.y = 330;	

		switch(toX){
			case 1: this.x = 962; break;
			case 2:	this.x = 982; break;
			case 3:	this.x = 1002; break;
		}	

			this.scale = 0;
		
			if(why){
				if(scene.whatLvl == scene.cityBank[0] || scene.whatLvl == scene.cityBank[1]){
					this.getCityBankCard();
				} else {
					this.getCorrect(country);	
				}			
			} else {
				this.getWrong(country);			
			}
		
		

		
	}

	update(){	
		
			this.scale += 0.0042;

			if(this.toX == 1){ this.x -= this.angle;}	
			if(this.toX == 3){ this.x += this.angle;}	
		
			this.y += this.speed;
			this.speed += 0.045;
			this.angle += 0.025;
		
			
				
			
			
			if(this.y > 1200){
				this.setActive(false);
				
				this.setVisible(false);
			} else {			
				if(this.one && (this.toX == this.scene.gamerPosNomberRoad) && (this.y > 855 && this.y < 880)){

					if(this.why) {
						
						if (this.scene.firstTextCountryBolean) {

							this.scene.getFirstTextCountry(this.country); 							
							
							this.scene.firstTextCountryBolean = false;
						}
						

						this.one = !this.one;
						this.scene.sound.play('correctVal', {volume: 0.1});
						
						if (this.goCityCard){
							this.goCityCard = false;
							this.scene.getFirstTextCountry(15); 
							this.scene.cityCard = true;
							var i = 0;
							var timeCard = this.scene.time.addEvent({
								delay: 1000,
								callback: () => { 
									if(i == 5) {
										this.scene.cityCard = false;
										this.scene.timeCityCardText.text = "";
									} else{
										this.scene.timeCityCardText.text = 5-i; i++;
									}
									
								},
								callbackScope: this,
								repeat: 5
							});	

						} else {
						
							this.setTexture('coins', this.scene.getCountry(this.country) + '_sign');
							
						}

						this.scene.tweens.add({
							targets: this,
							y: 70,
							x:(1500 * this.scene.timeGame.getProgress())+206,
							scale: 0,
							duration: 1000,
							ease: 'linear',
							onComplete: () => {			
								// this.scene.scoreText.text = this.scene.scoreIndex = this.scene.scoreIndex + this.scene.scorePerOne;							
								this.scene.goToScoreNow();
								this.setActive(false);
								this.setVisible(false);
							}
						});
						


					} else {
						if(this.scene.cityCard){
							this.one = !this.one;							
							this.scene.sound.play('correctVal', {volume: 0.1});
							this.scene.tweens.add({
								targets: this,
								y: 70,
								x:(1500 * this.scene.timeGame.getProgress())+206,
								scale: 0,
								duration: 1000,
								ease: 'linear',
								onComplete: () => {			
									// this.scene.scoreText.text = this.scene.scoreIndex = this.scene.scoreIndex + this.scene.scorePerOne;							
									this.scene.goToScoreNow();
									this.setActive(false);
									this.setVisible(false);
								}
							});


						} else {

							this.one = !this.one;
							
										
							
							this.scene.sound.play('wrongVal', {volume: 0.1});


								this.scene.tweens.add({
									targets: this,
									scale: 0,
									x:960,
									y:158.63262,
									duration: 1000,
									ease: 'linear',
									onComplete: () => {
										
										this.scene.aLifeText.setStyle({color: '#ff0000'});                
										
										this.scene.aLife--;		
										var perem = ' жизни';
										if(this.scene.aLife == 1) perem = ' жизнь';
										if(this.scene.aLife > 0){								
											this.scene.aLifeText.text = this.scene.aLife + perem
										}
										if(this.scene.aLife == 0){ 
											this.scene.aLifeText.text = 'увы'	
										}		

										this.setActive(false);										
										this.setVisible(false);

										this.scene.time.delayedCall(300, function(){
											this.scene.aLifeText.setStyle({color: '#ffffff'});											
											if(this.scene.aLife <= 0){									
											//this.scene.start("finalgame", {score: this.scoreIndex});									
												this.scene.timeGame.destroy();			
												this.scene.timeObjectGame.destroy();
												this.scene.itemsTextureObject.clear();
												this.scene.cointGroupYes.clear();
												this.scene.road.anims.stop();
												this.scene.gamer.anims.stop();
													
												this.scene.tweens.add({
														targets: this.scene.offBackGame,
														alpha: 1,
														duration: 2000,
														ease: 'linear',
														onComplete: () => {															
																if(window.getMetaParams === ''){
																	location.href = "gameresult.htm?score="+this.scene.scoreIndex;
																} else {
																	location.href = "gameresult.htm"+window.getMetaParams+"&score="+this.scene.scoreIndex;
																}
															}
														})
													
												}	
																						
											},[], this);

									}
								});

							
							}

						}			
	
				}
			}
		
	}
}




// Custom object item's

class ItemsTextureObject extends Phaser.GameObjects.Sprite {

    constructor (scene, country, left)
    {
		super(scene, country, left);	
	}

	move(scene, country, left){		
		this.scene = scene;
		this.speed = 2;
		this.angle = 1;
		this.country = country;
		this.left = left;
		this.alpha = 0;
		this.depth = 4;
		
		if(this.left) {
			this.y = 330;	
			this.x = 945;	
			this.scale = 0;	
			this.flipX = true;				
		} else {
			this.y = 330;	
			this.x = 1005;	
			this.scale = 0;			
			this.flipX = false;		
		}		

		var obj = this.scene.getCountry(country) +'-object';
		
		var atlasTexture = this.scene.textures.get(obj);
		var frames = atlasTexture.getFrameNames();
		var lngth = this.scene.countFrames - 1;
		if(this.scene.countFrames > 3) lngth = this.scene.randomInteger(0,frames.length-1);
		

		this.setTexture(obj, frames[lngth]);

		
	
	}

	update(){	
			if(this.alpha < 1){ this.alpha += 0.01}
			this.scale += 0.005;

			if(this.left){
				this.x -= this.speed;
			} else {
				this.x += this.speed;
			}
			
			this.y += this.angle;
			this.speed += 0.05;
			this.angle += 0.025;
	
			if(this.y > 1100){
				this.setActive(false);
				this.destroy(true)
				this.setVisible(false);
			} 
		
	}
}


