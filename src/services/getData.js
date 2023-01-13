export async function getData(url){

    try {
        const res = await fetch(url);

        if(!res.ok) 
            throw{
                error: true,
                statusCode: res.status,
                statusText: res.statusText || "Ocurrió un error" 
            }

        const data = await res.json();

        return data;
    } catch (error) {
        return error
    }

}

