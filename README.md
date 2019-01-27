## Web components based components library using react-webcomponentify + React

This repo showcases how you can build web components using react without much bundlesize overhead. It uses <a href=" https://github.com/master-atul/react-webcomponentify" target="_blank">react-webcomponentify</a>.

<img src="https://github.com/master-atul/react-webcomponentify/blob/master/assets/react-webcomponent.png" width="200" height="auto" alt="logo" style="display:block; margin:0 auto;"/>

Go ahead and test it out here: <a href="https://master-atul.github.io/webcomponents-with-react-webcomponentify" alt="components library link" > Link to components libarary</a>

**Pro Tip: Do try inspecting the elements using chrome dev tools**

You can also check the underlying source code in the inspector since I have enabled source maps.

---

# Why ?

I suggest you read here:

Link to **react-webcomponentify**: https://github.com/master-atul/react-webcomponentify

---

## How much overhead does react-webcomponentify add?

**TLDR: 2.1kb**

- With react-webcomponentify and components : 9.1kb after gzip
- Without react-webcomponentify and only components: 7kb after gzip
- Overhead caused by react-webcomponentify: 2.1kb after gzip for entire component library

**Hence with react-webcomponentify + preact you can build a web component libarary with bundle size as small as 9kb**

---

## Wish to build your own web-component library with React like this one ?

**Installation**

- Clone this repo: https://github.com/master-atul/webcomponents-with-react-webcomponentify
- `npm install`
- `npm run start`
- Add your components.
- If you want to build: `npm run build`
- The code is pretty self explanatory.

---

### This Component Library contains:

- Button component : `<my-button text="some text"></my-button>`
- Input Component : `<my-input></my-input>`

### Why I am using Preact in the examples ?

Well If you look closely at package.json and webpack config, you will realize I am using preact here. You can go ahead and use React aswell. Everything will work as expected. Only downside is that React is a bit heavy as compared to Preact. Hence it will add to your bundle size. The example here will work 100% with React as Preact has extremely good compatibility with react.
