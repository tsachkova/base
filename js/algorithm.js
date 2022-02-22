function sortObject(elementPrev, elementNext, property) {
    return (elementPrev[property] > elementNext[property]);
}

function sortPrimitiveArr(elementPrev, elementNext) {
    return (elementPrev > elementNext);
}

Array.prototype.insertionSort = function (callback, property) {
    if (typeof callback !== 'function') {
        throw new Error("callback is not a function");
    }

    let tempStorage;

    for (let i = 1; i < this.length; i++) {
        sortNumber = this[i];
        
        for (let j = 0; j < i; j++) {
            
            if (callback(this[j], this[i], property)) {
                tempStorage = this[i];
                for (let m = i; m > j; m--) {
                    this[m] = this[m - 1];
                }
                this[j] = tempStorage;
            }
        }
    }
    return this;
}

Array.prototype.bubbleSort = function (callback, property) {
    if (typeof callback !== 'function') {
        throw new Error("callback is not a function");
    }

   let count;

    for (let i = 0; count !==0; i++) {
        count = 0;
        for (let j = 0; j < this.length - 1; j++) {
            let tempStorage;
            if (callback(this[j], this[j + 1], property)) {
                tempStorage = this[j];
                this[j] = this[j + 1];
                this[j + 1] = tempStorage;
                ++count;
            }
        }
    }
    return this;
}



class Node {
    constructor(number) {
        
        this.number = number;
        this.left = 0;
        this.right = 0;
    }

    binaryTreeAdd(number) {
        if (this.number === undefined) {
            this.number = number;
            return;
        } 
        
        let way = this;
            
        for (let i = 0; true; i++) {
    
            if (number > way.number) {
                if (way.right !== 0) {
                    way = way.right;
                } else {
                    way.right = new Node(number);
                    return;
                }
            }
    
            if (number < way.number) {
                if (way.left !== 0) {
                    way = way.left;
                } else {
                    way.left = new Node(number);
                    return;
                }
            }
    
            if (number === way.number) {
                throw new Error("number is duplicated");
            }      
        }
    };

    binarySearch(number) {
        if (typeof number !== 'number') {
            throw new Error("Wrong arguments type");
        }
    
        let way = this;
        for (let i = 0; true; i++) {
    
            if (way.number === number) {
                return way;
            }
    
            if (number > way.number) {
                if (way.right !== 0) {
                    way = way.right;
                } else {
                    throw new Error("Number not found");
                }
            }
    
            if (number < way.number) {
                if (way.left !== 0) {
                    way = way.left;
                } else {
                    throw new Error("Number not found");
                }
            }
        }
    }
    
    binaryDelete(number, way, parent) {
        if (typeof number !== 'number') {
            throw new Error("Wrong arguments type");
        }
        
        way = way || this;
    
        if (number > way.number) {
            if (way.right !== 0) {
                parent = way;
                way = way.right;
            } else {
                throw new Error("Number not found");
            }
        }
    
        if (number < way.number) {
    
            if (way.left !== 0) {
                parent = way;
                way = way.left;
            } else {
                throw new Error("Number not found");
            }
        }
    
        if (number === way.number) {
            if ((way.left === 0) && (way.right === 0)) {

                if(way === this) {
                    root = new Node;
                    return;
                }

                if (way.number < parent.number) {
                    parent.left = 0;
                }
    
                if (way.number > parent.number) {
                    parent.right = 0;
                }
    
                return;
            }
    
            if ((way.left === 0) && (way.right !== 0)) {
                if(way === this) {
                    this.number = this.right.number;
                    this.left = this.right.left;
                    this.right = this.right.right;
                    return;
                }
    
                if (way.number < parent.number) {
                    parent.left = way.right;
                }
    
                if (way.number > parent.number) {
                    parent.right = way.right;
                }
    
                return;
            }
    
            if ((way.left !== 0) && (way.right === 0)) {
                if(way === this) {
                    this.number = this.left.number;
                    this.left = this.left.left;
                    this.right = this.left.right;
                    return;
                }
    
                if (way.number < parent.number) {
                    parent.left = way.left;
                }
    
                if (way.number > parent.number) {
                    parent.right = way.left;
                }
    
                return;
            }
    
            if ((way.left !== 0) && (way.right !== 0)) {

                let minElement = way.right;
                let minElementPerent  = way;
    
                for (let i = 0; true; i++) {
                
                    if (minElement.left !== 0) {
                        minElementPerent = minElement;
                        minElement = minElement.left;
                    }
    
                    if (minElement.left === 0) {
                        way.number = minElement.number;
                        
                        if (minElementPerent !== way) {
                            minElementPerent.left = minElement.right || 0;
                        } else {
                            way.right = minElement.right;
                        }
                    return;
                    }
                }    
            }
        }
    
        return binaryDelete(number, way, parent);
    }
}

let root = new Node ();







