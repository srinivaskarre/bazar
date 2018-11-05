import { Deserializable } from "./Deserializable.model";

export class Offer implements Deserializable{
    offer?: string[];

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}