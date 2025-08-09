const dev = import.meta.env.DEV;

export const LOG_LEVEL = dev ? "debug" : "info";

export const SERVER_URL = "http://localhost:8000";
