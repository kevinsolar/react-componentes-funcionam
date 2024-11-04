# Um pouco de como funciona a criaçãode componentes com props no React:

-  Como o arquivo App.js é sempre o que vai ser o centralizador e provavelmene pode ser que vai ocnter a função, é bom começar passando as props por ele.  
   Exemplo do organo com o deletar colaborador:  
   App.js passar a prop dentro do JSX que quer adicionar -> ir para o próximo arquivo que tem o JSX, nesse caso é o Time e passar a prop -> receber isso em um "html" propriamente criado.  

- React é uma linguagem declarativa, ou seja, ela espera algo do elemento pai ser alterado (atráves do State) para reverberar para os filhos, isso é o : one way data binding.  
- já outros frameworks, como Angular , são two way data binding, que podem enviar do filho para o pai, do pai para o filho.  
