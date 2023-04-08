import { Home } from '../views/pages/home';
import { Experience } from '../views/pages/Experience';
import { Tools } from '../views/pages/Tools';
import { Contact } from '../views/pages/Contact';
import { Portfolio } from '../views/pages/Portfolio';

const routes = {
    '/': Home,
    '/home': Home,
    '/experience': Experience,
    '/tool': Tools,
    '/contact': Contact,
    '/portfolio': Portfolio,
};

export default routes;
