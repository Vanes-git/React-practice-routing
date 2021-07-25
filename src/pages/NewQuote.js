import React from 'react';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const addQouteHandler = (qouteData) => {
        console.log(qouteData)
    };

    return <QuoteForm onAddForm={addQouteHandler} />;
};

export default NewQuote;