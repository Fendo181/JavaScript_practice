'use strict'

var data = 'Global data'
var obj1 = { data: 'obj1 data' }
var obj2 = { data: 'obj2 data' }

function hoge () {
  console.log(this.data)
}

hoge.call(null) // Cannot read property 'data' of null
hoge.call(obj1) // obj1 data
