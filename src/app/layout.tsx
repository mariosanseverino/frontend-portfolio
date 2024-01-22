import React from 'react';
import { Archivo, Archivo_Black } from 'next/font/google';
import BehaviorProvider from './context/BehaviorContext';
import NavBar from './components/NavBar';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Mario Sanseverino\'s Portfolio',
};

export const archivo = Archivo({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--archivo-font'
});

export const archivoBlack = Archivo_Black({
	weight: ['400'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--archivoblack-font'
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<BehaviorProvider>
				<body className={`w-full flex flex-col ${ archivo.className }`}>
					<NavBar />
					{children}
				</body>
			</BehaviorProvider>
		</html>
	);
}
