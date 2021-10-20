/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {List} from 'react-native-paper';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';

class Part extends Component {
    renderItem = ({item}) => (
        <List.Item
            title={item.name}
            description={item.stock}
            left={(props) => <List.Icon {...props} icon="package" />}
            onPress={() => this.props.navigation.navigate('Sale', {part: item})}
        />
    );

    render() {
        const {parts} = this.props;

        return (
            <View style={{padding: 16}}>
                <FlatList
                    data={parts}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
}

export default withDatabase(
    withObservables([], ({database}) => ({
        // parts: database.get('parts').query(),
        parts: database.get('parts').query().observeWithColumns(['stock']),
    }))(Part),
);
