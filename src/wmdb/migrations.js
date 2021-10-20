import {
    schemaMigrations,
    createTable,
    addColumns,
} from '@nozbe/watermelondb/Schema/migrations';

export default schemaMigrations({
    migrations: [
        {
            toVersion: 2,
            steps: [
                createTable({
                    name: 'sales',
                    columns: [
                        {name: 'created_at', type: 'number'},
                        {name: 'part_id', type: 'string'},
                        {name: 'quantity', type: 'number'},
                    ],
                }),
                addColumns({
                    table: 'parts',
                    columns: [{name: 'price', type: 'number'}],
                }),
            ],
        },
    ],
});
