import http from "@utils/http";

export const home_api=()=>http.get("/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D");

export const home_apis=()=>http.get("/api/app/acts?version=20.0.0&source=H");

export const garden_api=(aTId=130)=>http.get("/client/v1/goods/newactivityTemplate",{aTId});