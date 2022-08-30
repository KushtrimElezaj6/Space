import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const PrivacySchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(6, "Your password must be minimum 6 characters long")
    .required("Password is required"),
  newPassword: Yup.string()
    .min(6, "Your new password must be minimum 6 characters long")
    .required("New password is required"),
  confirmationPassword: Yup.string().when("newPassword", {
    is: (val: string) => val && val.length > 0,
    then: Yup.string().oneOf(
      [Yup.ref("newPassword")],
      "New Password and Confirm password don't match"
    ),
  }),
});

export interface PrivacyFields {
  currentPassword: string;
  newPassword: string;
  confirmationPassword: string;
}

export interface DefaultFormikOptions<Fields> {
  onSubmit: (values: Fields, formikHelpers: FormikHelpers<Fields>) => void;
}

export const usePrivacyFormik = (
  props: DefaultFormikOptions<PrivacyFields>
) => {
  return useFormik<PrivacyFields>({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmationPassword: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: PrivacySchema,
    onSubmit: props.onSubmit,
  });
};

export type PrivacyFormik = ReturnType<typeof usePrivacyFormik>;
