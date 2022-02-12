import { NavLink } from "react-router-dom";
//import Contact from "./contactDetail";

const ContactSummary = ({fields}) => {

const handleClick = e => {
    const target = e.target.id;
    console.log(target);
};

    const contacts = fields.map(contact => {
        return (
        <li id={contact.id} key={contact.id}>
            <NavLink to={contact.id}>{contact.name}</NavLink>
        </li>
    );
    });
return (
    <ul onClick={handleClick}>{contacts}</ul>
);
};

export default ContactSummary;