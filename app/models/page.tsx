'use client';

import { FloorPlanViewer } from '@/components/floor-plan-viewer';
import { Footer } from '@/components/footer';
import { InteriorGallery } from '@/components/interior-gallery';
import { ModelFilters } from '@/components/model-filters';
import { MortgageCalculator } from '@/components/mortgage-calculator';
import { Navigation } from '@/components/navigation';
import { Download, Eye, ImageIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface InteriorImage {
	url: string;
	caption: string;
}

interface Model {
	id: number;
	name: string;
	address: string;
	image: string;
	beds: number;
	baths: number;
	sqft: number;
	garage: number;
	price: number;
	lotType: string;
	available: boolean;
	floorPlans: Array<{ name: string; image: string; type: string }>;
	elevations: string[];
	interiorImages?: InteriorImage[];
}

const allModels: Model[] = [
	{
		id: 1,
		name: 'The Cardinal',
		address: '2180 Middlewood Cir',
		image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180%20Middlewood%20Cir_Cardinal.png-6jlcNpFIPksnSKEB9HTFz9J3EJXKNE.jpeg',
		beds: 4,
		baths: 3,
		sqft: 2910,
		garage: 3,
		price: 651840,
		lotType: 'golf',
		available: true,
		floorPlans: [{ name: 'Main Floor Plan', image: '/floor-plans/cardinal-plan.png', type: 'Main Level' }],
		elevations: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180%20Middlewood%20Cir_Cardinal.png-6jlcNpFIPksnSKEB9HTFz9J3EJXKNE.jpeg'],
		interiorImages: [
			{ url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2119-1%20%281%29.png-13nBNWH2n3kk55QJeXaPZTp58glHsZ.jpeg', caption: 'Open Concept Living & Kitchen' },
			{ url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180-2.png-upNlsjkkuPZr9OxyhAzTOkTDtd98zo.jpeg', caption: 'Formal Dining Room' },
			{ url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180-3.png-N0Wn4QDJ1smWwQeq4tjTG7PheXppHR.jpeg', caption: 'Master Bedroom' },
			{ url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180-4.png-JPvjXr8hVA4t8gdLs893OgpBCKgR77.jpeg', caption: 'Master Bathroom' }
		]
	},
	{
		id: 2,
		name: 'The Magpie',
		address: '2188 Middlewood Cir',
		image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2188%20Middlewood%20Cir_Magpie.png-zx0jiaz0NEJV7JnQ2TZ3peNKjASDP3.jpeg',
		beds: 4,
		baths: 3,
		sqft: 3003,
		garage: 3,
		price: 672672,
		lotType: 'golf',
		available: true,
		floorPlans: [{ name: 'Main Floor Plan', image: '/floor-plans/magpie-plan.png', type: 'Main Level' }],
		elevations: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2188%20Middlewood%20Cir_Magpie.png-zx0jiaz0NEJV7JnQ2TZ3peNKjASDP3.jpeg']
	},
	{
		id: 3,
		name: 'The Martin',
		address: '2184 Middlewood Cir',
		image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2184%20Middlewood%20Cir_Martin.png-1yw8K0L1IGkkbrPbYJnRv3jL6kuTrv.jpeg',
		beds: 4,
		baths: 3,
		sqft: 3000,
		garage: 3,
		price: 672000,
		lotType: 'golf',
		available: true,
		floorPlans: [{ name: 'Main Floor Plan', image: '/floor-plans/martin-plan.png', type: 'Main Level' }],
		elevations: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2184%20Middlewood%20Cir_Martin.png-1yw8K0L1IGkkbrPbYJnRv3jL6kuTrv.jpeg'],
		interiorImages: [
			{ url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180-1%20%281%29.png-ggKbNmCl6A7a0EGXyN4nJ3pyzBMvM7.jpeg', caption: 'Open Concept Living & Kitchen' },
			{ url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2119-2.png-NWu5qpwd2LyV9qkskiXIBCWLWutRoh.jpeg', caption: 'Dining Area' },
			{ url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2119-3.png-Krtr5QWsNVV1CJ5k7SD1RUcSNnwxoa.jpeg', caption: 'Master Bedroom' },
			{ url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2119-4.png-1p6dW2aVb8c2Y3J58ryFUfsCM6azJx.jpeg', caption: 'Master Bathroom' }
		]
	},
	{
		id: 4,
		name: 'The Martin',
		address: '2119 Middlewood Cir',
		image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2184%20Middlewood%20Cir_Martin.png-1yw8K0L1IGkkbrPbYJnRv3jL6kuTrv.jpeg',
		beds: 4,
		baths: 3,
		sqft: 3000,
		garage: 3,
		price: 672000,
		lotType: 'golf',
		available: true,
		floorPlans: [{ name: 'Main Floor Plan', image: '/floor-plans/martin-plan.png', type: 'Main Level' }],
		elevations: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2184%20Middlewood%20Cir_Martin.png-1yw8K0L1IGkkbrPbYJnRv3jL6kuTrv.jpeg'],
		interiorImages: [
			{ url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180-1%20%281%29.png-ggKbNmCl6A7a0EGXyN4nJ3pyzBMvM7.jpeg', caption: 'Open Concept Living & Kitchen' },
			{ url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2119-2.png-NWu5qpwd2LyV9qkskiXIBCWLWutRoh.jpeg', caption: 'Dining Area' },
			{ url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2119-3.png-Krtr5QWsNVV1CJ5k7SD1RUcSNnwxoa.jpeg', caption: 'Master Bedroom' },
			{ url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2119-4.png-1p6dW2aVb8c2Y3J58ryFUfsCM6azJx.jpeg', caption: 'Master Bathroom' }
		]
	}
];

export default function ModelsPage() {
	const [priceRange, setPriceRange] = useState([400000, 600000]);
	const [sqftRange, setSqftRange] = useState([2000, 4000]);
	const [bedrooms, setBedrooms] = useState('any');
	const [lotType, setLotType] = useState('any');
	const [selectedModel, setSelectedModel] = useState<Model | null>(null);
	const [viewerOpen, setViewerOpen] = useState(false);
	const [expandedModel, setExpandedModel] = useState<number | null>(null);

	const resetFilters = () => {
		setPriceRange([400000, 600000]);
		setSqftRange([2000, 4000]);
		setBedrooms('any');
		setLotType('any');
	};

	const filteredModels = allModels.filter((model) => {
		const matchesPrice = model.price >= priceRange[0] && model.price <= priceRange[1];
		const matchesSqft = model.sqft >= sqftRange[0] && model.sqft <= sqftRange[1];
		const matchesBedrooms = bedrooms === 'any' || model.beds >= Number.parseInt(bedrooms);
		const matchesLotType = lotType === 'any' || model.lotType === lotType;
		return matchesPrice && matchesSqft && matchesBedrooms && matchesLotType;
	});

	const handleViewFloorPlans = (model: Model) => {
		setSelectedModel(model);
		setViewerOpen(true);
	};

	const handleDownloadFloorPlan = (model: Model) => {
		const link = document.createElement('a');
		link.href = model.floorPlans[0]?.image || '';
		link.download = `${model.name}-floor-plan.png`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<main>
			<Navigation />
			<div>
				{/* Hero Section */}
				<section
					className='relative min-h-[60vh] flex items-end overflow-hidden'
					style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180%20Middlewood%20Cir_Cardinal.png-6jlcNpFIPksnSKEB9HTFz9J3EJXKNE.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
				>
					<div className='absolute inset-0 bg-gradient-to-b from-black/30 to-black/60' />
					<div className='relative z-10 container mx-auto px-5 pb-12 max-w-6xl'>
						<h1 className='font-serif text-white'>Floor Plans</h1>
						<p className='text-base text-white/85 max-w-xl mt-3'>
							Discover the perfect floor plan for your lifestyle. Each home is thoughtfully designed with luxury and comfort in mind.
						</p>
					</div>
				</section>

				<section className='py-12' style={{ backgroundColor: 'var(--color-bg)' }}>
					<div className='container mx-auto px-5 max-w-6xl'>
						<div className='grid lg:grid-cols-4 gap-8'>
							<div className='lg:col-span-1 space-y-6'>
								<ModelFilters
									priceRange={priceRange}
									setPriceRange={setPriceRange}
									sqftRange={sqftRange}
									setSqftRange={setSqftRange}
									bedrooms={bedrooms}
									setBedrooms={setBedrooms}
									lotType={lotType}
									setLotType={setLotType}
									onReset={resetFilters}
								/>
								<MortgageCalculator />
							</div>

							<div className='lg:col-span-3'>
								<div className='mb-6'>
									<p className='text-sm font-light' style={{ color: 'var(--color-text-muted)' }}>
										Showing {filteredModels.length} of {allModels.length} models
									</p>
								</div>

								<div className='space-y-6'>
									{filteredModels.map((model) => (
										<div
											key={model.id}
											className='overflow-hidden rounded-sm'
											style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }}
										>
											<div className='grid md:grid-cols-2 gap-0'>
												<div className='relative overflow-hidden'>
													<img
														src={model.image || '/placeholder.svg'}
														alt={model.name}
														className='w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]'
														style={{ aspectRatio: '4/3' }}
													/>
													{model.available && (
														<span
															className='absolute top-4 right-4 text-[11px] tracking-[0.1em] uppercase font-normal px-3 py-1 rounded-sm'
															style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-accent)' }}
														>
															Available Now
														</span>
													)}
												</div>
												<div className='p-6'>
													<h3 className='font-serif mb-1' style={{ color: 'var(--color-text)' }}>{model.name}</h3>
													<p className='text-[13px] font-light mb-2' style={{ color: 'var(--color-text-muted)' }}>
														{model.address}
													</p>
													<p className='text-base mb-3' style={{ color: 'var(--color-text)' }}>
														Starting at ${model.price.toLocaleString()}
													</p>
													<p className='text-[13px] font-light mb-6' style={{ color: 'var(--color-text-muted)' }}>
														{model.beds} Bed · {model.baths} Bath · {model.sqft.toLocaleString()} Sq Ft · {model.garage} Car
													</p>
													<div className='flex flex-col gap-2'>
														<div className='flex gap-2'>
															<button
																className='btn-primary flex-1 flex items-center justify-center gap-2 text-[13px]'
																onClick={() => handleViewFloorPlans(model)}
																data-sttrack='View Floor Plans'
																data-stfloorplan={model.name}
															>
																<Eye className='h-4 w-4' />
																View Floor Plans
															</button>
															{model.interiorImages && model.interiorImages.length > 0 && (
																<button
																	className='btn-secondary flex items-center justify-center gap-2 text-[13px]'
																	onClick={() => setExpandedModel(expandedModel === model.id ? null : model.id)}
																	data-sttrack='View Interiors'
																	data-stfloorplan={model.name}
																>
																	<ImageIcon className='h-4 w-4' />
																	Interiors
																</button>
															)}
														</div>
														<button
															className='text-[13px] tracking-[0.05em] uppercase underline underline-offset-4 text-left transition-colors duration-300 flex items-center gap-2 py-2'
															style={{ color: 'var(--color-primary)' }}
															onClick={() => handleDownloadFloorPlan(model)}
															data-sttrack='Download Floor Plan'
															data-stfloorplan={model.name}
														>
															<Download className='h-4 w-4' />
															Download Floor Plan
														</button>
													</div>
												</div>
											</div>
											{expandedModel === model.id && model.interiorImages && (
												<div className='p-6' style={{ borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-alt)' }}>
													<h3 className='font-serif mb-4' style={{ color: 'var(--color-text)' }}>Interior Renderings</h3>
													<InteriorGallery
														images={model.interiorImages}
														modelName={model.name}
													/>
												</div>
											)}
										</div>
									))}
								</div>

								{filteredModels.length === 0 && (
									<div className='py-12'>
										<p className='text-base mb-4' style={{ color: 'var(--color-text-muted)' }}>No models match your current filters.</p>
										<button onClick={resetFilters} className='btn-secondary'>
											Reset Filters
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				</section>
			</div>

			{selectedModel && (
				<FloorPlanViewer
					modelName={selectedModel.name}
					floorPlans={selectedModel.floorPlans}
					elevations={selectedModel.elevations}
					open={viewerOpen}
					onOpenChange={setViewerOpen}
				/>
			)}

			<Footer />
		</main>
	);
}
