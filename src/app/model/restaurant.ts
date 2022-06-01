export class Restaurant{

    id:number;
    nom:string;
    codePostal:number;
    ville:string;
    note:number;
    nombreNote:number;
    imageUrl:string;

    constructor(id?:number,nom?:string,codePostal?:number,ville?:string,note?:number,nombreNote?:number, imageUrl?:string){
        this.id = id;
        this.nom = nom;
        this.codePostal = codePostal;
        this.ville = ville;
        this.note = note;
        this.nombreNote = nombreNote;
        this.imageUrl=imageUrl;
    }
}