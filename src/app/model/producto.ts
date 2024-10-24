export class Producto {
    idProducto:number;
    nombre:String;
    precio:number;
    cantidad:number;
    estado:String;

    constructor(idProducto:number,nombre:String,cantidad:number,estado:String){
        this.idProducto=0;
        this.nombre='';
        this.precio=0;
        this.cantidad=0;
        this.estado='';
    }
}
