export interface JwtService {
    generateToken(payload: any): Promise<string>;
}