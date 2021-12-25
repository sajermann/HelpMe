import { AccountCircle } from '@mui/icons-material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import {
	CssBaseline,
	AppBar,
	Toolbar,
	Typography,
	Paper,
	TextField,
	Stack,
	Button,
} from '@mui/material';
import { useState, useEffect } from 'react';

export default function Login() {
	const [, setUsername] = useState('');
	const [, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	function verifyLogin() {
		setIsLoading(true);
	}

	const useStyles = makeStyles(() => ({
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
	}));
	const classes = useStyles();

	useEffect(() => {
		localStorage.clear();
	}, []);

	function verifyTypeEnter(e: any) {
		if (e.key === 'Enter') {
			verifyLogin();
		}
	}

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
			{isLoading && <div data-testid="LoadingBar">Loading...</div>}
			<div className={classes.rootOut}>
				<Paper elevation={6}>
					<div className={classes.rootIn}>
						<div className={classes.linhaInput}>
							<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
							<TextField
								inputProps={{ 'data-testid': 'TextFieldUsername' }}
								autoFocus
								fullWidth
								id="fieldUser"
								label="Usuário"
								onKeyPress={verifyTypeEnter}
								onChange={e => setUsername(e.target.value)}
							/>
						</div>
						<div className={classes.linhaInput}>
							<VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
							<TextField
								inputProps={{ 'data-testid': 'TextFieldPassword' }}
								fullWidth
								type="password"
								id="fieldPassword"
								label="Senha"
								onKeyPress={verifyTypeEnter}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<div className={classes.linhaInput}>
							<Stack direction="row" spacing={2}>
								<Button
									data-testid="ButtonEnter"
									disabled={isLoading}
									variant="contained"
									color="primary"
									className={classes.button}
									endIcon={<SendIcon />}
									onClick={verifyLogin}
								>
									Entrar
								</Button>
							</Stack>
						</div>
					</div>
				</Paper>
			</div>
		</div>
	);
}
