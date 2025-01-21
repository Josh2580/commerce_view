import React, { useState } from "react";
import classNames from "classnames";

// Components
type ProfileInfoProps = {
  label: string;
  value: string | React.ReactNode;
};

const ProfileInfo: React.FC<ProfileInfoProps> = ({ label, value }) => (
  <div className="flex justify-between items-center border-b py-3">
    <span className="text-sm font-medium text-gray-600">{label}</span>
    <span className="text-sm text-gray-800">{value}</span>
  </div>
);

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="card bg-white shadow-sm rounded-lg p-5 mb-6">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
    <div>{children}</div>
  </div>
);

// Edit Profile Form
type EditProfileFormProps = {
  userData: UserData;
  onSubmit: (updatedData: UserData) => void;
  onCancel: () => void;
};

const EditProfileForm: React.FC<EditProfileFormProps> = ({
  userData,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState(userData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-600"
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-600"
          >
            Address
          </label>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </div>
    </form>
  );
};

// Profile Page
type UserData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  profilePicture: string;
  stores: any;
};

export const ProfilePage: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 (123) 456-7890",
    address: "123 Elm Street, Springfield, USA",
    profilePicture: "https://via.placeholder.com/100?text=Profile",
    stores: [
      { name: "John's Store", status: "Active" },
      { name: "Doe's Emporium", status: "Pending" },
    ],
  });

  const handleEditSubmit = (updatedData: UserData) => {
    setUserData(updatedData);
    setEditMode(false);
  };

  return (
    <div className="container mx-auto p-4 lg:p-8">
      {editMode ? (
        <Section title="Edit Profile">
          <EditProfileForm
            userData={userData}
            onSubmit={handleEditSubmit}
            onCancel={() => setEditMode(false)}
          />
        </Section>
      ) : (
        <>
          {/* Profile Header */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-sm rounded-lg p-6 mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-md mb-4 lg:mb-0 lg:mr-6">
              <img
                src={userData.profilePicture}
                alt={`${userData.name}'s Profile`}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {userData.name}
              </h2>
              <p className="text-sm text-gray-600">{userData.email}</p>
              <p className="text-sm text-gray-600">{userData.phone}</p>
            </div>
            <button
              onClick={() => setEditMode(true)}
              className="btn btn-primary ml-auto mt-4 lg:mt-0"
            >
              Edit Profile
            </button>
          </div>

          {/* Profile Details Section */}
          <Section title="Personal Information">
            <ProfileInfo label="Full Name" value={userData.name} />
            <ProfileInfo label="Email" value={userData.email} />
            <ProfileInfo label="Phone" value={userData.phone} />
            <ProfileInfo label="Address" value={userData.address} />
          </Section>
        </>
      )}
      {/* Stores Section */}
      <Section title="My Stores">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {userData.stores.map((store: any, index: any) => (
            <div
              key={index}
              className={classNames(
                "p-4 border rounded-lg",
                store.status === "Active"
                  ? "bg-green-50 border-green-300"
                  : "bg-yellow-50 border-yellow-300"
              )}
            >
              <h4 className="text-sm font-bold text-gray-800 mb-2">
                {store.name}
              </h4>
              <span
                className={classNames(
                  "text-xs font-semibold px-2 py-1 rounded-full",
                  store.status === "Active"
                    ? "bg-green-200 text-green-800"
                    : "bg-yellow-200 text-yellow-800"
                )}
              >
                {store.status}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Account Actions */}
      <Section title="Actions">
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-secondary">Manage Stores</button>
          <button className="btn btn-error">Delete Account</button>
        </div>
      </Section>
    </div>
  );
};

// export default ProfilePage;
