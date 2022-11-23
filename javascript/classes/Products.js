class Products {
    name;
    price;
    quantity;

    deliver = () => {

    };
    bill = () => {
        return this.price * this.quantity;

    };

}


// export the calss
module.exports = Products; // ES5 method 

    // two types of export
    // default export  and name export  
