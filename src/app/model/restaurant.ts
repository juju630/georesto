export class Restaurant{

    id:number;
    nom:string;
    codePostal:number;
    ville:string;
    note:number;
    nombreNote:number;
    imageUrl:string;
    latitude:number;
    longitude:number;
    description:string;

    constructor(id?:number,nom?:string,codePostal?:number,ville?:string,note?:number,nombreNote?:number, imageUrl?:string, latitude?:number, longitude?:number, description?:string){
        this.id = id;
        this.nom = nom;
        this.codePostal = codePostal;
        this.ville = ville;
        this.note = note;
        this.nombreNote = nombreNote;
        this.imageUrl=imageUrl;
        this.latitude=latitude;
        this.longitude=longitude;
        this.description=description;
    }
}