import SSkills from './style';

export default function Skills() {
  return (
    <SSkills>
      <h1>
        <a>DC THOMAS</a>
      </h1>
      <p>30 yo</p>
      <section className='articleContainer'>
        <article className='firstArticle'>
          <ul>
            <li>
              <img src='src/assets/logo/map.png' />
              La Madeleine
            </li>
            <li>
              <img src='src/assets/logo/car.png' />
              Driving licence
            </li>
            <li>
              <img src='src/assets/logo/homeoffice.png' /> I'm ok with Remote
            </li>
          </ul>
        </article>

        <article className='scndArticle'>
          <ul>
            <li>
              <img src='src/assets/logo/github.png' />
              ThomasDCW
            </li>
            <li>
              <img src='src/assets/logo/linkedin.png' />
              Thomas DC
            </li>

            <li>
              <img src='src/assets/logo/mail.png' />
              thomas.dicola@hotmail.fr
            </li>
          </ul>
        </article>
      </section>
      <div className='border' />
    </SSkills>
  );
}
