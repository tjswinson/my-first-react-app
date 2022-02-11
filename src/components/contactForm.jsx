import {useState} from "react";


const ContactForm = ({action}) => {

    const [contact, setContact] = useState({});

    const handleChange = e => {
        const key = e.target.dataset.keyname;
        const value = e.target.value;
        const updatedContact = {...contact};
        updatedContact[key] = value;
        setContact(updatedContact);
    }; 

        const handleSubmit = e => {
            e.preventDefault();
            action(contact);
            setContact({});
            
        }

return (
    <form onSubmit={e => action(e, contact)} >
      <div>  <label>
            <span>Full name: </span>
            <input onChange={handleChange} data-keyname="name" value={contact.name || ''} />
            </label>
            </div>
            <br></br>
            <div> 
            <span>Address: </span>
            <input onChange={handleChange} data-keyname="address" value={contact.address || ''} />
            </div>
            <br></br>
            <div> 
            <span>City: </span>
            <input onChange={handleChange} data-keyname="city" value={contact.city || ''} /> 
            </div>
            <br></br>
<div> 
<span>Zip: </span>
            <input onChange={handleChange}  data-keyname="zipCode"value={contact.zipCode || ''} />
            </div>
            <br></br>
<div>
<span>Phone: </span>
            <input onChange={handleChange}  data-keyname="phone"value={contact.phone || ''} /> 
            </div>
<br></br>
<div>
<span>Email: </span>
            <input onChange={handleChange}  data-keyname="email"value={contact.email || ''} />
            </div>

            <br></br>

            <button type="submit">Submit</button>
    </form>
);
};

export default ContactForm;