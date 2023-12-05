import React from 'react';
import NavBar from './components/NavBar';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Mario Sanseverino\'s Portfolio',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className='bg-black w-full flex flex-col'>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
