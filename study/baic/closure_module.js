var module = (function () {
    var count = 0;

    return {
        increment: function(){
            count++
        },
        show: function () {
            console.log(count)
        }
    };
    
})();

module.show
module.increment
module.show