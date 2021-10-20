import database from '../wmdb/wmdb';

const partsCollection = database.get('parts');
const parts = await partsCollection.query().fetch();

database.action(() => {
    parts[0].markAsDeleted();
});
