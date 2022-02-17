# Reduced Test Case — Sending cookies without Access-Control-Allow-Credentials

Main point of this is to show that Fetch sends cookies (which are credentials) from a subdomain to a domain when `Access-Control-Allowed-Credentials` are not available in the server.

## Instructions

You'll find two folders. Please navigate to each folder and run `npm run server`. This would start both servers on your localhost.

Next, please navigate to the following addresses:

- Host: Go to <http://lvh.me:3000>
- Subdomain: Go to <http://subdomain.lvh.me:4000>

From the Subdomain's browser, you should see a button that says "Send cookies to Host server". Click this button and you'll see cookies being logged in the Host's servers — even though no `Access-Control-Allow-Credentials` header was set in the server.
