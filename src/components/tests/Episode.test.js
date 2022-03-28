import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

test("renders without error", () => { 
	render (
		<Episode episode={{id:'abc', image: 'https://i.ibb.co/2FsfXqM/stranger-things.png', name: 'test name', season: '1', number: '2', summary: 'This is a summary', runtime: 24 }}/>
	)
});

test("renders the summary test passed as prop", () => { 
	render (
		<Episode episode={{id:'abc', image: 'https://i.ibb.co/2FsfXqM/stranger-things.png', name: 'test name', season: '1', number: '2', summary: 'This is a summary', runtime: 24 }}/>
		)
	const summary = screen.queryByText(/this is a summary/i);
	expect(summary).toBeTruthy();
	expect(summary).toBeInTheDocument();
	expect(summary).toBeVisible();
});

test("renders default image when image is not defined", () => { 
	render (
		<Episode episode={{id:'abc', image: null, name: 'test name', season: '1', number: '2', summary: 'This is a summary', runtime: 24 }} />
	)
	const image = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');
	expect(image).toBeTruthy();
	expect(image).toBeInTheDocument();
	expect(image).toBeVisible();
});
