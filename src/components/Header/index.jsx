import SSkills from './style';

export default function Skills() {
  return (
    <SSkills>
      <h1>
        <a>Hello </a>
        <img src='src/assets/logo/hi.png' />
      </h1>
      <p>Hi, I'm Thomas, 30yo. A passionate JS-developer from Lille, France</p>
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
