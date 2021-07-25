import React from 'react';
import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const history = useHistory();

    const addQouteHandler = (quoteData) => {
        console.log(quoteData);

        history.push('/quotes');
    };

    return <QuoteForm onAddForm={addQouteHandler} />;
};

export default NewQuote;