export async function getProductsByCategory(category_id) {
    const res = await fetch(`http://localhost:8080/api/v1/products/category/${category_id}/`);
    console.log("In this method")
    if(!res.ok){
        throw new Error("Помилка отримання даних");
    }
    return await res.json()
}
