export class KeyNoteSpeaker {
    vpath!: number;
    title!: string;
    order!: string;
  
    deserialize(input: any): this {
      return Object.assign(this, input);
    }
  }
  