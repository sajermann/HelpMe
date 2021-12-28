/* eslint-disable no-unused-vars */
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {
	render as renderizar,
	screen,
	waitFor,
	fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useAuth } from '../../../Context/AuthContext';
import Index from '.';

describe('Login', () => {
	test('Must contain the Text Field Username', () => {
		renderizar(
			<Router>
				<Index />
			</Router>
		);

		expect(screen.getByTestId('TextFieldUsername')).toBeInTheDocument();
	});

	test('Must contain the Text Field Password', () => {
		renderizar(
			<Router>
				<Index />
			</Router>
		);

		expect(screen.getByTestId('TextFieldPassword')).toBeInTheDocument();
	});

	test('Must contain the Loading Bar in Click Enter', async () => {
		renderizar(
			<Router>
				<Index />
			</Router>
		);
		const textFieldUser = screen.getByTestId(
			'TextFieldUsername'
		) as HTMLInputElement;
		expect(textFieldUser.value).toMatch('');
		fireEvent.change(textFieldUser, { target: { value: 'potato' } });
		expect(textFieldUser.value).toMatch('potato');

		const textFieldPass = screen.getByTestId(
			'TextFieldPassword'
		) as HTMLInputElement;
		expect(textFieldPass.value).toMatch('');
		fireEvent.change(textFieldPass, { target: { value: 'potato' } });
		expect(textFieldPass.value).toMatch('potato');

		const buttonEnter = screen.getByTestId('ButtonEnter');
		expect(buttonEnter).toBeInTheDocument();
		// fireEvent.submit(buttonEnter);
		fireEvent.click(buttonEnter);

		const loadingBar = await screen.findByTestId('LoadingBar');
		expect(loadingBar).toBeInTheDocument();
	});
});
