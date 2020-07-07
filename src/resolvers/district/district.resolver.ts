import {Query, Resolver} from "type-graphql";
import DistrictType from "../../domains/district/types/district.type";

@Resolver(of => DistrictType)
class DistrictResolver {
    @Query(returns => DistrictType)
    async district(): Promise<DistrictType> {
        throw "Not Implemented";
    }

    @Query(returns => [DistrictType])
    async districts(): Promise<DistrictType[]> {
        throw "Not Implemented";
    }
}

export default DistrictResolver;