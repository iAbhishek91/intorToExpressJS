# leaning express

#### routing
* this determines how an application responds to a client request.
* request will contain a URI(path) and a HTTP request method(GET, POST etc)
* common syntax: app.METHOD(PATH, HANDLER)
  * MEHTOD is the HTTP methods in lower case
  * PATH is the path in the server
  * HANDLER is the method that is called when a route is matched.

#### middleware 
* are functions that give access to req and res object.
* and also next piece of middleware that will be fired after that.
* refer to logger function in app.js
> order in which middleware are invoked should be maintained.

#### serving static files in express
* can server static files like css, js, images etc.
* built in middleware function : `express.static(root[, options])`
* root arg is the directory in which static content are kept.
> by default it displays index.html

#### template engine
* need to study
* we are using ejs here

#### form and form validator
https://www.youtube.com/watch?v=gnsO8-xJ8rs (35 mints)