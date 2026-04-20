'use client';

import { Button } from '@/components/ui/button';
import { Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMobileMenuOpen]);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About Us' },
		{ href: '/models', label: 'Floor Plans' },
		{ href: '/available-plots', label: 'Available Homesites' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/contact', label: 'Contact' }
	];

	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient-to-b from-slate-900/95 via-slate-900/80 to-slate-900/60 backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent'}`}>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-20'>
					{/* Logo */}
					<Link
						href='/'
						className='flex items-center -ml-4 md:-ml-6 lg:-ml-8'>
						<Image
							src='/logo-transparent.png'
							alt='Charterstone Homes'
							width={240}
							height={60}
							className='h-12 w-auto'
							priority
						/>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden lg:flex items-center gap-8'>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className='relative text-sm font-medium text-white/90 hover:text-white transition-colors group'>
								{link.label}
								<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full' />
							</Link>
						))}
					</div>

					{/* Desktop CTA */}
					<div className='hidden lg:flex items-center gap-4'>
						<a
							href='tel:+18477575571'
							data-stlabel='Header - (847) 757-5571'
							className='flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors'>
							<Phone className='h-4 w-4' />
							(847) 757-5571
						</a>
						<Link href='/contact'>
							<Button className='bg-burgundy hover:bg-burgundy/90 text-white'>Schedule Tour</Button>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className='lg:hidden p-2 text-white/90 hover:text-white transition-colors'
						aria-label='Toggle menu'>
						{isMobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
					</button>
				</div>
			</div>

			{isMobileMenuOpen && (
				<div className='lg:hidden fixed inset-0 top-20 bg-slate-900/95 backdrop-blur-md z-40 overflow-y-auto'>
					<div className='flex flex-col p-6 gap-4'>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setIsMobileMenuOpen(false)}
								className='text-lg font-medium text-white/90 hover:text-white transition-colors py-2'>
								{link.label}
							</Link>
						))}
						<div className='border-t border-white/20 pt-4 mt-4'>
							<a
								href='tel:+18477575571'
								data-stlabel='Header - (847) 757-5571'
								className='flex items-center gap-2 text-lg font-medium text-white/90 hover:text-white transition-colors py-2'>
								<Phone className='h-5 w-5' />
								(847) 757-5571
							</a>
							<Link
								href='/contact'
								onClick={() => setIsMobileMenuOpen(false)}>
								<Button className='w-full mt-4 bg-burgundy hover:bg-burgundy/90 text-white'>Schedule Tour</Button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
