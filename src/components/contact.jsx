const Contact = ({name, email, address, phone, zipCode, city}) => {
    return (
        <li>
            <h2>Name: {name}</h2>
            <p>Address: {address}</p>
            <p>City: {city}</p>
            <p>Zip: {zipCode}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </li>
    )
};

export default Contact;