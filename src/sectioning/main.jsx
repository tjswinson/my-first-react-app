import { useState } from "react";
import Contact from "../components/contact";
import Counter from "../components/counter";
import { mockResponse } from "../utils/mockResponse";

const Main = () => {

    

    
const response = mockResponse();
const contacts = response.map((contact, index) =>{
return (
    
       <Contact contact={contact}  key={index} />
    
    )
        
    });

    


    return (
        <>
            <main>
            <Counter />
                <ul>{contacts}</ul>
            </main>
        </>
    )
}

export default Main