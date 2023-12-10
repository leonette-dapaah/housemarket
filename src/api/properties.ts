const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchProperties = async () => {
    try {
        console.log(`${apiUrl}/property`);
        const response = await fetch(`${apiUrl}/property`, {
            method: "GET"
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        
        const properties = await response.json();
        console.log(properties);
        return properties;
    } catch(e){
        console.log(e)
    }
}