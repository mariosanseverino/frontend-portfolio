import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Archivo } from 'next/font/google';
import BehaviorProvider from './context/BehaviorContext';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Mario Sanseverino\'s Portfolio',
};

const archivo = Archivo({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--archivo-font'
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<Analytics />
			<BehaviorProvider>
				<body className={`w-full flex flex-col ${ archivo.className }`}>
					{ children }
				</body>
			</BehaviorProvider>
		</html>
	);
}
