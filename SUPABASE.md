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

## How to sync local db changes with others

1. First you need to pull the latest code from github using the following command

```sh
git pull origin <current_branch_name>
```

2. run the following command to sync the local db with the migrations in the supabase migrations folder.

WARNING: Running this command will delete all the data in the local db.

```sh
supabase db reset
```

### Method 2 (Preserve data)

To preserve the data in the local db you first need to take a backup of the local db and then dump the backup back to the local db. This is how do to it.

1. First take the back up of your data using the following command

```sh
supabase db dump --db-url [CONNECTION_STRING] -f data.sql --use-copy --data-only
```

`CONNECTION_STRING` can be found by running `supabase status` in your terminal and copying the `DB URL`.

This command will create a file called `data.sql` in the current directory which contains all the data in the local db.

2. Reset the database to apply the latest migrations using the following command

```sh
supabase db reset
```

3. Then load the data back into the local db using the following command

```sh
psql <CONNECTION_STRING> < data.sql
```

If you don't have psql installed you can install it using homebrew by running the following command or you can visit [this link](https://www.postgresql.org/download/) to download the installer for your operating system.

```sh
brew install postgresql
```

4. After the data is loaded into the local db you can delete the `data.sql` file using the following command

```sh
rm data.sql
```
