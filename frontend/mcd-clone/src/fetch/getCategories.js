export async function getMenuCategories() {
    const res = await fetch("http://localhost:8080/api/v1/menu-categories/all/");
    if(!res.ok){
        throw new Error("Помилка отримання даних");
    }
    return await res.json()
}
