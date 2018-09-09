import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TokyoSalsa from '../components/TokyoSalsa';
import EventsPage from '../components/EventsPage';
import AddEventPage from '../components/AddEventPage';
import EditEventPage from '../components/EditEventPage';
import VenuesPage from '../components/VenuesPage';
import AddVenuePage from '../components/AddVenuePage';
import EditVenuePage from '../components/EditVenuePage';
import NotFoundPage from '../components/NotFoundPage';
import Navigation from '../components/header/Navigation';
import Footer from '../components/footer/Footer';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <div className="content">
            <Navigation />
            <Switch>
                <Route path="/" component={TokyoSalsa} exact={true} />
                <Route path="/events" component={EventsPage} />
                <Route path="/event/create" component={AddEventPage} exact={true} />
                <Route path="/event/edit/:id" component={EditEventPage} />
                <Route path="/venues" component={VenuesPage} />
                <Route path="/venue/create" component={AddVenuePage} />
                <Route path="/venue/edit/:id" component={EditVenuePage} />
                <Route component={NotFoundPage}/>
            </Switch>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    </BrowserRouter>
);

export default AppRouter;