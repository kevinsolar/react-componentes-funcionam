import './campo.css'

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
   //declaramos o type como text para o padrão ser text, até que seja declaro outra coisa em arquivos acima.
   return (
   <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input 
         type={type}
         value={valor}
         onChange={evento => aoAlterado(evento.target.value)}
         required={obrigatorio}
         placeholder={placeholder}
      /> 
   </div>)
}

export default Campo