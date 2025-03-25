alter table "public"."Professionals" drop column "isVerified";

alter table "public"."Professionals" add column "is_verified" boolean not null default false;


