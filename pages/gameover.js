import { ResetButton } from "./resetbutton";

export class gameOver extends Phaser.Scene {

    constructor (){
        super ({ key: 'gameover'});
        this.ResetButton = new ResetButton (this);
    }

    preload (){
        this.load.image ('gameover', 'assets/gameover.png');
        this.ResetButton.preload();

    }

    create (){
        this.add.image (410,250, 'sky');
        this.ResetButton.create();
        this.gameOverImage = this.add.image(400,900,'gameover');
    }

}