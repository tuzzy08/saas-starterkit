import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { Providers, PostHogPageview } from '@/components/Providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Suspense>
				<PostHogPageview />
			</Suspense>
			<ClerkProvider>
				<Providers>
					<body className={inter.className}>{children}</body>
				</Providers>
			</ClerkProvider>
		</html>
	);
}
