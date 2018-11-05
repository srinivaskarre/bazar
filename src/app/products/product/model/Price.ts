import { Deserializable } from "./Deserializable.model";

export class Price implements Deserializable{
    originalprice?:number;
    promotionalprice?:number;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}