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
            <span>Full name</span>
            <input onChange={handleChange} value={name} />
            </label>
            </div>
            <div> 
            <label htmlFor="address">Address:</label>
        <input type="text" id="address"/>  
            </div>
            <div> 
            <label htmlFor="city">City:</label>
        <input type="text" id="city"/>  
            </div>






            <button type="submit">Submit</button>
    </form>
);
};

export default ContactForm;