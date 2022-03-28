import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';
import userEvent from '@testing-library/user-event';

const fakeData = {
	name: 'Stranger Things',
	summary: 'A show about strang things',
	seasons: [
		{id: 0, name: 'Season 1', episodes: []},
		{id: 1, name: 'Season 2', episodes: []}
	]
}

test('renders without errors', () => { 
	render( <Show show={fakeData} selectedSeason={'none'} handleSelect={Function.prototype} /> )
});

test('renders Loading component when prop show is null', () => {  
	render( <Show show={null} selectedSeason={'none'} handleSelect={Function.prototype}/> )
	const loading = screen.getByTestId(/loading-container/i);
	expect(loading).toBeTruthy();
	expect(loading).toBeInTheDocument();
	expect(loading).toBeVisible();

});

test('renders same number of options seasons are passed in', () => { 
	render( <Show show={fakeData} selectedSeason={'none'} handleSelect={Function.prototype} /> )
	const seasons = screen.getAllByTestId('season-option');
	expect(seasons).toHaveLength(fakeData.seasons.length);
});



test('handleSelect is called when an season is selected', async () => { 
	const handleSelect = jest.fn();
	render( <Show show={fakeData} selectedSeason={'none'} handleSelect={handleSelect} /> )
	// const selectButton = screen.getByLabelText(/season 1/i);
	const select = screen.getByLabelText(/Select A Season/i);
	userEvent.selectOptions(select, ['0']);
	expect(handleSelect).toBeCalled();
	// userEvent.click(selectButton);
	// expect(handleSelect).toHaveBeenCalled();
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { 
	const { rerender } = render(<Show show={fakeData} selectedSeason={'none'} handleSelect={Function.prototype} />);
	let episodes = screen.queryByTestId('episodes-container');
	expect(episodes).not.toBeInTheDocument();
	rerender(<Show show={fakeData} selectedSeason={1} handleSelect={Function.prototype} />)
	episodes = screen.queryByTestId('episodes-container');
	expect(episodes).toBeInTheDocument();
});
