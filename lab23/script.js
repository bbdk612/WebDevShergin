'use strict'

class Computer {
  model
  price
  creator

  constructor (model, creator, price) {
    this.model = model
    this.creator = creator
    this.price = price
  }

  getModel () {
    return this.model
  }

  getCreator () {
    return this.creator
  }

  getPrice () {
    return this.price
  }
}

const PrintModel = () => {
  const pc = new Computer('x10000', 'MSI', 1000000)
  const model = document.querySelector('.model')
  const creator = document.querySelector('.creator')
  const price = document.querySelector('.price')
  model.innerHTML = 'Модель ' + pc.getModel()
  creator.innerHTML = 'Создатель ' + pc.getCreator()
  price.innerHTML = 'Цена ' + pc.getPrice()
}

const button = document.querySelector('.printPC')
button.addEventListener('click', PrintModel)
