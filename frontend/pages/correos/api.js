const urlCorreos = "http://localhost:5000/api/correos";

export const getCorreo = async () => {
    try {
        const correo = await fetch(urlCorreos);
        const data = correo.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const addCorreos = async (correo) => {
    try {
        await fetch(urlCorreos,{
            method: "POST",
            body: JSON.stringify(correo),
            headers: {
                "Content-Type":"application/json"
            }
        });
        window.location.href= "./correos.html";
    } catch (error) {
        console.log(error);
    }
}

export const deleteCorreo = async (id) => {
    try {
        await fetch(`${urlCorreos}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json"
            }
        });
        window.location.href="./correos.html";
    } catch (error) {
        console.log(error);
    }
}