import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="p-4 w-3/12 ">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt=""
              className="w-full md:h-[100px] rounded-lg"
            />
          </div>
          <div className="absolute md:ml-96 md:mt-24">
            <button
              className="px-4 md:px-8 py-1 mt-20 md:mt-0 ml-[360px] md:ml-44 rounded-lg bg-white text-green-500 font-bold shadow-lg m-auto"
              onClick={() => handleAddItem(item)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
