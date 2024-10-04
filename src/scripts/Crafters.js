/*
  Responsibility
    Generate HTML for the dropdown of crafters. When one is
    selected, update transient state.
*/
import { setCrafterChoice } from './dataAccess.js'

const handleCrafterChoice = (changeEvent) => {
    if (changeEvent.target.name === "crafter") {
        const chosenCrafter = changeEvent.target.value
        setCrafterChoice(parseInt(chosenCrafter))
    }
}

export const Crafters = async () => {
    const response = await fetch ("http://localhost:8088/crafters")
    const crafters = await response.json()

    document.addEventListener("change", handleCrafterChoice)

    let craftersHTML = `<select id="crafter">
        <option value="0">--Choose A Crafter--</option>
    `
    const craftersStringArray = crafters.map(
        (crafter) => {
            return `<option value="${crafter.id}">${crafter.name}</option>`
        }
    )
    craftersHTML += craftersStringArray.join("")
    craftersHTML += "</select>"

    return craftersHTML
};
