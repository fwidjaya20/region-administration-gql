import {Field, ObjectType} from "type-graphql";
import VillageType from "../../village/types/village.type";
import RegencyType from "../../regency/types/regency.type";

@ObjectType({
    description: "Represent District Data Model"
})
class DistrictType {
    @Field()
    code: string;

    @Field()
    name: string;

    @Field(type => [VillageType])
    villages: VillageType[];

    @Field(type => RegencyType)
    regency: RegencyType;
}

export default DistrictType;