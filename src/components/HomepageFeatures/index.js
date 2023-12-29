import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [

  {
    title: 'Тәуелсіздік',
    Svg: require('@site/static/img/undraw_couple_love_re_3fw6.svg').default,
    description: (
      <>
        Подкастиң қомақты қаражат немесе арнайы жабдықты қажет етпейді. Кез келген адам үйінде немесе офисінде отырып-ақ подкаст жасап, аудиториямен бөлісе алады.
      </>
    ),
  },
  
  {
    title: 'Контенттің алуандығы',
    Svg: require('@site/static/img/undraw_audio_conversation_re_3t38.svg').default,
    description: (
      <>
        Подкаст деген тек қана әңгіме айту немесе сұхбат емес. Бұл білім беру, ойын-сауық, жаңалықтар, бағдарламалар мен қатар, тақырыптарды талқылау және т.б. болуы мүмкін.
      </>
    ),
  },
  
  {
    title: 'Қол жетімді, икемділік',
    Svg: require('@site/static/img/undraw_podcast_audience_re_4i5q.svg').default,
    description: (
      <>
        Тыңдаушы не көрермен подкастарды өзіне ыңғайлы кез келген уақытта тұтына алады. Ал подкаст эпизодтарын алдын ала жүктеп алса - интернеттің де болуы міндетті емес.
      </>
    ),
  },

  {
    title: 'Қауымдастық',
    Svg: require('@site/static/img/undraw_social_dashboard_re_ocbd.svg').default,
    description: (
      <>
      Подкаст ортақ мүддесі бар тыңдарман арасында қауымдастықтың пайда болуына ықпал етеді. Көптеген подкастардың чаты, бөлек арнасы немесе арнайы аккаунттары бар.
      </>
    ),
  },

  {
    title: 'Монетизация',
    Svg: require('@site/static/img/undraw_digital_currency_qpak.svg').default,
    description: (
      <>
      Подкастар тура басқа медиалар сияқты табыс әкеле алады (демеушілік, жарнама, премиум контент, т.б.) Подкаст арқылы ақша табудың ең керемет жолы әрине Value4Value.
      </>
    ),
  },

  {
    title: 'Шексіз контент',
    Svg: require('@site/static/img/undraw_digital_nomad_re_w8uy.svg').default,
    description: (
      <>
      Подкастинг терең талқылаулар, ұзақ әңгімелер мен мұқият зерттеулер жасауға өте ыңғайлы. Подкаст жасаушы дәстүрлі медианың шектеулерінен еркін.
      </>
    ),
  },


];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
