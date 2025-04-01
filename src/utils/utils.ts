import {apiStrapi, apiBackend} from "../services/api.ts";

export async function fetchData(endpoint: string){
    return await apiStrapi.get(endpoint, {
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        return response.data
    })
}

export async function postData(endpoint: string, body:any){
    console.log(body);
    return await apiBackend.post(endpoint, body, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function postDataStrapi(endpoint: string, body:any){
    console.log(body);
    return await apiStrapi.post(endpoint, body, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
