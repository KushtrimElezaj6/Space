import React from "react";
import { PrivacyForm } from "../../components/MyProfile/Privacy/PrivacyForm";
import { usePrivacyFormik } from "../../lib/hooks/usePrivacyFormik";

const Privacy = () => {
  const formik = usePrivacyFormik({
    onSubmit(values) {
      console.info("Old password:", values.currentPassword);
      console.info("New password:", values.newPassword);
    },
  });

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <PrivacyForm formik={formik} />
    </div>
  );
};

export default Privacy;
