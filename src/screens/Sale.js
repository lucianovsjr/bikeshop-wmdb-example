/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {List, Button} from 'react-native-paper';
import withObservables from '@nozbe/with-observables';

class Sale extends Component {
    formatDate = (date) =>
        date
            ? date.getUTCDay() +
              '/' +
              date.getUTCMonth() +
              '/' +
              date.getUTCFullYear() +
              ' ' +
              date.getUTCHours() +
              ':' +
              date.getUTCMinutes()
            : '';

    renderItem = ({item}) => (
        <List.Item
            title={this.formatDate(item.createdAt)}
            description={item.quantity}
            left={(props) => <List.Icon {...props} icon="cart" />}
        />
    );

    addSale = () => {
        const {part} = this.props.route.params;
        part.addSale(1);
    };

    render() {
        const {sales} = this.props;

        return (
            <View style={{padding: 16}}>
                <Button
                    icon="cart-plus"
                    mode="contained"
                    onPress={this.addSale}>
                    Nova venda
                </Button>
                <FlatList
                    data={sales}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
}

export default withObservables(['route'], ({route}) => ({
    sales: route.params.part.sales,
}))(Sale);
