import {ContainerModule} from "inversify";
import {VillageAPIInterface} from "../domains/village/api/interface";
import {VillageIdentifier} from "../domains/village/identifier/village.identifier";
import VillageApi from "../domains/village/api/village.api";
import VillageResolver from "../resolvers/village/village.resolver";

export const RESOLVER_MODULE = new ContainerModule(bind => {
  bind<VillageResolver>(VillageResolver).toSelf().inSingletonScope();
})