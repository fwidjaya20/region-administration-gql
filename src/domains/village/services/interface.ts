import VillageType from "../types/village.type";

export interface VillageServiceInterface {
    getVillage(codes: string[], name: string) : Promise<VillageType[]>;
}