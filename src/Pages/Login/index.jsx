import { ErrorMessage, Field, Form, Formik } from "formik";
import "./login.css";
import * as Yup from "yup";
function Login() {
  const initialValues = {
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().min(2, "Too Short!").required("Required"),
    lastname: Yup.string().min(2, "Too Short!"),
    email: Yup.string().email("Invalid email").required("Required"),
    // number: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[0-9]/, "Password requires a number"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={onSubmit}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
