import React from 'react';
import {render} from '@testing-library/react';
import HeaderComponent from '../header';

test('renders correctly with Send button', () => {
	const {getByTestId} = render(<HeaderComponent />);
    const headerTitle = getByTestId('app-header-title');
	expect(headerTitle).toBeInTheDocument();
});
