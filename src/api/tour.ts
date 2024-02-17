const apiUrl = import.meta.env.VITE_API_BASE_URL;
export const bookTour = async (data:any) => {
    try {
        const response = await fetch(`${apiUrl}/tour_request/`,{
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

export const getBookings = async () => {
    try {
        const response = await fetch(`${apiUrl}/tour_request/`,{
            method:"GET",
        })
        if (response.ok){
            const data = await response.json();
            return data;
        }
        else {
            const errorData = await response.json()
            console.log(errorData);
        }
    } catch (error) {
        console.log(error);
    }
}