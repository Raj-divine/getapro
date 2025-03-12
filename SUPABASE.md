## How to push local db changes to supabase prod

1. First you need to create a supabase migration file using the following command

```sh
supabase db diff --use-migra -f <name_of_migration>
```

2. Check the migration file and make any changes if needed like triggers. Some changes that you do in local supabase will not be reflected in the migration file which you'll have to add manually.

3. Then push the migration file to supabase prod using the following command

```sh
supabase db push
```
