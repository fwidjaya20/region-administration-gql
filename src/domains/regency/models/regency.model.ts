import {ProvinceModel} from "../../province/models/province.model";
import {Type} from "class-transformer";

export class RegencyModel {
    code: string;
    name: string;

    @Type(() => ProvinceModel)
    province: ProvinceModel;
}