import {ContainerModule} from "inversify";
import {VillageAPIInterface} from "../domains/village/api/interface";
import {VillageIdentifier} from "../domains/village/identifier/village.identifier";
import VillageApi from "../domains/village/api/village.api";

export const API_MODULE = new ContainerModule(bind => {
  bind<VillageAPIInterface>(VillageIdentifier.VillageAPI).to(VillageApi).inSingletonScope();
})