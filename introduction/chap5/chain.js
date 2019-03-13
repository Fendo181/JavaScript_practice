var Animal = function(){};

Animal.prototype = {
    walk: function() {
        console.log('よっすよっす');
    }
};

var Dog = function() {
    Animal.call(this);
};

Dog.prototype = new Animal();
Dog.prototype.bark = function(){
    console.log('わんわん!');
}

var d = new Dog();
d.walk();
d.bark();

// よっすよっす
// わんわん!
