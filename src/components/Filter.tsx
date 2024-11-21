// import { IoIosArrowDown } from "react-icons/io";
import { isFilter } from "../features/header/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductData } from "../types/ProductTypes";
import { useEffect, useState } from "react";
import {
  filterStoreValue,
  resetFilterValue,
} from "../features/products/productFilterSlice";

export const Filter = ({ data }: ProductData) => {
  // Selector for current Store Filter
  const MyCurrentStoreFilter = useSelector(
    (state: any) => state.productFilter.filterStoreKey
  );

  // console.log(MyCurrentStoreFilter);

  const dispatch = useDispatch();

  //Store Filter type
  interface StoreType {
    name: string | null;
    id?: number | null;
  }

  //Store Filter State
  const [StoreResult, SetStoreResult] = useState<StoreType[]>([]);

  // Store UseEffect
  useEffect(() => {
    //Filter for Valid Store
    const FilterData = data.filter((val: any) => val.store_name !== null);

    // Map Store to get NAME and ID
    const MapFilterData = FilterData.map((val) => {
      return { name: val.store_name, id: val.store };
    });

    // Removing Duplicate name and creating new array
    const RemoveDuplicate = [...new Set(MapFilterData)];

    // Setting State for Component Mount
    SetStoreResult(RemoveDuplicate);
  }, [data]);

  // Handler for Selected Store
  const FilterStoreHandler = (filterStoreVal: string) => {
    // console.log(filterStoreVal, event.target.checked);
    // console.log(filterStoreVal);
    dispatch(filterStoreValue(filterStoreVal));
  };

  // Handler to Reset
  const ResetHandler = () => {
    dispatch(resetFilterValue());
    // console.log("reset working");
    // if (MyCurrentStoreFilter.length > 0) {
    //   // window.location.href = window.location.href;
    // }
  };

  // Handler to close filter screen on mobile.
  // Using redux state to configure
  const FilterHandler = () => {
    dispatch(isFilter(false));
  };

  return (
    <div className="lg:bg-white shadow-md flex flex-col overflow-auto gap-3 pb-28 lg:pb-4 my-responsive w-full">
      <div
        onClick={() => FilterHandler()}
        className="lg:hidden cursor-pointer z-20 fixed left-0 w-full overflow-y-visible top-0 "
      >
        <p className=" bg-gray-600 text-gray-50 text-center p-2">Done</p>
      </div>
      <div className="mt-7 lg:m-0  flex flex-col gap-2 ">
        {/* {[...Array(8)].map((_, index) => ( */}
        <div className=" flex flex-col  gap-1">
          <div className="flex justify-between items-center">
            <p className="text-gray-50 lg:text-gray-600 font-semibold ">
              Store
            </p>
            <p
              onClick={ResetHandler}
              className="text-gray-50 lg:text-gray-600 font-semibold text-sm"
            >
              Reset
            </p>
          </div>
          {StoreResult.map((Store, index) => (
            // <p key={index} className="flex items-center gap-2 ml-2">
            //   <input
            //     type="checkbox"
            //     id={`checkbox${Store.id}`}
            //     onChange={(event) => FilterStoreHandler(event, Store.id)}
            //     defaultChecked={false}
            //     className="checkbox checkbox-xs md:checkbox-sm rounded border-gray-400 [--chkbg:theme(colors.gray.200)] [--chkfg:blue] checked:border-indigo-800"
            //   />
            //   <label
            //     htmlFor={`checkbox${Store.id}`}
            //     className=" text-gray-100 lg:text-gray-500 text-xs md:text-base "
            //   >
            //     {Store.name}
            //   </label>
            // </p>
            <div
              onClick={() => FilterStoreHandler(`store=${Store.id}`)}
              key={index}
              className="form-control ml-2"
            >
              <label className="label flex justify-normal gap-2 m-0 p-0 cursor-pointer">
                <input
                  type="radio"
                  name="radio-filter-store"
                  className="radio radio-sm border-gray-200 lg:border-gray-600 checked:bg-gray-500"
                  defaultChecked={
                    MyCurrentStoreFilter === `store=${Store.id}` ? true : false
                  }
                />
                <span className="label-text text-gray-100 lg:text-gray-500">
                  {Store.name}
                </span>
              </label>
            </div>
          ))}
          {/* <p className="relative w-max flex items-end gap-1 ml-2">
            <span className=" text-gray-100 lg:text-gray-600 text-xs md:text-sm w-fit">
              More
            </span>
            <IoIosArrowDown
              className="batch-arrow absolute -right-4 bottom-1"
              size={10}
            />
          </p> */}
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};
