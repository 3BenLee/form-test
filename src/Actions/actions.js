export const SUBMIT_FORM_DATA = 'SUBMIT_FORM_DATA';

export function submitFormData(data) {
  return {
    type: SUBMIT_FORM_DATA,
    data
  };
}
