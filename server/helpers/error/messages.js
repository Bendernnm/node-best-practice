module.exports = {
  FORBIDDEN                : 'Forbidden',
  BAD_REQUEST              : 'BadRequest',
  UNAUTHORIZED             : 'Unauthorized',
  NEED_REFRESH_TOKEN       : 'Expired token',
  NOTHING_TO_UPDATE        : 'Nothing to update',
  SOMETHING_WRONG_TRY_LATER: 'Something wrong, try later',
  PASS_ALL_REQUIRED_FIELDS : 'Please pass all required fields',
  USER_CAN_NOT_BE_THE_SAME : 'The user cannot send deals to themselves',
  MEMBERSHIP_ENDED         : 'Membership was ended',
  FREE_MEMBERS_ENDED       : 'Haven\'t slots',
  INVALID_PARAMETER        : 'Invalid parameter',
  notFound                 : obj => `${obj} not found`,
  incorrect                : obj => `Incorrect - ${obj}.`,
  alreadyExists            : obj => `${obj} already exists`,
  passRequiredFields       : fieldName => `Required fields: ${fieldName}`,
  fileSoBig                : fileName => `To big file. File name is ${fileName}`,
  emailOrUserNameInUse     : ({ userName, email }) => `Such email: ${email}, or userName: ${userName} already in use`
};
