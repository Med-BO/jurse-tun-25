export class Organizer {
    id!: number;
    src!: string;
    alt!: string;
    order!: number;
  
    deserialize(input: any): this {
      return Object.assign(this, input);
    }
  }
  