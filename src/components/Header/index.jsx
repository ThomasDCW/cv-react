import { NavLink } from 'react-router-dom';
import SSkills from './style';

export default function Skills() {
  return (
    <SSkills>
      <h1>
        Hello
        <img src='src/assets/logo/hi.png' />
      </h1>
      <p>Hi, I'm Thomas, 30yo. A passionate JS-developer</p>
      <section className='articleContainer'>
        <article className='firstArticle'>
          <ul>
            <li>
              <img src='src/assets/logo/french.png' />
              Lille
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
              <a href='https://github.com/ThomasDCW'>ThomasDCW</a>
            </li>
            <li>
              <img src='src/assets/logo/linkedin.png' />
              <a href='https://www.linkedin.com/in/thomas-di-cola-251843181/'>
                Thomas DC
              </a>
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
