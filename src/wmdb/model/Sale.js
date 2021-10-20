import {Model} from '@nozbe/watermelondb';
import {field, date, relation} from '@nozbe/watermelondb/decorators';

export default class Sale extends Model {
    static table = 'sales';
    static associations = {
        parts: {type: 'belongs_to', key: 'part_id'},
    };

    @date('created_at')
    createdAt;

    @relation('parts', 'part_id')
    part;

    @field('quantity')
    quantity;
}
