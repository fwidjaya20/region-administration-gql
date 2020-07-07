import {Query, Resolver} from "type-graphql";
import RegencyType from "../../domains/regency/types/regency.type";

@Resolver(of => RegencyType)
class RegencyResolver {
    @Query(returns => RegencyType)
    async regency(): Promise<RegencyType> {
        throw "Not Implemented";
    }

    @Query(returns => [RegencyType])
    async regencies(): Promise<RegencyType[]> {
        throw "Not Implemented";
    }
}

export default RegencyResolver;