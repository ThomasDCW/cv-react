import SSkills from './style';

export default function Skills() {
  return (
    <SSkills>
      <h1>DI COLA THOMAS</h1>
      <p>30 ans</p>
      <section className='articleContainer'>
        <article className='firstArticle'>
          <h2>Location</h2>
          <ul>
            <li>Lille</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </article>

        <article className='scndArcticle'>
          <h2>Contact</h2>
          <ul>
            <li>github</li>
            <li>linkedin</li>
            <li>mail</li>
          </ul>
        </article>
      </section>
    </SSkills>
  );
}
