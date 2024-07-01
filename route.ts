// An array of objects that represent the routes of the application. Each object has the following properties:
export const publicRoutes = [
  "/",
  "/settings",
  "/auth/new-verification",
  "/auth/forgot-password",
];
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];
export const protectedRoutes = ["/settings"];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
