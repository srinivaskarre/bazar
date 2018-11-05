import {Offer} from './Offer';
import {Price} from './Price';
import { Deserializable } from './Deserializable.model';

export class Product implements Deserializable{
    itemid?: number;
    itemname?: string;
    itemdescription?:string;
    features?:string[];
    price?:Price;
    offers?:Offer;
    reviews?:string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}