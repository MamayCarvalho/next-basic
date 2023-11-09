export default function questao(){
    fetch ('http://localhost: 4077/api/questao/1020') //Testar a chamada a API - Isso vai retornar uma promessa e como resposta vai ter um método json que vai trazer a resposta.
    //Ele também vai retornar uma promessa.
    .then(resp => resp.json() ) //Aqui vai chegar a resposta que contém um método Json
    .then(resp => console.log(json)) // Aqui vai pegar o Json recebido do Back-end e mostrar no console.

    return(
        <div>
            Questão
        </div>
    )
}