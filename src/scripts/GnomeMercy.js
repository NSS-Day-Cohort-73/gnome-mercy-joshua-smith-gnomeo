/*
  Responsibility
    Generate the entire HTML string template for 
    Gnome Mercy by using all other HTML generation
    components.
*/
import { RequestForm } from "./RequestForm.js"
import { setIngredients } from "./Ingredients.js"
import { Crafters } from "./Crafters.js"
import { Completions } from "./Completions.js"

export const GnomeMercy = async () => {
    
    const requestFormHTML = RequestForm()
    const ingredientsHTML = await setIngredients()
    const craftersHTML = await Crafters()
    const completionsHTML = await Completions()

    return `
        <article>
            ${requestFormHTML}
        </article>
        <article>
            <section>
                <div>
                    <h4>Craft Requests</h4>
                    <DropDown>--Choose A Request--</DropDown>
                </div>
                <div>
                    <h4>Crafters</h4>
                    ${craftersHTML}
                </div>
            </section>
            <section>
                <h4>Crafting Ingredients</h4>
                ${ingredientsHTML}
            </section>
        </article>
        <article>
            <section>
                <button>Finish</button>
            </section>
        </article>
        <article>
            <section>
                <h4>Completed Potions and Elixirs</h4>
                ${completionsHTML}
            </section>
        </article>
    `
}