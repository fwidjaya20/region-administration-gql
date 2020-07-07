import {Field, ObjectType} from "type-graphql";
import RegencyType from "../../regency/types/regency.type";

@ObjectType({
    description: "Represent Province Data Model",
})
class ProvinceType {
    @Field()
    code: string;

    @Field()
    name: string;

    @Field(type => [RegencyType])
    regencies: RegencyType[];
}

export default ProvinceType;