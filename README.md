Make sure you have right node version installed `nvm use`

Run cypress in open mode `npm cy:open`
Run cypress in headles mode `npx cy:run`

Notes:
- Looking at the application storage, it looks like it is not managing state on the client side, instead it is performed on the server side. 
- When user submitting the form he/se gets redirected to the subdomain, not sure what is decision behind it, but that's imposing the complexity of a state mamagement. Also different fav icon presented on the browser tab
- When user click cancel button from the search result the application makes `POST` request to the main domain, although you dont submit anything
- The departure destination missing the id attribute, and arrival does have it, so instead of using id's I picked the name attribure
- The tooltip for input fields not always clearing, specially when running the automation, so in order to unblock the form completion we have to remove the tooltip
- The calendar dates is in UTC, which is not accounting for the client local time
- The error messages for a destinations is not clear and could provide more information on the problem 
