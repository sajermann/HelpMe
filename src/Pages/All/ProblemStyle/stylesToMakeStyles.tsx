import { Theme, makeStyles } from '@mui/material';
import { ClassNameMap } from '@mui/styles';

type Props = {
	themeMaterial: Theme;
};

export default function stylesToMakeStyles({ themeMaterial }: Props) {
	return {
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
		teste: {
			padding: themeMaterial.spacing(1),
		},
	};
}

