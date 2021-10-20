import 'swiper/swiper.min.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './Root.scss';

import Header from './components/Header'
import Footer from './components/Footer';
import Routes from './router/Routes'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
   <Router>
     <Route render={(props) => (
       <div>
        <Header {...props}/>
        <Routes />
        <Footer/>
       </div>
     )}/>
   </Router>
  );
}

export default App;
