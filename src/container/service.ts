import {ContainerModule} from "inversify";
import {VillageIdentifier} from "../domains/village/identifier/village.identifier";
import {VillageServiceInterface} from "../domains/village/services/interface";
import VillageService from "../domains/village/services/village.service";

export const SERVICE_MODULE = new ContainerModule(bind => {
  bind<VillageServiceInterface>(VillageIdentifier.VillageService).to(VillageService).inSingletonScope();
})