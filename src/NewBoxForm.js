import React, {useState} from "react";


const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE= {
        width: '',
        height: '',
        color: ''
    }


    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE)
    }

    

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Box Width: </label>
            <input 
              type="text"
              id="width"
              name="width"
              value={formData.width}
              onChange={handleChange}
              />

            <label htmlFor="height">Box Height: </label>
            <input 
              type="text"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              />

            <label htmlFor="color">Box Color: </label>
            <input 
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              />

            <button>Add a new box!</button>
        </form>

    )
}

export default NewBoxForm;