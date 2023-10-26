import 'node-libs-react-native/globals';
import 'intl-pluralrules';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MMSDK } from './web3/metamask';

export default function App() {
	const onPress = async () => {
		await MMSDK.connect();
		console.log("connected")
		const ethereum = MMSDK.getProvider();
		const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		console.log(accounts);
	};

	return (
		<View style={styles.container}>
			<Button
				title='Sign up with metamask'
				onPress={onPress}
			/>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
