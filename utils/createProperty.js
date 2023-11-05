export const createProperty =async(property)=>{
    const res = await fetch("https://dd-property-server.vercel.app/property/create",{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(property)
    })
    const data = await res.json()
    return data;
}