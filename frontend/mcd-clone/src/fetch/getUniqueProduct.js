export async function getUniqueProduct(product_id) {
    const res = await fetch(`http://127.0.0.1:8080/api/v1/shop/product/${product_id}/`);
    if(!res.ok){
        console.log(res)
        throw new Error("Помилка отримання даних");
    }
    return await res.json()
}
