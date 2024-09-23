// const react1= {
//     width:2,
//     height:5,
//     color:"red"
// }

// function area(rect){
//     return rect.width*rect.height;
// }

// let ans = area(react1);
// console.log(ans);

// ------------------X------------------------


class reactangle{
    constructor(width, height, color){
        this.width=width;
        this.height = height;
        this.color = color;
    }
    area(){
        console.log(this);
        return this.width*this.height;
    }
    colors(){
        console.log(`painting with color ${this.color}`);
    }
}

const rect = new reactangle(2,4, "blue");

const ans = rect.area();
rect.colors();
console.log(ans);


const rect1 = new reactangle(20,40, "green");

const ans1 = rect1.area();
rect1.colors();
console.log(ans1);
