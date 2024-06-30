// An array of objects that represent the routes of the application. Each object has the following properties:
export const publicRoutes = ["/","/settings"];
export const authRoutes = ["/auth/login", "/auth/register"];
export const protectedRoutes = ["/(protected)/settings"];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
