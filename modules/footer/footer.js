/* eslint-disable spaced-comment */
//criando o componente de footer que vai ser reutilizado, ele extende de um HTMLElement

//assim pode criar-se um elemento html
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <style> 
       footer{
        background-color: #A5410F;
        list-style: none;
        color: #ffffff;
        padding: 45px 0;
        text-align: center;
        height: 200px;
        width: 100%;
        bottom: 0;
      }
      
      .rodape-info{
        margin-bottom: 25px;
        font-size: 15px;
      }
      
      .rodape-info a{
        font-size: 16px;
        color:#d5963d;
      }
      
      .icones-rodape{
        height: 100%;
      }
      
      .icones-rodape a{
        color: #ffffff;
        font-size: 42px;
        margin: 0 15px;
        bottom:0px;
      }
      
      .icones-rodape a:hover{
        color: #d5963d;
      }
      }
       </style>
        <footer>
         <div class="rodape-info">
            2022 | Desenvolvido por <a href="https://www.linkedin.com/feed/">Julli Mayanne</a>
          </div>
         <div class="icones-rodape">
           <a href= "https://github.com/jjullimayanne" class="fab fa-github"></a>
           <a href= "https://www.linkedin.com/feed/" class="fab fa-linkedin-in"></a>
         </div>
      </footer>
        
        `;
  }
}

customElements.define('footer-component', Footer);
