import React, {useState, useEffect} from "react";
import Image from "next/image";
import { categories } from "../../data";
import data from "../../data";
import CategoryItem from "./CategoryItem";

const FilterCategories = () => {
    const [item, setItem] = useState({name: "all"});
    const [list, setList] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
       if(list.name === "All") {  
           setList(data);
       }
       else {
           const newList = data.filter((element) => {
               return list.category === element.name;
           })

           return setList(newList)
       }
    }, [item]);

    const handleClick = (e, index) => {
      setItem(e.target.textContent);
      console.log(e.target.textContent)
    }
  return (
    <div>
      <div className="flex mt-7 mb-10 gap-4 justify-center">
        {categories?.map((item, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              key={index}
              className="text-gray-900 font-semibold hover:bg-gray-900 hover:text-white  py-2 px-3 rounded-xl capitalize cursor-pointer"
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-5">
        {list?.map((item) => {
          return <CategoryItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default FilterCategories;
