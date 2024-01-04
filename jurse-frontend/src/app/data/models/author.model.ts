import { Country } from "./country.model";
import { SpecialSession } from "./special-session.model";

export class Author {
    id!: number;
    firstname!: string;
    lastname!: string;
    organism!: number;
    specialSession!: SpecialSession;
    country!: Country;
  
    deserialize(input: any): this {
        // deserialize the special session
      return Object.assign(this, input);
    }
  }
  