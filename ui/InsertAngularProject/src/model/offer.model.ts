export interface IOffer {
    Id: number;
    Title: string;
    Description: string;
    Price: number;
    Category: string;
    Created_at: Date;
}

export class Offer implements IOffer {
    constructor (
        public Id: number,
        public Title: string,
        public Description: string,
        public Price: number,
        public Category: string,
        public Created_at: Date        
    ) {}
}