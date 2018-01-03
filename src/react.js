const analysis = require('ml-sentiment')({ lang: 'de' })
module.exports = {
  react: msg => {
    let result = analysis.classify(msg.content)
    if (result > 0) {
      msg.react('☺')
    } else {
      msg.react('☹')
    }
  }
}
