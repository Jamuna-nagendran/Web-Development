class Product {
  constructor(name, cost, acceptingOrders, quantity, description) {
    this.name = name;
    this.cost = cost;
    this.acceptingOrders = acceptingOrders;
    this.quantity = quantity;
    this.description = description;
  }

 //This is a public class field,  we can also initialize this in the contructor
 discount = 0;
 //since tax is a fixed value and does need to be replicated by each object
 static tax = 12;
 
 
  //This is a public class method
/*   stockCost() {
    return this.cost * this.quantity;
  } */




  // you can make this function into a getter
  get stockCost(){
    let stockCost = (Product.tax/100) *this.cost + this.cost * this.quantity;
    let discAmt = (this.discount /100) * stockCost;
    return this.discount !== 0 ? stockCost - discAmt : stockCost;
  }

  static toUpper(x){
    return x.toUpperCase();
  }
  
  
  set setDiscount(x){
    this.discount = x;
  }


  // We do not need a getDesc() method as the description data type is already public
  /* getDesc() {
    return this.description;
  }
 */
}

export default Product;
