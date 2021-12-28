import { Theme } from '@mui/material';
import { StyleRules } from '@mui/styles/withStyles';

// se vc quiser exportar o objeto base
export const baseStyles = {
	rootOut: {
		display: 'flex',
		justifyContent: 'center',
		padding: 10,
		height: 'calc(100% - 100px)',
	},
	rootIn: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		textAlign: 'center',
		marginTop: 6,
		marginBottom: 6,
		padding: 50,
		width: '100%',
		maxWidth: 750,
	},
	button: {
		marginLeft: 10,
	},
	linhaInput: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 10,
		minWidth: 300,
		maxWidth: 300,
	},
	root: {
		flexGrow: 1,
		display: 'flex',
	},
};

export default function stylesToMakeStyles(theme: Theme) {
	const styles = {
		...baseStyles,
		teste: {
			padding: theme.spacing(1),
		},
	};

	return styles as StyleRules<{}, keyof typeof styles>;
}
