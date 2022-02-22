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

    let count = 0;
    let tempStorage;

    for (let i = 0; true; i++) {

        for (let j = 0; j < this.length - 1; j++) {

            if (callback(this[j], this[j + 1], property)) {
                tempStorage = this[j];
                this[j] = this[j + 1];
                this[j + 1] = tempStorage;
                ++count;
            }
        }

        if (count === 0) {
            return this;
        }

        count = 0;
    }
}



let root;

function binaryTreeAdd(number) {
    if (typeof number !== 'number') {
        throw new Error("Wrong arguments type");
    }

    class Node {
        constructor(number) {
            this.number = number;
            this.left = 0;
            this.right = 0;
        }
    }

    if (root === undefined) {
        root = new Node(number);
        return root;
    } 
    
    let way = root;

    for (let i = 0; true; i++) {

        if (number > way.number) {
            if (way.right !== 0) {
                way = way.right;
            } else {
                way.right = new Node(number);
                return root;
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
}

function binarySearch(number) {
    if (typeof number !== 'number') {
        throw new Error("Wrong arguments type");
    }

    let way = root;
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

function binaryDelete(number, way, parent) {
    if (typeof number !== 'number') {
        throw new Error("Wrong arguments type");
    }
    
    way = way || root;

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
            if(way === root) {
                root = 0;
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
            if(way === root) {
                root.number = root.right.number;
                root.left = root.right.left;
                root.right = root.right.right;
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
            if(way === root) {
                root.number = root.left.number;
                root.left = root.left.left;
                root.right = root.left.right;
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

            for (i = 0; true; i++) {
            
                if (minElement.left !== 0) {
                    minElementPerent = minElement;
                    minElement = minElement.left;
                }

                if (minElement.left === 0) {
                    way.number = minElement.number;
                    if(!(minElementPerent === way)) {
                        minElementPerent.left = 0;
                    } else {
                        way.right = minElementPerent.right;
                    }

                    if (minElement.right !== 0) {
                        minElementPerent.left = minElement.right;
                    } 

                    return;
                }
            }
        }
    }

    return binaryDelete(number, way, parent);
}

