import Contact from '../../components/Contact';
import Banner from './Banner';
import BelowAskGuru from './BelowAskGuru';

import LatestProjects from './LatestProjects';
import Offers from './Offers';

const Home = () => {
  return (
    <div className='relative'>
      <Banner />
      <Offers />
      <LatestProjects />
      <BelowAskGuru />
      <Contact />
    </div>
  );
};

export default Home;
