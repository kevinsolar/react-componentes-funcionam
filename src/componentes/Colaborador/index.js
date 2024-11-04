import './colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai';
import { GoStarFill, GoStar } from "react-icons/go";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

   function favoritar() {
      aoFavoritar(colaborador.id);
   }

   return (<div className="colaborador">

      <AiFillCloseCircle
         size={25}
         className='deletar'
         
         //Como teste fizemos a passagem direto do aoDeletar(colab.id), mas vimos que isso só faz ele excutar isso já na hora e para todos, mesmo sem o click, pois isso é a resposta da função. Para funcionar como se entende, precisamos declarar como uma função anonima.
         onClick={() => aoDeletar(colaborador.id)}
      />

      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
         <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
         <h4>{colaborador.nome}</h4>
         <h5>{colaborador.cargo}</h5>
         <div className='favoritar'>
            {colaborador.favorito
            ? <GoStarFill size={26} color='#cebf12' onClick={favoritar} /> 
            : <GoStar size={24} onClick={favoritar} /> }
         </div>
      </div>
   </div>)
}

export default Colaborador