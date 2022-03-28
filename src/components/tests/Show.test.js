import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and an (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
const fakeData = {
	name: 'Stranger Things',
	summary: 'A show about strang things',
	seasons: [
		{id: 0, name: 'Season 1', episodes: []},
		{id: 1, name: 'Season 2', episodes: []}
	]
}

test('renders without errors', () => { 
	render( <Show show={{name: 'Stranger Things',
	summary: 'A show about strang things',
	seasons: [
		{id: 0, name: 'Season 1', episodes: []},
		{id: 1, name: 'Season 2', episodes: []}
		]}} selectedSeason={'none'} handleSelect={Function.prototype} /> )
});

test('renders Loading component when prop show is null', () => { });

test('renders same number of options seasons are passed in', () => { });

test('handleSelect is called when an season is selected', () => { });

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { });
