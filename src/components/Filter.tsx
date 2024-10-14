import { IoIosArrowDown } from "react-icons/io";
import { isFilter } from "../features/header/headerSlice";
import { useDispatch } from "react-redux";

export const Filter = () => {
  const dispatch = useDispatch();

  const FilterHandler = () => {
    dispatch(isFilter(false));
  };

  return (
    <div className="lg:bg-white z- shadow-md flex flex-col overflow-auto gap-3 my-responsive w-full">
      <div
        onClick={() => FilterHandler()}
        className="lg:hidden cursor-pointer z-20 fixed left-0 w-11/12 overflow-y-visible top-3 "
      >
        <p className=" bg-gray-600 text-gray-50 text-center p-2">Done</p>
      </div>
      <div className="mt-7">
        {[...Array(8)].map((_, index) => (
          <div key={index} className=" flex flex-col gap-1">
            <p className="text-gray-50 lg:text-gray-600 font-semibold ">
              Filter Title
            </p>
            {[...Array(4)].map((_, index) => (
              <p key={index} className="flex items-center gap-2 ml-2">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  className="checkbox checkbox-xs md:checkbox-sm rounded border-gray-400 [--chkbg:theme(colors.gray.200)] [--chkfg:blue] checked:border-indigo-800"
                />
                <span className=" text-gray-100 lg:text-gray-500 text-xs md:text-base ">
                  Sub Title
                </span>
              </p>
            ))}
            <p className="relative w-max flex items-end gap-1 ml-2">
              <span className=" text-gray-100 lg:text-gray-600 text-xs md:text-sm w-fit">
                More
              </span>
              <IoIosArrowDown
                className="batch-arrow absolute -right-4 bottom-1"
                size={10}
              />
            </p>
          </div>
        ))}
      </div>
      good one
      <br />
    </div>
  );
};
