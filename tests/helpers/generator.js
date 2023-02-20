import { faker } from "@faker-js/faker";

export function firstName() {
    return faker.name.firstName();
}

export function lastName() {
    return faker.name.lastName()
}

export function postCode() {
    return faker.address.zipCode()
}
