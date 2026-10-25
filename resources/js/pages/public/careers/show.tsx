import { Link } from '@inertiajs/react';
import { ArrowLeft, MapPin, Building, Clock, DollarSign, Calendar, CheckCircle } from 'lucide-react';
import HeroSection from '@/components/public/hero-section';
import {
    SeoHead,
    organizationSchema,
    breadcrumbSchema,
    jobPostingSchema,
} from '@/components/seo-head';
import PublicLayout from '@/layouts/public/public-layout';
import type { JobListing } from '@/types';

interface JobShowProps {
    job: JobListing;
    isExpired?: boolean;
}

export default function JobShow({ job, isExpired = false }: JobShowProps) {
    const jobUrl = `/careers/${job.slug}`;

    return (
        <PublicLayout>
            <SeoHead
                title={`${job.title} - Careers`}
                description={`Apply for the ${job.title} position at NOVITA Pharmaceutical Co., Ltd. in ${job.location || 'Yangon'}, Myanmar.`}
                keywords={`${job.title}, NOVITA careers, pharmaceutical jobs Myanmar, ${job.department || 'pharmaceutical'} jobs`}
                canonical={jobUrl}
                noIndex={isExpired}
                jsonLd={[
                    organizationSchema(),
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Careers', url: '/careers' },
                        { name: job.title, url: jobUrl },
                    ]),
                    ...(isExpired
                        ? []
                        : [
                              jobPostingSchema({
                                  title: job.title,
                                  description: job.description,
                                  datePosted: job.created_at,
                                  validThrough: job.deadline,
                                  employmentType: job.type,
                                  location: job.location,
                                  department: job.department,
                                  salaryRange: job.salary_range,
                                  requirements: job.requirements,
                                  benefits: job.benefits,
                              }),
                          ]),
                ]}
            />

            <HeroSection
                title={job.title}
                subtitle={job.department ? `${job.department} Department` : undefined}
            />

            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/careers"
                        className="inline-flex items-center text-novita hover:text-novita-dark mb-8"
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
                                Deadline:{' '}
                            {new Date(job.deadline).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                timeZone: 'Asia/Yangon',
                            })}
                            </span>
                        )}
                    </div>

                    {isExpired && (
                        <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
                            The application deadline for this position has passed. You can still
                            contact us to express interest in future openings.
                        </div>
                    )}

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
                                        <CheckCircle className="h-5 w-5 text-novita mr-3 mt-0.5 flex-shrink-0" />
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
                            href={`mailto:careers@novita-myanmar.com.mm?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                            className="inline-block bg-novita text-white px-8 py-3 rounded-lg font-semibold hover:bg-novita-dark transition-colors"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
