import { useState } from "react"


export const useForm = (initialState = {}) => {
   const [formData, setFormData] = useState(initialState)

   const handleInputChange = ({target}) => {  
    setFormData ({
        ...formData,
        [target.name]: target.value,
    })
    
}

return [formData, handleInputChange]
}
