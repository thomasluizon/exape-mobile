import { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

const usePokemon = () => {
	const [pokemonData, setPokemonData] = useState<any[]>([])
	const [offset, setOffset] = useState(0)
	const [loading, setLoading] = useState(false)
	const [initialLoadComplete, setInitialLoadComplete] = useState(false)

	const fetchPokemonData = async (currentOffset: number) => {
		if (loading) return
		setLoading(true)

		try {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon?offset=${currentOffset}&limit=2`
			)

			const data = await response.json()

			const newPokemonData = await Promise.all(
				data.results.map(async (pokemon: any) => {
					const detailsResponse = await fetch(pokemon.url)
					const details = await detailsResponse.json()
					return {
						id: details.id,
						name: details.name,
						image: details.sprites.front_default,
						type: details.types[0].type.name,
					}
				})
			)

			setPokemonData(prev => [...prev, ...newPokemonData])
		} catch (error) {
			console.error('Erro ao buscar Pokémon:', error)
		} finally {
			setLoading(false)
		}
	}

	const populateInitialData = async () => {
		if (initialLoadComplete) return

		const windowHeight = Dimensions.get('window').height
		const itemHeight = 250

		const itemsNeeded = Math.ceil(windowHeight / itemHeight) + 4

		let totalLoaded = 0
		let currentOffset = offset

		while (totalLoaded < itemsNeeded) {
			await fetchPokemonData(currentOffset)
			currentOffset += 2
			totalLoaded += 2
			await new Promise(resolve => setTimeout(resolve, 500))
		}

		setOffset(currentOffset)

		setInitialLoadComplete(true)
	}

	useEffect(() => {
		populateInitialData()
	}, [])

	const fetchMorePokemon = () => {
		if (!loading && initialLoadComplete) {
			setLoading(true)
			setTimeout(() => {
				fetchPokemonData(offset)
				setLoading(false)
				setOffset(prevOffset => prevOffset + 2)
			}, 3000)
		}
	}

	return { pokemonData, fetchMorePokemon, loading }
}

export default usePokemon
