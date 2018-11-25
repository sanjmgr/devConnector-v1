const Validator = require('validator');
const isEmpty = require('./is-empty');

const validateProfileInput = (data) => {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';

  if (!Validator.isLength(data.handle, { min:2, max:40 })) {
    errors.handle = 'Profile handle must be between 2 and 40 characters';
  }
  
  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Handle field is required';
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = 'Status field is required';
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Skills field is required';
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'Website URL is not valid';
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Youtube URL is not valid';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Facebook URL is not valid';
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Instagram URL is not valid';
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'Linkedin URL is not valid';
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Twitter URL is not valid';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};


module.exports = validateProfileInput;