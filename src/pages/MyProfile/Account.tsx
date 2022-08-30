import React from "react";
import { AccountForm } from "../../components/MyProfile/Account/AccountForm";
import { useAccountFormik } from "../../lib/hooks/useAccountFormik";

const Account = () => {
  const formik = useAccountFormik({
    onSubmit(values) {
      console.info("Username:", values.username);
      console.info("Email:", values.email);
      console.info("Address:", values.address);
    },
  });

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <AccountForm formik={formik} />
    </div>
  );
};

export default Account;
