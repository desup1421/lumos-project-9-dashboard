import React, { useState } from 'react';

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setValues((prepValues) => ({
            ...prepValues,
            [name]: type === 'checkbox' ? checked : type === "file" ? files[0] : value,
        }));
    };

    const clearForm = (data) => {
        setValues(data || initialValues);
    };

    return [values, handleChange, clearForm];
}
export default useForm;