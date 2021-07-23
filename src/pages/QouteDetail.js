import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from '../components/comments/Comments';

const QouteDetail = () => {
    const params = useParams();

    return (
        <Fragment>
            <h1>Qoute Detail Page</h1>
            <p>{params.qouteId}</p>
            <Route path={`/qoutes/${params.qouteId}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    );
};

export default QouteDetail;
