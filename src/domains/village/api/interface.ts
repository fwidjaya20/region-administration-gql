import {VillageModelResponse} from "../models/village.model";

export interface VillageAPIInterface {
    getVillage(
        codes: string[],
        name: string
    ) : Promise<VillageModelResponse>
}