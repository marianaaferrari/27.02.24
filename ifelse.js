function verificarLogin() { //Declaração da função verificarLogin().
    let txtLogin = document.getElementById("txtLogin"); //Obtém o elemento de entrada de texto para o nome de usuário do documento HTML com o ID "txtLogin" e armazena-o na variável txtLogin.
    let txtSenha = document.getElementById("txtSenha"); //Obtém o elemento de entrada de senha do documento HTML com o ID "txtSenha" e armazena-o na variável txtSenha.

    let login = "teste"; //Define uma variável login com o valor "teste", que representa o nome de usuário esperado.
    let senha = "teste"; //Define uma variável senha com o valor "teste", que representa a senha esperada.

    if (txtLogin.value == login && txtSenha.value == senha) { //Verifica se o valor do campo de entrada de texto para o nome de usuário (txtLogin.value) é igual ao valor esperado para o nome de usuário (login) e se o valor do campo de entrada de senha (txtSenha.value) é igual ao valor esperado para a senha (senha)
        console.log("Logado com sucesso!"); //Se as credenciais fornecidas estiverem corretas, imprime "Logado com sucesso!" no console.
    } else { //Caso as credenciais fornecidas não estejam corretas, a execução continua no bloco else.
        console.log("Login ou senha incorretos! Digite e tente novamente."); //Se as credenciais fornecidas não estiverem corretas, imprime "Login ou senha incorretos! Digite e tente novamente." no console
    }
}
    
