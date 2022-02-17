# Reduced Test Case — Fetch doesn't need `credentials` property to send Authorization Headers

This demonstrates that Fetch does not need to set the
`credentials` property in order to send Authorization headers.

## Instructions

You'll find two folders. Please run the servers for both folders at the same time with `npm run server`.

Next, please navigate to `http://localhost:4000`. This will show you the frontend of the `frontend` folder.

You'll find two buttons:

1. One to send a Fetch request to the Host's server at `http://localhost:3000`
2. The second will send to it's own servers at `http://localhost:4000`.

Both servers will log the authorization header when you press the corresponding buttons.

Note that `credentials` are set to `omit` deliberately to demonstrate the fact that the `credentials` options is not required for Fetch to send authorization headres.

Also please note that `Access-Control-Allow-Credentials` is not
required on the external server for Fetch to Authorization headers across. It needs `Access-Control-Allow-Headers` instead.
