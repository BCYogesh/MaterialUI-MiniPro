import { useFormik, Formik, Form, Field } from "formik";
import { signUpValidation } from "./signupSchema";

const initialValues = {
    name: '',
    email: '',
    password: '',
    cpassword: ''
}

const FormikForm = () => {

    const { handleBlur, handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpValidation,
        onSubmit: (value) => {
            console.log(value)
        }
    });

    //console.log(formik);

    return (
        <>

            <Formik
                initialValues={initialValues}
                validationSchema={signUpValidation}
            >
                {({ errors }) => (
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <Field type='text' name='name'></Field>
                        {errors.name && <small>{errors.name}</small>}
                        <br />
                        <label htmlFor="email">Email</label>
                        <Field type='email' name='email'></Field>
                        {errors.email && <small>{errors.email}</small>}
                        <br />
                        <label htmlFor="password">Password</label>
                        <Field type='password' name='password'></Field>
                        {errors.password && <small>{errors.password}</small>}
                        <br />
                        <label htmlFor="cpassword">Confirm password</label>
                        <Field type='password' name='cpassword'></Field>
                        {errors.cpassword && <small>{errors.cpassword}</small>}
                        <br />
                        <button type="submit">Submit</button>
                    </Form>
                )}

            </Formik>
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type='text' name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                {errors.name && <small>{errors.name}</small>}
                <br />
                <label htmlFor="email">Email</label>
                <input type='email' name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                {errors.email && <small>{errors.email}</small>}
                <br />
                <label htmlFor="password">Password</label>
                <input type='password' name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                {errors.password && <small>{errors.password}</small>}
                <br />
                <label htmlFor="cpassword">Confirm password</label>
                <input type='password' name="cpassword" onChange={handleChange} onBlur={handleBlur} value={values.cpassword} />
                {errors.cpassword && <small>{errors.cpassword}</small>}
                <br />
                <button type="submit">Submit</button>
            </form> */}


        </>
    )
};


export default FormikForm;