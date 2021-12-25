import { useState } from 'react';
import Header from '../../../Components/Header';
import Book from '../ProblemaVariavelNaoUsada';

export default function Home() {
	const [book, setBook] = useState('');
	return (
		<>
			<Header />
			<Book setBook={setBook} />
			<p>{book}</p>
		</>
	);
}
