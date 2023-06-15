# Weave Assessment

## 1. Introduction 

As the assessment PDF already suggested, I have made a couple of assumptions:

- The user can only select a duration with 15 minute intervals
- The metering points measures every hour at XX:00, XX:15, XX:30 and XX:45

## 2. Installation

Here are the steps to install and run this project:

1. Make sure you have Node (v16) and npm (>= v8) installed on your machine.

2. Clone the project from the repository.

3. Open a terminal and navigate to the project directory.

4. Run the following command to install the project dependencies:
```
npm install
```

### 2.1 Development

Once the dependencies are installed, you can run the project in development mode using the following command:
```
npm run dev
```
It will be hosted on http://localhost:5173 by default.

### 2.2 Production
To build the project for production, run the following command:
```
npm run build
```
1. Check your terminal if the build has succeeded, or fix the errors before proceeding to the next step.
2. To preview the production build, run the following command:
```
npm run preview
```
That's it! It will be hosted on http://localhost:4173 by default.

## 3. Tests

You can run the tests (build with Vitest) by running the following command:
```
npm run test
```
You can easily add to the test calculation set in the file `/src/__tests__/App.test.tsx` by expanding the mockupData array:

```
    const mockData = [
        { 
            input: {
                consumption: 100, 
                startDate: new Date("Fri Jun 16 2023 22:00:00 GMT+0200"), 
                duration: 30
            }, 
            output: 10.00 
        },
        { 
            input: {
                consumption: 100, 
                startDate: new Date("Sun Jun 18 2023 22:00:00 GMT+0200"), 
                duration: 30
            }, 
            output: 9.00 
        },
        { 
            input: {
                consumption: 200, 
                startDate: new Date("Thu Jun 22 2023 16:00:00 GMT+0200"), 
                duration: 300
            }, 
            output: 200 
        }
    ];
```

## 4. ESLint

The project is build with a Vite React TypeScript starter and uses ESLint. The linter will be run before every build, but it's also possible to run it seperately with the following command:
```
npm run lint
```