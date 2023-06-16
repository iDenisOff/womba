import { queryToString } from './query';

enum METHODS {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
    PATCH = 'PATCH'
}

type Request = {
    path: string;
    method: METHODS;
    body?: BodyInit | null | Blob | FormData;
    headers?: Record<string, string>;
    ignoreContentType?: boolean;
};

export type TOptions = {
    headers?: Record<string, string>;
    data?: Record<string, unknown>;
};

type TRequestOptions = TOptions & {
    method: METHODS;
};

export type TMethod = <T>(url: string, options?: TOptions) => Promise<T>;
interface IHTTPTransport {
    get: TMethod;
    post: TMethod;
    put: TMethod;
    delete: TMethod;
    patch: TMethod;
}
export class HTTPTransport implements IHTTPTransport {
    static API_URL = 'https://ya-praktikum.tech/api/v2';

    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
    }

    get: TMethod = (url, options = {}) => this.request(url, { ...options, method: METHODS.GET });

    post: TMethod = (url, options = {}) => this.request(url, { ...options, method: METHODS.POST });

    put: TMethod = (url, options = {}) => this.request(url, { ...options, method: METHODS.PUT });

    delete: TMethod = (url, options = {}) =>
        this.request(url, { ...options, method: METHODS.DELETE });

    patch: TMethod = (url, options = {}) =>
        this.request(url, { ...options, method: METHODS.PATCH });

    request = async <T>(url: string, options: TRequestOptions): Promise<T> => {
        const { data, method, headers = {} } = options;
        const response = await makeRequest({
            path: this.endpoint + url,
            method,
            body: data as any,
            headers
        });

        return extractContent(response);
    };
}

function contentIs(headers: Headers, type: string): boolean {
    return headers.get('content-type')?.includes(type) ?? false;
}

export function defaultHeaders(headers: Headers, contentType = true) {
    if (!headers.has('accept')) {
        headers.set('accept', 'application/json');
    }
    if (contentType && !headers.has('content-type')) {
        headers.set('content-type', 'application/json');
    }
}

function checkStatus(response: Response): boolean {
    return !!(response?.status && response.status >= 200 && response.status < 300);
}

export const errorProcessing = (response: any) => {
    throw response;
};

async function extractContent(response: Response): Promise<any> {
    const isSuccess = checkStatus(response);
    const isJson = contentIs(response.headers, 'application/json');
    const content = isJson ? await response.json() : await response.text();

    if (isSuccess) {
        return content;
    }
    errorProcessing(content);
}

function makeRequest({
    path,
    method,
    body,
    headers,
    ignoreContentType
}: Request): Promise<Response> {
    let query = '';

    if (method === METHODS.GET && body) {
        query = queryToString(body as any);
    }
    const processedHeaders = new Headers(headers);

    defaultHeaders(processedHeaders, !ignoreContentType);
    const data =
        contentIs(processedHeaders, 'application/json') && !(body instanceof FormData) && body
            ? JSON.stringify(body)
            : body;

    return fetch(path + query, {
        method: method,
        headers: processedHeaders,
        body: data,
        credentials: 'include'
    });
}
