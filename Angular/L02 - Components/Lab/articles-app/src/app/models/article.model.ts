export class Aritcle {
    tile: string
    description: string
    author: string
    imageUrl: string

    constructor(tile: string,
    description: string,
    author: string,
    imageUrl: string){
        this.tile = tile
        this.description = description
        this.author = author
        this.imageUrl = imageUrl
    }
}