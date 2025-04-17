import { NavLink } from "react-router-dom";

export function Menu() {

    
    const getEstilo = (props) => {
   
        let estilo =
          "flex gap-3 text-red-950 px-3 py-4 hover:bg-red-800 hover:text-slate-200 ";
        let ativo = "border-r-4 border-solid border-red-950 "
    
    
        let final = props.isActive ? estilo + ativo : estilo
    
        return final;
      };

    return (
        <div className={`bg-red-300 w-60 h-screen
            flex flex-col`}>

            <header className="flex gap-1 justify-center p-3 border-b border-white-500">
            
                <span className="font-bold">
                    React rotas</span>
            </header>

            <nav className="flex flex-col">
                <NavLink to="/home" className={getEstilo}>
                  
                    Home
                </NavLink>
                <NavLink to="/contato" className={getEstilo}>
                   
                    Contato
                    </NavLink>
                <NavLink to="/sobre" className={getEstilo}>
                  
                    Sobre
                    </NavLink>

                <NavLink to="/estado1" className={getEstilo}>
              
                    Estado 1
                    </NavLink>

                <NavLink to="/comEstado" className={getEstilo}>
                    
                    Com Estado
                    </NavLink>

                <NavLink to="/campoTexto" className={getEstilo}>
                 
                    Campo Texto
                    </NavLink>

                <NavLink to="/contador" className={getEstilo}>
                  
                    Contador
                    </NavLink>

                <NavLink to="/comunicacao-direta" className={getEstilo}>
             
                    Comunicacao direta
                    </NavLink>

                <NavLink to="/comunicacao-indireta" className={getEstilo}>
                  
                    Comunicacao indireta
                    </NavLink>

                <NavLink to="/UseRef" className={getEstilo}>
                   
                    UseRef
                    </NavLink>

                <NavLink to="/UseEffect" className={getEstilo}>
             
                    UseEffect
                    </NavLink>

                <NavLink to="/tradutor" className={getEstilo}>
                   
                    Tradutor
                    </NavLink>
            </nav>

            <footer className="absolute bottom-0 p-3 text-sm">
                <span>Desenvolvimento web 2</span>
            </footer>
        </div>
    )

}