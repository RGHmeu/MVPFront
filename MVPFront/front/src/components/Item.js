import { useState } from "react";
import React from 'react';
import { VIDEOS_TYPES } from "./constGifs";
import { Link } from "react-router-dom";
import { useNavigate} from 'react-router-dom'

export default function Item(props) {
    const product = props.product
    const navigate = useNavigate()

    // Função para confirmar escolha do movimento
    const escolheMov = () => {
        if (window.confirm(`Movimento escolhido`)) {
            alert('Movimento guardado com sucesso!')
        }
        }

    return (

        <article className="product">

            <img src={VIDEOS_TYPES[product.image]} alt="Julia"/>
            <Link to={`/products/${product.id}/${product.nome}`} state={{productInfo: product}}>
                <p className="name-product">{product.nome}</p>
            </Link>
            <p />
            <button className="botao" onClick={escolheMov}>Escolher</button>
            <p />
            <button className="botao" onClick={() => 
                navigate('/menu')}>Voltar</button>
            <p />
            <button className="botao" onClick={() => 
                navigate('/')}>Sair</button>

        </article>

    );
}