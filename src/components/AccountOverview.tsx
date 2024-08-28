import React from "react";
import { ProfileOverview } from "./ProfileOverview";
import { QuickActions } from "./QuickActions";
import { PersonalInformation } from "./PersonalInformation";
import { PaymentMethods } from "./PaymentMethods";
import { AddressBook } from "./AddressBook";
import { AccountSecurity } from "./AccountSecurity";

export const AccountOverview: React.FC = () => {
  return (
    // <div className="container mx-auto p-6">
    <div className=" mx-auto p-6">
      <ProfileOverview />
      <QuickActions />
      <PersonalInformation />
      <PaymentMethods />
      <AddressBook />
      <AccountSecurity />
    </div>
  );
};
