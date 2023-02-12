import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard1 extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  .card
  {
    background-color: grey;
    border: solid black;
    width: 400px;
    display: inline-flex;
  }
  
  .btn { 
    border: 2px solid blue;
    text-transform: uppercase;
    padding: 2px 2px;
    background-color: white;
    font-size: 12px;
    text-align: center;
    margin: auto;
    display: flex;
    display: center;
  }
  
  .title-header
  {
    text-align: center;
  }
  
  .desc
  {
    text-align: center;
    display: none;
  }
  
  
  @media screen and (min-width: 500px) and (max-width: 800px)
  {
    .btn
    {
      display: none;
    }
  }
  
  @media screen and (max-width: 500px)
  {
    
    .card
    {
      scale: 0.7;
    }
    
    .img
    {
      scale: 0.6;
    }
   
  }
  
  .img {
    width: 400px;
  }
  
  .duplicate:hover {
    background-color: yellow;
  }
  
  .duplicate:focus {
    background-color: yellow;
  }
  
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <div class="card" id="card1">
    <div>
    <div class="title-header">
      <h2> Jalen Hurts </h2>
    </div>
    <img class = "img" src="https://th.bing.com/th/id/OIP.NX-MOMDx5uAkx4YnlPWexAHaE7?pid=ImgDet&rs=1" alt="jalen hurts">
    <p class = "desc"> Jalen Hurts is a football player </p>
    <!--<a href="https://hax.psu.edu/">-->
    <button class="btn" id='details'> Details </button>
    </a>
    </div>
    </div>
  
    <button class="duplicate"> Duplicate card </button>
    
    <button class="newcolor"> Toggle background color </button>
      
    <button class="something"> Something else </button>
      
    <button class="delete"> Delete last card </button>
      
    <div>
    
      
    <div id="destination"></div>
    `;
  }
}

customElements.define('my-card1', MyCard1);