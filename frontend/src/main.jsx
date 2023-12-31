import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import CardProvider from './context/CardProvider.jsx';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CardProvider>
      <MainLayout >
        <App />
      </MainLayout>
    </CardProvider>
  </BrowserRouter>

)
