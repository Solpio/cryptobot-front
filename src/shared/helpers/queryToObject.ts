export function queryToObject(url: string): Record<string, string | boolean> {
	const queryParams: Record<string, string | boolean> = {};

	const queryString = url.split("?")[1];
	if (!queryString) {
		return queryParams;
	}

	const pairs = queryString.split("&");

	for (const pair of pairs) {
		const [key, value] = pair.split("=");
		if (key) {
			queryParams[key] =
				value === "true"
					? true
					: value === "false"
						? false
						: decodeURIComponent(value);
		}
	}

	return queryParams;
}
