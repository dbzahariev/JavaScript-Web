export class CreateModel {
    constructor(
        public make: string,
        public model: string,
        public year: number,
        public description: string,
        public price: number,
        public imageUrl: string,
        public material?: string,
    ){}
}