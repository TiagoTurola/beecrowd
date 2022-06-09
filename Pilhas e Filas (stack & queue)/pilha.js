//ma estrutura de pilha (stack), por outro lado, estabelece uma política LIFO -- last in, first out.
const pilha = [1, 5, 7, 9, 2];

const add = (item) => {
  pilha.push(item);
};

const remove = () => {
  pilha.pop();
};
