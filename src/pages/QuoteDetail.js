import React, { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
    { id: "q1", author: "Max", text: "Learning React is fun" },
    { id: "q2", author: "Larvian", text: "Learning React is great" },
];

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();

    const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

    if (!quote) {
        return <p>No Quote Found!</p>;
    }

    return (
        <Fragment>
            <h1>Qoute Detail Page</h1>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link
                        className='btn--flat'
                        to={`${match.url}/comments`}
                    >
                        Load Comments
                    </Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;
