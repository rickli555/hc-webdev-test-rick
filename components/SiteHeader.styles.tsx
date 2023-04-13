import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	mainHeader: {
		[theme.fn.smallerThan(800)]: {
			height: 250,
			maxHeight: 250,
		},
	},

	inner: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: 20,

		[theme.fn.smallerThan(1067)]: {
			paddingTop: 15,
			paddingBottom: 10,
		},
	},

	burger: {
		[theme.fn.largerThan(1056)]: {
			display: 'none',
		},
	},

	drawerLinks: {
		justifyContent: 'center',
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		margin: 50,
		fontSize: theme.fontSizes.md,
	},

	drawerButtons: {
		textAlign: 'center',
	},

	logos: {
		fontSize: theme.fontSizes.sm,
		width: 240,
		textAlign: 'center',
		[theme.fn.smallerThan(800)]: {
			flexDirection: 'column',
		},
		[theme.fn.smallerThan(722)]: {
			fontSize: 13,
		},
		lineHeight: 1,

		'& .hcLogo': {
			margin: 0,
			padding: 0,
		},

		'& h1': {
			margin: 0,
			padding: 0,
			fontSize: theme.fontSizes.xl,
			color: theme.colors.gray[6],
		},
	},

	links: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: theme.spacing.lg,

		[theme.fn.smallerThan(1056)]: {
			display: 'none',
		},
	},

	secondaryLinks: {
		marginRight: '1rem',
	},

	group: {
		alignItems: 'center',
		display: 'flex',
	},

	mainLinks: {
		marginRight: -theme.spacing.sm,
	},

	mainLink: {
		borderBottom: '2px solid transparent',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
		fontSize: 13,
		fontWeight: 700,
		padding: `7px ${theme.spacing.sm}px`,
		textTransform: 'uppercase',
		transition: 'border-color 100ms ease, color 100ms ease',

		'&:hover': {
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
			textDecoration: 'none',
		},
	},

	greeting: {
		marginLeft: '.75em',
		color: '#cc4499',
	},

	mainLinkActive: {
		borderBottomColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 1],
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
	},
}));

export default useStyles;
