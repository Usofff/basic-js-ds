const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = { data, left: null, right: null };

    if (!this.rootNode) {
      this.rootNode = newNode;
      return this;
    }

    let current = this.rootNode;
    while (true) {
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (data > current.data) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return this; 
      }
    }
  }

  has(data) {
    let current = this.rootNode;
    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  find(data) {
    let current = this.rootNode;
    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    let current = this.rootNode;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

    remove(data) {
        this.rootNode = this._removeNode(this.rootNode, data);
        return this;
    }

    _removeNode(node, data) {
        if (!node) {
            return null;
        }

        if (data < node.data) {
            node.left = this._removeNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this._removeNode(node.right, data);
            return node;
        } else {

            if (!node.left && !node.right) {
                return null;
            }

            if (!node.left) {
                return node.right;
            }
            if (!node.right) {
                return node.left;
            }

            let temp = node.right;
            while (temp.left) {
                temp = temp.left;
            }
            node.data = temp.data;
            node.right = this._removeNode(node.right, temp.data);
            return node;
        }
    }
}

module.exports = {
  BinarySearchTree
};