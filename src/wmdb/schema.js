import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
    version: 2,
    tables: [
        tableSchema({
            name: 'parts',
            columns: [
                {name: 'name', type: 'string'},
                {name: 'stock', type: 'number'},
                {name: 'price', type: 'number'},
                {name: 'is_blocked', type: 'boolean'},
                {name: 'purchase_at', type: 'number', isOptional: true},
            ],
        }),
        tableSchema({
            name: 'sales',
            columns: [
                {name: 'created_at', type: 'number'},
                {name: 'part_id', type: 'string'},
                {name: 'quantity', type: 'number'},
            ],
        }),
    ],
});
