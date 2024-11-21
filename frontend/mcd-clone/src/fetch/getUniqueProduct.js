export async function getUniqueProduct(product_id) {
    const res = await fetch(`http://localhost:8000/api/v1/product/${product_id}/`);
    if(!res.ok){
        throw new Error("Помилка отримання даних");
    }
    return await res.json()
}
