import { faker } from "@faker-js/faker";

const defaultData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email()
}

const register = {
    phone: faker.phone.number(),
    fax: '321321321321',
    company: faker.company.name(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: '5155',
    nick: faker.internet.userName(),
    password: 'test12345!',
    passwordConfirm: 'test1234'

}

export {register}
export {defaultData}