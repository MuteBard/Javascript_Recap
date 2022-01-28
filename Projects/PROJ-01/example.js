function Animal(x, y){
    this.x = x;
    this.y = y;
}

const obj1 = new Animal(1,2);
const obj2 = new Animal(3,4);

delete obj1.x;