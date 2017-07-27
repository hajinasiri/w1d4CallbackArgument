// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(item, index, array){
    // console.log(item);
    if(item === "Waldo"){
      found(index);
    }

  });
  }

function actionWhenFound(ind) {
  console.log("Found Waldo at index " + ind + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);