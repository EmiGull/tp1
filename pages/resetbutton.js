export class ResetButton {
    
    constructor(scene) {
        this.relatedScene = scene;
    }

    preload(){
        this.relatedScene.load.spritesheet('button', 'assets/reset.png', {frameWidth: 190, frameHeight:49})
    }

    create() {
        this.resetButton = this.relatedScene.add.sprite(400,230, 'button').setInteractive();
    
    this.resetButton.on ('pointerover', () => {
        this.resetButton.setFrame(1);
    });
    this.resetButton.on ('pointerout', () => {
        this.resetButton.setFrame(0);
    });
    this.resetButton.on('pointerdown', () => {
        this.relatedScene.scene.start('scene');
    });


    }
}