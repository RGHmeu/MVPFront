import { useNavigate } from 'react-router-dom'
import banner from '../assets/banner.png'
import { createContext, useContext, useState } from 'react';

// const valor = useContext({Contexto});
// <Context.Consumer value={{menuTab}}>

// </Context.Consumer>
 
//        console.log = (valor.tipoTrab);


 const menuTab = {
     "Aquecimento": false,
     "Musculação": false,
     "Alongamento": false,
     "Isométrico": false,
     "Barriga": false,
     "Braço": false,
     "Perna": false
     }
 
var currentTime = 0;
var currentTimeAq = 0;
var currentTimeMu = 0;
var currentTimeAl = 0;
var currentTimeIs = 0;
var currentTimeBa = 0;
var currentTimeBr = 0;
var currentTimePr = 0;


// Funções para alternar a cor do texto e
// marcar a opção escolhida
const mudaCor = () => {
	if (currentTime === 0) {
   	 	document.getElementById("text").style.color="green";
 		currentTime = 1;
	}
	else if (currentTime > 0) {
   	 	document.getElementById("text").style.color="black";
    	currentTime = 0;
	    }
}
const mudaCorAq = () => {
	if (currentTimeAq === 0) {
   	 	document.getElementById("textAq").style.color="green";
        menuTab["Aquecimento"] = true;
 		currentTimeAq = 1;
	}
	else if (currentTimeAq > 0) {
   	 	document.getElementById("textAq").style.color="black";
        menuTab["Aquecimento"] = false;
    	currentTimeAq = 0;
	}
}
const mudaCorMu = () => {
    if (currentTimeMu === 0) {
        document.getElementById("textMu").style.color="green";
        menuTab["Musculação"] = true;
        currentTimeMu = 1;
    }
    else if (currentTimeMu > 0) {
        document.getElementById("textMu").style.color="black";
        menuTab["Musculação"] = false;
        currentTimeMu = 0;
    }
}
const mudaCorAl = () => {
    if (currentTimeAl === 0) {
        document.getElementById("textAl").style.color="green";
        menuTab["Alongamento"] = true;
        currentTimeAl = 1;
    }
    else if (currentTimeAl > 0) {
        document.getElementById("textAl").style.color="black";
        menuTab["Alongamento"] = false;
        currentTimeAl = 0;
    }
}
const mudaCorIs = () => {
    if (currentTimeIs === 0) {
        document.getElementById("textIs").style.color="green";
        menuTab["Isométrico"] = true;
        currentTimeIs = 1;
    }
    else if (currentTimeIs > 0) {
        document.getElementById("textIs").style.color="black";
        menuTab["Isométrico"] = false;
        currentTimeIs = 0;
    }
}
const mudaCorBa = () => {
    if (currentTimeBa === 0) {
        document.getElementById("textBa").style.color="green";
        menuTab["Barriga"] = true;
        currentTimeBa = 1;
    }
    else if (currentTimeBa > 0) {
        document.getElementById("textBa").style.color="black";
        menuTab["Barriga"] = false;
        currentTimeBa = 0;
    }
}
const mudaCorBr = () => {
    if (currentTimeBr === 0) {
        document.getElementById("textBr").style.color="green";
        menuTab["Braço"] = true;
        currentTimeBr = 1;
    }
    else if (currentTimeBr > 0) {
        document.getElementById("textBr").style.color="black";
        menuTab["Braço"] = false;
        currentTimeBr = 0;
    }
}
const mudaCorPr = () => {
    if (currentTimePr === 0) {
        document.getElementById("textPr").style.color="green";
        menuTab["Perna"] = true;
        currentTimePr = 1;
    }
    else if (currentTimePr > 0) {
        document.getElementById("textPr").style.color="black";
        menuTab["Perna"] = false;
        currentTimePr = 0;
        console.log("menuTabPr "+menuTab["Perna"]);
    }
}
const ocultarExpandir = () => {
    if (currentTimePr === 0) {
        document.getElementById("TipoTrab").style.color="green";
        currentTimePr = 1;
    }
    else if (currentTimePr > 0) {
        document.getElementById("TipoTrab").style.color="black";
        currentTimePr = 0;
        console.log("menuTabPr "+menuTab["Perna"]);
    }
}


export default function Options() {
    const navigate = useNavigate()
    return (
        <div className="content-product">
            <header>
                <div className="user">
                    <span>Usuário</span>
                </div>
            </header>

            <section className="banner">
                <img src={banner} alt="Banner" />
            </section>
            
            <section>
                <div className="menu">
                    
                    <h2>Filtros:</h2>
                    <ul>
                    <li id="text" onClick={mudaCor}> <h4>Mais recentes</h4><p>&nbsp;</p>
                    </li>
                    
                    </ul>
                    <h3 id="TipoTrab">Tipo de trabalho </h3> 
                    <ul role="list">
                    <li id="textAq" onClick={mudaCorAq}><h4>Aquecimento</h4></li><p></p>
                    <li id="textMu" onClick={mudaCorMu}><h4>Musculação</h4></li><p></p>
                    <li id="textAl" onClick={mudaCorAl}><h4>Alongamento</h4></li><p></p>
                    <li id="textIs" onClick={mudaCorIs}><h4>Isométrico</h4></li><p>&nbsp;</p>
                    </ul>
                    <p></p>
                    <h4>Local do corpo em foco </h4>
                    <ul>
                    <li id="textBa" onClick={mudaCorBa}><h4>Barriga</h4></li><p></p>
                    <li id="textBr" onClick={mudaCorBr}><h4>Braço</h4></li><p></p>
                    <li id="textPr" onClick={mudaCorPr}><h4>Perna</h4></li><p>&nbsp;</p>
                    </ul>
                    <p></p>
                    <footer className="footer">
                    <p>Selecione os tipos de trabalho e
                    partes do corpo onde deseja ter resultados.</p>
                    <p></p>
                    </footer>   
                    <button className='botao' onClick={() => navigate('/products')}>Veja os Movimentos</button>
                    <p></p>
                    <button className="botao" onClick={() => navigate('/') }>Sair</button>
                </div>
            </section>
        </div>


    )

}