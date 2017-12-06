

// tslint:disable
 export class Product
{
    name:string;
    price:string;
    imageURL:string;
    description:string;
    selectedQty:number=0

    constructor( name:string,price:string,imageURL:string,description:string){

        this.name=name;
        this.price=price;
        this.imageURL=imageURL;
        this.description=description;
        
    }
}