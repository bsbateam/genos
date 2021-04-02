import styles from '@/styles/Programs/Blog.module.scss';

import type { AppComponent } from '@/types/utils/programs';

const GENEMATOR_HOME_PAGE = 'https://genemator.uz/';

const Genemator: React.FC<AppComponent> = () => (
  <iframe className={styles.blog} title="Genemator" src={GENEMATOR_HOME_PAGE} />
);

export default Genemator;

export const loaderOptions = {
  width: 350,
  height: 850
};
