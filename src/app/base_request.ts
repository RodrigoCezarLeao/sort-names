const API_URL = "https://api-sa-east-1.hygraph.com/v2/cledd0zbo4llj01tbh7gh6ygz/master";
const GRAPH_CMS_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NzcwMjE1NjksImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xlZGQwemJvNGxsajAxdGJoN2doNnlnei9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZDE5NjNlNzEtNDRjNy00ODMxLWE4MDItMWYxOTQ0MjkyMjgxIiwianRpIjoiY2xlZXZjY3l5Njk2NzAxdWZmamlvOHE1MSJ9.yqgh1pjH4Cuk9e8ttfINTLWI9x__k7diSYJasE1ehM33gioBupTKF1IS9Lli04eWcPpTy4Qx4vcDOBggsOVNGIWWgIoK1i39DWjdtI-aHUgPVOstUTsNJ6nb1FRdhNZYEO_TwjV7Oa83S1OqeMHX-V0v38-2b9pmipWlGm2IAi5tEg-aRCowfJ65ruSHs_zIB7IPf71Oh_we6S4rtEDT_qYAEt2_3VqntvsMtsX2XgdWa1tpB72XENb8RdBmPbM35FY99-kf30aE01Q4ffI10rVNREq-IvViwHr0zZdOh8-ZJrCjsYPjs33zWU0eeQCTAtU5FbZ53_wQtlFfV54rta3lAQhE7tFWIKclbewB-RaDGQzLBXllfzTcvTyNOMf5ZTYpfb6FeCuZidczIFnvkHhVf2-ou-tB5oWau1P47N490s9DWZNDDPJg-VPnrRcwLumpnhuHjxMnnxvZGUxUH3lj_K1Y_vMogkWwB5KzPVXU76T5AMtSAKO0kFQQxzHg1WxHZcGJxpyLsZqCIrwv1xW5db3AYUVpuTYjBS-p8OEfNNzMXXsjlIuKPWrE6c0ACC36oaIQX89LmapoOtaLlpOM6OMKRkKToSOLzlmEmS2DZbJUYXV_A-HqZwWFfJwWj6t5orLWRwb3SOO96uX85FHtLQncZMimyEg3OIbYvw4";

export const baseGraphCMSFetch = async (mutation: {query: string}) => {
    var data = await fetch(API_URL, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "authorization": `Bearer ${GRAPH_CMS_TOKEN}`
        },
        body: JSON.stringify(mutation)
    }).then(resp => resp.json());

    return data;
}