export async function getShopProducts() {
    const res = await fetch("http://localhost:8080/api/v1/shop/all-products");
    if(!res.ok){
        throw new Error("Помилка отримання даних");
    }
    return await res.json()
}