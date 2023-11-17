### Description
This is a test project with Cypress. The repo contains only one positive test, which searches for the given parameters and asserts the result. The project is written in TypeScript and uses a modular approach.

### Project setup

- Make sure you have the right node version installed `nvm use`
- Install dependencies `npm i`

### Running tests on your local environment

- Run cypress in open mode `npm  run cy:open`
- Run cypress in headless mode `npm run cy:run`

![Alt text](/assets/cypress.png "Cypress test")


### Running tests in CI
- Navigate to [github atctions](https://github.com/skurochkin/cp/actions/workflows/manual.yml)
- Trigger the workflow

![Alt text](/assets/ga.png "Cypress test")



### Notes:
- Looking at the application storage, it looks like it is not managing state on the client side, instead, it is performed on the server side. 
- When the user submits the form he/she gets redirected to the subdomain, not sure what is decision behind it is, but that's imposing the complexity of a state management. Also, different fav icons presented on the browser tab
- When the user clicks the cancel button from the search result the application makes `POST` request to the main domain, although you don't submit anything
- The departure destination missing the ID attribute, and the arrival does have it, so instead of using ID I picked the name attribute
- The tooltip for input fields is not always clear, especially when running the automation, so in order to unblock the form completion we have to remove the tooltip
- The calendar dates are in UTC, which does not account for the client's local time
- The error messages for a destination are not clear and could provide more information on the problem 

### Further test cases to automate
Positive Test Case - Search for a Valid Route:
```
Input: Valid source and destination locations.
Expected Output: Display of available tickets for the specified route.
```

Positive Test Case - Search for a Valid Route with Specific Date and Time:
```
Input: Valid source and destination locations, specific date, and time.
Expected Output: Display of available tickets for the specified route at the given date and time.
```

Negative Test Case - Search with Invalid Source Location:
```
Input: Invalid or non-existent source location.
Expected Output: Proper error message indicating that the source location is not valid.
```

Negative Test Case - Search with Invalid Destination Location:

```
Input: Invalid or non-existent destination location.
Expected Output: Proper error message indicating that the destination location is not valid.
```

Negative Test Case - Search with Past Date:
```
Input: Select a date that has already passed.
Expected Output: Proper error message indicating that the selected date is not valid.
```

Negative Test Case - Search with Unavailable Date and Time:
```
Input: Select a date and time for which no tickets are available.
Expected Output: Display a message indicating that there are no tickets available for the specified date and time.
```

### Scanner reports

- Frontend Performance: [report](https://googlechrome.github.io/lighthouse/viewer/?gist=e1261d0df20cea2d64c3d2c0bd45fa84)
- Accessibility:
![Alt text](/assets/accessability.png "Accessebility test")


### Suggestions for improvement

- add test id attributes 
- add loading animation after the search form submitted
- add proper error messaging
- state management on a client-side
- `GET` request instead of `POST` when retrieving information
- decouple frontend from backend
