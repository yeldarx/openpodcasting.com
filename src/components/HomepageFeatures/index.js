import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Қол жетімділік және икемділік',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Подкасттарға тыңдаушыға немесе көрерменге ыңғайлы кез келген уақытта қол жеткізуге болады. Бұл аудитория мазмұнды кез келген жерде және кез келген уақытта смартфондар, планшеттер немесе компьютерлер сияқты құрылғыларды пайдалана алады дегенді білдіреді. Бұл икемділік подкастты тыңдаушыларға ыңғайлы етеді және оларға подкасттарды қашан және қайда тыңдау керектігін таңдауға мүмкіндік береді.
      </>
    ),
  },
  {
    title: 'Мазмұнның әртүрлілігі',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Подкастинг мазмұнның кең ауқымына арналған платформаны ұсынады. Бұл білім беру бағдарламалары, ойын-сауық шоулары, жаңалықтар бағдарламалары, тақырыптарды талқылау, сұхбаттар және т.б. болуы мүмкін. Бұл әртүрлілік подкасттарға әртүрлі қызығушылықтары бар аудиторияларды тартуға мүмкіндік береді.
      </>
    ),
  },
  {
    title: 'Контент жасаушылар үшін тәуелсіздік және қолжетімділік',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Подкастинг үлкен бюджеттерді немесе арнайы жабдықты қажет етпейді. Бұл кез келген адам подкасттарды, аудио немесе бейне мазмұнды жасап, оны аудиториямен бөлісе алатынын білдіреді. Бұл тәуелсіздік пен қол жетімділік подкастингті әртүрлі дауыстар мен перспективаларды естуге және бөлісуге болатын платформаға айналдырады.
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
