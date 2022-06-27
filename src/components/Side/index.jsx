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
      <article className='container'>
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
            <img src='src/assets/languages/mysql.svg' alt='logo' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='src/assets/languages/nodejs.png' alt='logo' />
          </SwiperSlide>
        </Swiper>
        <h1>
          <span>T</span>ools
        </h1>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className='mySwiper'
        >
          <SwiperSlide>
            <img src='src/assets/tools/ubuntu.png' alt='logo' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='src/assets/tools/codium.png' alt='logo' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='src/assets/tools/github.png' alt='logo' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='src/assets/tools/insomnia.png' alt='logo' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='src/assets/tools/workbench.png' alt='logo' />
          </SwiperSlide>
        </Swiper>
      </article>
    </SIntro>
  );
}
