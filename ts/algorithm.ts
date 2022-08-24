

type CallbackPrimitive<T> = (elementPrev:T, elementNext:T)=>boolean;

type CallbackObject<T> = (elementPrev:T, elementNext:T, property:string)=>boolean;

interface ObjectType {
    [key:string]:Primitive
}

type Primitive = number|string|boolean|Primitive[]

type SortSignature<T> = (this:T[], callback:CallbackObject<T> | CallbackPrimitive<T>, property:string)=>T[]



let sortObjectArr:CallbackObject<ObjectType> = function (elementPrev, elementNext, property) {
    return (elementPrev[property] > elementNext[property]);
}

let sortPrimitiveArr: CallbackPrimitive<Primitive> = function(elementPrev, elementNext) {
    return (elementPrev > elementNext);
}

let insertionSort:SortSignature<Primitive|ObjectType> = 
function (this, callback,property) {
    if (typeof callback !== 'function') {
        throw new Error("callback is not a function");
    }
    
    for (let i = 1; i < this.length; i++) {
        let temporary = this[i];
        let j = i - 1;
        
        while (callback(this[j], temporary, property) && (j >= 0)) {
            this[j + 1] = this[j];
            j-- ; 
        } 

        this[j + 1] = temporary;                
    } 
    
    return this;
}

declare interface Array<T> {
        insertionSort:SortSignature<T>
}

 Array.prototype.insertionSort = insertionSort;

//  //////////////////////////////////////////////////

let bubbleSort:SortSignature<Primitive|ObjectType> = function (callback, property) {
    if (typeof callback !== 'function') {
        throw new Error("callback is not a function");
    }

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i; j++) {
           
            if (callback(this[j], this[j + 1], property)) {
                let temporary = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temporary;
            }
        }
    }

    return this;
}

declare interface Array<T> {
        bubbleSort:SortSignature<T>
}

 Array.prototype.bubbleSort = bubbleSort;

//  /////////////////////////////////////////////////
interface NodeInterface<T> {
    number:T,
    left:null | T,
    right:null | T,
    add()
}
class Node {
    constructor(number) {
        this.number = number;
        this.left = null;
        this.right = null;
    }

    add(number, node) {
        node = node || this;
        if (this.number === undefined) {
            this.number = number;
            return;
        }

        if (number > node.number) {
            if (node.right !== null) {
                return this.add(number, node.right);
            }

            node.right = new Node(number);

            return;
        }

        if (number < node.number) {
            if (node.left !== null) {
                return this.add(number, node.left);
            }

            node.left = new Node(number);
            return;

        }

        if (number = node.number) {
            throw new Error("number is duplicated");
        }
    }

    search(number, node) {
        node = node || this;

        if (node.number === number) {
            return node;
        }

        if (number > node.number) {

            if (node.right === null) {
                throw new Error("number is not found");
            }

            return this.search(number, node.right);
        }

        if (number < node.number) {

            if (node.left === null) {
                throw new Error("number is not found");
            }
            return this.search(number, node.left);
        }
    }

    delete(number, carentNode, parentNode, minElement) {
        if (typeof number !== 'number') {
            throw new Error("Wrong arguments type");
        }

        carentNode = carentNode || this;
        parentNode = parentNode || 0;

        if (number > carentNode.number) {
            if (carentNode.right === null) {
                throw new Error("number is not found");
            }
            parentNode = carentNode;
            carentNode = carentNode.right;
            return this.delete(number, carentNode, parentNode);
        }

        if (number < carentNode.number) {
            if (carentNode.left === null) {
                throw new Error("number is not found");
            }
            parentNode = carentNode;
            carentNode = carentNode.left;
            return this.delete(number, carentNode, parentNode);
        }

        if (number === carentNode.number) {
            carentNode = carentNode || carentNode;

            if ((carentNode.left === null) && (carentNode.right === null)) {

                if (carentNode === this) {
                    root = new Node;
                    return;
                }

                if (carentNode.number < parentNode.number) {
                    parentNode.left = null;
                }

                if (carentNode.number > parentNode.number) {
                    parentNode.right = null;
                }

                return;
            }

            if ((carentNode.left === null) && (carentNode.right !== null)) {

                if (carentNode === this) {
                    this.number = this.right.number;
                    this.left = this.right.left;
                    this.right = this.right.right;
                    return;
                }

                if (carentNode.number < parentNode.number) {
                    parentNode.left = carentNode.right;
                }

                if (carentNode.number > parentNode.number) {
                    parentNode.right = carentNode.right;
                }

                return;
            }

            if ((carentNode.left !== null) && (carentNode.right === null)) {

                if (carentNode === this) {
                    this.number = this.left.number;
                    this.left = this.left.left;
                    this.right = this.left.right;
                    return;
                }

                if (carentNode.number < parentNode.number) {
                    parentNode.left = carentNode.left;
                }

                if (carentNode.number > parentNode.number) {
                    parentNode.right = carentNode.left;
                }

                return;
            }

            if ((carentNode.left !== null) && (carentNode.right !== null)) {                
                minElement = minElement || carentNode;

                if (minElement === carentNode) {
                    parentNode = minElement;
                    minElement = minElement.right;
                }

                if (minElement.left !== null) {
                    parentNode = minElement;
                    minElement = minElement.left;

                    return this.delete(number, carentNode, parentNode, minElement)
                }

                if (minElement.left === null) {
                    carentNode.number = minElement.number;

                    if (parentNode !== carentNode) {
                        parentNode.left = minElement.right;
                    } else {
                        carentNode.right = minElement.right;
                    }

                    return;
                }
            }
        }
    }
}

 let binaryTree = new Node();