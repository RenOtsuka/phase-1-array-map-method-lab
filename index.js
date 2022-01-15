const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newTutorial = tutorials.map(function(elem){
    
    let firstSentence = elem.split(" ");
    //console.log(sentence);

    for(let i = 0; i < firstSentence.length; i++){
      firstSentence[i] = firstSentence[i][0].toUpperCase() + firstSentence[i].substring(1);
      //console.log(sentence);
    }

   let secondSentence = firstSentence.join(" ");
    //console.log(sentence);
    
    return secondSentence;
  }
  );
  //console.log(newTutorial);
  return newTutorial;
}
