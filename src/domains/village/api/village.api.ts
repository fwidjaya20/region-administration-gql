import {VillageAPIInterface} from "./interface";
import {VillageModel, VillageModelResponse} from "../models/village.model";
import HttpClient from "../../../shared/https/client.http";
import {injectable} from "inversify";
import {plainToClass} from "class-transformer";

@injectable()
export default class VillageApi extends HttpClient implements VillageAPIInterface {

    async getVillage(codes: string[], name: string): Promise<VillageModelResponse> {
        const response = await this.request("POST", "/v1/region", {
            "scope": "village",
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        let result = new VillageModelResponse();
        result.metadata = response.data.metadata;

        result.data = plainToClass(VillageModel, <VillageModel[]>response.data.data);

        return Promise.resolve(result);
    }

}