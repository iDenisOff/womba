import { HTTPTransport } from '@utils';

export default abstract class BaseAPI {
    protected http: HTTPTransport;

    protected constructor(endpoint: string) {
        this.http = new HTTPTransport(endpoint);
    }
}
