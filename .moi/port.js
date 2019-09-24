export default function Port() {
	let port = 8080;
	try {
		return port;
	} catch (e) {
		while (e) {
			port = port + 1;
		}
	}
}
