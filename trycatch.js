const variavel1 = "valor somente leitura";  //Declara uma constante chamada variavel1 e atribui o valor "valor somente leitura". Como é uma constante, seu valor não pode ser alterado posteriormente
var variavel2 = "valor editável"; //declaraçao de variavel que reebe o nome de variavel2 e o valor atribuido é valor iditavel

try { //Utiliza blocos try e catch para lidar com exceções caso ocorram
    variavel1 = "valor não permitido"; //Tenta atribuir um novo valor à variavel1. Isso deveria gerar um erro, pois variavel1 é uma constante e seu valor não pode ser alterado
    console.log("a variavel1 foi alterada para: ", variavel1); //Tenta imprimir o valor da variavel1 após a tentativa de reatribuição. Este código nunca é alcançado devido à exceção lançada anteriormente
} catch (e) {
    console.error("Ops ! Ocorreu o erro: ", e); //Se ocorrer uma exceção durante o bloco try, o erro é capturado e impresso no console
}

try { 
    variavel2 = "valor permitido"; //Tenta atribuir um novo valor à variavel2. Como variavel2 foi declarada com var, isso é permitido
    console.log("a variavel2 foi alterada para: ", variavel2); //Imprime o novo valor de variavel2
} catch (e) { 
    console.error("Ops! Ocorreu o erro:", e); //Se ocorrer uma exceção durante a segunda tentativa de atribuição, o erro é capturado e impresso no console
}
