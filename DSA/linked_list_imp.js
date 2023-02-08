// simpel linked list implimentation her 

//first defind a class 
class linkedlist {

    //defind a constructor 
    constructor(data){
        this.head ={
            value:data,
            next:null
        }

        this.tail -=this.head,
        this.length = 1
    }
}

//call the fun....
const myList =new linkedlist(11)

console.log(myList);
