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

    for (let i = 1; i < this.length; i++) {

        for (let j = 0; j < i; j++) {

            if (callback(this[j], this[i], property)) {
                let temporary = this[i];
                for (let m = i; m > j; m--) {
                    this[m] = this[m - 1];
                }
                this[j] = temporary;
            }
        }
    }
    return this;
}

Array.prototype.bubbleSort = function (callback, property) {
    if (typeof callback !== 'function') {
        throw new Error("callback is not a function");
    }

    for (let i = 0; i < this.length; i++) {
        let beSwep = false;
        for (let j = 0; j < this.length - i; j++) {
            let temporary;
            if (callback(this[j], this[j + 1], property)) {
                beSwep = true;
                temporary = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temporary;

            }
        }
        if (!beSwep) {
            return this;
        }
    }

}



class Node {
    constructor(number) {
        this.number = number;
        this.left = 0;
        this.right = 0;
    }

    addElement(number, node) {
        node = node || this;
        if (this.number === undefined) {
            this.number = number;
            return;
        }

        if (number > node.number) {
            if (node.right !== 0) {
                return this.addElement(number, node.right);
            }

            node.right = new Node(number);

            return;
        }

        if (number < node.number) {
            if (node.left !== 0) {
                return this.addElement(number, node.left);
            }

            node.left = new Node(number);
            return;

        }

        if (number = node.number) {
            throw new Error("number is duplicated");
        }
    }

    searchElement(number, node) {
        node = node || this;

        if (node.number === number) {
            return node;
        }

        if (number > node.number) {

            if (node.right === 0) {
                throw new Error("number is not found");
            }

            return this.searchElement(number, node.right);
        }

        if (number < node.number) {

            if (node.left === 0) {
                throw new Error("number is not found");
            }
            return this.searchElement(number, node.left);
        }
    }

    deleteElement(number, carentNode, parentNode, minElement) {
        if (typeof number !== 'number') {
            throw new Error("Wrong arguments type");
        }

        carentNode = carentNode || this;
        parentNode = parentNode || 0;

        if (number > carentNode.number) {
            parentNode = carentNode;
            carentNode = carentNode.right;
            return this.deleteElement(number, carentNode, parentNode);
        }

        if (number < carentNode.number) {
            parentNode = carentNode;
            carentNode = carentNode.left;
            return this.deleteElement(number, carentNode, parentNode);
        }

        if (number === carentNode.number) {
            carentNode = carentNode || carentNode;

            if ((carentNode.left === 0) && (carentNode.right === 0)) {

                if (carentNode === this) {
                    root = new Node;
                    return;
                }

                if (carentNode.number < parentNode.number) {
                    parentNode.left = 0;
                }

                if (carentNode.number > parentNode.number) {
                    parentNode.right = 0;
                }

                return;
            }

            if ((carentNode.left === 0) && (carentNode.right !== 0)) {

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

            if ((carentNode.left !== 0) && (carentNode.right === 0)) {

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

            if ((carentNode.left !== 0) && (carentNode.right !== 0)) {                
                minElement = minElement || carentNode;

                if (minElement === carentNode) {
                    parentNode = minElement;
                    minElement = minElement.right;
                }

                if (minElement.left !== 0) {
                    parentNode = minElement;
                    minElement = minElement.left;

                    return this.binaryDelete(number, carentNode, parentNode, minElement)
                }

                if (minElement.left === 0) {
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