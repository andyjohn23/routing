import friedChicken from "./assets/chicken.jpg";
import friedRice from "./assets/rice.webp";
import chips from "./assets/chips.jpg";

export const recipes = [
    {
        id: 1,
        recipeName: "Fried chicken",
        ingredents: ["chicken", "oil", "heat", "onions", "tomatoes"],
        recipeImage: friedChicken
    },
    {
        id: 2,
        recipeName: "Fried rice",
        ingredents: ["rice", "oil", "heat", "onions", "tomatoes"],
        recipeImage: friedRice
    },
    {
        id: 3,
        recipeName: "Chips",
        ingredents: ["chips", "oil", "heat", "seasoning"],
        recipeImage: chips
    }
]