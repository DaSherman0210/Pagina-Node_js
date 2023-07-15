const urlGetCliDemo = "http://localhost:5000/api/clientesdemogra";

export const getClientD= async ()=>{
    try {
        const data= await fetch(urlGetCliDemo);
        const result=data.json();
        return result;
    } catch (error) {
        console.log(error.message)
    }
}

