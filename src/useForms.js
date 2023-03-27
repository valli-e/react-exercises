import { useState } from 'react'

export default function useForms(initialState= { username: '', password: ''}) {
    const [values,setValues] = useState(initialState)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value,
        });
      };
    
      return [values, handleChange];
    }

