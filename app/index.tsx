import React from 'react'
import { StyleSheet, View } from 'react-native'
import PokemonList from './pokemon-list'

const Index = () => {
	return (
		<View style={styles.container}>
			<PokemonList />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		padding: 10,
	},
})

export default Index
