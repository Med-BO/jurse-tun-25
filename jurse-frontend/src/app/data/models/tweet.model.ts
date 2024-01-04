export class Tweet {
    id!: number;
    link!: string;
    datetweet!: string;
  
    deserialize(input: any): this {
      return Object.assign(this, input);
    }
  }
  