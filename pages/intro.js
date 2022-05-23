class intro extends Phaser.Scene {  constructor() {
    super('intro');
}
init() {
    console.log("intro");  
}
preload() {

}
create() {
    this.introText = this.add.text(0,0,"PRESIONA LA TECLA ESPACIO PARA COMENZAR", { 
        fontStyle: 'strong', 
        align: 'right', 
        font: '64px Arial', 
        fill: 'red' });   
    // CREATE KEYBOARD CURSOS
    this.cursors = this.input.keyboard.createCursorKeys();
}
update(time, delta) {
    // INPUT CONTROL
    if (this.input.keyboard.checkDown(this.cursors.space, 250)) {
        this.scene.start('intro');   
    }
} } export default intro;