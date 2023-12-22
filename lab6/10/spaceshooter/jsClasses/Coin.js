export class Coin {
  constructor() {
    let element = document.createElement("div");
    this.position = { x: 0, y: 0 };
    this.generatePosition();
    element.classList.add("coin");
    element.style.top = this.position.y + "px";
    element.style.left = this.position.x + "px";
    this.element = element;

    this.updatePosition();
  }

  getElement() {
    return this.element;
  }

  updatePosition() {
    this.element.style.top = this.position.y + "px";
    this.element.style.left = this.position.x + "px";
  }

  generatePosition() {
    let x = Math.random() * (document.documentElement.clientWidth - 200) + 100;
    this.position.x = x;

    let y = Math.random() * (document.documentElement.clientHeight - 200) + 100;
    this.position.y = y;
  }

  collide(gameObject) {
    let distance = Math.sqrt(
      Math.pow(this.position.x + 14.5 - (gameObject.position.x + 25), 2) +
        Math.pow(this.position.y + 14.5 - (gameObject.position.y + 25), 2)
    );
    console.log(distance);
    if (distance <= 25) {
      return true;
    }

    return false;
  }
}
