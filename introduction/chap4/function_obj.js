let getTriangle = new Function('base', 'height', 'return (base*height/2);')
console.log('三角形の面積は' + getTriangle(10, 20))
