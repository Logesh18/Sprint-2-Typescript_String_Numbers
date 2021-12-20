import { StringManipulationService, NumberManipulationService } from "./main-service";

class NumbersManipulations implements NumberManipulationService{
     constructor(){}
     findPrime(num: number): void {
        let f:number=0;
        for(let j:number=2;j<num;j++){
            if(num%j==0){
                console.log("The given number "+num+" is not prime");
            }
        }
        if(f==0){
            console.log("The given number "+num+" is prime");
        }
     }
     findMagic(num: number): void {
         let sum:number=0;
         let n:number=num;
         while (n > 0 || sum > 9)
         {
            if (n==0)
            {
                n=sum;
                sum=0;
            }
            sum=sum+n%10;
            n=(n/10) | 0;
         }
         if(sum==1){
             console.log("The given number "+num+" is magic number");
         }
         else{
             console.log("The given number "+num+" is not magic number");
         }
     }
}

class StringManipulations implements StringManipulationService{
    constructor() {}
    print(word: string): void {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(1));
        console.log(word.concat(" Friends..."));
        console.log(word.slice(1,word.length-2));
        console.log(word.length);
    }
    printWithSpace(sentence: string): void {
        console.log(sentence.split('').join(' '));
    }
    findVowel(str: string): void {
        console.log(str.match(/[aeiou]/gi).length);
    }
}

var str=new StringManipulations();
str.print("Hello");
str.printWithSpace("hello");
str.findVowel("Hello");

var numbers=new NumbersManipulations();
numbers.findPrime(199);
numbers.findMagic(199);