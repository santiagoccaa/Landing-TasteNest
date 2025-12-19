"use client"

import { Button, Heading } from '@/components/UI'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

type Values = {
    name: string
    imageUrl: string
}

const initialValues = {
    name: "",
    imageUrl: ""
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo Obligatorio').min(3, 'La Categoria debe tener al menos 3 letras'),
})

export function AddCategorie() {

    const handleForm = async (values: Values) => {
        console.log("Valores del formulario", values);
    }

    return (
        <section className="h-fit w-fit bg-white p-6 rounded-2xl shadow">
            <div className='text-center mb-8'>
                <Heading className="mb-4" fs='xl'>Añadir nueva categoría</Heading>
            </div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleForm}>
                <Form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre
                        </label>
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Ej: Postres"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red"
                            autoCompletev="off"
                        />
                    </div>

                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                            Imagen
                        </label>
                        <Field
                            type="file"
                            id="imageUrl"
                            name="imageUrl"
                            accept="image/*"
                            className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>
                    <Button
                        type="submit"
                        color='red'
                        className='text-white w-full'
                    >
                        Añadir categoría
                    </Button>
                </Form>
            </Formik>
        </section>
    )
}
