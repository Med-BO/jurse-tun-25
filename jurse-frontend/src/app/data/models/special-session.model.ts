export class SpecialSession {
    id!: number;
    title!: string;
    description!: string;
    order!: number;
  
    deserialize(input: any): this {
      return Object.assign(this, input);
    }
  }
  