import React from 'react';

import Header from '../../components/Header';

import styles from './styles.less';

function Index() {
    return (
        <React.Fragment>
            <Header />
            <div className={styles.something}>
                Index
            </div>
            <a href="/foobar">
                Click Me
            </a>
        </React.Fragment>
    );
}

export default Index;
