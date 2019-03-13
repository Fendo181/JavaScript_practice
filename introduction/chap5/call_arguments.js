function hoge(){
    // argumentsがthisとして扱われている
    console.log(arguments); //[Arguments] { '0': 'Angular', '1': 'React', '2': 'Vue' }
    var args = Array.prototype.slice.call(arguments);
    console.log(args.join('/'));
}

hoge('Angular','React','Vue'); //Angular/React/Vue
