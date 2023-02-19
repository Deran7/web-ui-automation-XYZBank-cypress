import * as generator from '@helpers/generator.js';

export const ADD_DATA_CUSTOMER = {
    firstname: generator.firstName(),
    lastname: generator.lastName(),
    postcode: generator.postCode()
}
