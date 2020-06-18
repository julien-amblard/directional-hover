# Directional Hover Effect

[![CircleCI Status](https://circleci.com/gh/sl-julienamblard/directional-hover.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/sl-julienamblard/directional-hover)
[![npm](https://img.shields.io/npm/dt/directional-hover.svg?style=flat-square)](https://www.npmjs.com/package/directional-hover)
[![npm](https://img.shields.io/npm/v/directional-hover.svg?style=flat-square)](https://www.npmjs.com/package/directional-hover)
[![npm](https://img.shields.io/npm/l/directional-hover.svg?style=flat-square)](https://github.com/sl-julienamblard/directional-hover/blob/master/LICENSE)

<br />

Add a directional css hover effect

<br />

### Live example [here](https://codepen.io/Capse/pen/jOOgVJq) 

<br />

### Installation

```bash
$ npm install directional-hover
//or
$ yarn add directional-hover
```
<br/>

### Importing
```js
import Direction from "directional-hover"
```

<br/>


### Quick use
```html
<div class="thumbs">
  <div class="item">
    <img src="https://picsum.photos/350/300" />
  </div>
</div>
```
```js
import Direction from "directional-hover"

new Direction({ 
  $els: document.querySelectorAll(".item") 
})
```
> `.item` are the containers. they handle the perspective property.
Containers first childs (here `.item img`) will have the class added for transformation and animation
