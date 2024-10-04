/*
  Responsibility
    Generate HTML for checkboxes for each ingredient and
    store each choice in transient state.
*/

import { setIngredientChoice } from './dataAccess.js'

const handleIngredientChange = (changeEvent) => {
    if (changeEvent.target.name === "ingredient") {
        const chosenIngredient = changeEvent.target.value
        setIngredientChoice(parseInt(chosenIngredient))
    }
}

export const setIngredients = async () => {
    const response = await fetch("http://localhost:8088/ingredients")
    const ingredients = await response.json()

    document.addEventListener("change", handleIngredientChange)

    let ingredientsHTML = ""
    const ingredientsStringArray = ingredients.map(
        (ingredient) => {
            return `<div>
                <input type="checkbox" value="${ingredient.id}" name="ingredient" /> ${ingredient.name}
            </div>`
        }
    )
    ingredientsHTML += ingredientsStringArray.join("")
    return ingredientsHTML
}
