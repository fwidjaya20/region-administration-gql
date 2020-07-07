import {Query, Resolver} from "type-graphql";
import VillageType from "../../domains/village/types/village.type";

@Resolver(of => VillageType)
class VillageResolver {
    @Query(returns => VillageType)
    async village(): Promise<VillageType> {
        throw "Not Implemented";
    }

    @Query(returns => [VillageType])
    async villages(): Promise<VillageType[]> {
        throw "Not Implemented";
    }
}

export default VillageResolver;