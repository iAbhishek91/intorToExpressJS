# request and response methods

## request methods

## response methods

* **redirect()** done
  * redirect to specified path.
  * SYNTAX: `res.redirect([status,] path)`.
    * `status` is option, if not passed default to 302 (Found).
    * `status` if mentioned then it set the status and then redirects.
    * `url` can any of the valid value:
      * fully qualified URL. `http://www.google.com`.
      * relative URL. `/login`, redirects to application relative to root 'localhost:4321/login'.
      * relative URL. `post/new`, redirects to application relative to current path 'localhost:4321/post/new'.
      * `..`, redirect to one step back.
      * `back`, by defalt redirects to '/'.

* **send()** done
  * set response body
  * can send node buffer object, Object, string or array.
  * under the hood this does couple of tasks:
    * set `Content-Length` header.
    * set `Content-Type` header.
      * `Buffer` --> `application/octat-stream`
      * `String` --> `text/html`
      * `Object, Array` --> `application/json`

* **json()/jsonp()** jsonp need to study
  * used to send JSON response
  * used to set `Content-Type` --> `application/json`
  * it serializes the response using `JSON.stringify()`
  * `jsonp()` is similar to `json()` however it calls a callback function mentioned in express application environment variable `jsonp callback name`
  * `jsonp callback name` takes a function name, which is executed while res.jsonp() is invoked.

* **set()/header()** done
  * used to set HTTP header to a value.
  * alias `header()`
  * can set single or multiple header:
  * SYNTAX:
    * single header: `res.set('Content-Type', 'text/plain')
    * multiple header: `res.set({'header-1': 'value', 'header-2': 'value', 'header-3': 'value'})

* **type()** done
  * same as `set()`, but takes one parameter, and used to set only the `Content-Type` header.
  * syntax:
    * res.type('html') //text/html
    * res.type('png') //image/png
    * res.type('json') //application/json
    * res.type('application/json') //application/json

* **status()/sendStatus()** done
  * both the function is used to set the HTTP status of the response.
  * however `sendStatus()` send the description of the status automatically.
  * for eg: res.status(404).send('Not found') is equivalent to res.sendStatus(404).

* **end()** done
  * end the response process.
  * do not send any data.
  * SYNTAX: `res.end()` | `res.status(404).end()`