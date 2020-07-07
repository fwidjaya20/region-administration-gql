import {Field, ObjectType} from "type-graphql";
import DistrictType from "../../district/types/district.type";
import ProvinceType from "../../province/types/province.type";

@ObjectType({
    description: "Represent Regency Data Model"
})
class RegencyType {
    @Field()
    code: string;

    @Field()
    name: string;

    @Field(type => [DistrictType])
    districts: DistrictType[];

    @Field(type => ProvinceType)
    province: ProvinceType;
}

export default RegencyType;