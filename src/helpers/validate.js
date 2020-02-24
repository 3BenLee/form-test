export const validate = values => {
  let errors = {};
  if (!values.firstName || !values.firstName.trim().length) {
    errors.firstName = 'Required';
  }
  if (!values.lastName || !values.lastName.trim().length) {
    errors.lastName = 'Required';
  }
  if (!values.addressOne || !values.addressOne.trim().length) {
    errors.addressOne = 'Required';
  }
  return errors;
};
