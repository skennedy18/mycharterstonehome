'use client';

import type React from 'react';

import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { Clock, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		interest: '',
		message: ''
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError('');

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error('Failed to send message');
			}

			setIsSubmitted(true);
			setFormData({
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				interest: '',
				message: ''
			});
		} catch {
			setError('Failed to send message. Please try again or call us directly.');
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const isOpen = () => {
		const now = new Date();
		const day = now.getDay();
		const hour = now.getHours();
		return day >= 1 && day <= 6 && hour >= 9 && hour < 18;
	};

	const inputStyle = {
		border: 'none',
		borderBottom: '1px solid var(--color-border)',
		borderRadius: 0,
		background: 'transparent',
		padding: '10px 0',
		width: '100%',
		fontSize: '14px',
		fontWeight: 300 as const,
		color: 'var(--color-text)',
		outline: 'none',
	};

	return (
		<main>
			<Navigation />
			<div className='pt-20'>
				{/* Hero Section */}
				<section
					className='relative min-h-[50vh] flex items-end overflow-hidden'
					style={{ backgroundImage: "url('/aerial-view-of-golf-course-at-sunrise.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
				>
					<div className='absolute inset-0 bg-gradient-to-b from-black/15 to-black/50' />
					<div className='relative z-10 container mx-auto px-5 pb-12 max-w-6xl'>
						<h1 className='font-serif text-white'>Contact Us</h1>
						<p className='text-base text-white/85 max-w-xl mt-3'>
							Ready to start building your dream home? Get in touch with our team today.
						</p>
					</div>
				</section>

				{/* Main Content */}
				<section className='py-16 md:py-20' style={{ backgroundColor: 'var(--color-bg)' }}>
					<div className='container mx-auto px-5 max-w-6xl'>
						<div className='grid lg:grid-cols-3 gap-10'>
							{/* Contact Information */}
							<div className='lg:col-span-1 space-y-8'>
								<div>
									<h3 className='font-serif mb-6' style={{ color: 'var(--color-text)' }}>Get In Touch</h3>
									<div className='space-y-5'>
										<div className='flex items-start gap-3'>
											<MapPin className='h-4 w-4 flex-shrink-0 mt-1' style={{ color: 'var(--color-primary)' }} />
											<div>
												<p className='text-sm font-normal' style={{ color: 'var(--color-text)' }}>Visit Us</p>
												<p className='text-sm font-light' style={{ color: 'var(--color-text-muted)' }}>
													Pecan Plantation<br />Granbury, TX 76049
												</p>
											</div>
										</div>
										<div className='flex items-start gap-3'>
											<Phone className='h-4 w-4 flex-shrink-0 mt-1' style={{ color: 'var(--color-primary)' }} />
											<div>
												<p className='text-sm font-normal' style={{ color: 'var(--color-text)' }}>Call Us</p>
												<a
													href='tel:+18477575571'
													data-stlabel='Call Us - (847) 757-5571'
													className='text-sm font-light transition-colors duration-300'
													style={{ color: 'var(--color-text-muted)' }}
												>
													(847) 757-5571
												</a>
											</div>
										</div>
										<div className='flex items-start gap-3'>
											<Clock className='h-4 w-4 flex-shrink-0 mt-1' style={{ color: 'var(--color-primary)' }} />
											<div>
												<p className='text-sm font-normal' style={{ color: 'var(--color-text)' }}>Office Hours</p>
												<p className='text-sm font-light' style={{ color: 'var(--color-text-muted)' }}>
													Monday – Saturday<br />9:00 AM – 6:00 PM
												</p>
												<span className={`inline-flex items-center gap-2 text-xs mt-2 ${isOpen() ? 'text-green-700' : 'text-red-700'}`}>
													<span className={`h-1.5 w-1.5 rounded-full ${isOpen() ? 'bg-green-600' : 'bg-red-600'}`} />
													{isOpen() ? 'Open Now' : 'Closed'}
												</span>
											</div>
										</div>
									</div>
								</div>

								{/* Map */}
								<div className='overflow-hidden rounded-sm' style={{ border: '1px solid var(--color-border)' }}>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107520.5!2d-97.6903!3d32.3665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDIxJzU5LjQiTiA5N8KwNDEnMjUuMSJX!5e0!3m2!1sen!2sus!4v1234567890'
										width='100%'
										height='250'
										style={{ border: 0 }}
										allowFullScreen
										loading='lazy'
										referrerPolicy='no-referrer-when-downgrade'
										title='Charterstone Homes Location'
									/>
								</div>
							</div>

							{/* Contact Form */}
							<div className='lg:col-span-2'>
								<h3 className='font-serif mb-8' style={{ color: 'var(--color-text)' }}>Send Us a Message</h3>
								{isSubmitted ? (
									<div className='py-12'>
										<div className='w-12 h-12 rounded-full flex items-center justify-center mb-4' style={{ backgroundColor: 'var(--color-bg-alt)' }}>
											<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' style={{ color: 'var(--color-primary)' }}>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
											</svg>
										</div>
										<h3 className='font-serif mb-2' style={{ color: 'var(--color-text)' }}>Thank You</h3>
										<p className='text-sm' style={{ color: 'var(--color-text-muted)' }}>We&rsquo;ve received your message and will get back to you shortly.</p>
									</div>
								) : (
									<form onSubmit={handleSubmit} className='space-y-6'>
										<div className='grid md:grid-cols-2 gap-6'>
											<div>
												<label htmlFor='firstName' className='block text-[12px] uppercase tracking-[0.08em] mb-2' style={{ color: 'var(--color-text-muted)' }}>First Name *</label>
												<input
													type='text'
													id='firstName'
													name='firstName'
													required
													value={formData.firstName}
													onChange={handleChange}
													style={inputStyle}
												/>
											</div>
											<div>
												<label htmlFor='lastName' className='block text-[12px] uppercase tracking-[0.08em] mb-2' style={{ color: 'var(--color-text-muted)' }}>Last Name *</label>
												<input
													type='text'
													id='lastName'
													name='lastName'
													required
													value={formData.lastName}
													onChange={handleChange}
													style={inputStyle}
												/>
											</div>
										</div>
										<div className='grid md:grid-cols-2 gap-6'>
											<div>
												<label htmlFor='email' className='block text-[12px] uppercase tracking-[0.08em] mb-2' style={{ color: 'var(--color-text-muted)' }}>Email *</label>
												<input
													type='email'
													id='email'
													name='email'
													required
													value={formData.email}
													onChange={handleChange}
													style={inputStyle}
												/>
											</div>
											<div>
												<label htmlFor='phone' className='block text-[12px] uppercase tracking-[0.08em] mb-2' style={{ color: 'var(--color-text-muted)' }}>Phone</label>
												<input
													type='tel'
													id='phone'
													name='phone'
													value={formData.phone}
													onChange={handleChange}
													style={inputStyle}
												/>
											</div>
										</div>
										<div>
											<label htmlFor='interest' className='block text-[12px] uppercase tracking-[0.08em] mb-2' style={{ color: 'var(--color-text-muted)' }}>I&apos;m Interested In</label>
											<input
												type='text'
												id='interest'
												name='interest'
												placeholder='e.g., Building a custom home, Available plots...'
												value={formData.interest}
												onChange={handleChange}
												style={inputStyle}
											/>
										</div>
										<div>
											<label htmlFor='message' className='block text-[12px] uppercase tracking-[0.08em] mb-2' style={{ color: 'var(--color-text-muted)' }}>Message *</label>
											<textarea
												id='message'
												name='message'
												required
												rows={5}
												value={formData.message}
												onChange={handleChange}
												className='resize-none'
												style={{ ...inputStyle, borderBottom: '1px solid var(--color-border)' }}
											/>
										</div>
										{error && (
											<p className='text-sm text-red-700'>{error}</p>
										)}
										<button
											type='submit'
											disabled={isSubmitting}
											className='btn-primary disabled:opacity-50 disabled:cursor-not-allowed'
										>
											{isSubmitting ? 'Sending...' : 'Send Message'}
										</button>
									</form>
								)}
							</div>
						</div>
					</div>
				</section>

				{/* Directions */}
				<section className='py-12' style={{ backgroundColor: 'var(--color-bg-alt)', borderTop: '1px solid var(--color-border)' }}>
					<div className='container mx-auto px-5 max-w-6xl'>
						<h3 className='font-serif mb-6' style={{ color: 'var(--color-text)' }}>Directions to Our Office</h3>
						<div className='grid md:grid-cols-3 gap-6 text-sm'>
							<div>
								<p className='font-normal mb-1' style={{ color: 'var(--color-primary)' }}>From DFW Airport</p>
								<p className='font-light' style={{ color: 'var(--color-text-muted)' }}>Approximately 45 minutes via I-30 W and US-377 S</p>
							</div>
							<div>
								<p className='font-normal mb-1' style={{ color: 'var(--color-primary)' }}>From Fort Worth</p>
								<p className='font-light' style={{ color: 'var(--color-text-muted)' }}>Approximately 35 minutes via US-377 S</p>
							</div>
							<div>
								<p className='font-normal mb-1' style={{ color: 'var(--color-primary)' }}>From Dallas</p>
								<p className='font-light' style={{ color: 'var(--color-text-muted)' }}>Approximately 60 minutes via I-20 W and US-377 S</p>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</main>
	);
}
