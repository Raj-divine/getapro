alter table "public"."Users" add constraint "Users_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE RESTRICT ON DELETE CASCADE not valid;

alter table "public"."Users" validate constraint "Users_user_id_fkey";


