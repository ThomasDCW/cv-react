import Intro from '../components/Intro';
import Skills from '../components/Skills';
import SHomePage from './style';

export default function HomePage() {
  return (
    <SHomePage>
      <Intro />
      <Skills />
    </SHomePage>
  );
}
