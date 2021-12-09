# useRouterHelper

useRouterHelper is a hook for react and work with [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start). It improves the functional navigation and adds features to the use of searchParams.

## Installation

```bash
npm install use-router-helper
```

or

```bash
yarn add use-router-helper
```

## Usage

```javascript
import useRouter from "use-router-helper";
import getDataService from "myCustomGetDataService";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => (
  <Router>
    <Switch>
      <Route path="/">home</Route>
      <Route path="/list">
        <CustomComponent />
      </Route>
    </Switch>
  </Router>
);

const CustomComponent = () => {
  const { searchParams, updateSearchParams } = useRouter();
  const [data, setData] = useState();

  const { order = "ASC" } = searchParams;

  const handleOrder = (order) => {
    updateSearchParams({ order });
  };

  useEffect(() => {
    setData(getDataService({ order }));
  }, [order]);

  return (
    <div>
      <button onClick={() => handleOrder("ASC")}>Order Asc</button>
      <button onClick={() => handleOrder("DESC")}>Order Desc</button>
      <ul>
        {data.map((el) => (
          <li>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};
```

## Example

https://codesandbox.io/embed/old-bush-rgviz?fontsize=14&theme=dark

## Api

### updateSearchParams: function

#### Params

**newSearchParams: object**

object of new search params

**opts: object** - _optionnal_

- stack: 'push'|'replace'
- state: object

default 'push'

##### Example :

```js
// url = /list?order=DESC&page=3
updateSearchParams({ order: "ASC" });
// url = /list?order=ASC&page=3
```

### replaceSearchParams: function

#### Params

**newSearchParams: object**

object of new search params

**opts: object** - _optionnal_

- stack: 'push'|'replace'
- state: object

default 'push'

##### Example :

```js
// url = /list?order=DESC&page=3
replaceSearchParams({ page: 0 });
// url = /list?page=0
```

### deleteSearchParams: function

#### Params

**keys: array**

deleted search param keys

**opts: object** - _optionnal_

- stack: 'push'|'replace'
- state: object

default 'push'

##### Example :

```js
// url = /list?order=DESC&page=3
deleteSearchParams(["page"]);
// url = /list?order=DESC
```

### push: function

Push new url on the browser history (https://v5.reactrouter.com/web/api/history)

#### Params

**url: string**

url or path template url (https://v5.reactrouter.com/web/api/Route/path-string-string)

**opts: object** - _optionnal_

- params: object
- searchParams: object
- state: object

##### Example :

```js
// url = /list
push("/item/1?lang=FR");
// url = /item/1?lang=FR
```

or

```js
// url = /list
push("/item/:id", { params: { id: 1 }, searchParams: { lang: "FR" } });
// url = /item/1?lang=FR
```

### replace: function

Replace the current url on the browser history (https://v5.reactrouter.com/web/api/history)

#### Params

**url: string**

url or path template url (https://v5.reactrouter.com/web/api/Route/path-string-string)

**opts: object** - _optionnal_

- params: object
- searchParams: object
- state: object

##### Example :

```js
// url = /list
replace("/item/1?lang=FR");
// url = /item/1?lang=FR
```

or

```js
// url = /list
replace("/item/:id", {
  params: { id: 1 },
  searchParams: { lang: "FR" },
});
// url = /item/1?lang=FR
```

### params: object

Object of params url

```js
// url = /item/2
const { params } = useRouter();

console.log(params);
// log => {id : 2}
```

### searchParams: object

Object of searchParams url

```js
// url = /list?order=ASC&page=3
const { searchParams } = useRouter();

console.log(searchParams);
// log => {order : "ASC", page: 3}
```

### location: object

Result of useLocation hook from react-router-dom (https://v5.reactrouter.com/web/api/Hooks/uselocation)
