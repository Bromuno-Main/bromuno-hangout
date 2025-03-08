import Cookies from "js-cookie";

export default class TokenUtils {
    static getToken(): string | undefined {
        return Cookies.get('bromuno-hangout-token');
    }

    static setToken(token: string): void {
        Cookies.set('bromuno-hangout-token', token, {expires: 7}); // Set token to expire in 7 days
    }

    static removeToken(): void {
        Cookies.remove('bromuno-hangout-token');
    }
}
