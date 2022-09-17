/* eslint-disable spaced-comment */

//criando o componente de header que vai ser reutilizado, ele extende de um HTMLElement

//assim pode criar-se um elemento html
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
          nav {
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-right: 5%
          }

          nav li {
            display: inline-block;
            margin: 0 0 0 15px;    
        }
  
          ul {
            padding: 0;
            list-style: none;
          }
          
          a {
            font-weight: 700;
            margin: 0 25px;
            color: #0a0a23;
            text-decoration: none;
          }
          
          a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
          }
        </style>
        <header>
          <nav>
            <ul>
              <li><a href="#sobre-mim">Sobre mim</a></li>
              <li><a href="#competencias">Formação</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
        </header>
      `;
  }
}

customElements.define('header-component', Header);
