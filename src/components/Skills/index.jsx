import SSkills from './style';

export default function Skills() {
  return (
    <SSkills>
      <div className='content'>
        <h1>DC Thomas</h1>
        <h1>DC Thomas</h1>
      </div>
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
              <img src='src/assets/logo/homeoffice.png' />
              Remote
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
