function maybeTrue() {
  return Math.random() >= 0.5
}


function forLoop(array){


  for(i=0; i<25; i++){
    array.push("I am ${i} strange loop${i === 0 ? \'\' : \'s\'}.");

  }
  return array;
}

function whileLoop(n){


  while(n>0){

    console.log(--n);

  }
  var donedone = "done"
  return donedone;
}



function doWhileLoop(array){


  while(array.length > 0 /*&& maybeTrue()*/){

    array.pop();

  }

  return array;
}
