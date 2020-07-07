import {Query, Resolver} from "type-graphql";
import ProvinceType from "../../domains/province/types/province.type";

@Resolver(of => ProvinceType)
class ProvinceResolver {
    @Query(returns => ProvinceType)
    async province(): Promise<ProvinceType> {
        throw "Not Implemented";
    }

    @Query(returns => [ProvinceType])
    async provinces(): Promise<ProvinceType[]> {
        throw "Not Implemented";
    }
}

export default ProvinceResolver;