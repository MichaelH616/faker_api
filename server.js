const { faker } = require('@faker-js/faker');

const express = require("express");
const app = express();
const port = 8000;

const createUser = () => ({
    password: faker.internet.password(),
    email: faker.internet.exampleEmail(),
    phoneNumber: faker.phone.number(),
    lastName: faker.name.lastName(),        
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid(),
    });

const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
        }
    });

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
    res.json({user: createUser(), company: createCompany()});
});

app.listen(port, () => console.log(`Listening on port: ${port}`));