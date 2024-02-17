
const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const getFavourites = async (user_id:string) => {
    try {
        const response = await fetch(`${apiUrl}/favorites/user/${user_id}`, {
            method: "GET"
        });
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        
        const favourites = await response.json();
        return favourites;
    } catch(e){
        console.log(e)
    }
}

export const postFavourites =async (property_id:string, user_id:string) => {
    try {
        const response = await fetch(`${apiUrl}/favorites/?property_id=${property_id}&user_id=${user_id}`, {
            method: "POST"
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
            
        const favourites = await response.json();
        return favourites;
    } catch(e){
        console.log(e)
    }
}