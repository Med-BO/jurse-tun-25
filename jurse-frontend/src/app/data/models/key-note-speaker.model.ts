export class KeyNoteSpeaker {
    id!: number;
    firstname!: string;
    lastname!: string;
    description!: string;
    website!: string;
  
    deserialize(input: any): this {
      return Object.assign(this, input);
    }
  }
  