import { Response } from "express-serve-static-core";

export type ApiResponse<Body = never, Status extends number = number> = Response<Body, null, Status>;
