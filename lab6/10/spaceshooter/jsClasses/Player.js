"use strict";

export class Player {
  constructor(speed, startPosition) {
    this.position = startPosition;
    this.speed = speed;
    let element = document.createElement("div");
    element.classList.add("player");
    this.element = element;
    this.score = 0;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = this.position.y + "px";
    this.element.style.left = this.position.x + "px";
  }

  getElement() {
    return this.element;
  }

  updateScore() {
    this.score += 1;
  }

  getScore() {
    return this.score;
  }

  move(direction) {
    switch (direction) {
      case "left":
        this.position.x -= this.speed;
        break;

      case "right":
        this.position.x += this.speed;
        break;

      case "up":
        this.position.y -= this.speed;
        break;

      case "down":
        this.position.y += this.speed;
        break;
    }

    this.updatePosition();
  }
}
