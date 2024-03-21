# Storybook Workshop ReactDays Munich 2024

## Getting Started with a Cloud IDE

https://stackblitz.com/~/github.com/elmarburke/storybook-workshop-munich-2024

https://codesandbox.io/s/github/elmarburke/storybook-workshop-munich-2024

## Getting Started locally

To get started with the workshop, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/elmarburke/storybook-workshop-munich-2024.git
    ```

2. Navigate to the project directory:

```bash
cd storybook-workshop-munich-2024
```

3. Install the dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn

# Using pnpm
pnpm install
```

4. Install Playwright

```bash
# Using npm
npx playwright install --with-deps

# Using yarn
yarn exec playwright install --with-deps

# Using pnpm
pnpm dlx playwright install --with-deps
```

5. Start storybook:

```bash
# Using npm
npm run storybook

# Using yarn
yarn storybook

# Using pnpm
pnpm storybook
```

This command will start the Storybook server and open the Storybook UI in your default web browser.

Happy coding!
