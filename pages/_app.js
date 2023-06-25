import { Provider } from "react-redux";
import { useStore } from "../store";
import "../src/styles/globals.css";

export default function App({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState);

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
