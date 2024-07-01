// An array of objects that represent the routes of the application. Each object has the following properties:
export const publicRoutes = ["/", "/settings", "/auth/new-verification"];
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/new-password",
  "/auth/forgot-password",
];
export const protectedRoutes = ["/settings"];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
