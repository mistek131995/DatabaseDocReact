export interface IUseFetch{
    url: string,
    method : method,
    body?: Object,
    doAfterFetch: null | (() => void)
}

export enum method{
    get = "GET",
    post = "POST"
}