/*
1.- Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no.
2.- Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.
3.- Escribe una función que visualice los nodos que están en el nivel n de un árbol binario.
4.- Escribe una función que devuelva el número de hojas de un árbol binario.
*/

//Determinar si dos arboles binarios son identicos
function areIdentical(root1, root2) {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;

  return (
    root1.value === root2.value &&
    areIdentical(root1.left, root2.left) &&
    areIdentical(root1.right, root2.right)
  );
}

//Copiar un arbol binario
function copyTree(root) {
  if (root === null) return null;

  const newNode = { value: root.value, left: null, right: null };
  newNode.left = copyTree(root.left);
  newNode.right = copyTree(root.right);

  return newNode;
}

//visualizarlos nodosen el nivel n de un arbol binario
function nodesAtLevel(root, n) {
  const result = [];
  function traverse(node, level) {
    if (node === null) return;
    if (level === n) {
      result.push(node.value);
      return;
    }
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }
  traverse(root, 0);
  return result;
}

//contar el numerode hojas de un arbol binario
function countLeaves(root) {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1;

  return countLeaves(root.left) + countLeaves(root.right);
}
