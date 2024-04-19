function validarLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    // Aqui você pode adicionar a lógica para o login
    // Por exemplo, enviar os dados para um servidor para autenticação
    // Ou apenas mostrar uma mensagem de sucesso
    alert("Login bem sucedido!");
}




