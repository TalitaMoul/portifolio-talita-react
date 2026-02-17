// ==========================================
//INTRODUÇÃO: TIPOS PRIMITIVOS EM TYPESCRIPT
// ==========================================

// 1. Number (Para todos os tipos de números, como inteiros e decimais)
// ------------------------------------------

let precoProduto: number = 199.99;
let quantidadeEstoque: number = 50;

console.log(
  `Preço do Produto: R$${precoProduto}, Estoque: R$${quantidadeEstoque}`,
);

// Demonstração de erro (TS evita em tempo de compilação):
// precoProduto = "199.99"; // Erro: Type (tipagem) 'string' is not assignable to type 'number'.

// 2. String (Para texto)
// ------------------------------------------

let nomeUsuario: string = "Alice";
let emailUsuario: string = "alice@example.com";

let saudacao: string = `Olá, ${nomeUsuario}! Seu email é ${emailUsuario}.`;

console.log(saudacao);

// 3. Boolean (Para valores verdadeiros ou falsos)
// ------------------------------------------

let isAdmin: boolean = true;
let isContaAtiva: boolean = false;

function checarPermissao(admin: boolean): string {
  return admin ? "Acesso total concedido." : "Acesso restrito.";
}

console.log(`3. Permmissão: ${checarPermissao(isAdmin)}`);
