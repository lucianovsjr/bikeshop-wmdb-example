import database from '../wmdb';

const partsCollection = database.get('parts');

database.action(() => {
    partsCollection.create((part) => {
        part.name = 'Corrente';
        part.stock = 10;
        part.price = 500;
        part.purchaseAt = new Date();
    });
});
