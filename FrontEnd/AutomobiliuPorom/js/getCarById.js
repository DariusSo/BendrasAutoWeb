async function getCarById(id) {
    try {
        const response = await fetch('http://127.0.0.1:8080/getCarById?id=' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
    
        const carById = await response.json();
        return carById;
        
    } catch (error) {
      console.log(error);
    }
}