import React from 'react';
import { Route } from 'react-router-dom';

import Landing from '../components/Landing';
import ContactForm from '../components/ContactForm';

function AppRouting() {
    return (
        <div>
            <Route exact path="/landing" componpent={Landing} />
            <Route exact path="/contact" component={ContactForm} />
        </div>
    )
}

export default AppRouting;