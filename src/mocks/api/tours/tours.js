import { http, HttpResponse } from "msw";
import { tourData } from "./tourData";

export const tours = http.get("/api/tours", () => HttpResponse.json(tourData, { status: 200 }))