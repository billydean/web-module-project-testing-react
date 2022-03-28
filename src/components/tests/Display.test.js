import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';
import userEvent from '@testing-library/user-event';
import mockFetchShow from './../../api/fetchShow';
jest.mock('./../../api/fetchShow');

const fakeData = {
	name: 'Stranger Things',
	summary: 'A show about strang things',
	seasons: [
		{id: 0, name: 'Season 1', episodes: []},
		{id: 1, name: 'Season 2', episodes: []}
	]
}

test('renders without errors with no props', async () => { 
    render(<Display />)
 });

test('renders Show component when the button is clicked ', async () => {
    mockFetchShow.mockResolvedValueOnce(fakeData)
    render(<Display />)
    const button = screen.getByRole('button');
    
    userEvent.click(button);
    const show = await screen.findByTestId('show-container');
    expect(show).toBeInTheDocument();
 });

test('renders show season options matching your data when the button is clicked', async () =>{ 
    mockFetchShow.mockResolvedValueOnce(fakeData)
    render(<Display/>);
    const button = screen.getByRole('button');
    userEvent.click(button);
        const seasonOptions = await screen.findAllByTestId('season-option');
        expect(seasonOptions).toHaveLength(2);
    
});
