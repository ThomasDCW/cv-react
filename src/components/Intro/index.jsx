import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper';
import SIntro from './style';

export default function Intro() {
  return (
    <SIntro>
      <img
        className='cvPicture'
        src='https://media-exp1.licdn.com/dms/image/C4D03AQF0DkqfwqAF-Q/profile-displayphoto-shrink_200_200/0/1646075848369?e=1661385600&v=beta&t=gABVGL_PslQ5RX5-oqikSq-COlWLvsycH2_HWQTmfDM'
        alt='cv-photo'
      />
      <article className='resumeContainer'>
        <h1>
          <span>R</span>esume
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae
          magni, accusamus esse, error dolorum nemo obcaecati, voluptatem vel
          perspiciatis unde voluptates? Fugiat maxime nesciunt provident
          officiis dolorem, recusandae officia.
        </p>
        <div className='border' />
        <h1>
          <span>L</span>anguages
        </h1>

        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className='mySwiper'
        >
          <SwiperSlide>
            <img src='src/assets/languages/html.png' alt='logo' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='src/assets/languages/css.png' alt='logo' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='src/assets/languages/js.png' alt='logo' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='src/assets/languages/react.png' alt='logo' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='src/assets/languages/express.png' alt='logo' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='src/assets/languages/nodejs.png' alt='logo' />
          </SwiperSlide>
        </Swiper>
      </article>
    </SIntro>
  );
}
