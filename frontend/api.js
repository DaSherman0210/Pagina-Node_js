const urlGetCat= "http://localhost:5000/api/categorias";

//getAll categories

export const categorias =async ()=>{
    try {
        const data=await fetch (`${urlGetCat}`);
        const result=data.json();
        return result;

    } catch (error) {
        console.log(error);
    }
}



