import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { ekleYer } from './redux/Actions';

class App extends Component {
    state = { placeName: '', places: [] };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') return;
        this.props.add(this.state.placeName);
    }

    placeNameChangeHandler = value => { this.setState({ placeName: value }); }

    placesOutput = () => (
        <FlatList
            style={styles.listContainer}
            data={this.props.places}
            keyExtractor={(item, index) => index.toString()}
            renderItem={info => <Text>{JSON.stringify(info.item)}</Text>}
        />
    );

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Yer"
                        style={styles.placeInput}
                        value={this.state.placeName}
                        onChangeText={this.placeNameChangeHandler}
                    />

                    <Button title={'Add'} style={styles.placeButton} onPress={this.placeSubmitHandler} />
                </View>

                <View style={styles.listContainer}>
                    {this.placesOutput()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    inputContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    placeInput: {
        borderWidth: 1, borderRadius: 10,
        margin: 10, padding: 10,
        width: '70%'
    },
    placeButton: {
        width: '30%'
    },
    listContainer: {
        width: '100%'
    }
});


const mapStateToProps = state => ({ places: state.placeReducer.places });
const mapDispatchToProps = dispatch => ({ add: (name) => dispatch(ekleYer(name)) });

export default connect(mapStateToProps, mapDispatchToProps)(App)