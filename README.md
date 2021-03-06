# markedup

![status:WIP](https://img.shields.io/badge/status-WIP-yellow.svg)
![status:WIP](https://img.shields.io/badge/status-Experiment-yellow.svg)
[![Build
Status](https://api.travis-ci.org/siddharthkp/markedup.svg?branch=master)](https://travis-ci.org/siddharthkp/markedup)

### supercharged markdown rendering engine

![screenshot](https://raw.githubusercontent.com/siddharthkp/markedup/master/screenshot.png?v=2)

List of features
- [x] Variables

```html
## name: <star>
```


- [x] Loops

```html
<* planet in planets>
```

- [ ] Attributes
- [x] Conditionals

```html
<if star = 'Sun':
    Our solar system

    Number of planets: 8
>
<else if star = 'Kepler-32':
    Cygnus solar system

    Number of planets: 3
>
<else: Some random solar system>
<endif>
```

- [x] Nested variables

```html
## name: <star.name>

<* planet.name in planets>
```

- [ ] Includes
- [ ] Attributes
- [x] Comments

```js
// This is a single line comment

/* This is a
   multi
   line
   comment
*/
```

- [ ] Escape code
- [ ] Syntax errors
