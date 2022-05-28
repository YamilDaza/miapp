import './App.css';
import Description from './Components/Description.jsx'

const App = () => {

  const mensaje = 'Hola Mundo';
  const saludar = true;

  return (
    <div className="App">
      <h1>{mensaje}</h1>
      <p>{saludar ? 'En linea ReactJS' : 'Desconectado ReactJS'}</p>

      <div>
         <Description nombre='Yamil Daza' curso='ReactJS'/>
         <Description nombre='AAA' curso='JavaScript'/>
         <Description nombre='BBB' curso='MongoDB'/>
      </div>

    </div>
  );
}

export default App;




/* DATOS DE LA CLASE:
podemos tener un componente de las siguientes maneras:
1)- function app(){
      return(
        todo lo que va a retornar
      )
    } 

2)- const App = () => {
      return(
        todo lo que va a retornar
      )
    }   

Una forma mas "corta" de retorne:
const App = () => (
  todo lo que va retonar (esto implica sacar la palabra reservada return y los corchetes padre)
)

#OTRO DATO: todas las etiquetas JSX tiene que tener apertura de cierre:
<img></img>   OR    <img />

#NO DEBEMOS CREAR COMPONENTES DENTRO DE OTROS, recordar que los componentes comienzan con mayuscula, SIEMPRE crear componentes por fuera e incluso en otros archivos*/

