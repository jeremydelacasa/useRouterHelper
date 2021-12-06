# useRouter

useRouter is a hook for react and work with react-router-dom. It improves the functional navigation and adds features in the use of searchParams.

## Installation

```bash
npm install use-router
```

or

```bash
yarn add useRouter
```

## Usage

```javascript
import useRouter from "use-router";
import getDataService from "myCustomGetDataService";
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router-dom";

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

  const handleOrder = (order) => {
    updateSearchParams({ order });
  };

  useEffect(() => {
    const newData = getDataService({ order: searchParams?.order });
    setData(newData);
  }, [searchParams]);

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

# Api

## updateSearchParams

### Params

**url: string**

url or path template url (https://v5.reactrouter.com/web/api/Route/path-string-string)

**opts: object** - _optionnal_

- stack: 'push'|'replace'

default 'push'

#### Example :

```js
// url = /list?order=DESC&page=3
updateSearchParams({ order: "ASC" });
// url = /list?order=ASC&page=3
```

## replaceSearchParams

### Params

**url: string**

url or path template url (https://v5.reactrouter.com/web/api/Route/path-string-string)

**opts: object** - _optionnal_

- stack: 'push'|'replace'

default 'push'

#### Example :

```js
// url = /list?order=DESC&page=3
replaceSearchParams({ page: 0 });
// url = /list?page=0
```

## deleteSearchParams

### Params

**keys: array**

deleted search param keys

**opts: object** - _optionnal_

- stack: 'push'|'replace'

default 'push'

```js
// url = /list?order=DESC&page=3
deleteSearchParams(["page"]);
// url = /list?order=DESC
```

## push

Push new url on the browser history (https://v5.reactrouter.com/web/api/history)

### Params

**url: string**

url or path template url (https://v5.reactrouter.com/web/api/Route/path-string-string)

**opts: object** - _optionnal_

- params: object
- params: searchParams

#### Example :

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

## replace

Replace the current url on the browser history (https://v5.reactrouter.com/web/api/history)

### Params

**url: string**

url or path template url (https://v5.reactrouter.com/web/api/Route/path-string-string)

**opts: object** - _optionnal_

- params: object
- params: searchParams

#### Example :

```js
// url = /list
push("/item/1?lang=FR");
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

## params: object

Object of params url

```js
// url = /item/2
const { params } = useRouter();

console.log(params);
// log => {id : 2}
```

## searchParams: object

Object of searchParams url

```js
// url = /list?order=ASC&page=3
const { searchParams } = useRouter();

console.log(searchParams);
// log => {order : "ASC", page: 3}
```

## location

Result of useLocation hook from react-router-dom (https://v5.reactrouter.com/web/api/Hooks/uselocation)
