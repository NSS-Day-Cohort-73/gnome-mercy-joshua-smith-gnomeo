/*
  Responsibility
    Generate the HTML for the complete requests button,
    and POST a new item to the API when clicked.
*/
import { saveFullCompletion } from './dataAccess.js'

const handleFullCompletion = (clickEvent) => {
    if (clickEvent.target.id === "fullCompletion")
        saveFullCompletion()
}

export const completionGenerator = () => {
    document.addEventListener("click", handleFullCompletion)

    return "<div><button id='fullCompletion'>Finish</button></div>"
}