'use client';

import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NavLink {
	href: string;
	label: string;
	children?: { href: string; label: string }[];
}

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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

	const navLinks: NavLink[] = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About Us' },
		{ href: '/life-in-pecan', label: 'Life in Pecan' },
		{
			href: '/models',
			label: 'Available Homes',
			children: [{ href: '/available-plots', label: 'See Available Homesites' }]
		},
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/contact', label: 'Contact' }
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'backdrop-blur-[10px]'
					: 'bg-gradient-to-b from-black/50 to-transparent'
			}`}
			style={isScrolled ? {
				backgroundColor: 'rgba(255, 255, 255, 0.97)',
				borderBottom: '2px solid #7d1935',
				boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
			} : undefined}
		>
			<div className='container mx-auto px-5'>
				<div className='flex items-center justify-between h-20'>
					<Link href='/' className='flex items-center'>
						<Image
							src='/logo-transparent.png'
							alt='Charterstone Homes'
							width={200}
							height={40}
							className='h-10 w-auto'
							style={isScrolled ? { filter: 'brightness(0.2)' } : undefined}
							priority
						/>
					</Link>

					<div className='hidden lg:flex items-center gap-8'>
						{navLinks.map((link) => (
							<div
								key={link.href}
								className='relative'
								onMouseEnter={() => link.children && setOpenDropdown(link.href)}
								onMouseLeave={() => link.children && setOpenDropdown(null)}
							>
								<Link
									href={link.href}
									className='flex items-center gap-1 text-[13px] font-medium uppercase tracking-[0.05em] transition-colors duration-300'
									style={{
										color: isScrolled ? 'var(--color-text)' : 'rgba(255,255,255,0.95)',
										textShadow: isScrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.5)',
									}}
								>
									{link.label}
									{link.children && <ChevronDown className='h-3 w-3' />}
								</Link>
								{link.children && openDropdown === link.href && (
									<div
										className='absolute top-full left-0 pt-3 min-w-[220px]'
									>
										<div
											className='py-1 backdrop-blur-[10px]'
											style={{
												backgroundColor: isScrolled
													? 'rgba(255, 255, 255, 0.85)'
													: 'rgba(0, 0, 0, 0.35)',
												borderBottom: isScrolled
													? '1px solid rgba(125, 25, 53, 0.4)'
													: '1px solid rgba(255, 255, 255, 0.2)',
											}}
										>
											{link.children.map((child) => (
												<Link
													key={child.href}
													href={child.href}
													className='block px-4 py-2.5 text-[13px] font-medium uppercase tracking-[0.05em] transition-colors duration-300'
													style={{
														color: isScrolled ? 'var(--color-text)' : 'rgba(255,255,255,0.95)',
														textShadow: isScrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.5)',
													}}
												>
													{child.label}
												</Link>
											))}
										</div>
									</div>
								)}
							</div>
						))}
					</div>

					<div className='hidden lg:flex items-center gap-4'>
						<a
							href='tel:+16824983197'
							data-stlabel='Header - (682) 498-3197'
							className='flex items-center gap-2 text-[13px] font-light transition-colors duration-300'
							style={{
								color: isScrolled ? 'var(--color-text-muted)' : 'rgba(255,255,255,0.85)',
							}}
						>
							<Phone className='h-3.5 w-3.5' />
							(682) 498-3197
						</a>
						<Link
							href='/contact'
							className='text-[12px] font-normal uppercase tracking-[0.08em] rounded-sm transition-all duration-300'
							style={{
								padding: '8px 20px',
								border: isScrolled ? '2px solid #7d1935' : '2px solid rgba(255,255,255,0.7)',
								color: isScrolled ? '#7d1935' : 'rgba(255,255,255,0.9)',
								borderRadius: '4px',
							}}
						>
							Schedule Tour
						</Link>
					</div>

					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className='lg:hidden p-2 transition-colors'
						style={{ color: isScrolled ? 'var(--color-text)' : 'rgba(255,255,255,0.9)' }}
						aria-label='Toggle menu'
					>
						{isMobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
					</button>
				</div>
			</div>

			{isMobileMenuOpen && (
				<div
					className='lg:hidden fixed inset-0 top-20 z-40 overflow-y-auto'
					style={{ backgroundColor: 'var(--color-bg)' }}
				>
					<div className='flex flex-col p-6 gap-2'>
						{navLinks.map((link) => (
							<div key={link.href}>
								<Link
									href={link.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className='block text-base font-light py-3 transition-colors'
									style={{
										color: 'var(--color-text)',
										borderBottom: link.children ? 'none' : '1px solid var(--color-border)',
									}}
								>
									{link.label}
								</Link>
								{link.children && (
									<div style={{ borderBottom: '1px solid var(--color-border)' }}>
										{link.children.map((child) => (
											<Link
												key={child.href}
												href={child.href}
												onClick={() => setIsMobileMenuOpen(false)}
												className='block text-sm font-light py-2 pl-4 transition-colors'
												style={{ color: 'var(--color-text-muted)' }}
											>
												{child.label}
											</Link>
										))}
									</div>
								)}
							</div>
						))}
						<div className='pt-4 mt-2'>
							<a
								href='tel:+16824983197'
								data-stlabel='Header - (682) 498-3197'
								className='flex items-center gap-2 text-base font-light py-3'
								style={{ color: 'var(--color-text-muted)' }}
							>
								<Phone className='h-4 w-4' />
								(682) 498-3197
							</a>
							<Link
								href='/contact'
								onClick={() => setIsMobileMenuOpen(false)}
								className='btn-primary block text-center mt-4'
							>
								Schedule Tour
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
