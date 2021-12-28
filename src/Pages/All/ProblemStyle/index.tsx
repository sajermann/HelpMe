import { makeStyles } from '@mui/styles';
import {
	CssBaseline,
	AppBar,
	Toolbar,
	Typography,
	Paper,
	createTheme,
} from '@mui/material';
import { useEffect } from 'react';
import stylesToMakeStyles from './stylesToMakeStyles';

export default function Login() {
	const themeMaterial = createTheme();
	// const useStyles = makeStyles(() => ({
	// 	rootOut: {
	// 		display: 'flex',
	// 		justifyContent: 'center',
	// 		padding: 10,
	// 		height: 'calc(100% - 100px)',
	// 	},
	// 	rootIn: {
	// 		display: 'flex',
	// 		alignItems: 'center',
	// 		justifyContent: 'center',
	// 		flexDirection: 'column',
	// 		textAlign: 'center',
	// 		marginTop: 6,
	// 		marginBottom: 6,
	// 		padding: 50,
	// 		width: '100%',
	// 		maxWidth: 750,
	// 	},
	// 	button: {
	// 		marginLeft: 10,
	// 	},
	// 	linhaInput: {
	// 		display: 'flex',
	// 		alignItems: 'center',
	// 		justifyContent: 'center',
	// 		margin: 10,
	// 		minWidth: 300,
	// 		maxWidth: 300,
	// 	},
	// 	root: {
	// 		flexGrow: 1,
	// 		display: 'flex',
	// 	},
	// }));

	const useStyles = makeStyles(stylesToMakeStyles);
	const classes = useStyles();

	useEffect(() => {
		console.log('Bruno');
		console.log(stylesToMakeStyles(themeMaterial));
	}, []);

	return (
		<div className="container">
			<div className="headerGeral" style={{ marginBottom: 10 }}>
				<CssBaseline />
				<AppBar position="static" className={classes.root}>
					<Toolbar style={{ justifyContent: 'center' }}>
						<Typography variant="h6" noWrap>
							<div className="nameHeader">Teste</div>
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
			<div className={classes.rootOut}>
				<Paper elevation={6}>
					<div className={classes.rootIn}>Bruno</div>
				</Paper>
			</div>
		</div>
	);
}
