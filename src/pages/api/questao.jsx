import { useEffect, useState } from "react";

const LoadingSpinner = () => {
    return <div>Carregando...</div>;
};

export default function questao() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [questao, setQuestao] = useState({});

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch("http://localhost: 4077/api/questao/8045")
          .then(resp => resp.json())
          .then(questao => setQuestao(questao));
    }, []);

    if (!questao) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <h1>Questão</h1>
            <div>
                <span>{questao.enunciado}</span>
            </div>
        </div>
    )
}