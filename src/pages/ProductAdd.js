import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from 'semantic-ui-react'
import AtayTextInput from '../utilities/customFormControls/AtayTextInput'

export default function ProductAdd() {
    const initialValues = {
        productName: "",
        unitPrice: 0
    }

    const schema = Yup.object().shape({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu")
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className="ui form">
                    <AtayTextInput name="productName" placeholder="Ürün adı" />
                    <AtayTextInput name="unitPrice" placeholder="Ürün fiyatı" />
                    <Button color="green" type="submit">Kaydet</Button>
                </Form>
            </Formik>
        </div>
    )
}
