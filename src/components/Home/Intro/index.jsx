import RedirectButton from 'components/generic/RedirectButton';

import './intro.scss';

export default function Intro() {
  const textContent = (
    <div className="text-content">
      <h1 className="title font-serif font-bold">Ajude-nos a mudar a vida deles</h1>
      <p className="motive font-sans font-bold text-black">
        Somos uma família multiespécie, com a lealdade de um vira-lata caramelo, a
        vivacidade de um frajola e a humanidade de quem quer reunir novas famílias e faz
        tudo o que é possível pela causa animal.
      </p>
      <div className="buttons">
        <RedirectButton href="/doar" text="Doar" shape="pill" color="red" />
        <RedirectButton href="/adocao" text="Adote" shape="pill" color="yellow" />
      </div>
    </div>
  );

  const visualContent = (
    <div className="visual-content bg-yellow">
      <img
        className="picture"
        src="./assets/image/duda.png"
        alt="Cachorro sorridente e amigável"
      />
    </div>
  );

  return (
    <div className="intro bg-orange section">
      <div className="interactive-content">
        {textContent}
        {visualContent}
      </div>
    </div>
  );
}
