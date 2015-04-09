All content for index.html is templated by handlebars.js using the following data sources in scripts.js:

Tags / groups (for displaying on cards and shuffling/filtering)

```js
var groups = ["xAPI","LRS","LRSTools","APTools","Reporting","Mobile","SCORM","Profile","VirtualWorlds","Tutorials",'Reuse'];
```

All cards (items) are defined in the items array:

```js
var items = [];
```

Each item can have the following properties:

```js
tags: ["tag1","tag2"], // An array of tags
color: 'blue', // color that corresponds with .box-icon-* classes found in styles.css
icon: 'fa-gift', // the icon class for either a glyphicon or font awesome icon
title: 'My Title', // title of the card
description: 'This is a description <a href="#">it</a> <b>can</b> <em>support</em> <abbr>HTML</abbr>.', // description
link_ref: 'http://example.com/mydocs', // reference documetation link
link_ref_title: 'Reference Docs', // reference documetation title
link_ex: 'http://example.com/project', // external link
link_ex_title: 'Live Demo', // external link title
link_gh: 'https://github.com/adlnet/project' // github repository link
```
