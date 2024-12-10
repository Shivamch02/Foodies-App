import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <button className="font-bold ml-[500px] bg-[#EF4444] px-6 py-2 rounded-md mt-4">
        Looks like you're offline!! Please check your internet connection
      </button>
    );

  // const { loggedInUser, setUserName} = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" body" data-testid="resCard">
      <div className="filter flex justify-center">
        <div className="search m-4 p-4 top-rated">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box search w-44 md:w-96 border border-solid border-black p-2 rounded-lg ml-8 md:ml-0 mr-4 md:mr2"
            value={searchText}
            placeholder="Search for restaurants and food"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 search-btn py-2 rounded-lg font-semibold bg-yellow-400 hover:bg-yellow-500"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="md:px-4 md:py-2 hidden md:rounded-lg md:font-bold md:bg-yellow-400 md:hover:bg-yellow-500"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 3.9
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
        {/* <div className="search m-4 p-4 flex items-center">
          <label htmlFor="">Username</label>
          <input type="text"className="border border-black p-2" 
          onChange={(e)=> setUserName(e.target.value)} value={loggedInUser}/>
        </div> */}
      </div>
      <div className="flex body-card justify-center flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
