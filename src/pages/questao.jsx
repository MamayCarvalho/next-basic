/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

const LoadingSpinner = () => {
    return <div>Carregando...</div>;
};

export default function questao() {


    const [questao, setQuestao] = useState({});

    useEffect(() => {
        fetch("http://localhost:4077/api/questao/1")
            .then(resp => resp.json())
            .then(questao => setQuestao(questao));
    }, []);

    if (!questao) {
        return <LoadingSpinner />;
    }

    const respo = [questao.resposta]

    return (
        <div>
            <h1>Questão</h1>
            <div>
                {respo.map((resposta, index) => (<li key={index}>{resposta}</li>))}
            </div>
        </div>
    )
}