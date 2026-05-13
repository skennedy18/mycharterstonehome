'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
	return (
		<footer style={{ background: 'linear-gradient(180deg, #1e4b8b 0%, #153568 100%)', borderTop: '3px solid #d4af37' }}>
			<div className='container mx-auto px-5 py-12 max-w-6xl'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Company Info */}
					<div>
						<Image
							src='/logo.svg'
							alt='Charterstone Homes'
							width={180}
							height={60}
							className='h-10 w-auto mb-4 brightness-0 invert'
						/>
						<p className='text-sm leading-relaxed' style={{ color: 'rgba(255,255,255,0.7)' }}>
							Building luxury custom homes in Pecan Plantation&rsquo;s premier golf and aviation community.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3
							className='text-[12px] tracking-[0.12em] uppercase font-medium mb-4'
							style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-body), Outfit, sans-serif' }}
						>
							Quick Links
						</h3>
						<ul className='space-y-2'>
							{[
								{ href: '/models', label: 'Available Homes' },
								{ href: '/available-plots', label: 'See Available Homesites' },
								{ href: '/gallery', label: 'Gallery' },
								{ href: '/about', label: 'About Us' },
								{ href: '/contact', label: 'Contact' },
							].map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className='text-sm transition-opacity duration-300 opacity-70 hover:opacity-100'
										style={{ color: 'rgba(255,255,255,0.9)' }}
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3
							className='text-[12px] tracking-[0.12em] uppercase font-medium mb-4'
							style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-body), Outfit, sans-serif' }}
						>
							Contact Us
						</h3>
						<ul className='space-y-3'>
							<li className='flex items-start gap-2 text-sm' style={{ color: 'rgba(255,255,255,0.7)' }}>
								<MapPin className='h-4 w-4 flex-shrink-0 mt-0.5' />
								<span>
									Pecan Plantation<br />Granbury, TX 76049
								</span>
							</li>
							<li className='flex items-center gap-2 text-sm' style={{ color: 'rgba(255,255,255,0.7)' }}>
								<Phone className='h-4 w-4 flex-shrink-0' />
								<a
									href='tel:+16824983197'
									data-stlabel='Footer - (682) 498-3197'
									className='transition-opacity duration-300 opacity-70 hover:opacity-100'
									style={{ color: 'rgba(255,255,255,0.9)' }}
								>
									(682) 498-3197
								</a>
							</li>
							<li className='flex items-center gap-2 text-sm' style={{ color: 'rgba(255,255,255,0.7)' }}>
								<Mail className='h-4 w-4 flex-shrink-0' />
								<a
									href='mailto:info@mycharterstonehome.com'
									className='transition-opacity duration-300 opacity-70 hover:opacity-100'
									data-stlabel='Footer - info@mycharterstonehome.com'
									style={{ color: 'rgba(255,255,255,0.9)' }}
								>
									info@mycharterstonehome.com
								</a>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3
							className='text-[12px] tracking-[0.12em] uppercase font-medium mb-4'
							style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-body), Outfit, sans-serif' }}
						>
							Stay Updated
						</h3>
						<p className='text-sm mb-4' style={{ color: 'rgba(255,255,255,0.7)' }}>
							Subscribe to receive updates on new models and exclusive offers.
						</p>
						<smarttouch-nexgen
							id='subscribe-form'
							form='4026'
							client='2339'
							span6='1,2'
							spanmobile12='1,2'
							submit='Subscribe'
							placeholders
							label='Footer - Stay Updated'
							smarttouch-nexgen></smarttouch-nexgen>
					</div>
				</div>
			</div>

			{/* Trust Signals */}
			<div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
				<div className='container mx-auto px-5 py-5 max-w-6xl'>
					<p
						className='text-center text-[11px] tracking-wide'
						style={{ color: 'rgba(255,255,255,0.5)' }}
					>
						Energy Star Certified &nbsp;·&nbsp; 10-Year Structural Warranty &nbsp;·&nbsp; Preferred Builder &nbsp;·&nbsp; Equal Housing Opportunity
					</p>
				</div>
			</div>

			{/* Bottom Bar */}
			<div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
				<div className='container mx-auto px-5 py-4 max-w-6xl'>
					<div className='flex flex-col sm:flex-row items-center justify-between gap-4 text-xs' style={{ color: 'rgba(255,255,255,0.5)' }}>
						<p>&copy; {new Date().getFullYear()} Charterstone Homes. All rights reserved.</p>
						<div className='flex gap-4'>
							<Link href='/privacy' className='transition-opacity duration-300 hover:opacity-100'>
								Privacy Policy
							</Link>
							<Link href='/terms' className='transition-opacity duration-300 hover:opacity-100'>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
