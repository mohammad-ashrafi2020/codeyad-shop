export const isProduction = process.env.NODE_ENV == "production";

// export const BASE_URL = isProduction
//   ? "http://shop-api.codeyad-project.ir/api"
//   : "http://localhost:3000/api";

export const BASE_URL = "https://shop-api.codeyad-project.ir/api";
export const BASE_DOMAIN_URL = isProduction
  ? "https://shop-api.codeyad-project.ir/api"
  : "http://localhost:3000";
