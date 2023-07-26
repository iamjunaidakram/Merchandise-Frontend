import Query from '../../Components/Home/Query/index';
import MainSec from '../../Components/Home/MainSection/index';
import Instagram from '../../Components/Home/instagram/index';
import FinePrint from '../../Components/Home/FinePrint/index';
import Packaging from '../../Components/Home/Packaging/index';
import AboutBrand from '../../Components/Home/AboutBrand/index';

function Home() {
  return (
    <div className="home">
      <MainSec />
      <AboutBrand />
      <FinePrint />
      <Packaging />
      <Query />
      <Instagram />
    </div>
  );
}

export default Home;
