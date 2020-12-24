import { useState } from 'react'

export const useForm = (initialStete = {}) => {


    const [values, setValues] = useState(initialStete);

    const handleInputChange = ({ target }) => {
    
        setValues({
            ...values,
            [ target.name]:target.value
        })
    }
    
    const handleInputReset = () => {
        setValues(initialStete);
    }

    return [ values, handleInputChange, handleInputReset]
}
