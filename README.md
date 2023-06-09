Hello and welcome to the College of the Holy Cross Full-Stack Web Developer coding test. Thank you for your interest in the position and willingness to take on this challenge! We're excited to see what you can do. Please read the instructions below carefully and follow them to the letter. If you have any questions, please feel free to reach out to Christopher Buecheler directly. Please also adhere to the request that you spend _no more_ than two hours on this project, other than the setup described below. That doesn't have to count.

## Overview

This basic TypeScript/React application reaches out to a (fake) third-party API and displays the results in a simple table. It is missing some types/interfaces, has some linting errors, and is in need of an additional component (see instructions). It uses NextJS, a React framework. You shouldn't need to have much familiarity with that or with Mantine, the UI library we use, in order to complete this task.

## Setup

1. Fork this repository to your own GitHub account.
2. Clone the repository to your local machine.
3. Create a branch.
4. Run `npm install`
5. Familiarize yourself with the third party modules we use
6. Run `npm dev` to start a dev instance at http://localhost:3000
7. Navigate to http://localhost:3000 and verify that the app is running
8. Take a bit to familiarize yourself with the codebase
9. Start coding!
10. Optional, but recommended: add the following extensions to VSCode or your IDE of choice:
11. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
12. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Please do not adjust the TypeScript, Eslint, or Prettier configuration files. They've all been set up to adhere to our department's coding standards. If you have issues with these standards, well, get hired and then we can talk about it!

### Third Party Modules

- [React](https://reactjs.org/) - JS Framework
- [NextJs](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - JS Superset
- [ESLint](https://eslint.org/) - Linter
- [Prettier](https://prettier.io/) - Code Formatter
- [Mantine](https://mantine.dev/) - React UI Library
- [SWR](https://swr.vercel.app/) - React Data Fetching Library
- [Dayjs](https://day.js.org/) - Date Library
- [Tabler Icons](https://tablericons.com/) - Icon Library

There will not be any /tasks relating to SWR, Dayjs, or Tabler. The only task relating to Mantine will be building out a new component, not fixing any existing errors.

## Instructions

A quick note before we begin: you will see the user data refreshing regularly, especially if you leave and return to the browser - this is not a bug. SWR regularly polls the API for fresh data, and since this API is built to return random data, the user list will change every time SWR contacts it. You can safely ignore this, as the work you'll be doing won't rely on having consistent user data available.

### Task 1: Fix the Types

There are several missing, incomplete, or incorrect types in this document. Your goal is to fix them all and get them working properly. You can find them by running `npm run tsc` from the command line. You'll see a list of errors and warnings. The errors are the ones you need to fix. The warnings are optional, but you should try to fix them if you can. We keep types in two places: for Props and for derived type (eg: extensions), we typically work within the page or component that uses them. For more general data types, look in `/types/data.d.ts`.

### Task 2: Fix the Linting Errors

There are several linting errors in this project. Your goal is to fix them all and get them working properly. You can find them by running `npm run lint` from the command line. You'll see a list of errors and warnings. The errors are the ones you need to fix. The warnings are optional, but you should try to fix them if you can.

### Task 3: Fix other Errors

There are a few misc errors that aren't quite TypeScript/Linting errors (eg: the broken user images) that you should fix. These should all be obvious with basic visual inspection.

### Task 4: Build a New Component

This component should be a simple modal that asks the user if they're sure they want to delete the user, when a delete icon is clicked. It should have a "Yes" and "No" button. The "Yes" button should call a function ostensibly built to delete the user (instead, just console.log the proper user info) and close the modal. The "No" button should close the modal. The modal should be triggered by clicking the "Delete" icon on the user table. The modal should be built using Mantine. You can find the documentation for Mantine's modal component [here](https://mantine.dev/core/modal/). You can find the documentation for Mantine's button component [here](https://mantine.dev/core/button/). You can find the documentation for Mantine's typography component [here](https://mantine.dev/core/typography/). You can find the documentation for Mantine's spacing component [here](https://mantine.dev/core/spacing/). You can find the documentation for Mantine's theme component [here](https://mantine.dev/core/theme/). You can find the documentation for Mantine's hooks component [here](https://mantine.dev/core/hooks/).

## Testing

We do not have any generalized testing (unit, integration, etc). Please _visually_ test everything and make sure it all seems to be working. This, combined with the linting scripts mentioned under Instructions, should be sufficient for the purposes of this project.

## Submission

When you're finished, please commit your changes to your branch and create a pull request, then send an email to Christopher Buecheler with a link to the PR. Please do not merge the PR yourself. We will review your code and get back to you as soon as possible.
#   h c - w e b d e v - t e s t - r i c k  
 