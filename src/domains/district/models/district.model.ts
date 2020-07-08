import {RegencyModel} from "../../regency/models/regency.model";
import {Type} from "class-transformer";

export class DistrictModel {
    code: string;
    name: string;

    @Type(() => RegencyModel)
    regency: RegencyModel;
}