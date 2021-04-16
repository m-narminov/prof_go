
// You can write more code here

/* START OF COMPILED CODE */

class first extends Phaser.Scene {
	
	constructor() {
	
		super("first");
		
	}
	
	init (){

	}
	
	_create() {
		
		this.add.image(960.0, 540.0, "previw-back");		
		var content = [
		"\nПройдите игру и получи бонусы!"
		];
		
		
		this.add.text(960, 710, content, {
			"fontFamily": "GLI-Light, Arial",
			"fontSize": "40px",
			"lineHeight": "45px",
			"color": '0x00000',
			"align": "center",
			"fixedWidth": 1350,
			"fixedHeight": 450,
			"wordWrap.width": 1350, lineSpacing: 10 
		}).setOrigin(0.5);
		
		var btn_start = this.add.image(960, 800, 'btn').setOrigin(0.5)
		

		
		this.fBtn_start = btn_start;
		
	}
	
	
	/* START-USER-CODE */

	create(){
		this._create();
		this.scoreIndex = 352;
		this.fBtn_start.setInteractive({ useHandCursor: true  });
		var bgrAudio = this.sound.add('fon', {volume: 0.3});
		bgrAudio.loop = true;	
		bgrAudio.play();	
		this.sound.mute = true;	
		this.fBtn_start.on('pointerdown', function(){
			
			this.scene.start("game");	
						
        var elements = document.getElementsByClassName('citi-button-primary');
       
		}, this);	

		
		this.scaleTrue = true;	
		this.scale = 1.0;
		
		
	}

	update(){
		
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
