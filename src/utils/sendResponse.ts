export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: Record<string, unknown>;
  data?: T;
}

// export const sendResponse = (data: any) => {
//   const responseData: any = {
//     statusCode: data.statusCode,
//     success: data.success,
//     message: data.message || null,
//     meta: data.meta || null || undefined,
//     data: data.data || null,
//   };
//   return responseData;
// };

export const sendResponse = <T>(data: ApiResponse<T>): ApiResponse<T> => {
  return {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message ?? null,
    meta: data.meta ?? undefined,
    data: data.data ?? undefined,
  };
};
