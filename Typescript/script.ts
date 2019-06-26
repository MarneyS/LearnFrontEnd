// Typescript class
class Test{

  //variable that is contained within Test class
  name:string;

  //this is a function that is called immediately
  //when the Test class is 'instantiated'
  constructor(n: string){
    //assigns the Test variable 'name' to the
    //value of 'n' which was passed as a PARAMETER
    this.name = n;
  }

  //this is a function that takes no parameters
  //and prints out the value of Test variable
  //'name'
  printName(): void{
    console.log(this.name);
  }
}

//This is javascript function that will run as soon as the
//program is run
(function(){
  //creates a variable 'name' with the value 'jake'
  var name = "jake";

  //creates a variable 'testInstance' which contains the
  //instance of the Test class. This makes it so that
  //we can call the functions within the Test class.
  let testInstance:Test = new Test(name);

  //Calls the function 'printName' in the Test class.
  testInstance.printName();
})();
