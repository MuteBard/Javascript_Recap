//CALL STACK BRAIN
//I CAN HANDLE THIS
console.log('1');
//I CANT HANDLE THS, MOVE IT OUT OF THE CALL STACK, SEND IT OF TO THE WEB API. 
setTimeout(() => {console.log('2')}, 1000);
//I CAN HANDLE THIS
console.log('3')

//result
//1
//3
//2