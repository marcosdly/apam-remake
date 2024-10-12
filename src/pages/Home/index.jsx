import Intro from 'components/Home/Intro';
import './home.scss';
import Header from 'components/generic/Header';

export default function Home() {
  return (
    <div className="page home">
      <Header />
      <Intro />
    </div>
  );
}
