import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import './globalOptions';
import anchor from '../blocks/js-functions/anchor';
import { freezebuttons } from '../blocks/js-functions/freeze';
import scrollanimation from '../blocks/js-functions/scrollanimation';
import { textareabox, selects, sliders, datepicker, inputmask, numberinput, inputfile } from '../blocks/form-elements/form-elements';
import popups from '../blocks/popups/popups';
import scrollbar from '../blocks/scrollbar/scrollbar';
import slider from '../blocks/slider/slider';
import tooltips from '../blocks/tooltip/tooltip';
import tabs from '../blocks/tabs/tabs';
import maps from '../blocks/map/map';
import mainSlider from '../blocks/pagepiling/pagepiling';
import mixContent from '../blocks/grid-list/grid-list';
import PorftolioFilter from '../pages/portfolio/portfolio';
import Article from '../pages/article/article';
import '../pages/ico/ico';
import '../pages/usluga/usluga';
import '../blocks/rating/rating';
import '../blocks/accordion/accordion';
import '../blocks/dropdown/dropdown';
import '../blocks/put-block-into-slot/put-block-into-slot';


const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  anchor();
  freezebuttons();
  textareabox();
  selects();
  sliders();
  popups();
  scrollbar();
  slider();
  mainSlider();
  mixContent();
  tooltips();
  tabs();
  datepicker();
  inputmask();
  numberinput();
  inputfile();
  maps();
  scrollanimation();
  PorftolioFilter();
  Article();
});
