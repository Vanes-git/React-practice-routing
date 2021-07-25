import React from 'react';

import QouteList from '../components/quotes/QuoteList';

const DUMMY_QOUTES = [
    {id: 'q1', quthor: 'Max', text: 'Learning React is fun'},
    {id: 'q2', quthor: 'Larvian', text: 'Learning React is great'},
];

const AllQuotes = () => {
    return (
        <QouteList qoutes={DUMMY_QOUTES}/>
    );
};

export default AllQuotes;