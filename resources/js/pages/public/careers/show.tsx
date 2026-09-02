import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import HeroSection from '@/components/public/hero-section';
import { ArrowLeft, MapPin, Building, Clock, DollarSign, Calendar, CheckCircle } from 'lucide-react';
import type { JobListing } from '@/types';

interface JobShowProps {
    job: JobListing;
}

export default function JobShow({ job }: JobShowProps) {
    return (
        <PublicLayout>
            <Head title={`${job.title} - NOVITA Careers`} />

            <HeroSection
                title={job.title}
                subtitle={job.department ? `${job.department} Department` : undefined}
            />

            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/careers"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Careers
                    </Link>

                    {/* Job Meta */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                        {job.department && (
                            <span className="flex items-center">
                                <Building className="h-4 w-4 mr-2" />
                                {job.department}
                            </span>
                        )}
                        {job.location && (
                            <span className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                {job.location}
                            </span>
                        )}
                        <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {job.type}
                        </span>
                        {job.salary_range && (
                            <span className="flex items-center">
                                <DollarSign className="h-4 w-4 mr-2" />
                                {job.salary_range}
                            </span>
                        )}
                        {job.deadline && (
                            <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                Deadline: {new Date(job.deadline).toLocaleDateString()}
                            </span>
                        )}
                    </div>

                    {/* Job Description */}
                    <div className="prose prose-lg max-w-none mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
                        {job.description?.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Requirements */}
                    {job.requirements && job.requirements.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                            <ul className="space-y-3">
                                {job.requirements.map((req, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Benefits */}
                    {job.benefits && job.benefits.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
                            <ul className="space-y-3">
                                {job.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Apply Button */}
                    <div className="bg-gray-50 rounded-lg p-8 text-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Interested in this position?</h3>
                        <p className="text-gray-600 mb-6">Submit your application and we'll get back to you soon.</p>
                        <a
                            href="mailto:careers@novita.com?subject=Application: {job.title}"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
