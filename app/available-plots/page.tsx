'use client';

import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { PlotMap } from '@/components/plot-map';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function AvailablePlotsPage() {
	return (
		<main>
			<Navigation />
			<div>
				{/* Hero Section */}
				<section
					className='relative min-h-[60vh] flex items-end overflow-hidden'
					style={{ backgroundImage: "url('/aerial-view-of-golf-course-at-sunrise.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
				>
					<div className='absolute inset-0 bg-gradient-to-b from-black/30 to-black/60' />
					<div className='relative z-10 container mx-auto px-5 pb-12 max-w-6xl'>
						<h1 className='font-serif text-white'>Available Homesites</h1>
						<p className='text-base text-white/85 max-w-xl mt-3'>
							Choose your perfect homesite at Pecan Villas. Each plot offers unique features and stunning views.
						</p>
					</div>
				</section>

				<section className='py-12' style={{ backgroundColor: 'var(--color-bg)' }}>
					<div className='container mx-auto px-5 max-w-6xl'>
						<PlotMap />
					</div>
				</section>

				{/* CTA */}
				<section
					className='relative py-16 md:py-20 bg-cover bg-center'
					style={{ backgroundImage: "url('/championship-golf-course-pecan-plantation.jpg')" }}
				>
					<div className='absolute inset-0 bg-black/60' />
					<div className='relative z-10 container mx-auto px-5 max-w-3xl text-center'>
						<h2 className='font-serif text-white mb-3'>Ready to Choose Your Homesite?</h2>
						<p className='text-base text-white/85 mb-8'>
							Our team is here to help you select the perfect homesite and answer any questions about available homesites.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link href='/contact' className='btn-primary flex items-center justify-center gap-2'>
								<Mail className='h-4 w-4' />
								Contact Us
							</Link>
							<a
								href='tel:+18477575571'
								data-stlabel='Call Now - (847) 757-5571'
								className='btn-secondary-light flex items-center justify-center gap-2'
							>
								<Phone className='h-4 w-4' />
								Call Now
							</a>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</main>
	);
}
