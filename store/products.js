// const producto1 = {
//     nombre: "celular",
//     precio: 100000,
//     stock: 2
//     };


//     producto1.id = "id123";
//     producto1[foto] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";
//     console.log(producto1);

class Product {
      constructor(id, title, price, stock, images, onsale, supplier) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier;
      }

    get getSupplier() {
        return this._supplier;
        }
        set setSupplier(newName) {
        this._supplier = newName;
        }

        sellUnits(units) {
            if(this.stock < units){
            console.log("No se puede vender");
            }
            else{
            this.stock = this.stock - units

            }
        }
        
    }


    // const prod1 = new Product("4560","Manzana","$4");
    // console.log(prod1);
    // const prod2 = new Product("4561","Cereza","$3");
    // console.log(prod2);
    // const prod3 = new Product("4562","Mango","$2");
    // console.log(prod3);
    const prod4 = new Product("4563","Fresa","$2","asda","assdhasjd","2","Edgar");
    console.log(prod4);


    console.log(prod4._supplier);
    prod4.getSupplier;
    console.log(prod4._supplier);
    prod4.setSupplier = "Edgar Rafael";
    console.log(prod4._supplier);

    const prod5 = new Product("4564","Guayaba",5,9,"asdashdgashdjg","3","Rafa");
    prod5.sellUnits(10);
    console.log(prod5.stock);    