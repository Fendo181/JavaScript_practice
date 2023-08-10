var data = { a : 1 }

// Model(data,methd)
var vm = new Vue({
    data : data
})


console.log(vm.a == data.a) //true