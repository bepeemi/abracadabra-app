import { createRoot } from 'react-dom/client'; // React 18+
import App from './App';
// Ponto de entrada: Renderiza o App no DOM
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);