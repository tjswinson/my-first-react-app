import Contact from "../components/contact"
import faker from "@faker-js/faker"

const Main = () => {

    const cheating = [1,1,1,1,1,1,1,1,1,1]

    const names = cheating.map(name => {
        const person = faker.name.findName();
        const addresses = faker.address.streetAddress()
        const emails = faker.internet.email();
        const cities = faker.address.city();
        const zipCodes = faker.address.zipCode();
        const pNumbers = faker.phone.phoneNumber();
        return <Contact name={person} email={emails} address={addresses}
            city={cities} zipCode={zipCodes} phone={pNumbers}/>
    });


    return (
        <>
            <main>
                <ul>{names}</ul>
            </main>
        </>
    )
}

export default Main