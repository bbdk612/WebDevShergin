"use strict";

export class Enemy {
  constructor(direction, position, speed) {
    this.direction = direction;
    this.position = position;
    this.speed = speed;
    let element = document.createElement("div");
    element.classList.add("enemy");
    this.element = element;
    this.t = 0;
  }

  setDirection(direction) {
    this.direction = direction;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  getElement() {
    return this.element;
  }

  updatePosition() {
    this.element.style.top = this.position.y + "px";
    this.element.style.left = this.position.x + "px";
  }

  collide(gameObject) {
    let distance = Math.sqrt(
      Math.pow(this.position.x + 25 - (gameObject.position.x + 25), 2) +
        Math.pow(this.position.y + 25 - (gameObject.position.y + 25), 2)
    );
    console.log(distance);
    if (distance <= 25) {
      return true;
    }

    return false;
  }

  move() {
    this.t += this.speed;
    this.position.x = this.direction.x[0] * this.t + this.direction.x[1];
    this.position.y = this.direction.y[0] * this.t + this.direction.y[1];
    this.updatePosition()
  }
}
