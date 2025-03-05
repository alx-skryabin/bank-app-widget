# Bank App Widget

### Available Scripts:

### `npm run start`

Runs the app in the `development` mode.<br />
Open [localhost:3300](http://localhost:3300) to view it in the browser.

### `npm build`

Build the project in `production` mode. <br/>
After the build, two files will be available in the `dist` folder: <br/>
[bank-app-widget.css](dist/bank-app-widget.css) и [bank-app-widget.js](dist/bank-app-widget.js)

### `npm run format:prettier`

Commands for formatting and bringing code to accepted standards

### Using

To use the widget, you need to place a `script` on your html or other page. <br/>

# Deploy Netlify

1. Run `format:prettier`
2. You need to commit to the `release` branch.
3. The deployment will `start automatically` - view detail on [Netlify](https://netlify.com)

```html
<!-- Your_html_page.html-->
<!--Param client is required-->
<script src="https://bank-app-widget.netlify.app/bank-app-widget.js?client=xxx"></script>
```

### Stack:

`React` `TypeScript` `Sass` `Docker` `Prettier`
