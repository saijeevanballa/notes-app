import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import RootRouter from "./rootRouter";
import { store, persistor } from "./store/store";
import NavBar from "./components/NavBar";

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<NavBar />
				<RootRouter />
			</PersistGate>
		</Provider>
	);
}
