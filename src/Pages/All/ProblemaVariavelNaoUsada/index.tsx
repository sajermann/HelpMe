import { Button } from '@mui/material';

type Props = {
	setBook(data: string): void;
};

export default function Book({ setBook }: Props) {
	function handleBuy() {
		setBook('Comprou Livro 1');
	}
	return (
		<>
			<p>Compre um livro</p>
			<Button variant="outlined" onClick={handleBuy}>
				a Comprar
			</Button>
		</>
	);
}
