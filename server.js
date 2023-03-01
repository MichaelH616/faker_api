const { faker } = require('@faker-js/faker');

const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.exampleEmail(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
    };
    return newUser;
    
};

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    };
    return newCompany;
};

app.get("/api/users/new", (req, res) => {
    const newFakeUser = createUser();
    res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
    const newFakeCompany = createCompany();
    res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
    const newFakeUser = createUser();
    const newFakeCompany = createCompany();
    const newUserCompany = {
        user: newFakeUser,
        company: newFakeCompany,
    };
    res.json(newUserCompany);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));