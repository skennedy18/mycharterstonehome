'use client';

import type React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Maximize2, Send, ZoomIn, ZoomOut } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState, type MouseEvent } from 'react';

interface FloorPlan {
	name: string;
	image: string;
	type: string;
}

interface FloorPlanViewerProps {
	modelName: string;
	floorPlans: FloorPlan[];
	elevations: string[];
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function FloorPlanViewer({ modelName, floorPlans, elevations, open, onOpenChange }: FloorPlanViewerProps) {
	const [zoom, setZoom] = useState(100);
	const [activeTab, setActiveTab] = useState('floor-plans');
	const [isDragging, setIsDragging] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
	const containerRef = useRef<HTMLDivElement>(null);

	const [showRequestForm, setShowRequestForm] = useState(false);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: ''
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		if (!open) {
			setShowRequestForm(false);
			setFormData({ firstName: '', lastName: '', email: '', phone: '' });
			setIsSubmitted(false);
			setZoom(100);
			setPosition({ x: 0, y: 0 });
		}
	}, [open]);

	const handleZoomIn = () => setZoom((prev) => Math.min(prev + 25, 200));
	const handleZoomOut = () => setZoom((prev) => Math.max(prev - 25, 50));
	const handleReset = () => {
		setZoom(100);
		setPosition({ x: 0, y: 0 });
	};

	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		if (zoom > 100) {
			setIsDragging(true);
			setDragStart({
				x: e.clientX - position.x,
				y: e.clientY - position.y
			});
		}
	};

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (isDragging && zoom > 100) {
			setPosition({
				x: e.clientX - dragStart.x,
				y: e.clientY - dragStart.y
			});
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleMouseLeave = () => {
		setIsDragging(false);
	};

	const handleRequestSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const subject = encodeURIComponent(`Floor Plan Request - ${modelName}`);
		const body = encodeURIComponent(`
New Floor Plan Information Request

Model: ${modelName}
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

This request was submitted from the Floor Plans page.
    `);

		window.location.href = `mailto:team@newrootseb5.com?subject=${subject}&body=${body}`;

		// Show success state and reset form
		setIsSubmitted(true);
		setTimeout(() => {
			setIsSubmitted(false);
			setShowRequestForm(false);
			setFormData({ firstName: '', lastName: '', email: '', phone: '' });
		}, 2000);
	};

	const handleDownload = () => {
		// Create a link element and trigger download
		const link = document.createElement('a');
		link.href = floorPlans[0]?.image || '';
		link.download = `${modelName}-floor-plan.png`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<Dialog
			open={open}
			onOpenChange={onOpenChange}>
			<DialogContent className='max-w-7xl h-[90vh] p-0 flex flex-col'>
				<DialogHeader className='p-6 pb-4 shrink-0'>
					<DialogTitle className='font-serif text-2xl text-navy'>{modelName} - Floor Plans & Elevations</DialogTitle>
				</DialogHeader>

				<div className='flex-1 overflow-hidden flex flex-col min-h-0'>
					<Tabs
						value={activeTab}
						onValueChange={setActiveTab}
						className='flex-1 flex flex-col min-h-0'>
						<div className='px-6 border-b shrink-0'>
							<TabsList className='grid w-full max-w-md grid-cols-2'>
								<TabsTrigger value='floor-plans'>Floor Plans</TabsTrigger>
								<TabsTrigger value='elevations'>Elevations</TabsTrigger>
							</TabsList>
						</div>

						<div className='flex-1 overflow-y-auto p-6 min-h-0 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100'>
							<TabsContent
								value='floor-plans'
								className='mt-0 space-y-6'>
								{floorPlans.map((plan, index) => (
									<div
										key={index}
										className='space-y-2'>
										<div className='flex items-center justify-between'>
											<h3 className='font-semibold text-lg'>{plan.name}</h3>
											<Badge variant='outline'>{plan.type}</Badge>
										</div>
										<div
											ref={containerRef}
											className='relative bg-gray-100 rounded-lg overflow-hidden'
											style={{
												cursor: zoom > 100 ? (isDragging ? 'grabbing' : 'grab') : 'default'
											}}
											onMouseDown={handleMouseDown}
											onMouseMove={handleMouseMove}
											onMouseUp={handleMouseUp}
											onMouseLeave={handleMouseLeave}>
											<div
												className='overflow-hidden'
												style={{
													maxHeight: '400px'
												}}>
												<Image
													src={plan.image || '/placeholder.svg'}
													alt={plan.name}
													width={1200}
													height={800}
													className='w-full h-auto select-none'
													style={{
														transform: `scale(${zoom / 100}) translate(${position.x / (zoom / 100)}px, ${position.y / (zoom / 100)}px)`,
														transformOrigin: 'top left',
														transition: isDragging ? 'none' : 'transform 0.2s'
													}}
													draggable={false}
												/>
											</div>
										</div>
									</div>
								))}
							</TabsContent>

							<TabsContent
								value='elevations'
								className='mt-0 space-y-6'>
								{elevations.map((elevation, index) => (
									<div
										key={index}
										className='space-y-2'>
										<h3 className='font-semibold text-lg'>Elevation {String.fromCharCode(65 + index)}</h3>
										<div
											ref={containerRef}
											className='relative bg-gray-100 rounded-lg overflow-hidden'
											style={{
												cursor: zoom > 100 ? (isDragging ? 'grabbing' : 'grab') : 'default'
											}}
											onMouseDown={handleMouseDown}
											onMouseMove={handleMouseMove}
											onMouseUp={handleMouseUp}
											onMouseLeave={handleMouseLeave}>
											<div
												className='overflow-hidden'
												style={{
													maxHeight: '400px'
												}}>
												<Image
													src={elevation || '/placeholder.svg'}
													alt={`Elevation ${String.fromCharCode(65 + index)}`}
													width={1200}
													height={600}
													className='w-full h-auto select-none'
													style={{
														transform: `scale(${zoom / 100}) translate(${position.x / (zoom / 100)}px, ${position.y / (zoom / 100)}px)`,
														transformOrigin: 'top left',
														transition: isDragging ? 'none' : 'transform 0.2s'
													}}
													draggable={false}
												/>
											</div>
										</div>
									</div>
								))}
							</TabsContent>
						</div>
					</Tabs>

					<div className={`border-t bg-gray-50 shrink-0 ${showRequestForm ? 'h-[350px]' : ''}`}>
						{showRequestForm && (
							<div className='h-full overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-burgundy scrollbar-track-gray-200'>
								<smarttouch-nexgen
									class='popupForm'
									form='4025'
									client='2339'
									span6='1,2,4,7'
									spanmobile12='1,2,4,7'
									field10934={modelName}
									floorplan={modelName}
									submit='Submit Request'></smarttouch-nexgen>
								<Button
									type='button'
									variant='outline'
									size='sm'
									onClick={() => setShowRequestForm(false)}
									className='h-9'>
									Cancel
								</Button>
							</div>
						)}

						{!showRequestForm && (
							<div className='p-4'>
								<div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3'>
									<div className='flex items-center gap-2 flex-wrap'>
										<Button
											variant='outline'
											size='sm'
											onClick={handleZoomOut}
											disabled={zoom <= 50}
											className='h-8 px-2 bg-transparent'>
											<ZoomOut className='h-3 w-3' />
										</Button>
										<span className='text-xs font-medium min-w-[50px] text-center'>{zoom}%</span>
										<Button
											variant='outline'
											size='sm'
											onClick={handleZoomIn}
											disabled={zoom >= 200}
											className='h-8 px-2'>
											<ZoomIn className='h-3 w-3' />
										</Button>
										<Button
											variant='outline'
											size='sm'
											onClick={handleReset}
											className='h-8 px-3 text-xs bg-transparent'>
											<Maximize2 className='h-3 w-3 mr-1' />
											Reset
										</Button>
									</div>
									<div className='flex flex-col sm:flex-row gap-2 w-full lg:w-auto'>
										<Button
											variant='outline'
											size='sm'
											onClick={() => setShowRequestForm(true)}
											className='border-burgundy text-burgundy hover:bg-burgundy hover:text-white w-full sm:w-auto h-8 px-3 text-xs'>
											<Send className='h-3 w-3 mr-1' />
											Request More Info
										</Button>
										<Button
											size='sm'
											onClick={handleDownload}
											className='bg-burgundy hover:bg-burgundy/90 text-white w-full sm:w-auto h-8 px-3 text-xs'>
											<Download className='h-3 w-3 mr-1' />
											Download Plans
										</Button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
