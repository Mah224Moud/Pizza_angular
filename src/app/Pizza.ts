export class Pizza{
    private name: string;
    private description: string;
    private img: string;

    constructor(name: string, description: string, img: string){
        this.name = name;
        this.description = description;
        this.img = img;
    }

    public getName(){
        return this.name;
    }
    public getDescription(){
        return this.description;
    }
    public getImg(){
        return this.img;
    }

    public setName(name: string){
        this.name = name;
    }
    public setDescription(description: string){
        this.description = description;
    }
    public setImg(img: string){
        this.img = img;
    }
}