function escapeHtml (str) {
  if (!str) { return '' }
  str = str.replace(/&/g, '&amp')
  str = str.replace(/</g, '&lt')
  str = str.replace(/>/g, '&gt')
  str = str.replace(/"/g, '&quot')
  str = str.replace(/'/g, '&#39')
  return str
}
// 分解されたtemplateとvaluesを順に連結させる
function e (template, ...values) {
  let result = ''
  let len = template.length
  for (let i = 0; i < len; i++) {
    result += template[i] + escapeHtml(values[i])
  }
  return result
}
let name = '<"Mario" & \'Luigi\'>'
console.log(e`こんにちは！！！${name}`) // こんにちは！！！&lt&quotMario&quot &amp &#39Luigi&#39&gt
