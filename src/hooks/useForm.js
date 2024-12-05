import React, { useState } from 'react';

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues((prepValues) => ({
            ...prepValues,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const clearForm = () => {
        setValues(initialValues);
    };

    return [values, handleChange, clearForm];
}
export default useForm;