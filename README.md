## Tlsp  
[简体中文](https://github.com/Love-Kogasa/tlsp/blob/main/README-ZH.md)  
A lightweight JavaScript template string library with zero third-party dependencies  
* Entire codebase < 1kb  
* Supports function calls, numeric calculations, and other operations just like in JavaScript  
* Allows custom template string formats (supports wildcards)  
* Environmentally secure—by default, template strings cannot access Node.js's `require` function  

## Examples  
```js  
var TemplateString = require("tlsp")  

// Quick Start  
var result = TemplateString.templateString(  
 "Member Data ----- \
  \nName: ${ name.split(' ').join('-') } \
  \nAge: ${ getAge() } \
  \nSex: ${ boy ? 'boy' : 'girl' }", {  
    name: "Any Body",  
    boy: true,  
    getAge: () => 114514  
  }  
)  

console.log(result)  
console.log("")  

// Custom  
var tlsp = new TemplateString  
tlsp.format = "<?node*?>"  
tlsp.context = {  
  apple: {  
    en: "Apple",  
    zh: "林檎("  
  },  
  lang: "zh"  
}  
result = tlsp.generate("lang.apple.name = <?node apple[lang] ?>")  
console.log(result);  
```