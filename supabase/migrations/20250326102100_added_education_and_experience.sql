create type "public"."Experience level" as enum ('< 1 Year', '1-3 Years', '3-7 Years', '7-10 Years', '10-15 Years', '15-20 Years', '20+ Years');

alter table "public"."professionals" add column "education" jsonb not null default '{"degree": "", "school": ""}'::jsonb;

alter table "public"."professionals" add column "experience" "Experience level" not null default '< 1 Year'::"Experience level";


