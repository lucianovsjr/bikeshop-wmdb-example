import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './schema';
import migrations from './migrations';
import Part from './model/Part';
import Sale from './model/Sale';

const adapter = new SQLiteAdapter({
    schema,
    migrations,
});

const database = new Database({
    adapter,
    modelClasses: [Part, Sale],
});

console.log(database);

export default database;
