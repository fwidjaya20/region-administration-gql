import {DistrictModel} from "../../district/models/district.model";
import {Type} from "class-transformer";

export class VillageModel {
    code: string;
    name: string;
    postal_code: string;

    @Type(() => DistrictModel)
    district: DistrictModel;
}

export class VillageModelResponse {
    data: VillageModel[];
    metadata: any;
}