class ShoppingCart {
  constructor () {
    this.items = []
  }

  getItems(cart) {
    return this.items
  }

  addItem(item) {
    this.items.push({
            name: "Trash can",
            quantity: 1,
            pricePerUnit: 15.5
            })
  }

  clear() {
    this.items = []
  }

  clone() {

  }
}




module.exports = ShoppingCart
