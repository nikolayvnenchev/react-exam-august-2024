import { useEffect, useState } from "react";

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setValues(initialValues)
    }, [initialValues]);

    const validate = (name, value) => {
        let error = '';

        switch (name) {
            case 'name':
                if (!/^[A-Z][a-zA-Z0-9-\s]{2,29}$/.test(value)) {
                    error = 'Name must be between 3 and 30 characters, starts with an uppercase letter, and contain only letters, numbers, hyphens or spaces.';
                }
                break;
            case 'brand':
                if (!/^[A-Z][a-zA-Z0-9-&\s]{1,19}$/.test(value)) {
                    error = 'Brand must be between 2 and 20 characters, starts with an uppercase letter, and contain only letters, numbers, hyphens, ampersands or spaces.';
                }
                break;
            case 'price':
                if (!/^\d+$/.test(value) || value < 1 || value > 1000000) {
                    error = 'Price must be a number between 1 and 1,000,000.';
                }
                break;
            case 'imageUrl':
                try {
                    new URL(value);
                } catch (_) {
                    error = 'Image URL must be a valid URL.';
                }
                break;
            case 'color':
                if (!/^[A-Z][a-zA-Z-]{2,29}$/.test(value)) {
                    error = 'Color must be between 3 and 30 characters, starts with an uppercase letter, and contain only letters or hyphens.';
                }
                break;
            case 'description':
                if (!/^[A-Z][a-zA-Z0-9-.,\s]{9,299}$/.test(value)) {
                    error = 'Description must be between 10 and 300 characters, starts with an uppercase letter, and contain only letters, numbers, hyphens, commas, dots, or spaces.';
                }
                break;
            default:
                break;
        }

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: error,
        }));

        return error;
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setValues(state => ({
            ...state,
            [name]: value
        }));
        validate(name, value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        
        const validationErrors = Object.keys(values).reduce((acc, key) => {
            const error = validate(key, values[key]);
            if (error) acc[key] = error;
            return acc;
        }, {});

        if (Object.keys(validationErrors).length === 0) {
            await submitCallback(values);
            setValues(initialValues);
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return {
        values,
        errors,
        changeHandler,
        submitHandler
    }
}
