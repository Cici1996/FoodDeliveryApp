import { icons } from "../../../constants"

const initialCurrentLocation = {
    streetName: "Kuching",
    gps: {
        latitude: 1.5496614931250685,
        longitude: 110.36381866919922
    }
}

const categoryData = [
    {
        id: 1,
        name: "Rice",
        icon: icons.rice_bowl,
    },
    {
        id: 2,
        name: "Noodles",
        icon: icons.rice_bowl,
    },
    {
        id: 3,
        name: "Hot Dogs",
        icon: icons.rice_bowl,
    },
    {
        id: 4,
        name: "Salads",
        icon: icons.rice_bowl,
    },
    {
        id: 5,
        name: "Burgers",
        icon: icons.rice_bowl,
    },
    {
        id: 6,
        name: "Pizza",
        icon: icons.rice_bowl,
    },
    {
        id: 7,
        name: "Snacks",
        icon: icons.rice_bowl,
    },
    {
        id: 8,
        name: "Sushi",
        icon: icons.rice_bowl,
    },
    {
        id: 9,
        name: "Desserts",
        icon: icons.rice_bowl,
    },
    {
        id: 10,
        name: "Drinks",
        icon: icons.rice_bowl,
    },

]

export {
    initialCurrentLocation,
    categoryData
}