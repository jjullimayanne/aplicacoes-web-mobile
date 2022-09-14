class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <style>
       footer {
           background-color: #A5410F;
           list-style: none;
           height: 200px;
           width: 100%;
           bottom: 0;
       }
       </style>
        <footer>
        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="work.html">Work</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
    </footer>
        
        `;
  }
}

customElements.define('footer-component', Footer);
