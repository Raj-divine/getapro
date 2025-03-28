export type ErrorCodeKeys =
    'MISSING_FIELDS' |
    'PASSWORD_MISMATCH' |
    'INVALID_EMAIL' |
    'INVALID_LENGTH' |
    'INVALID_USER_TYPE' |
    'USER_NOT_LOGGEDIN' |
    'INTERNAL_SERVER_ERROR'
    ;

export const APP_ERRORS = {
    "gap-0001": "Please fill out all fields",
    "gap-0002": "Passwords do not match",
    "gap-0003": "Invalid email",
    "gap-0004": "Data is not correct",
    "gap-0005": "User can either be of type CUSTOMER or PROFESSIONAL",
    "gap-0006": "User is not logged in",
    "gap-0007": "Something went wrong, please try again later or contact support"
};

export const APP_ERROR_CODES: Record<ErrorCodeKeys, keyof typeof APP_ERRORS> = {
    'MISSING_FIELDS': "gap-0001",
    'PASSWORD_MISMATCH': "gap-0002",
    'INVALID_EMAIL': 'gap-0003',
    'INVALID_LENGTH': 'gap-0004',
    'INVALID_USER_TYPE': 'gap-0005',
    'USER_NOT_LOGGEDIN': 'gap-0006',
    'INTERNAL_SERVER_ERROR': 'gap-0007'
};