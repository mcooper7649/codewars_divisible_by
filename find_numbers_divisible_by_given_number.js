function divisibleBy(numbers, divisor){
  var fruits = [];
  
    for ( i = numbers[0]; i <= numbers.length; i++){
      if ( i % divisor === 0)  {
        fruits.push(i);
        
        
      }
    }
  console.log(fruits);
        return fruits;
}

divisibleBy([1,2,3,4,5,6], 2)