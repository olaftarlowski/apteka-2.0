import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Home, About, Contact, Products } from "./pages";
import { Header, Main, Footer, Banner } from "./components/layout";

import { AppContentWrapper } from "./styled-components/style";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (
    <Router>
      <AppContentWrapper>
        <Header />
        <Banner />
        {/* <LeafletMap/>
        <ProductTabs/> */}
        <Main>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<About />} title="Index Page" />
            <Route path="/nowosci" element={<Products />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Main>
        <Footer />
      </AppContentWrapper>
    </Router>
  );
};

export default App;
