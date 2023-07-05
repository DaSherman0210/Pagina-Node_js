const urlGetCliDem = "http://localhost:5000/api/clientesdemo";

export const clienteDem = async () => {
    try {
        const clienteDem = await fetch(urlGetCliDem);
        const data = clienteDem.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}