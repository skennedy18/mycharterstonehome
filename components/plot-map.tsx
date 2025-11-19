'use client';

import type React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface Plot {
	id: number;
	available: boolean;
	lotNumber: string;
	subdivision: string;
	address: string;
}

interface PlotPosition {
	x: string;
	y: string;
	section: string;
	mapImage: number;
}

export function PlotMap() {
	const [plots] = useState<Plot[]>([
		{
			id: 1,
			available: false,
			lotNumber: '3589',
			subdivision: '15A',
			address: '2188 Middlewood Circle, Granbury, Texas - 76049'
		},
		{
			id: 2,
			available: false,
			lotNumber: '3590',
			subdivision: '15A',
			address: '2184 Middlewood Circle, Granbury, Texas - 76049'
		},
		{
			id: 3,
			available: false,
			lotNumber: '3591',
			subdivision: '15A',
			address: '2180 Middlewood Circle, Granbury, Texas - 76049'
		},
		{
			id: 4,
			available: true,
			lotNumber: '3545',
			subdivision: '15A',
			address: '2119 Middlewood Circle, Granbury, Texas - 76049'
		},
		{
			id: 5,
			available: true,
			lotNumber: '3980',
			subdivision: 'The Landings East',
			address: '1325 Cirrus Loop, Granbury, Texas - 76049'
		},
		{
			id: 6,
			available: true,
			lotNumber: '3983-R',
			subdivision: 'The Landings East',
			address: '1307 Cirrus Loop, Granbury, Texas - 76049'
		},
		{
			id: 7,
			available: true,
			lotNumber: '3539',
			subdivision: '15A',
			address: '2145 Middlewood Circle, Granbury, Texas - 76049'
		},
		{
			id: 8,
			available: true,
			lotNumber: '3905-R',
			subdivision: 'The Landings East',
			address: '1418 Cirrus Loop, Granbury, Texas - 76049'
		},
		{
			id: 9,
			available: true,
			lotNumber: '3551',
			subdivision: '15A',
			address: '2009 Middlewood Circle, Granbury, Texas - 76049'
		},
		{
			id: 10,
			available: true,
			lotNumber: '3553',
			subdivision: '15A',
			address: '2001 Middlewood Circle, Granbury, Texas - 76049'
		},
		{
			id: 11,
			available: true,
			lotNumber: '3585',
			subdivision: '15A',
			address: '3109 Hazlewood Road, Granbury, Texas - 76049'
		},
		{
			id: 12,
			available: true,
			lotNumber: '3586',
			subdivision: '15A',
			address: '3113 Hazlewood Road, Granbury, Texas - 76049'
		},
		{
			id: 13,
			available: true,
			lotNumber: '3526',
			subdivision: '15A',
			address: '2213 Middlewood Circle, Granbury, Texas - 76049'
		},
		{
			id: 14,
			available: true,
			lotNumber: '3921',
			subdivision: 'The Landings East',
			address: '1407 Cirrus Loop, Granbury, Texas - 76049'
		},
		{
			id: 15,
			available: true,
			lotNumber: '3531',
			subdivision: '15A',
			address: '2177 Middlewood Circle, Granbury, Texas - 76049'
		},
		{
			id: 16,
			available: true,
			lotNumber: '3522',
			subdivision: '15A',
			address: '1132 Tremont Lane, Granbury, Texas - 76049'
		},
		{
			id: 17,
			available: true,
			lotNumber: '3521',
			subdivision: '15A',
			address: '1128 Tremont Lane, Granbury, Texas - 76049'
		},
		{
			id: 18,
			available: true,
			lotNumber: '3520',
			subdivision: '15A',
			address: '1124 Tremont Lane, Granbury, Texas - 76049'
		},
		{
			id: 19,
			available: true,
			lotNumber: '3519',
			subdivision: '15A',
			address: '1120 Tremont Lane, Granbury, Texas - 76049'
		},
		{
			id: 20,
			available: true,
			lotNumber: '3516',
			subdivision: '15A',
			address: '1108 Tremont Lane, Granbury, Texas - 76049'
		},
		{
			id: 21,
			available: true,
			lotNumber: '3515',
			subdivision: '15A',
			address: '1104 Tremont Lane, Granbury, Texas - 76049'
		},
		{
			id: 22,
			available: true,
			lotNumber: '3514',
			subdivision: '15A',
			address: '1100 Tremont Lane, Granbury, Texas - 76049'
		},
		{
			id: 23,
			available: true,
			lotNumber: '3513',
			subdivision: '15A',
			address: '1012 Tremont Lane, Granbury, Texas - 76049'
		},
		{
			id: 24,
			available: true,
			lotNumber: '3904',
			subdivision: 'The Landings East',
			address: '1412 Cirrus Loop, Granbury, Texas - 76049'
		},
		{
			id: 25,
			available: true,
			lotNumber: '3518',
			subdivision: '15A',
			address: '1116 Tremont Lane, Granbury, Texas - 76049'
		},
		{
			id: 26,
			available: true,
			lotNumber: '3512',
			subdivision: '15A',
			address: '1008 Tremont Lane, Granbury, Texas - 76049'
		},
		{
			id: 27,
			available: true,
			lotNumber: '3511',
			subdivision: '15A',
			address: '1004 Tremont Lane, Granbury, Texas - 76049'
		},
		{
			id: 28,
			available: true,
			lotNumber: '3510',
			subdivision: '15A',
			address: '1000 Tremont Lane, Granbury, Texas - 76049'
		},
		{
			id: 29,
			available: true,
			lotNumber: '3548',
			subdivision: '15A',
			address: '2109 Middlewood Circle, Granbury, Texas - 76049'
		},
		{
			id: 30,
			available: true,
			lotNumber: '3550',
			subdivision: '15A',
			address: '2101 Middlewood Circle, Granbury, Texas - 76049'
		}
	]);

	const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [showQuestionForm, setShowQuestionForm] = useState(false);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: ''
	});

	const plotPositions: Record<number, PlotPosition> = {
		1: { x: '66.8%', y: '37.0%', section: 'Orchard 15A-15B', mapImage: 1 },
		2: { x: '63.4%', y: '37.0%', section: 'Orchard 15A-15B', mapImage: 1 },
		3: { x: '59.8%', y: '36.7%', section: 'Orchard 15A-15B', mapImage: 1 },
		4: { x: '21.0%', y: '77.2%', section: 'Orchard 15A-15B', mapImage: 1 },
		7: { x: '21.7%', y: '41.0%', section: 'Orchard 15A-15B', mapImage: 1 },
		11: { x: '54.7%', y: '46.3%', section: 'Orchard 15A-15B', mapImage: 1 },
		12: { x: '58.2%', y: '45.7%', section: 'Orchard 15A-15B', mapImage: 1 },
		13: { x: '85.6%', y: '23.2%', section: 'Orchard 15A-15B', mapImage: 1 },
		15: { x: '60.0%', y: '17.4%', section: 'Orchard 15A-15B', mapImage: 1 },
		16: { x: '70.2%', y: '62.6%', section: 'Orchard 15A-15B', mapImage: 1 },
		17: { x: '67.3%', y: '68.5%', section: 'Orchard 15A-15B', mapImage: 1 },
		18: { x: '64.8%', y: '74.5%', section: 'Orchard 15A-15B', mapImage: 1 },
		19: { x: '61.9%', y: '79.2%', section: 'Orchard 15A-15B', mapImage: 1 },
		25: { x: '59.4%', y: '85.9%', section: 'Orchard 15A-15B', mapImage: 1 },
		9: { x: '46.7%', y: '41.3%', section: 'Orchard 15A-15B', mapImage: 2 },
		10: { x: '53.3%', y: '49.7%', section: 'Orchard 15A-15B', mapImage: 2 },
		20: { x: '72.8%', y: '39.0%', section: 'Orchard 15A-15B', mapImage: 2 },
		21: { x: '69.7%', y: '46.0%', section: 'Orchard 15A-15B', mapImage: 2 },
		22: { x: '67.5%', y: '51.6%', section: 'Orchard 15A-15B', mapImage: 2 },
		23: { x: '63.9%', y: '58.8%', section: 'Orchard 15A-15B', mapImage: 2 },
		26: { x: '61.6%', y: '64.7%', section: 'Orchard 15A-15B', mapImage: 2 },
		27: { x: '58.8%', y: '70.6%', section: 'Orchard 15A-15B', mapImage: 2 },
		28: { x: '56.6%', y: '78.0%', section: 'Orchard 15A-15B', mapImage: 2 },
		29: { x: '34.0%', y: '27.3%', section: 'Orchard 15A-15B', mapImage: 2 },
		30: { x: '42.4%', y: '37.3%', section: 'Orchard 15A-15B', mapImage: 2 },
		5: { x: '49.2%', y: '53.1%', section: 'East Landings', mapImage: 3 },
		6: { x: '37.1%', y: '54.7%', section: 'East Landings', mapImage: 3 },
		8: { x: '77.2%', y: '47.9%', section: 'East Landings', mapImage: 3 },
		14: { x: '30.8%', y: '27.9%', section: 'East Landings', mapImage: 3 },
		24: { x: '72.8%', y: '46.9%', section: 'East Landings', mapImage: 3 }
	};

	const handlePlotClick = (plotId: number) => {
		const plot = plots.find((p) => p.id === plotId);
		if (plot) {
			setSelectedPlot(plot);
			setIsDialogOpen(true);
			setShowQuestionForm(false);
			setFormData({ firstName: '', lastName: '', email: '', phone: '' });
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const subject = encodeURIComponent(`Homesite Question - Lot #${selectedPlot?.lotNumber}`);
		const body = encodeURIComponent(`
New Homesite Question

Lot Number: ${selectedPlot?.lotNumber}
Address: ${selectedPlot?.address}
Subdivision: ${selectedPlot?.subdivision}

Contact Information:
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

This question was submitted from the Available Homesites page.
    `);

		window.location.href = `mailto:team@newrootseb5.com?subject=${subject}&body=${body}`;

		setIsDialogOpen(false);
		setFormData({ firstName: '', lastName: '', email: '', phone: '' });
	};

	const availableCount = plots.filter((p) => p.available).length;

	const plotsByMap = {
		1: [1, 2, 3, 4, 7, 11, 12, 13, 15, 16, 17, 18, 19, 25],
		2: [9, 10, 20, 21, 22, 23, 26, 27, 28, 29, 30],
		3: [5, 6, 8, 14, 24]
	};

	return (
		<div className='space-y-6'>
			<div className='flex items-center justify-between'>
				<div>
					<h2 className='font-serif text-3xl font-bold text-navy mb-2'>Available Homesites</h2>
					<p className='text-muted-foreground'>{availableCount} of 30 homesites available</p>
				</div>
				<div className='flex items-center gap-4'>
					<div className='flex items-center gap-2'>
						<div className='w-4 h-4 bg-green-500 rounded-full' />
						<span className='text-sm'>Available</span>
					</div>
					<div className='flex items-center gap-2'>
						<div className='w-4 h-4 bg-red-500 rounded-full' />
						<span className='text-sm'>Sold</span>
					</div>
				</div>
			</div>

			<div className='space-y-8'>
				{/* Map 1 - Orchard 15A-15B (First Section) */}
				<Card>
					<CardHeader>
						<CardTitle className='font-serif text-navy'>Orchard Section - 15A-15B (Part 1)</CardTitle>
						<p className='text-sm text-muted-foreground'>Middlewood Circle & Hazelwood Circle</p>
					</CardHeader>
					<CardContent>
						<div className='relative w-full aspect-[16/10] bg-gray-100 rounded-lg overflow-hidden'>
							<Image
								src='/plat-maps/orchard-15a-15b-part1.png'
								alt='Orchard Section 15A-15B Part 1 Plat Map'
								fill
								className='object-contain plot-map-image'
							/>
							{plotsByMap[1].map((plotId) => {
								const plot = plots.find((p) => p.id === plotId);
								const pos = plotPositions[plotId];
								if (!plot || !pos) return null;

								return (
									<button
										key={plotId}
										onClick={() => handlePlotClick(plotId)}
										className='absolute transform -translate-x-1/2 -translate-y-1/2 transition-all z-10 cursor-pointer hover:scale-110'
										style={{ left: pos.x, top: pos.y }}
										title={`Plot ${plotId} - ${plot.address}`}>
										<div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg border-2 border-white ${plot.available ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}>{plotId}</div>
									</button>
								);
							})}
						</div>
					</CardContent>
				</Card>

				{/* Map 2 - Orchard 15A-15B (Second Section) */}
				<Card>
					<CardHeader>
						<CardTitle className='font-serif text-navy'>Orchard Section - 15A-15B (Part 2)</CardTitle>
						<p className='text-sm text-muted-foreground'>Middlewood Circle, Village Road & Plantation Boulevard</p>
					</CardHeader>
					<CardContent>
						<div className='relative w-full aspect-[16/10] bg-gray-100 rounded-lg overflow-hidden'>
							<Image
								src='/plat-maps/orchard-15a-15b-part2.png'
								alt='Orchard Section 15A-15B Part 2 Plat Map'
								fill
								className='object-contain plot-map-image'
							/>
							{plotsByMap[2].map((plotId) => {
								const plot = plots.find((p) => p.id === plotId);
								const pos = plotPositions[plotId];
								if (!plot || !pos) return null;

								return (
									<button
										key={plotId}
										onClick={() => handlePlotClick(plotId)}
										className='absolute transform -translate-x-1/2 -translate-y-1/2 transition-all z-10 cursor-pointer hover:scale-110'
										style={{ left: pos.x, top: pos.y }}
										title={`Plot ${plotId} - ${plot.address}`}>
										<div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg border-2 border-white ${plot.available ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}>{plotId}</div>
									</button>
								);
							})}
						</div>
					</CardContent>
				</Card>

				{/* Map 3 - East Landings */}
				<Card>
					<CardHeader>
						<CardTitle className='font-serif text-navy'>East Landings Section</CardTitle>
						<p className='text-sm text-muted-foreground'>East Landings North</p>
					</CardHeader>
					<CardContent>
						<div className='relative w-full aspect-[16/10] bg-gray-100 rounded-lg overflow-hidden'>
							<Image
								src='/plat-maps/east-landings.png'
								alt='East Landings Plat Map'
								fill
								className='object-contain plot-map-image'
							/>
							{plotsByMap[3].map((plotId) => {
								const plot = plots.find((p) => p.id === plotId);
								const pos = plotPositions[plotId];
								if (!plot || !pos) return null;

								return (
									<button
										key={plotId}
										onClick={() => handlePlotClick(plotId)}
										className='absolute transform -translate-x-1/2 -translate-y-1/2 transition-all z-10 cursor-pointer hover:scale-110'
										style={{ left: pos.x, top: pos.y }}
										title={`Plot ${plotId} - ${plot.address}`}>
										<div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg border-2 border-white ${plot.available ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}>{plotId}</div>
									</button>
								);
							})}
						</div>
					</CardContent>
				</Card>
			</div>

			<Dialog
				open={isDialogOpen}
				onOpenChange={setIsDialogOpen}>
				<DialogContent className='sm:max-w-md'>
					<DialogHeader>
						<DialogTitle className='font-serif text-2xl text-navy'>Lot #{selectedPlot?.lotNumber}</DialogTitle>
						<DialogDescription asChild>
							<div className='text-base space-y-3 pt-2'>
								<div className='flex items-start gap-2'>
									<MapPin className='h-5 w-5 text-burgundy mt-0.5 flex-shrink-0' />
									<div>
										<p className='font-semibold text-foreground'>{selectedPlot?.address}</p>
									</div>
								</div>
								<div className='pt-2 space-y-1'>
									<p className='text-sm'>
										<span className='font-semibold text-foreground'>Subdivision:</span> <span className='text-muted-foreground'>{selectedPlot?.subdivision}</span>
									</p>
									<p className='text-sm'>
										<span className='font-semibold text-foreground'>Section:</span> <span className='text-muted-foreground'>{selectedPlot && plotPositions[selectedPlot.id]?.section}</span>
									</p>
								</div>
								<div className='pt-2'>
									<Badge className={selectedPlot?.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}>{selectedPlot?.available ? 'Available' : 'Sold'}</Badge>
								</div>
							</div>
						</DialogDescription>
					</DialogHeader>
					{!showQuestionForm ? (
						<div className='flex gap-2 pt-4'>
							<Button
								className='flex-1 bg-burgundy hover:bg-burgundy/90'
								asChild>
								<a href='tel:+18477575571'>Call Us</a>
							</Button>
							<Button
								className='flex-1 bg-transparent'
								variant='outline'
								onClick={() => setShowQuestionForm(true)}>
								Ask A Question
							</Button>
						</div>
					) : (
						<div>
							<div>
								<smarttouch-nexgen
									class='popupForm'
									form='4032'
									client='2339'
									span6='1,2,4,7'
									spanmobile12='1,2,4,7'
									field10935={selectedPlot?.address || ''}
									field10936={selectedPlot?.subdivision || ''}
									field10937={(selectedPlot && plotPositions[selectedPlot.id]?.section) || ''}
									spec={selectedPlot?.address || ''}
									label={`${selectedPlot?.subdivision ? 'Subdivision: ' + selectedPlot?.subdivision : ''}, Section: ${selectedPlot && plotPositions[selectedPlot.id]?.section ? plotPositions[selectedPlot.id]?.section : ''}`}
									submit='Submit Request'></smarttouch-nexgen>
							</div>
							<Button
								type='button'
								variant='outline'
								className='flex-1 bg-transparent'
								onClick={() => setShowQuestionForm(false)}>
								Back
							</Button>
							{/*
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="flex-1 bg-burgundy hover:bg-burgundy/90">
                  Submit Question
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() => setShowQuestionForm(false)}
                >
                  Back
                </Button>
              </div>
            </form>
             */}
						</div>
					)}
				</DialogContent>
			</Dialog>
		</div>
	);
}
