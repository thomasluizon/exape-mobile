import React from 'react'
import {
	ActivityIndicator,
	FlatList,
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import usePokemon from '../hooks/usePokemon'

const PokemonList = () => {
	const { pokemonData, fetchMorePokemon, loading } = usePokemon()

	const renderItem = ({ item }: any) => (
		<View style={styles.item}>
			<Image source={{ uri: item.image }} style={styles.image} />
			<View>
				<Text style={styles.name}>{item.name.toUpperCase()}</Text>
				<Text style={styles.type}>Type: {item.type}</Text>
			</View>
		</View>
	)

	const renderFooter = () => (
		<>
			{loading && (
				<View style={styles.loader}>
					<ActivityIndicator size="large" color="#555" />
					<Text style={styles.loaderText}>Carregando mais Pokémon...</Text>
				</View>
			)}

			<View style={styles.scrollSpacer} />
		</>
	)

	return (
		<FlatList
			data={pokemonData}
			renderItem={renderItem}
			keyExtractor={item => `${item.id}-${Math.random()}`}
			onEndReached={fetchMorePokemon}
			onEndReachedThreshold={0.5}
			ListFooterComponent={renderFooter}
		/>
	)
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		padding: 20,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		height: 250,
	},
	image: {
		width: 120,
		height: 120,
		marginRight: 20,
	},
	name: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	type: {
		fontSize: 20,
		color: '#555',
	},
	loader: {
		marginVertical: 20,
		alignItems: 'center',
	},
	loaderText: {
		marginTop: 10,
		fontSize: 16,
		color: '#555',
	},
	scrollSpacer: {
		height: 100,
	},
})

export default PokemonList
