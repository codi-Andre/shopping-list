import { Product } from "./list"

export function formatUserInput(
  userInput: Record<string, string>
): Partial<Product> {
  const regexSanitize = /[!@#%&;=:<>~\*\+\*\?\^\$\\\[\]\{\}\(\)\|\/]+/gm
  const newProduct: Record<string, string | number> = {}

  for (const key in userInput) {
    userInput[key] = userInput[key].replace(regexSanitize, "")

    if (key === "quantity") {
      newProduct[key] = parseInt(userInput[key], 10)
    } else if (key === "price") {
      newProduct[key] = parseFloat(userInput[key])
    } else {
      newProduct[key] = userInput[key]
    }
  }

  return newProduct
}
