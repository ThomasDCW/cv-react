import Intro from '../components/Intro';
import Header from '../components/Header';
import SHomePage from './style';

export default function HomePage() {
  return (
    <SHomePage>
      <Intro />
      <Header />
    </SHomePage>
  );
}
