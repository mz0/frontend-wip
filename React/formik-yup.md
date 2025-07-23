## Formik and Yup

Formik helps you to create forms in React. Yup is used to validate the form data.

Formik comes with built-in support for schema based form-level validation through Yup.

The most important component from Formik is the useFormik hook. It needs a configuration object as an argument.
```js
import * as Yup from 'yup';
import { useFormik } from 'formik';

// The below code would go inside a React component
const {
  values,
  errors,
  touched,
  getFieldProps,
  handleSubmit,
} = useFormik({
  intialValues: {
    comment: "",
  },
  onSubmit: (values) => {
    // Handle form submission
  },
  validationSchema: Yup.object({
    comment: Yup.string().required("Required"),
  }),
});
```

* `errors`: An object with the current errors of the form fields. If validation fails for the "comment" field, which would be the case if the input has been touched and its value is empty, according to the validation schema, you could access the message error via errors.comment. In that particular case, the message error would be "Required". If the field is valid though, the value will be undefined.

* `touched`: An object with the current touched state of the form fields. You can use this to determine if a field has been touched (focused at least once) or not. In that example, you could access the comment state via `touched.comment`. If the field has been touched, the value will be true, otherwise it will be false.

* `getFieldProps`: A function that takes a field name as an argument and returns an object with the following properties:
  *  `name`: The field name.
  *  `value`: The current value of the field.
  *  `onChange`: The handleChange function.
  *  `onBlur`: A function to call when the field is blurred. Updates the corresponding field in the touched object.

The way you would use this function is by spreading the returned object into the input element. For example, if you had an input element with the name "comment", you would do something like this:
```
<input {...getFieldProps("comment")} />
```
* `handleSubmit`: A function to call when the form is submitted. It takes an event as an argument and calls the `onSubmit` function with the `values` object as an argument. You should hook this function to the form `onSubmit` event.
