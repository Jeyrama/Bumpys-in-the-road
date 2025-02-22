/*
Your car is old, it breaks easily. The shock absorbers are gone 
and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! 
Given a string showing either flat road (_) or bumps (n). 
If you are able to reach home safely by encountering 15 bumps or less, 
return Woohoo!, otherwise return Car Dead
*/


// Solution

const bump = x => {
  let string = "";
  for (let count = 0; count < x.length; count++) {
    if (x[count] == 'n') {
      string += x[count];
    }
  }
  if (string.length > 15) {
    return 'Car Dead';
  } else {
    return 'Woohoo!'
  }
}

// or

function bump(x){
  let count = 0
for (const i of x) {
  if (i === 'n') {
    count++
  } 
}
  if (count > 15) {
    return "Car Dead"
  }
  return "Woohoo!"
}