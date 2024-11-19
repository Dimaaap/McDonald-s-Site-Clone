export async function getProducts() {
    const res = await fetch("http://localhost:8000/api/v1/products/all/");
    if(!res.ok){
        throw new Error("Помилка отримання даних");
    }
    return await res.json()
}