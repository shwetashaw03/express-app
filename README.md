# Start Node Project

```bash
npm init

npm i express ejs
npm --save-dev nodemon
```

`package.json`
```json
  "scripts": {
    "startDev": "nodemon app.js"
  },
```

`start server`
```js
npm run startDev
```

- - -

# Add tailwindcss
[Visit Tailwind CSS](https://tailwindcss.com/docs/installation)

```bash
npm install tailwindcss postcss autoprefixer postcss-cli
npx tailwindcss init
touch postcss.config.js
```

`postcss.config.js`
```js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```

```bash
mkdir public
mkdir public/styles
touch public/styles/tailwind.css
touch public/styles/style.css
```

`public/styles/tailwind.css`
```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`Package.json`
```json
"tailwind:css": "postcss public/styles/tailwind.css -o public/styles/style.css"
```
OR

```html
<script src="https://cdn.tailwindcss.com"></script>
```
- - -