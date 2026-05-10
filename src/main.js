import './style.css';
import { initI18n } from './i18n.js';
import { mountApp } from './app.js';

initI18n();
mountApp(document.getElementById('app'));
