// console.log('Hello World');

// Fat Arrow

// var sum = (a, b) => a + b;
// console.log(sum(4, 6));

// var arr = [1, 2, 3];

// var abc = arr.map(x=>x*x);

// console.log(abc);


// var mouse = {
//     name: 'Mickey',
//     run: function(){
//         // var that = this;
//         setTimeout(function(){
//             console.log(this.name);
//         }.bind(this), 2000);
//     }
// }

var mouse = {
    name: 'Abc',
    run: function(){
        // var that = this;
        setTimeout(() => {
            console.log(this.name);
        }, 2000);
    }
}

mouse.run();