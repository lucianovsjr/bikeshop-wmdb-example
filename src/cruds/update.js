import database from '../wmdb/wmdb';

const partsCollection = database.get('parts');
let parts = await partsCollection.query().fetch();

database.action(() => {
    parts[0].update((part) => {
        part.stock = 5;
    });
});
