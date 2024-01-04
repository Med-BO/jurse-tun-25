export class Country {
    id!: number;
    name!: string;
  
    deserialize(input: any): this {
      return Object.assign(this, input);
    }
  }
  