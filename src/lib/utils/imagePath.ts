const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const getImagePath = (path: string): string => `${basePath}${path}`;
