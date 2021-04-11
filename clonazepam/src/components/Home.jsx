import React, { Component } from 'react';
import { Navbar, EileenSquare, MySquares } from "./assets"
import '../static/Home.css';
import '../static/Navbar.css';
import { IoPaperPlane } from "react-icons/io5";


class Home extends Component {
    render(){
      return (
          <div>
            <Navbar email="juanaDeAchingarAduMadre@gmail.com"/>
            <div className="messages-body">
                {/*Messages square*/}
                <EileenSquare  message="Hola puta"/>
                <EileenSquare  message="Hasta el infinito y mas alla"/>
                <EileenSquare  message="me prendes hijo de su chingada verga"/>
                <EileenSquare  message="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/>
                <MySquares  message="uy mamasita"/>
                <MySquares  message="ahora estudia derecho"/>
            </div>
               <div className="message-box">
                    <input type="text" name="" className="message-txt" placeholder="Tell something to Eileen..."/>
                    <a className="search-btn">
                        <IoPaperPlane />
                    </a>
                </div>
           </div>
        );
    }
}

export default Home;