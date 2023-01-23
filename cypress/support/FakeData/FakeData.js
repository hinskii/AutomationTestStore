import { faker } from "@faker-js/faker";

const defaultData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email()
}

export {defaultData}