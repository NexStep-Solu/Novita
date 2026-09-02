import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import PublicLayout from '@/layouts/public/public-layout';
import HeroSection from '@/components/public/hero-section';
import { Search, MapPin, Building, Clock } from 'lucide-react';
import type { JobListing } from '@/types';

interface CareersProps {
    jobs: {
        data: JobListing[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    departments: string[];
    locations: string[];
    types: string[];
    filters: {
        department?: string;
        location?: string;
        type?: string;
        search?: string;
    };
}

export default function CareersIndex({ jobs, departments, locations, types, filters }: CareersProps) {
    const [search, setSearch] = useState(filters.search || '');

    const handleFilterChange = (key: string, value: string) => {
        router.get('/careers', { ...filters, [key]: value }, { preserveState: true });
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        handleFilterChange('search', search);
    };

    return (
        <PublicLayout>
            <Head title="Careers - NOVITA" />

            <HeroSection
                title="Join Our Team"
                subtitle="Be part of a dynamic team that's shaping the future of manufacturing."
                linkUrl="#openings"
                linkText="View Open Positions"
            />

            <section id="openings" className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filters */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search jobs..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            </div>

                            <select
                                value={filters.department || 'all'}
                                onChange={(e) => handleFilterChange('department', e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="all">All Departments</option>
                                {departments.map((dept) => (
                                    <option key={dept} value={dept}>{dept}</option>
                                ))}
                            </select>

                            <select
                                value={filters.location || 'all'}
                                onChange={(e) => handleFilterChange('location', e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="all">All Locations</option>
                                {locations.map((loc) => (
                                    <option key={loc} value={loc}>{loc}</option>
                                ))}
                            </select>

                            <select
                                value={filters.type || 'all'}
                                onChange={(e) => handleFilterChange('type', e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="all">All Types</option>
                                {types.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </form>
                    </div>

                    {/* Jobs List */}
                    {jobs.data.length > 0 ? (
                        <div className="space-y-4">
                            {jobs.data.map((job) => (
                                <Link
                                    key={job.id}
                                    href={`/careers/${job.slug}`}
                                    className="block bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                                {job.department && (
                                                    <span className="flex items-center">
                                                        <Building className="h-4 w-4 mr-1" />
                                                        {job.department}
                                                    </span>
                                                )}
                                                {job.location && (
                                                    <span className="flex items-center">
                                                        <MapPin className="h-4 w-4 mr-1" />
                                                        {job.location}
                                                    </span>
                                                )}
                                                <span className="flex items-center">
                                                    <Clock className="h-4 w-4 mr-1" />
                                                    {job.type}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-4 md:mt-0">
                                            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                                View Details
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No job openings found.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {jobs.last_page > 1 && (
                        <div className="mt-8 flex justify-center gap-2">
                            {Array.from({ length: jobs.last_page }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => router.get('/careers', { ...filters, page }, { preserveState: true })}
                                    className={`px-4 py-2 rounded-lg ${
                                        page === jobs.current_page
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}
