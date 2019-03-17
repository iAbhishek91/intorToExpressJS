# leaning express

## middleware

* this are normal javascript functions.
* they are executed in sequence.
* they are chainable, `use of next() is mandetory apart from the last one`.
* middleware have access to request and response and mostly used to modify the reqest and response.
* middleware are provided by `express`, `third party middleware` and `user defined middleware`

> order in which middleware are invoked should be maintained.

## routing

* routes in express app can be handled using `react router` or by `normal get`.
* this determines how an application responds to a client request.
* request will contain a URI(path) and a HTTP request method(GET, POST etc)
* common syntax: app.METHOD(PATH, HANDLER)
  * MEHTOD is the HTTP methods in lower case
  * PATH is the path in the server
  * HANDLER is the method that is called when a route is matched.

## router

* router are mini express app inside the app.
* router can use all the API as `app`.
* mostly used when complex route are used in the app. Router helps to modularize your code better.

## serving static files in express

* can server static files like css, js, images etc.
* built in middleware function : `express.static(root[, options])`
* root arg is the directory in which static content are kept.

> by default it displays index.html

## template engine

* we are using ejs here

## need to study

* TDL
  * http headers
  * all the methods of app (like use, get, etc).[app notes](/docs/app.md)
  * all the methods of req and res (like send, end, static).[req notes](/docs/reqRes.md)
  * req object and res object in details.
  * [defined middleware](https://expressjs.com/en/guide/using-middleware.html)
    * application middleware
    * router level middleware
    * error handling middleware
    * built-in middleware
    * thid-party middleware
      * body-parser
      * helmet
      * cors
      * passport - authentication middleware
    * user defined middleware pattern
      * authentication

## form and form validator

https://www.youtube.com/watch?v=gnsO8-xJ8rs (35 mints)

## full API project

refer `restAPIProject`