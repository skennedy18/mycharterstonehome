'use client';

import type React from 'react';

import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { Card, CardContent } from '@/components/ui/card';
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

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Create mailto link with form data
		const subject = encodeURIComponent(`Contact Form: ${formData.interest || 'General Inquiry'}`);
		const body = encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}\n` + `Email: ${formData.email}\n` + `Phone: ${formData.phone}\n` + `Interest: ${formData.interest}\n\n` + `Message:\n${formData.message}`);

		window.location.href = `mailto:team@newrootseb5.com?subject=${subject}&body=${body}`;

		setIsSubmitted(true);
		setTimeout(() => {
			setIsSubmitted(false);
			setFormData({
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				interest: '',
				message: ''
			});
		}, 3000);
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

	return (
		<main>
			<Navigation />
			<div className='pt-20'>
				{/* Hero Section */}
				<section className='bg-gradient-to-r from-burgundy to-navy text-white py-16'>
					<div className='container mx-auto px-4'>
						<h1 className='font-serif text-4xl md:text-6xl font-bold mb-4'>Contact Us</h1>
						<p className='text-xl text-white/90 max-w-2xl'>Ready to start building your dream home? Get in touch with our team today.</p>
					</div>
				</section>

				{/* Main Content */}
				<section className='py-20 bg-gray-50'>
					<div className='container mx-auto px-4'>
						<div className='grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
							{/* Contact Information */}
							<div className='lg:col-span-1 space-y-6'>
								<Card>
									<CardContent className='p-6'>
										<h3 className='font-serif text-2xl font-bold text-navy mb-6'>Get In Touch</h3>
										<div className='space-y-4'>
											<div className='flex items-start gap-3'>
												<MapPin className='h-5 w-5 text-burgundy flex-shrink-0 mt-1' />
												<div>
													<p className='font-medium text-navy'>Visit Us</p>
													<p className='text-sm text-muted-foreground'>
														Pecan Plantation
														<br />
														Granbury, TX 76049
													</p>
												</div>
											</div>
											<div className='flex items-start gap-3'>
												<Phone className='h-5 w-5 text-burgundy flex-shrink-0 mt-1' />
												<div>
													<p className='font-medium text-navy'>Call Us</p>
													<a
														href='tel:+18477575571'
														data-stlabel='Call Us - (847) 757-5571'
														className='text-sm text-muted-foreground hover:text-burgundy'>
														(847) 757-5571
													</a>
												</div>
											</div>
											<div className='flex items-start gap-3'>
												<Clock className='h-5 w-5 text-burgundy flex-shrink-0 mt-1' />
												<div>
													<p className='font-medium text-navy'>Office Hours</p>
													<p className='text-sm text-muted-foreground'>
														Monday - Saturday
														<br />
														9:00 AM - 6:00 PM
													</p>
													<div className='mt-2'>
														<span className={`inline-flex items-center gap-2 text-xs font-medium ${isOpen() ? 'text-green-600' : 'text-red-600'}`}>
															<span className={`h-2 w-2 rounded-full ${isOpen() ? 'bg-green-600' : 'bg-red-600'}`} />
															{isOpen() ? 'Open Now' : 'Closed'}
														</span>
													</div>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>

								{/* Map */}
								<Card className='overflow-hidden'>
									<CardContent className='p-0'>
										<div className='relative h-64 bg-gray-200'>
											<iframe
												src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107520.5!2d-97.6903!3d32.3665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDIxJzU5LjQiTiA5N8KwNDEnMjUuMSJX!5e0!3m2!1sen!2sus!4v1234567890'
												width='100%'
												height='100%'
												style={{ border: 0 }}
												allowFullScreen
												loading='lazy'
												referrerPolicy='no-referrer-when-downgrade'
												title='Charterstone Homes Location'
											/>
										</div>
									</CardContent>
								</Card>
							</div>

							{/* Contact Form */}
							<div className='lg:col-span-2'>
								<Card>
									<CardContent className='p-8'>
										<h3 className='font-serif text-3xl font-bold text-navy mb-6'>Send Us a Message</h3>
										{isSubmitted ? (
											<div className='text-center py-12'>
												<div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
													<svg
														className='w-8 h-8 text-green-600'
														fill='none'
														stroke='currentColor'
														viewBox='0 0 24 24'>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth={2}
															d='M5 13l4 4L19 7'
														/>
													</svg>
												</div>
												<h4 className='text-xl font-semibold text-navy mb-2'>Thank You!</h4>
												<p className='text-muted-foreground'>We've received your message and will get back to you shortly.</p>
											</div>
										) : (
											<form onSubmit={handleSubmit} className='space-y-6'>
												<div className='grid md:grid-cols-2 gap-4'>
													<div>
														<label htmlFor='firstName' className='block text-sm font-medium text-navy mb-1'>First Name *</label>
														<input
															type='text'
															id='firstName'
															name='firstName'
															required
															value={formData.firstName}
															onChange={handleChange}
															className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-transparent'
														/>
													</div>
													<div>
														<label htmlFor='lastName' className='block text-sm font-medium text-navy mb-1'>Last Name *</label>
														<input
															type='text'
															id='lastName'
															name='lastName'
															required
															value={formData.lastName}
															onChange={handleChange}
															className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-transparent'
														/>
													</div>
												</div>
												<div className='grid md:grid-cols-2 gap-4'>
													<div>
														<label htmlFor='email' className='block text-sm font-medium text-navy mb-1'>Email *</label>
														<input
															type='email'
															id='email'
															name='email'
															required
															value={formData.email}
															onChange={handleChange}
															className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-transparent'
														/>
													</div>
													<div>
														<label htmlFor='phone' className='block text-sm font-medium text-navy mb-1'>Phone</label>
														<input
															type='tel'
															id='phone'
															name='phone'
															value={formData.phone}
															onChange={handleChange}
															className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-transparent'
														/>
													</div>
												</div>
												<div>
													<label htmlFor='interest' className='block text-sm font-medium text-navy mb-1'>I&apos;m Interested In</label>
													<input
														type='text'
														id='interest'
														name='interest'
														placeholder='e.g., Building a custom home, Available plots...'
														value={formData.interest}
														onChange={handleChange}
														className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-transparent'
													/>
												</div>
												<div>
													<label htmlFor='message' className='block text-sm font-medium text-navy mb-1'>Message *</label>
													<textarea
														id='message'
														name='message'
														required
														rows={5}
														value={formData.message}
														onChange={handleChange}
														className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-transparent resize-none'
													/>
												</div>
												<button
													type='submit'
													className='w-full bg-burgundy hover:bg-burgundy/90 text-white font-medium py-3 px-6 rounded-md transition-colors'
												>
													Send Message
												</button>
											</form>
										)}
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>

				{/* Directions */}
				<section className='py-12 bg-white'>
					<div className='container mx-auto px-4'>
						<div className='max-w-4xl mx-auto text-center'>
							<h3 className='font-serif text-2xl font-bold text-navy mb-6'>Directions to Our Office</h3>
							<div className='grid md:grid-cols-3 gap-6 text-sm'>
								<div>
									<p className='font-semibold text-burgundy mb-2'>From DFW Airport</p>
									<p className='text-muted-foreground'>Approximately 45 minutes via I-30 W and US-377 S</p>
								</div>
								<div>
									<p className='font-semibold text-burgundy mb-2'>From Fort Worth</p>
									<p className='text-muted-foreground'>Approximately 35 minutes via US-377 S</p>
								</div>
								<div>
									<p className='font-semibold text-burgundy mb-2'>From Dallas</p>
									<p className='text-muted-foreground'>Approximately 60 minutes via I-20 W and US-377 S</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</main>
	);
}
