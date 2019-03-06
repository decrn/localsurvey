import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import './page-not-found.component.less';

export const PageNotFound: SFC = (): JSX.Element => (
    <div className="page-not-found__container">
        <h1 className="page-not-found__title">404</h1>
        <p>This is not the page you're looking for.</p>

        <Link to="/">Go Home instead</Link>
    </div>
);
