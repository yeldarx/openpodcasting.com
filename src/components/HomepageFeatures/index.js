import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [

  {
    title: 'Тәуелсіздік',
    Svg: require('@site/static/img/telework-multiple-people-svgrepo-com.svg').default,
    description: (
      <>
        Подкастиң қомақты қаражат немесе арнайы жабдықты қажет етпейді. Кез келген адам үйінде немесе офисінде отырып-ақ подкаст жасап, аудиториямен бөлісе алады.
      </>
    ),
  },
  
  {
    title: 'Контенттің алуандығы',
    Svg: require('@site/static/img/supporting-business-person-svgrepo-com.svg').default,
    description: (
      <>
        Подкаст деген тек қана әңгіме айту, сұхбат емес. Бұл білім беру, ойын-сауық, жаңалықтар бағдарламалары мен қатар, тақырыптарды талқылау, сұхбаттар және т.б. болуы мүмкін.
      </>
    ),
  },
  
  {
    title: 'Қол жетімділік және икемділік',
    Svg: require('@site/static/img/family-3-generations-svgrepo-com.svg').default,
    description: (
      <>
        Тыңдаушы не көрермен подкастарды өзіне ыңғайлы кез келген уақытта тұтына алады. Ал подкаст эпизодтарын алдын ала жүктеп алса - интернеттің де болуы міндетті емес.
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
