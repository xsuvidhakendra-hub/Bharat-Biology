import {createRoot} from 'react-dom/client';
import '../app/i18n';
import Home from '../app/page';
import '../app/globals.css';
createRoot(document.getElementById('root')!).render(<Home/>);
