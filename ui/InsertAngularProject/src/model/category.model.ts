export interface ICategory {
    Id: number;
    Name: string;
    Ordering: number;
}

export class Category implements ICategory {
    constructor(
        public Id: number,
        public Name: string,
        public Ordering: number
    ) {}
}