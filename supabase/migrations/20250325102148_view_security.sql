create or replace view "public"."public_user_names" as  SELECT users.user_id,
    users.first_name,
    users.last_name
   FROM users;



