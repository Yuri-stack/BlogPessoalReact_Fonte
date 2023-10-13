interface CardProps{
    titulo: string
    descricao: string
}

function Card({ titulo, descricao }: CardProps) {
  return (
    <div style={{
        width: "500px",
        border: "5px solid crimson",
        margin: "0 0 1rem 0"
    }}>
        <h1>{ titulo }</h1>
        <p>{ descricao }</p>
    </div>
  )
}

export default Card