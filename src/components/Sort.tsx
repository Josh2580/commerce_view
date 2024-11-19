import { isSort } from "../features/header/headerSlice";
import { useDispatch } from "react-redux";

export const Sort = () => {
  const dispatch = useDispatch();

  const SortHandler = () => {
    dispatch(isSort(false));
  };

  return (
    <div className="lg:white  shadow-md flex flex-col overflow-auto gap-3 my-responsive w-full">
      <div
        onClick={() => SortHandler()}
        className="lg:hidden cursor-pointer z-20 fixed left-0 w-full overflow-y-visible top-0 "
      >
        <p className=" bg-gray-600 text-gray-50 text-center p-2">Done</p>
      </div>
      <div className="mt-7 lg:m-0 ">
        {[...Array(1)].map((_, index) => (
          <div key={index} className=" flex flex-col gap-2">
            <p className="text-gray-50 lg:text-gray-600 font-semibold ">
              Sort By:
            </p>
            {/* {[...Array(4)].map((_, index) => ( */}
            <div key={index} className="form-control ml-2">
              <label className="label flex justify-normal gap-2 m-0 p-0 cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio radio-sm border-gray-200 lg:border-gray-600 checked:bg-gray-500"
                  defaultChecked
                />
                <span className="label-text text-gray-100 lg:text-gray-500">
                  Popular Deals
                </span>
              </label>
            </div>
            <div key={index} className="form-control ml-2">
              <label className="label flex justify-normal gap-2 m-0 p-0 cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio radio-sm border-gray-200 lg:border-gray-600 checked:bg-gray-500"
                  defaultChecked
                />
                <span className="label-text text-gray-100 lg:text-gray-500">
                  New Deals
                </span>
              </label>
            </div>
            <div key={index} className="form-control ml-2">
              <label className="label flex justify-normal gap-2 m-0 p-0 cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio radio-sm border-gray-200 lg:border-gray-600 checked:bg-gray-500"
                  defaultChecked
                />
                <span className="label-text text-gray-100 lg:text-gray-500">
                  Price: Low to High
                </span>
              </label>
            </div>
            <div key={index} className="form-control ml-2">
              <label className="label flex justify-normal gap-2 m-0 p-0 cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio radio-sm border-gray-200 lg:border-gray-600 checked:bg-gray-500"
                  defaultChecked
                />
                <span className="label-text text-gray-100 lg:text-gray-500">
                  Price: High to Low
                </span>
              </label>
            </div>
            {/* ))} */}
          </div>
        ))}
      </div>
    </div>
  );
};
