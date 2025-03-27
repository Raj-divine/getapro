export type ErrorCodeKeys =
    'MISSING_FIELDS' |
    'PASSWORD_MISMATCH' |
    'INVALID_EMAIL' |
    'INVALID_LENGTH' |
    'INVALID_USER_TYPE'
    ;

export const APP_ERRORS = {
    "gap-0001": "Please fill out all fields",
    "gap-0002": "Passwords do not match",
    "gap-0003": "Invalid email",
    "gap-0004": "Data is not correct",
    "gap-0005": "User can either be of type CUSTOMER or PROFESSIONAL"
};

export const APP_ERROR_CODES: Record<ErrorCodeKeys, keyof typeof APP_ERRORS> = {
    'MISSING_FIELDS': "gap-0001",
    'PASSWORD_MISMATCH': "gap-0002",
    'INVALID_EMAIL': 'gap-0003',
    'INVALID_LENGTH': 'gap-0004',
    'INVALID_USER_TYPE': 'gap-0005'
};