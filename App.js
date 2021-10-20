import React from 'react';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';

import Navigator from './src/navigation';

import database from './src/wmdb/wmdb';

const App = () => {
    return (
        <DatabaseProvider database={database}>
            <Navigator />
        </DatabaseProvider>
    );
};

export default App;
