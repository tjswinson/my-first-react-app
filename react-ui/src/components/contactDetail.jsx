import {useState} from "react";

const ContactDetail = ({ action, selectedContact }) => {
    const {id, name, address, city, state, zipcode, phone, email, job} = selectedContact;

    const [image, setImage] = useState(null);

const hardCodedAddress = {"address": "123 Main Street, Springfield, Or"};

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hardCodedAddress)
    }

const handleGetImage = () => {
    fetch('https://localhost:8080/location')
    .then(response => response.json())
    .then(data => setImage(data.message));
};

      
    return (
        
      <li>
        <h2>{name}</h2>
        <p>{address}</p>
        <p>{city}, {state}</p>
        <p>{zipcode}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{job}</p>
        <button className="btn btn--multiples" onClick={() => action(id)}>Delete Contact</button>
        <button onClick={handleGetGeo}>Get Geo Coordinates</button>
        
            <div className="nimg">
        <img src={image} />
        </div>
        
      </li>
     
    );
    }
  
  export default ContactDetail;