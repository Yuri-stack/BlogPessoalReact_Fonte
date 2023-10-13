import { useState } from "react"

function Home() {
    const [isLogged, setIsLogged] = useState(false)

    return (
        <>
            {
                isLogged ? (
                    <div style={{
                        width: "100vw",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <div>
                            <div style={{
                                 width: "80vw",
                                 display: "flex",
                                 flexDirection: "column",
                                 alignItems: "center"
                            }}>
                                <h2>Seja Bem Vinde!</h2>
                                <p>Expresse aqui seus pensamentos e opniões</p>
                            </div>
        
                            <div style={{
                                 width: "80vw",
                                 display: "flex",
                                 flexDirection: "column",
                                 alignItems: "center"
                            }}>
                                <img 
                                    src="https://i.imgur.com/VpwApCU.png" 
                                    alt="Imagem da Página Home" 
                                    width="400px"
                                />
                            </div>
                        </div>
                    </div>
                ) : (

                    <button onClick={() => setIsLogged(true)}>Entrar</button>

                )
            }
        </>
    )
}

export default Home