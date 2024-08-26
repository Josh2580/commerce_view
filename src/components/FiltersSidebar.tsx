import React from "react";
// import { Checkbox, Range } from "daisyui";

export const FiltersSidebar: React.FC = () => {
  return (
    <aside className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Filters</h3>

      <div className="mb-6">
        <h4 className="text-lg font-medium mb-2">Price Range</h4>
        <input
          type="range"
          min={0}
          max="100"
          value="40"
          className="range range-primary"
        />
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium mb-2">Brand</h4>
        <div className="space-y-2">
          {/* <Checkbox label="Apple" />
          <Checkbox label="Samsung" />
          <Checkbox label="Huawei" />
          <Checkbox label="Xiaomi" /> */}
          <label className="label cursor-pointer">
            <span className="label-text">Apple</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Samsung</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Huawei</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Xiaomi</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium mb-2">Customer Rating</h4>
        <div className="space-y-2">
          {/* <Checkbox label="4 stars & above" />
          <Checkbox label="3 stars & above" />
          <Checkbox label="2 stars & above" />
          <Checkbox label="1 star & above" /> */}
          <label className="label cursor-pointer">
            <span className="label-text">4 stars & above</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">3 stars & above</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">2 stars & above</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">1 stars & above</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
      </div>
    </aside>
  );
};
