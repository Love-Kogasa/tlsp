## Tlsp
一个轻量级的无第三代依赖的js模板字符串库
* 全部代码 < 1kb
* 支持与js中一样的函数调用，数字计算等
* 允许自定义模板字符串格式(支持通配符)
* 环境安全，无特殊设置模板字符串中无法访问nodejs中的require函数

## 示例
```js
var TemplateString = require( "tlsp" )

// Quick Start
var result = TemplateString.templateString(
 "Member Data ----- \
  \nName: ${ name.split( ' ' ).join( '-' ) } \
  \nAge: ${ getAge() } \
  \nSex: ${ boy ? 'boy' : 'girl' }", {
    name: "Any Body",
    boy: true,
    getAge: () => 114514
  }
)

console.log( result )
console.log( "" )

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
result = tlsp.generate( "lang.apple.name = <?node apple[lang] ?>",)
console.log( result );
```
