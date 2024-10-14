import { IoIosArrowDown } from "react-icons/io";

export const Filter = () => {
  return (
    <div className=" shadow-md flex flex-col overflow-scroll gap-3 my-responsive w-full">
      {[...Array(8)].map((_, index) => (
        <div key={index} className=" flex flex-col gap-1">
          <p className="text-gray-50 font-semibold ">Filter Title</p>
          {[...Array(4)].map((_, index) => (
            <p key={index} className="flex items-center gap-2 ml-2">
              <input
                type="checkbox"
                defaultChecked={false}
                className="checkbox checkbox-xs md:checkbox-sm rounded border-gray-400 [--chkbg:theme(colors.gray.200)] [--chkfg:blue] checked:border-indigo-800"
              />
              <span className=" text-gray-100 text-xs md:text-base ">
                Sub Title
              </span>
            </p>
          ))}
          <p className="relative w-max flex items-end gap-1 ml-2">
            <span className=" text-gray-600 text-xs md:text-sm w-fit">
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
  );
};
