import {Model, Q} from '@nozbe/watermelondb';
import {
    text,
    field,
    date,
    children,
    lazy,
    action,
} from '@nozbe/watermelondb/decorators';

export default class Part extends Model {
    static table = 'parts';
    static associations = {
        sales: {type: 'has_many', foreignKey: 'part_id'},
    };

    @text('name')
    name;

    @field('stock')
    stock;

    @field('price')
    price;

    @field('is_blocked')
    isBlocked;

    @date('purchase_at')
    purchaseAt;

    @children('sales')
    sales;

    @lazy bigSales = this.sales.extend(Q.where('quantity', Q.gt(1)));

    @action async addSale(quantity) {
        const salesCollection = this.collections.get('sales');
        await this.batch(
            this.prepareUpdate((part) => {
                part.stock -= quantity;
            }),
            salesCollection.prepareCreate((sale) => {
                sale.part.set(this);
                sale.createdAt = new Date();
                sale.quantity = quantity;
            }),
        );
    }
}
