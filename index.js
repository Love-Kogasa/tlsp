var vm = require( "vm" )

class TemplateString {
  context = { require: null }
  format = "${*}"
  #getPattern( string ) {
    var regex = ""
    for( let char of string ){
      if( char === "*" ){
        regex += "(.*?)"
      } else if( Number.isNaN(parseInt( char, 36 )) ) {
        regex += "\\" + char
      } else {
        regex += char
      }
    }
    return new RegExp( regex, "g" )
  }
  generate( string ) {
    return string.replace( this.#getPattern( this.format ), ( match, code ) => {
      return vm.runInNewContext( code, this.context )
    })
  }
  static #cache = null
  static templateString( string, context ) {
    if( !this.#cache ) this.#cache = (new TemplateString())
    this.#cache.context = {require: null, ...context}
    return this.#cache.generate( string )
  }
}

module.exports = TemplateString