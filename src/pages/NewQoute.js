import React from 'react';

import QouteForm from '../components/quotes/QuoteForm';

const NewQoute = () => {
    const addQouteHandler = (qouteData) => {
        console.log(qouteData)
    };

    return <QouteForm onAddForm={addQouteHandler} />;
};

export default NewQoute;