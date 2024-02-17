const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const deleteUser = async (id:string) => {
    try {
        const response = await fetch(`${apiUrl}/user/${id}`, {
            method: "DELETE",
            headers: {'content-type': ' application/json'}

        });


        if (!response.ok) {
            console.log('error')
            throw new Error("Network response was not ok");
            
        }

        const deletedUser = await response.json();
        console.log(deletedUser);
        console.log({response});
        return deletedUser;
    } catch(e){
        console.log('within catch')
        console.log(e)
    }

}

