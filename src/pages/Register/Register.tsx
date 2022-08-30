import { RegisterForm } from "../../components/Register/RegisterForm";
import { useRegisterFormik } from "../../lib/hooks/useRegisterFormik";

export const Register = () => {
  const formik = useRegisterFormik({
    onSubmit(values) {
      console.info("Username:", values.username);
      console.info("Email:", values.email);
      console.info("Age:", values.age);
      console.info("Gender:", values.gender);
      console.info("Preferences:", values.preferences);
    },
  });

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <RegisterForm formik={formik} />
    </div>
  );
};
