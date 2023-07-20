# Toast for Web

Show toast messages in your web application easily, with a simple package.

That means, you can show an element with a message in your web application, which will disappear after a certain amount of time.

## Features

- Show toast messages in your web application easily
- Show toast messages with different levels
- Show toast messages with different durations
- Click on the toast to dismiss it

## Installation

```bash
npm i toast-for-web
```

## Usage

```js
import showToast from "toast-for-web";
showToast(message, level, duration);
```

## Parameters

| Parameter | Type   | Description                                                        |
| --------- | ------ | ------------------------------------------------------------------ |
| message   | string | Message to show in the toast                                       |
| level     | string | Level of the toast, can be `success`, `warning` or `error` |
| duration  | number | Duration of the toast in milliseconds                              |

## Example

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Toast for Web</title>
    <!-- CSS and JavaScript for the package -->
    <link rel="stylesheet" href="node_modules/toast-for-web/dist/index.css" />
    <script type="module" src="index.js"></script>
  </head>

  <body>
    <button id="success-toast">Success Toast</button>
    <button id="warning-toast">Warning Toast</button>
    <button id="error-toast">Error Toast</button>
  </body>
</html>
```

`index.js`

```js
import showToast from "./node_modules/toast-for-web/dist/index.js";

const successToast = document.getElementById("success-toast");
const warningToast = document.getElementById("warning-toast");
const errorToast = document.getElementById("error-toast");

document.addEventListener("click", (event) => {
  if (event.target === successToast)
    showToast("This is an info toast", "info", 3000);

  if (event.target === warningToast)
    showToast("This is a warning toast", "warning", 3000);

  if (event.target === errorToast)
    showToast("This is an error toast", "error", 3000);
});
```

## Demo

View demo here: [Demo](https://codersuresh.github.io/toast-for-web/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author
 
[Coder Suresh](https://github.com/coderSuresh)