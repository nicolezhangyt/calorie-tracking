export async function getAllFoodList() {
   const response = await fetch('/api/foodList');
   return await response.json();
}

export async function addFood(data: {}) {
    const response = await fetch(`api/food`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({food: data})
    })
    return await response.json();
}