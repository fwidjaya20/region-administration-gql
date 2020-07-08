import {Container} from "inversify";
import {API_MODULE} from "./api";
import {SERVICE_MODULE} from "./service";
import {RESOLVER_MODULE} from "./resolver";

const container = new Container();
container.load(
    API_MODULE,
    SERVICE_MODULE,
    RESOLVER_MODULE
);

export default container;