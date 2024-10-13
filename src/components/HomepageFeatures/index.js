import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Promesas',
    Svg: require('@site/static/img/Imagen_Inicio_1.svg').default,
    description: (
      <>
        Las promesas en JavaScript representan la eventual finalización o el fracaso de una operación asíncrona, con estados de Pendiente, Cumplida y Rechazada. Facilitan el manejo de flujos asíncronos.
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/espacio.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Fetch API',
    Svg: require('@site/static/img/Imagen_Inicio_2.svg').default,
    description: (
      <>
        La Fetch API permite realizar solicitudes HTTP usando promesas, proporcionando una forma eficiente de interactuar con recursos web y gestionar respuestas.
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
