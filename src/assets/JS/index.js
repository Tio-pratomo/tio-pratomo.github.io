import { hmr } from './utility/HMR.js';
import { renderHeader } from '../JS/component/header/header.js';
import { renderIntro } from './component/intro/intro.js';

hmr();

renderHeader();
renderIntro();
