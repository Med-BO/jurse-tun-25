export class Photo {
    id!: number;
    vpath!: string;
    alt!: string;
    title!: string;
    order!: string;
  
    deserialize(input: any): this {
      return Object.assign(this, input);
    }
  }
  