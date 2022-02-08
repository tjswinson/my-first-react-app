import {useState} from "react";


const ContactForm = ({action}) => {

    const [name, setName] = useState('Bob');

    const handleChange = e => {
        const target = e.target.value;
        setName(target);
    }



return (
    <form onSubmit={e => action(e, name)} >
      <div>  <label>
            <span>Full name: </span>
            <input onChange={handleChange} value={name} />
            </label>
            </div>
            <br></br>
            <div> 
            <label htmlFor="address">Address: </label>
        <input type="text" id="address"/>  
            </div>
            <br></br>
            <div> 
            <label htmlFor="city">City: </label>
        <input type="text" id="city"/>  
            </div>
            <br></br>
<div> 
            <label htmlFor="zip">Zip: </label>
        <input type="text" id="zip"/>  
            </div>
            <br></br>
<div>
            <label htmlFor="phone">Phone: </label>
        <input type="text" id="phone"/>  
            </div>
<br></br>
<div>
<label htmlFor="email">Email: </label>
        <input type="text" id="email"/>  
            </div>

            <br></br>

            <button type="submit">Submit</button>
    </form>
);
};

export default ContactForm;