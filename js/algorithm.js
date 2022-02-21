



function sortObject(elementPrev, elementNext, property) {
    return (elementPrev[property] > elementNext[property]);
}

function sortPrimitive(elementPrev, elementNext) {
    return (elementPrev > elementNext);
}

Array.prototype.insertionSort = function(callback, property) {
    let temp;
    for (let i = 1; i < this.length; i++) {
        sortNumber = this[i];
        for (let j = 0; j < i; j++) {
            
            // if (arr[j] > arr[i])
            if (callback(this[j], this[i], property))
            {
                
                temp = this[i];
                for (let m = i; m > j; m--) {
                    this[m] = this[m - 1];
                }
                this[j] = temp;
            }

        }
    }
    return console.log(this)

}

Array.prototype.bubbleSort = function(callback, property) {
    let count = 0;
    let temp;
    for(let i = 0; true; i++) {
        for(let j = 0; j < this.length - 1; j++) {
            if(callback(this[j],this[j + 1], property)) {

                    temp = this[j];
                    this[j] = this[j+1];
                    this[j+1] = temp;
                    ++count;
                    console.log(this[j])
                
            }
        }console.log(count)
        if (count === 0) {
            return this;
        }
        count = 0;

    }    
}



    let root;
    function bynaryTree(number) {
        class Node {
            constructor(number) {
                this.number = number;
                this.left = 0;
                this.right = 0;
            }
        }
        
        if (root === undefined) {
            root = new Node (number);
        } else {
            let way = root;
            for(let i = 0; true; i++ ) {
                if (number > way.number){
                    
                    if (way.right !==0) {

                        way = way.right;
                    } else { way.right = new Node(number);
                            break;
                    }
                }
                if (number < way.number){
                    if (way.left !== 0)  {
                        way = way.left;
                    } else { way.left = new Node(number);
                            break;
                    }    
                    
                }
          
            }
            // way = new Node (number);
        }    
            
        return root;
    }




function BynarySearch(number) {
    let way = root;
    for(let i = 0; true; i++ ) {
        if(way.number === number) {
            return way;
        }

        if (number > way.number){            
            if (way.right !==0) {
                way = way.right;
            } else { 
                throw new Error("Number not found");
            }
        }

        if (number < way.number){
            if (way.left !== 0)  {
                way = way.left;
            } else { 
                throw new Error("Number not found");
            }    
            
        }
  
    }
}

function bynaryDelete(number, way, parent){
    parent = parent || undefined;
    way = way || root;
   
    
        if (number > way.number){            
            if (way.right !==0) {
                parent = way;
                way = way.right;
            } else { 
                throw new Error("Number not found");
            }

        }
        if (number < way.number){            
            if (way.left !==0) {
                parent = way;
                way = way.left;

            } else { 
                throw new Error("Number not found");
            }
        }

        if(number === way.number) {
            if((way.left === 0) && (way.right === 0)) {
                
                if(way.number < parent.number) {
                    parent.left = 0;
                    
                }
                if(way.number > parent.number) {
                    parent.right = 0;
                    
                }
                return;

            } 
            if((way.left === 0) && (way.right !== 0)) {
                if(way.number < parent.number) {
                    parent.left = way.right;
                    
                }
                if(way.number > parent.number) {
                    parent.right = way.right;
                   
                }
                return;

            }

            if((way.left !== 0) && (way.right === 0)) {
                if(way.number < parent.number) {
                    parent.left = way.left;
                    
                }
                if(way.number > parent.number) {
                    parent.right = way.left;
                    
                }
                return

            }

            if((way.left !== 0) && (way.right !== 0)) {
                let minElement = way.right;
                let minElementPerent;
                for(i = 0; true; i++) {
                    if(minElement.left !== 0) {
                        minElementPerent = minElement;
                        minElement = minElement.left;
                        console.log(minElement);} 
                    if (minElement.left === 0) {
                        console.log(minElement);
                        way.number = minElement.number;
                        if(minElement.right !== 0) {
                            minElementPerent.right = minElement.right;
                        }
                        return
                    }

                }

            }
    
        }
        return bynaryDelete(number, way, parent);
    }

