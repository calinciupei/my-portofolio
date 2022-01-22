export default class HttpException extends Error {
    name: string;
    message: string;
    error: string | null;
    constructor(name: string, message: string, error?: string);
}
