import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function AtayTextInput({ ...props }) {
    const [field, meta] = useField(props)
    return (
        <FormField error={meta.touched && !!meta.error}>
            <input {...field} {...props} />
            {meta.touched && !!meta.error ? (
                <Label basic color='red' pointing>{meta.error}</Label>
            ) : null}
        </FormField>
    )
}
