import React, {useEffect} from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Navigation, {NavRoute} from './components/Navigation/Navigation';
import {FrontPage} from './pages/Frontpage/Frontpage';
import Footer from './components/Footer/Footer';
import {InfoPage} from './pages/Info/Info';
import {TicketsPage} from './pages/Tickets/Tickets';
import {PartnersPage} from './pages/Partners/Partners';
import {AboutUsPage} from './pages/About/About';
import {CookieInfoPage} from './pages/CookieInfo/CookieInfo';
import {CookieDisclaimer} from './components/CookieDisclaimer/CookieDisclaimer';
import {InlineLink} from './components/InlineLink/InlineLink';
import {NotFoundPage} from './pages/NotFound/NotFound';
import {SpeakersPage} from "./pages/Speakers/Speakers";
import {MonetaryPolicyPage} from "./pages/Speakers/MonetaryPolicy";
import {SpeakerTipsPage} from "./pages/Speakers/Tips";
import {BuyTicketsPage} from "./pages/Tickets/BuyTicketsPage";
import {useLocation} from "react-router";
import {useMounted} from "./core/hooks/UseMounted";

const routes: NavRoute[] = [
  {title: 'Info', url: '/info', show: true},
  {title: 'Tickets', url: '/tickets', show: true},
  {title: 'Speakers', url: '/speakers', show: true},
  {title: 'Partners', url: '/partners', show: true},
  {title: 'About', url: '/about', show: true},
  {title: 'Cookies', url: '/privacy-cookies', show: false},
  {title: 'Tips for Speakers', url: '/speakers/tips', show: false},
  {title: 'Monetary Policy', url: '/speakers/monetary-policy', show: false},
];


function ScrollToTop(){
  const location = useLocation();
  const mounted = useMounted()
  useEffect(() => {
    if(mounted) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, mounted]);

  return <></>
}

function App() {

  return (
    <HashRouter basename="/">
      <>
        <ScrollToTop/>
        <Navigation sticky routes={routes} />
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route path="/info" element={<InfoPage/>} />
          <Route path="/tickets" element={<TicketsPage/>} />
          <Route path="/tickets/buy" element={<BuyTicketsPage/>} />
          <Route path="/speakers" element={<SpeakersPage/>} />
          <Route path="/speakers/tips" element={<SpeakerTipsPage/>} />
          <Route path="/speakers/monetary-policy" element={<MonetaryPolicyPage/>} />
          <Route path="/partners" element={<PartnersPage/>} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/privacy-cookies" element={<CookieInfoPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        <Footer routes={routes} />
        <CookieDisclaimer>
          We have given you a dedicated cookie from our cookie jar in order to store your favorite program schedule. We also use cookies to improve your experience on our site. By using this site you agree to this. For more information please visit our <InlineLink color="pink" url="/privacy-cookies">cookie information page.</InlineLink>
        </CookieDisclaimer>
      </>
    </HashRouter>
  );
}

export default App;
