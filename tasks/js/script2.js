class Product {
    constructor(title, price, qnt) {
        this.title = title
        this.price = price
        this.qnt = qnt
    }
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number': return this.price
            case 'string': return `${this.title} - ${this.price * this.qnt} $`
            default: return this.title
        }
    }
}
class Shop{
    constructor(productList){
        this.productList = productList
        this.currentIndex = 0
    }
    [Symbol.iterator](){
        this.currentIndex = 0
        return this
    }
    next(){
        if (this.currentIndex < this.productList.length){
            const currentProduct = this.productList[this.currentIndex]
            this.currentIndex++
            return {done: false, value: String(currentProduct)}
            // return {done:false, value: `${currentProduct.title} - ${currentProduct.price * currentProduct.qnt}`}
        } else return {done: true}        
    }
}

const productList = [
    new Product('product1', 12, 100),
    new Product('product2', 21, 70),
    new Product('product3', 9, 156),
    new Product('product4', 14, 120)
]
const shop = new Shop(productList)

for (const product of shop) {
    console.log(product)
}

const arr = [...shop]
res1.innerText = `[${arr}]`

