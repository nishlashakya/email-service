import React from 'react';
import {render} from '@testing-library/react';
import FormComponent from '../form';

test('renders correctly with Send button', () => {
	const {getByTestId} = render(<FormComponent />);
	const sendButton = getByTestId('form-action-button');
	expect(sendButton).toBeInTheDocument();
});
