function test(n){
    let arr = new Array (n); 
    let sizeOfArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      let size = (Math.random() * 100);
        while (sizeOfArr.includes(size)){
          size = (Math.random() * 100);
        }
        
        arr[i] = Array.from({length: size},
          () => Math.floor(Math.random() * 100),
        );
  
        arr[i].sort(function(a, b) {
           return i % 2 === 0 ? b - a : a - b; 
        });
  
        sizeOfArr.push(arr[i].length)
        
    }
    
    return arr;
  }