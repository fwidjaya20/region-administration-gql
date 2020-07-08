import {Arg, Query, Resolver} from "type-graphql";
import VillageType from "../../domains/village/types/village.type";
import {inject, injectable} from "inversify";
import {VillageIdentifier} from "../../domains/village/identifier/village.identifier";
import {VillageServiceInterface} from "../../domains/village/services/interface";

@injectable()
@Resolver(of => VillageType)
class VillageResolver {
    @inject(VillageIdentifier.VillageService) private service : VillageServiceInterface;

    @Query(returns => [VillageType])
    async villages(
        @Arg("name", {defaultValue: ""}) name: string,
    ): Promise<VillageType[]> {
        return await this.service.getVillage([], name);
    }
}

export default VillageResolver;