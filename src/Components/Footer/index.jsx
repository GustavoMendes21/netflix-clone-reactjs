import './style.css'

export function Footer() {
  return (
    <section className="footerWrapper">
      <h3>Desenvolvido com 
        <span role="img" aria-label="coração"> ❤️ </span> 
        por
        <a href="https://github.com/GustavoMendes21" target="_blank"> Gustavo Mendes</a> 
      </h3>
      <p>Direito de imagens para Netflix</p>
      <p>Dados pego do site <a href="https://www.themoviedb.org/?language=pt-BR" target="_blank">Themoviedb.org</a></p>
    </section>   
  )
}