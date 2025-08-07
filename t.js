var TemplateString = require( "./index" )

// Quick Start
var result = TemplateString.templateString(
 "Member Data ----- \
  \nName: ${ name.split( ' ' ).join( '-' ) } \
  \nAge: ${ getAge() } \
  \nSex: ${ boy ? 'boy' : 'girl' }", {
    name: "Any body",
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
