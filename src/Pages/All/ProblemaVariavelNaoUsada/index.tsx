/* eslint-disable no-unused-vars */
import { Button } from '@mui/material';

type Props = {
	setBook: (data: any) => void;
};

export default function Book({ setBook }: Props) {
	function handleBuy() {
		setBook('Comprou Livro 1');
	}
	return (
		<>
			<p>Compre um livro</p>
			<Button variant="outlined" onClick={handleBuy}>
				Comprar
			</Button>
		</>
	);
}
