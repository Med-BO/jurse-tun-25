export class Author {
    id!: number;
    type!: string;
  
    deserialize(input: any): this {
      return Object.assign(this, input);
    }
  }
  