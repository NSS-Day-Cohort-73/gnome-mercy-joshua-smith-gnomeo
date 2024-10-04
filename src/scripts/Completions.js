/*
  Responsibility
    Generate the HTML for all completed potions and elixirs
*/


export const Completions = async () => {
    const response = await fetch ("http://localhost:8088/completions")
    const completions = await response.json()

    let completionsHTML = ""
    const completionsStringArray = completions.map(
        (completion) => {
            
            return `<section class="completion">
                <div>
                    Completion #${completion.id}
                </div>
            </section>`
        }
    )

    return completionsHTML
}