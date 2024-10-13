import './about-us.scss';

/**
 * @typedef {object} LinkCardProps
 * @property {string} text
 * @property {string} iconIdentifier
 * @property {import('types/style').ColorOption} color
 */

/** @typedef {Omit<LinkCardProps, 'color'} CardProps */

/** @param {LinkCardProps} props */
function LinkCard(props) {
  return (
    <a className={`card link bg-${props.color}`}>
      <i class={`icon fi ${props.iconIdentifier}`}></i>
      <p className="text font-bold font-sans text-white">{props.text}</p>
    </a>
  );
}

// /** @param {CardProps} props */
// function Carc(props) {
//   return;
// }

function Card({ text }) {
  return (
    <li className="duty font-sans text-black bg-champagne">
      <i className="duty-icon fi fi-sr-paw text-yellow"></i>
      <span>{text}</span>
    </li>
  );
}

export default function AboutUs() {
  const presentation = (
    <div className="board-column presentation">
      <h2 className="title font-bold font-serif text-blue">Quem somos</h2>
      <p className="text font-sans text-black">
        Somos a{' '}
        <span className="text-blue font-bold">
          Associação Protetora dos Animais de Mato Grosso (APAM)
        </span>
        , uma organização dedicada ao resgate, cuidado e adoção de animais em situações
        vulneráveis. Nossa missão é proporcionar um lar seguro e amoroso para cada ser
        que cruzar nosso caminho.
      </p>
      <div className="buttons">
        <LinkCard
          color="red"
          text="Conheça nosso instagram"
          iconIdentifier="fi-brands-instagram"
        />
        <LinkCard
          color="orange"
          text="Contate-nos no email"
          iconIdentifier="fi-rr-envelope-plus"
        />
      </div>
    </div>
  );

  const mission = (
    <div className="board-column mission">
      <h2 className="title font-bold font-serif text-blue">Nossa missão</h2>
      <p className="text font-sans text-black">
        Além do resgate e do incentivo a adoção, nós também:
      </p>
      <ol className="duty-list">
        <Card text="Defendemos os animais" />
        <Card text="Lutamos por políticas públicas em prol dos animais" />
        <Card text="Zelamos pelo meio-ambiente" />
        <Card text="Incentivamos a sociedade na proteção à flora e a fauna" />
      </ol>
    </div>
  );

  return (
    <div className="about-us bg-champagne section">
      <div className="content">
        <div className="board bg-yellow">
          {presentation}
          {mission}
        </div>
      </div>
    </div>
  );
}
