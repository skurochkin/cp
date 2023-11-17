### Description
This a test project with Cypress. The repo contains only one positive test, which search for the given parameters and asserting the result. The project is written in TypeScript and using modular approach.

### Project setup

- Make sure you have right node version installed `nvm use`
- Install dependencies `npm i`

### Running tests on your local environment

- Run cypress in open mode `npm  run cy:open`
- Run cypress in headles mode `npm run cy:run`

![Alt text](/assets/cypress.png "Cypress test")


### Running tests in CI
- Navigate to [github atctions](https://github.com/skurochkin/cp/actions/workflows/manual.yml)
- Trigger the workflow

![Alt text](/assets/ga.png "Cypress test")



### Notes:
- Looking at the application storage, it looks like it is not managing state on the client side, instead it is performed on the server side. 
- When user submitting the form he/se gets redirected to the subdomain, not sure what is decision behind it, but that's imposing the complexity of a state mamagement. Also different fav icon presented on the browser tab
- When user click cancel button from the search result the application makes `POST` request to the main domain, although you dont submit anything
- The departure destination missing the id attribute, and arrival does have it, so instead of using id's I picked the name attribure
- The tooltip for input fields not always clearing, specially when running the automation, so in order to unblock the form completion we have to remove the tooltip
- The calendar dates is in UTC, which is not accounting for the client local time
- The error messages for a destinations is not clear and could provide more information on the problem 

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
- Accessability:
![Alt text](/assets/accessability.png "Accessebility test")


### Suggestions for imporvment

- add test id attributes 
- add loading animation after search form submited
- add proper error messaging
- state management on a client side
- `GET` request instead of `POST` when retriving information
- decouple frontend from backend