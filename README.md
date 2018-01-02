# 2018-01_svg-sprite-loader-demo

> svg-sprite-loader with nuxt.js demo

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

### pages/index.vue
```
<template>
    <svg>
        <use xlink:href="#fb"></use>
    </svg>
</template>
<script>
    import fb from './../assets/svg/fb.svg'
</script>
```

### nuxt.config.js
```
    config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
    })
```
