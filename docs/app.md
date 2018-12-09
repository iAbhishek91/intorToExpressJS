# app methods

* **set()** done
  * is used to set express application environment variables.
  * any value can be set, however there are few variables which is used to configure the behaviour of the application.[refer](https://expressjs.com/en/4x/api.html#app.settings.table)
  * SYNTAX: app.set('key-1', 'value-1');
  * variables initialized here will only be accessed by `get()`.

* **get()** done
  * has is a overloaded method.
  * used to server HTTP GET request | SYNTAX: `app.get(route <, chain of middleware>)
  * also used to get the express application environment variables | SYNTAX: app.get('variable name')