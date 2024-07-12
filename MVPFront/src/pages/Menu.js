import { useNavigate } from 'react-router-dom'
import banner from '../assets/banner.png'

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
console.log("currentTime  "+currentTime );
var currentTimeAq = 0;
console.log("currentTimeAq  "+currentTimeAq );
var currentTimeMu = 0;
console.log("currentTimeMu  "+currentTimeMu );
var currentTimeAl = 0;
console.log("currentTimeAl  "+currentTimeAl );
var currentTimeIs = 0;
console.log("currentTimeIs  "+currentTimeIs );
var currentTimeBa = 0;
console.log("currentTimeBa  "+currentTimeBa );
var currentTimeBr = 0;
console.log("currentTimeBr  "+currentTimeBr );
var currentTimePr = 0;
console.log("currentTimePr  "+currentTimePr );

// Funções para alternar a cor do texto
const mudaCor = () => {
	console.log("mudaCor currentTime  "+currentTime );

	if (currentTime === 0) {
   	 	document.getElementById("text").style.color="green";
 		currentTime = 1;
        console.log("green currentTime  "+currentTime );  
	}

	else if (currentTime > 0) {
   	 	document.getElementById("text").style.color="black";
    	currentTime = 0;
	    }
}
const mudaCorAq = () => {
	console.log("mudaCor currentTimeAq  "+currentTimeAq );

	if (currentTimeAq === 0) {
   	 	document.getElementById("textAq").style.color="green";
        menuTab["Aquecimento"] = true;
 		currentTimeAq = 1;
        console.log("green currentTimeAq  "+currentTimeAq ); 
        console.log("menuTabAq "+menuTab["Aquecimento"]);
	}

	else if (currentTimeAq > 0) {
   	 	document.getElementById("textAq").style.color="black";
        menuTab["Aquecimento"] = false;
    	currentTimeAq = 0;
        console.log("menuTabAq "+menuTab["Aquecimento"]);
	}
}
const mudaCorMu = () => {
    console.log("mudaCor currentTimeMU  "+currentTimeMu );
    
    if (currentTimeMu === 0) {
        document.getElementById("textMu").style.color="green";
        menuTab["Musculação"] = true;
        currentTimeMu = 1;
        console.log("green currentTime  "+currentTimeMu ); 
        console.log("menuTabMu "+menuTab["Musculação"]);
    }

    else if (currentTimeMu > 0) {
        document.getElementById("textMu").style.color="black";
        menuTab["Musculação"] = false;
        currentTimeMu = 0;
        console.log("menuTabMu "+menuTab["Musculação"]);
    }


}

const mudaCorAl = () => {
    console.log("mudaCorAl currentTimeAl  "+currentTimeAl );
    
    if (currentTimeAl === 0) {
        document.getElementById("textAl").style.color="green";
        menuTab["Alongamento"] = true;
        currentTimeAl = 1;
        console.log("green currentTime  "+currentTimeAl ); 
        console.log("menuTabAl "+menuTab["Alongamento"]);
    }

    else if (currentTimeAl > 0) {
        document.getElementById("textAl").style.color="black";
        menuTab["Alongamento"] = false;
        currentTimeAl = 0;
        console.log("menuTabAl "+menuTab["Alongamento"]);
    }
}

const mudaCorIs = () => {
    console.log("mudaCorIs currentTimeIs  "+currentTimeIs );
    
    if (currentTimeIs === 0) {
        document.getElementById("textIs").style.color="green";
        menuTab["Isométrico"] = true;
        currentTimeIs = 1;
        console.log("green currentTime  "+currentTimeIs ); 
        console.log("menuTabIs "+menuTab["Isométrico"]);
    }

    else if (currentTimeIs > 0) {
        document.getElementById("textIs").style.color="black";
        menuTab["Isométrico"] = false;
        currentTimeIs = 0;
        console.log("menuTabIs "+menuTab["Isométrico"]);
    }


}

const mudaCorBa = () => {
    console.log("mudaCorBa currentTimeBa  "+currentTimeBa );
    
    if (currentTimeBa === 0) {
        document.getElementById("textBa").style.color="green";
        menuTab["Barriga"] = true;
        currentTimeBa = 1;
        console.log("green currentTime  "+currentTimeBa ); 
        console.log("menuTabBa "+menuTab["Barriga"]);
    }

    else if (currentTimeBa > 0) {
        document.getElementById("textBa").style.color="black";
        menuTab["Barriga"] = false;
        currentTimeBa = 0;
        console.log("menuTabBa "+menuTab["Barriga"]);
    }
}

const mudaCorBr = () => {
    console.log("mudaCorBr currentTimeBr  "+currentTimeBr );
    
    if (currentTimeBr === 0) {
        document.getElementById("textBr").style.color="green";
        menuTab["Braço"] = true;
        currentTimeBr = 1;
        console.log("green currentTime  "+currentTimeBr ); 
        console.log("menuTabBr "+menuTab["Braço"]);
    }

    else if (currentTimeBr > 0) {
        document.getElementById("textBr").style.color="black";
        menuTab["Braço"] = false;
        currentTimeBr = 0;
        console.log("menuTabBr "+menuTab["Braço"]);
    }
}

const mudaCorPr = () => {
    console.log("mudaCorPr currentTimePr  "+currentTimePr );
    
    if (currentTimePr === 0) {
        document.getElementById("textPr").style.color="green";
        menuTab["Perna"] = true;
        currentTimePr = 1;
        console.log("green currentTime  "+currentTimePr ); 
        console.log("menuTabPr "+menuTab["Perna"]);
    }

    else if (currentTimePr > 0) {
        document.getElementById("textPr").style.color="black";
        menuTab["Perna"] = false;
        currentTimePr = 0;
        console.log("menuTabPr "+menuTab["Perna"]);
    }
}




export default function Menu() {
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
                    <h3>Tipo de trabalho</h3> 
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
                    <button className='botao' onClick={() => navigate('/products')}>Veja os Movimentos</button>
                    <p></p>
                    <button className="botao" onClick={() => navigate('/') }>Sair</button>
                </div>
            </section>
        </div>


    )

}