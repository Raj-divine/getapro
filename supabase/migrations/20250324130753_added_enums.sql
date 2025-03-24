create type "public"."Languages" as enum ('ASSAMESE', 'BENGALI', 'BODO', 'DOGRI', 'GUJARATI', 'HINDI', 'KANNADA', 'KASHMIRI', 'KONKANI', 'MAITHILI', 'MALAYALAM', 'MANIPURI', 'MARATHI', 'NEPALI', 'ODIA', 'PUNJABI', 'SANSKRIT', 'SANTHALI', 'SINDHI', 'TAMIL', 'TELUGU', 'URDU', 'ENGLISH');

create type "public"."Professional Categories" as enum ('LAWYER', 'CHARTED ACCOUNTANT', 'COMPANY SECRETARY', 'COST MANAGEMENT ACCOUNTANT');

alter table "public"."Professionals" alter column "category" set data type "Professional Categories" using "category"::"Professional Categories";

alter table "public"."Professionals" alter column "languages" set data type "Languages"[] using "languages"::"Languages"[];


