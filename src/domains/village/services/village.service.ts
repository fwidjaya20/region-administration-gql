import {VillageServiceInterface} from "./interface";
import {inject, injectable} from "inversify";
import {VillageIdentifier} from "../identifier/village.identifier";
import {VillageAPIInterface} from "../api/interface";
import VillageType from "../types/village.type";
import DistrictType from "../../district/types/district.type";
import RegencyType from "../../regency/types/regency.type";
import ProvinceType from "../../province/types/province.type";

@injectable()
export default class VillageService implements VillageServiceInterface {
    @inject(VillageIdentifier.VillageAPI) private api : VillageAPIInterface;

    async getVillage(codes: string[], name: string): Promise<VillageType[]> {
        let result : VillageType[] = new Array<VillageType>();

        const response = await this.api.getVillage(codes, name);

        for (let r of response.data) {
            const temp = new VillageType()

            temp.name = r.name;
            temp.code = r.code;
            temp.postalCode = r.postal_code;
            temp.district = new DistrictType();
            temp.district.code = r.district.code;
            temp.district.name = r.district.name;
            temp.district.regency = new RegencyType();
            temp.district.regency.code = r.district.regency.code;
            temp.district.regency.name = r.district.regency.name;
            temp.district.regency.province = new ProvinceType();
            temp.district.regency.province.code = r.district.regency.province.code;
            temp.district.regency.province.name = r.district.regency.province.name;

            result.push(temp);
        }

        return Promise.resolve(result);
    }
}