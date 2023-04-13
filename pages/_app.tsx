// Mantine Imports
import { ColorScheme, ColorSchemeProvider, Loader, MantineProvider } from '@mantine/core';
import generateTheme from 'theme';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	const mantineTheme = generateTheme('light');
	const handleColorScheme: ColorScheme = 'light';

	return (
		<ColorSchemeProvider colorScheme={handleColorScheme} toggleColorScheme={() => null}>
			<MantineProvider theme={mantineTheme} withGlobalStyles withNormalizeCSS>
				<Component {...pageProps} />
				<Loader />
			</MantineProvider>
		</ColorSchemeProvider>
	);
}
