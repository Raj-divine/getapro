set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
BEGIN
  -- Only update `updated_at` if the column exists in the table
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = TG_TABLE_NAME 
    AND column_name = 'updated_at'
  ) THEN
    NEW.updated_at = NOW();
  END IF;
  RETURN NEW;
END;
$function$
;

create policy "Allow anyone to create an entry"
on "public"."Users"
as permissive
for insert
to public
with check (true);



