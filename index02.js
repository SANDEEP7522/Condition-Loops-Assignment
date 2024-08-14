let mark= "4"

if (mark >= 90 && mark == 100) {
    console.log("A Grade"); // enter mark 90 b/w 100 then A Grade
}
 else if(70 <= mark  && mark <= 90) {
    console.log("B Grade"); // enter mark 90 b/w 70 then B Grade
 } 

 else if( 50 <= mark  && mark < 70 ) {
    console.log("C Grade"); // enter mark 70 b/w 50 then C Grade
 } 

 else if(mark < 50) {
     console.log("F Grade"); // enter mark under 50 then F Grade
  } 

 else{
   console.log("Over to grade");
} // enter mark over then 100 then print that