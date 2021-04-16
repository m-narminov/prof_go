
// You can write more code here

/* START OF COMPILED CODE */

class finalgame extends Phaser.Scene {
	
	constructor() {
	
		super("finalgame");
		
	}

	init(data){
		this.score = data.score;
				
	}
	
	_create() {
	
		
		this.add.image(960.0, 540.0, "previw-back");	

		

		if(this.itog == "tiger"){
			var nameItog = "Тигра";
		} else if( this.itog == "dragon"){
			var nameItog = "Дракона";
		} else {
			var nameItog = "Обезьяны";
		}
				
		this.add.text(350, 500.41235, "Вы набрали "+ this.score +" баллов.", {
			"fontFamily": "GLI-Light",
			"fontSize": "75px",
			"fixedWidth": 1250,
			"fixedHeight": 350
		});

		this.add.text(350, 710, "Вы, случаем, не масон? Кажется, вы знаете больше, чем среднестатистический житель планеты. Поздравляем", {
			"fontFamily": "GLI-Light",
			"fontSize": "28px",
			"fixedWidth": 1100,
			"fixedHeight": 350,
			"wordWrap.width": 680
		});

		var print = this.add.text(0, 0, '');

	
		
		
		

		const scaleBox = scale => {
			let box = document.getElementById('myText')
			if (box) {
			box.style.transform = `scale(${scale})`
			box.style.transformOrigin = 'top left'
			box.style.top = `${this.game.canvas.offsetTop + this.scale.displaySize.height / 2 - (-388 / 2) * scale}px`
			box.style.left = `${this.game.canvas.offsetLeft + this.scale.displaySize.width / 2 - (1620 / 2) * scale}px`
			}
		}

		// initial scale
		let scale = this.game.scale.displaySize.width / this.game.scale.gameSize.width
		scaleBox(scale)

		// on resize listener
		this.scale.on('resize', (gameSize, baseSize, displaySize, resolution) => {
			let scale = displaySize.width / gameSize.width
			scaleBox(scale)
		})


		
        //
        //
        //
		
	}
	
	
	/* START-USER-CODE */

	create(){
		this._create();		
		
		
	}

	textAreaChanged() {  
        console.log(text);
    }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
