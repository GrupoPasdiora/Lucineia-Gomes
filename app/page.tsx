const patterns = [
  { number: "01", title: "A farsa do amor-próprio genérico", quote: "Raciocinar sobre autoestima não apaga uma ferida de rejeição.", text: "Livros, uma rotina nova e uma mudança no visual podem ajudar — mas não alcançam sozinhos a memória emocional que acende o medo do abandono." },
  { number: "02", title: "Líder no trabalho. Refém no amor.", quote: "Sua força não desapareceu. Ela só precisa voltar para a sua vida afetiva.", text: "A mulher que decide, lidera e resolve também pode se ver aceitando migalhas. Isso não é falta de inteligência: é um padrão emocional pedindo cuidado." },
  { number: "03", title: "Você não precisa virar fria", quote: "Frieza não é maturidade emocional. É só uma defesa desesperada.", text: "Segurança não é fingir desinteresse. É conseguir continuar afetuosa e, ao mesmo tempo, sustentar limites que não estão em negociação." },
  { number: "04", title: "Amar sem se abandonar", quote: "Mulheres seguras não precisam deixar de amar. Precisam apenas deixar de se abandonar.", text: "Mudar sua postura não exige terminar ou criar guerras. Quando a submissão perde espaço, o respeito finalmente encontra lugar para crescer." },
  { number: "05", title: "A mesma peça, outros atores", quote: "Trocar de parceiro sem curar suas feridas é só mudar os atores da mesma peça.", text: "Se a causa continua intacta, a ansiedade reaparece com um novo rosto. A mudança duradoura começa quando você interrompe o padrão — não apenas a relação." },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return <main>
    <header className="site-header"><nav className="nav shell" aria-label="Navegação principal">
      <a className="brand" href="#inicio" aria-label="Lucineia Gomes, início"><span className="brand-mark">LG</span><span>Lucineia Gomes<small>Terapeuta de casais</small></span></a>
      <a className="nav-link" href="#aula">Assistir à aula <Arrow /></a>
    </nav></header>

    <section className="hero" id="inicio"><div className="shell hero-grid">
      <div className="hero-copy"><p className="eyebrow">Autonomia emocional<br />para mulheres reais</p><h1>Você não precisa<br className="desktop-break" /> deixar de amar.<br /><em>Precisa parar de<br className="desktop-break" /> se abandonar.</em></h1><p className="lead">Entenda por que a lógica não consegue, sozinha, silenciar o medo da rejeição — e conheça um caminho para viver o amor sem se diminuir.</p><a className="button" href="#aula">Quero assistir à aula gratuita <Arrow /></a><p className="microcopy">Uma conversa acolhedora para mulheres que estão cansadas de repetir o mesmo ciclo.</p></div>
      <figure className="hero-portrait">
        <img className="hero-photo" src="/lucineia-gomes.jpeg" alt="Lucineia Gomes, terapeuta de casais, sentada em seu escritório" width={864} height={1536} fetchPriority="high" />
        <figcaption>
          <span className="portrait-name">Lucineia Gomes <small>Terapeuta de casais</small></span>
          <p>O amor deixa de ser prisão quando você volta a ser a sua própria casa.</p>
        </figcaption>
      </figure>
    </div></section>

    <section className="recognition shell" aria-labelledby="reconhece-titulo"><p className="eyebrow">Talvez você se reconheça aqui</p><div className="section-heading"><h2 id="reconhece-titulo">Não é falta de força.<br />É um padrão emocional.</h2><p>O que parece contradição tem uma explicação. Reconhecer o padrão é o primeiro passo para deixar de obedecer a ele.</p></div><div className="patterns">{patterns.map((item) => <article className="pattern" key={item.number}><p className="pattern-number">{item.number}</p><div><h3>{item.title}</h3><blockquote>{item.quote}</blockquote></div><p className="pattern-text">{item.text}</p></article>)}</div></section>

    <section className="manifesto"><div className="shell manifesto-grid"><p className="eyebrow light">Uma nova forma de se relacionar</p><div><h2>Limite não é castigo.<br />Autonomia não é solidão.</h2><p>Você pode amar, construir uma vida a dois e continuar inteira. O trabalho terapêutico ajuda a tornar consciente o que hoje acontece no automático — para que suas escolhas venham da segurança, não do pânico de perder.</p></div><ul><li><span>01</span> Compreender a raiz do medo</li><li><span>02</span> Regular as respostas emocionais</li><li><span>03</span> Reconstruir limites e autonomia</li></ul></div></section>

    <section className="lesson" id="aula"><div className="shell lesson-card"><div><p className="eyebrow">Aula gratuita</p><h2>Comece a quebrar o ciclo pela causa.</h2></div><div><p>Nesta aula, Lucineia mostra por que o medo do abandono supera a lógica e apresenta os primeiros passos para resgatar sua autonomia emocional sem endurecer o coração.</p><a className="button dark" href="mailto:contato@lucineiagomes.com.br?subject=Quero%20assistir%20à%20aula%20gratuita">Assistir à aula gratuita <Arrow /></a><small>Ao clicar, você poderá solicitar seu acesso. Conteúdo educativo; não substitui acompanhamento individual.</small></div></div></section>

    <footer className="shell footer"><div className="brand"><span className="brand-mark">LG</span><span>Lucineia Gomes<small>Terapeuta de casais</small></span></div><p>Relacionamentos com mais consciência, respeito e inteireza.</p><p>© {new Date().getFullYear()} Lucineia Gomes</p></footer>
  </main>;
}
