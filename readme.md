# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

To get this working you need to navigate to the project folder on your machine in a terminal window and then run the command `docker compose up`, once the text has stopped scrolling you'll know it's running (you can ignore yellow warning text).

You can test if the backend is working by opening a browser window and going to http://localhost:3000/api/ping.

You can test if the frontend is working by opening a browser window and going to http://localhost:3001/register and set up a user account.
