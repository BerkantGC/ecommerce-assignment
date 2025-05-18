import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuickLinks from './components/QuickLinks';
import Slider from './components/Slider';
import Recommendations from './components/Recommendations';
import ElectronicsDeals from './components/ElectronicsDeals';
import ProductPage from './pages/ProductPage'; // bunu birazdan yapacağız
import VisitedProducts from './components/VisitedProducts';
import StickyMenu from './components/StickyMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <StickyMenu />
              <Slider />
              <QuickLinks />
              <Recommendations />
              <ElectronicsDeals />
              <VisitedProducts />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
