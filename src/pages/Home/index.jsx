import Intro from 'components/Home/Intro';
import './home.scss';
import 'style/page.scss';
import Header from 'components/generic/Header';
import AboutUs from 'components/Home/AboutUs';

export default function Home() {
  return (
    <div className="page home">
      <Header />
      <Intro />
      <AboutUs />
    </div>
  );
}
