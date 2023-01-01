import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikLogin = () => {
    const formik = useFormik({
        initialValues: {
            username: " ",
            password: " "
        },
        onSubmit: (value) => {
            console.log(value);

        },
        validationSchema: Yup.object({
            username: Yup.string().required().max(15, "username should not exceed 15 character ")
                .min(3, "minimum of  3 character are required"),
            password: Yup.string().required().max(15, "password should not exceed 15 character ")
                .min(8, "minimum of  8 character are required"),

        })
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='username'>username </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={formik.username}
                    onChange={formik.handleChange}
                />
                {formik.touched.username &&  formik.errors.username ? formik.errors.username : null}

                <label htmlFor='password'>password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formik.password}
                    onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password ? formik.errors.password : null}
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default FormikLogin