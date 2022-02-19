import {useState} from "react";

const ContactDetail = ({ action, selectedContact }) => {
    const {id, name, address, city, state, zipcode, phone, email, job} = selectedContact;

    const [image, setImage] = useState(null);

const handleGetImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => setImage(data.message));
};

      
    return (
        <div className="y-minwidth contact-details">
      <li>
        <h2>{name}</h2>
        <p>{address}</p>
        <p>{city}, {state}</p>
        <p>{zipcode}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{job}</p>
        <button className="btn btn--multiples" onClick={() => action(id)}>Delete Contact</button>
        <button className="btn btn--multiples" onClick={handleGetImage}>Show Dog</button>
        
            <div className="nimg">
        <img src={image} />
        </div>
        
      </li>
      </div>
    );
    }
  
  export default ContactDetail;