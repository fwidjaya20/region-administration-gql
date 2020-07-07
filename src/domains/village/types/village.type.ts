import {Field, ObjectType} from "type-graphql";
import DistrictType from "../../district/types/district.type";

@ObjectType({
    description: "Represent Village Data Model"
})
class VillageType {
    @Field()
    code: string;

    @Field()
    name: string;

    @Field()
    postalCode: string;

    @Field(type => DistrictType)
    district: DistrictType;
}

export default VillageType;