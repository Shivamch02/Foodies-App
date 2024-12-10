import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    // costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className=" card m-2.5 w-80 h-[332px] md:transition bg-white hover:scale-95">
      <img
        className="rounded-2xl w-[304px] h-[212.8px]"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />
      <h3 className="font-semibold mt-1 text-gray-800 pl-2 pt-0.5 text-lg">
        {name.slice(0, 25)}
      </h3>
      <button className="">
        <span className="rating mx-2 px-1 rounded-xl text-white bg-green-600">
          ★
        </span>
        <span className="text-gray-600 font-bold">
          {avgRating} • {sla?.slaString}
        </span>
      </button>
      <h4 className="font-semibold my-0.5 text-gray-600 pl-2">
        {cuisines.join(", ").slice(0, 76) + "..."}
      </h4>

      {/* <h4>{costForTwo}</h4> */}
      {/* <h4 className="pl-2">{sla?.slaString}</h4> */}
    </div>
  );
};

// Higher order component

// input -> restaurantCard (component) -> return (component);

// export const withPromotedLabel = (RestaurantCard) =>{
//   return () =>{
//     return(
//       <div>
//         <label htmlFor="">Promoted</label>
//         <RestaurantCard/>
//       </div>
//     )
//   }
// }

export default RestaurantCard;
