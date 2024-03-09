import ShimmerMenu from "./ShimmerMenu.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js"
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams(); 

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    if(resInfo === null) return <ShimmerMenu />;
    

    const {name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


    return (
        <div className="text-center">
            <h1 className="my-6 font-bold text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category, index)=>(
                // Controlled component 
            <RestaurantCategory 
            showItem={index === showIndex ? true : false} 
            key={category.card.card.title} 
            data={category?.card?.card} 
            setShowIndex={()=>setShowIndex(index)}
            />))}
        </div>
    )
}

export default RestaurantMenu;