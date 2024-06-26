import { array } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planet: [],
			favorites:[],
			
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "black",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "black",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {
			characterApi: () => {
			  fetch("https://swapi.dev/api/people")
				.then(res => res.json())
				.then(data => {
				  console.log(data);
				  setStore({ characters: data.results });
				});
			},
			planetApi: () => {
			  fetch("https://swapi.dev/api/planets")
				.then(res => res.json())
				.then(data => {
				  console.log(data);
				  setStore({ planet: data.results });
				})
			},
		  VehiclesApi: () => {
			fetch("https://swapi.dev/api/vehicles")
			  .then(res => res.json())
			  .then(data => {
				console.log(data);
				setStore({ vehicles: data.results });
			  })
		  },
		  addFavorites:(name) => {
			const favorites= getStore().favorites
			favorites.push(name)
			setStore({favorites: favorites})
		  },
		  removeFavorite:(idx) => {
			const favorites= getStore().favorites
			let filteredFavorites = favorites.filter((item, index) => {
				return(
					index !== idx
				);
			});
			setStore({favorites: filteredFavorites})
		}
	}
};
};

	export default getState;

		  
	// 		// Use getActions to call a function within a fuction
	// 		exampleFunction: () => {
	// 			getActions().changeColor(0, "green");
	// 		},
	// 		loadSomeData: () => {
	// 			/**
	// 				fetch().then().then(data => setStore({ "foo": data.bar }))
	// 			*/
	// 		},
	// 		changeColor: (index, color) => {
	// 			//get the store
	// 			const store = getStore();

	// 			//we have to loop the entire demo array to look for the respective index
	// 			//and change its color
	// 			const demo = store.demo.map((elm, i) => {
	// 				if (i === index) elm.background = color;
	// 				return elm;
	// 			});

	// 			//reset the global store
	// 			setStore({ demo: demo });
	// 		}
	// 	}
	// };

