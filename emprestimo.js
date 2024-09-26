/*Método de consulta do HTML por meio do id do formulário*/

document.getElementById('form-emprestimo').addEventListener('submit', function(event) {

    event.preventDefault(); // Impede o envio real do formulário
    
    /*Cria um objeto para receber os dados do formulário*/
    
    const formData = new FormData(this);
    
    const data = {}; // Declaração de objeto
    
    formData.forEach((value, key) => data[key] = value);/*Criação de array
    
    para receber os dados vindos do formjulário do HTML */
    
    // Foreach: Método de consulta em arrays ou objetos.
    
    console.log("Dados a serem enviados:", data);
    
    // Simulação de resposta do servidor
    
    alert("Empréstimo registrado com sucesso!");
    
    });