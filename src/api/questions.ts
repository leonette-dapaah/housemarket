const apiUrl = import.meta.env.VITE_API_BASE_URL;
export const askQuestion = async (data:any) => {
    try {
        const response = await fetch(`${apiUrl}/question/`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        })
        if (response.ok){
            console.log('successful')
        }
        else 
            {
                console.log('unsuccessful')
                const errorData = await response.json()
                console.log(errorData);
            }
            return response
    } catch (error) {
        console.log(error);
    }
}