import { useState, useEffect } from "react";
import axios from "axios";

function Button() {
    const [useButtonVariable, setUseButtonVariable] = useState(0);
    const [responseData, setResponseData] = useState("");

    // Função para incrementar o contador
    const increment = () => {
        setUseButtonVariable((prevCount) => prevCount + 1);
    };

    // useEffect para buscar dados da API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1'); // API de exemplo
                setResponseData(response.data.title); // Ajuste o dado conforme necessário
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
                setResponseData("Erro ao buscar dados");
            }
        };

        fetchData();
    }, []); // Executa apenas na montagem do componente

    return (
        <div>
            <h1>Count: {useButtonVariable}</h1>
            <button onClick={increment}>Click me</button>
            <br />
            <h3>Google Response: {responseData}</h3>
        </div>
    );
}

export default Button;
