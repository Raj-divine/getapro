# Project Setup Guide

Follow these steps to set up your development environment:

## 1. Install Dependencies

### Install Node Modules
Run the following command in your project directory to install necessary dependencies:
```sh
npm install
```

## 2. Install Docker Desktop
Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop/) for your operating system.

## 3. Install Supabase CLI
Install the Supabase CLI globally by running:
```sh
npm install -g supabase
```

## 4. Run Supabase Locally
Start the Supabase local development environment using:
```sh
supabase start
```

## 5. Update Environment Variables
Ensure that all required environment variables are set in your `.env` file.

## 6. Install ESLint and Prettier Extensions
### For VS Code:
- Install **ESLint** extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
- Install **Prettier** extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

## 7. Enable Format on Save
To automatically format your code on save in VS Code:
1. Open **Settings** (`Ctrl + ,` or `Cmd + ,` on Mac).
2. Search for "Format On Save".
3. Enable **Editor: Format On Save**.

You are now ready to start working on the project! 🎉
