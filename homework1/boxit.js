let string = process.argv.slice(2);
let longestWord;


function drawLine(a){
  longestWord = 0;
  let midLine="\u2501";

  for(let char of a){
    if(char.length > longestWord){
	     longestWord = char.length;
     }
   }
    return midLine.repeat(longestWord);
}

function drawBarsAround(b, pad){
  let vert="\u2503";
  return (vert + b + pad + vert);
}

function drawMiddleBorder(a){
  let leftT = "\u2523", rightT = "\u252b";
  return leftT + drawLine(a) + rightT;
}


function boxIt(str){
  let topR = "\u2513", topL = "\u250f", bottomR = "\u251b", bottomL = "\u2517";

if(str.length === 0 || str.length === 1){
  console.log(topL + drawLine(str) + topR);
  console.log(drawBarsAround(str, pad = ''));
  console.log(bottomL + drawLine(str) + bottomR);
}else {
  for(word of str){
    if(str.indexOf(word) === 0){
      console.log(topL + drawLine(str) + topR);
      console.log(drawBarsAround(word, '\xa0'.repeat(longestWord - word.length)));
    }
    else if(str.indexOf(word) === str.length - 1){
      console.log(drawMiddleBorder(str));
      console.log(drawBarsAround(word, '\xa0'.repeat(longestWord - word.length)));
      console.log(bottomL + drawLine(str) + bottomR);
    }
    else if(str.indexOf(word) > 0){
      console.log(drawMiddleBorder(str));
      console.log(drawBarsAround(word, '\xa0'.repeat(longestWord - word.length)));
    }
  }
}
}
boxIt(string);
