export async function getCitiesWithDelivery() {
    const res = await fetch(`http://localhost:8000/api/v1/cities-with-delivery/all/`);
    if(!res.ok){
        throw new Error("Помилка отримання даних");
    }
    return await res.json()
}
