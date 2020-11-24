const Product = require("./model/product");

class FakeDb{
    constructor(){
        this.products=[
        {
                coverImage:'../../assets/img/Unknown.png',
                name:'aaaa',
                price:1004,
                description:'bbb',
                heading1:'afdsafjiaofjowaejfo',
                heading2:'aaaaafdsafjiaofjowaejfo',
                heading3:'afdsaaaaaafjiaofjowaejfo'
        },
              {
                coverImage:'./assets/img/phone-cover.jpg',
                name:'ccbc',
                price:1003,
                description:'dddd',
                heading1:'afdsafjiaofjowaejfo',
                heading2:'aaaaafdsafjiaofjowaejfo',
                heading3:'afdsaaaaaafjiaofjowaejfo'
              },
              {
                coverImage:'./assets/img/phone-cover.jpg',
                name:'eeee',
                price:1002,
                description:'dfddd',
                heading1:'afdsafjiaofjowaejfo',
                heading2:'aaaaafdsafjiaofjowaejfo',
                heading3:'afdsaaaaaafjiaofjowaejfo'
              },
              {
                coverImage:'./assets/img/phone-cover.jpg',
                name:'ffff',
                price:1001,
                description:'fsa',
                heading1:'afdsafjiaofjowaejfo',
                heading2:'aaaaafdsafjiaofjowaejfo',
                heading3:'afdsaaaaaafjiaofjowaejfo'
              }]
        
    }
    async initDb()
    {
      await this.cleanDb()
      this.pushProductsToDB()
    }
    async cleanDb()
    {
        await Product.deleteMany({})


    }

    pushProductsToDB()
    {
      Array.prototype.forEach.call(this.products, product => {
        const newProduct = new Product(product)
        newProduct.save()
        console.log(product)
      });
    }

    seeDb()
    {
        this.pushProductsToDB()
    }
}

module.exports = FakeDb