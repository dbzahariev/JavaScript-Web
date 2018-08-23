export class BeerCreate {
  constructor(
    public name : string,
    public imagePath : string,
    public description: string,
    public location : string
  ) { }
}