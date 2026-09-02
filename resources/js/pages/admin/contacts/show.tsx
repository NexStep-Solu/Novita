import { Head, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin/admin-layout';
import { ArrowLeft, Mail, Phone, Building, Calendar } from 'lucide-react';
import type { ContactSubmission } from '@/types';

interface ContactShowProps {
    contact: ContactSubmission;
}

export default function ContactShow({ contact }: ContactShowProps) {
    return (
        <AdminLayout>
            <Head title={`Contact: ${contact.name}`} />

            <div className="flex items-center mb-6">
                <a href="/admin/contacts" className="text-gray-500 hover:text-gray-700 mr-4">
                    <ArrowLeft className="h-5 w-5" />
                </a>
                <h1 className="text-2xl font-bold text-gray-900">Contact from {contact.name}</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-lg font-semibold mb-4">Message</h2>
                        <div className="prose prose-lg max-w-none">
                            {contact.message.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-lg font-semibold mb-4">Contact Details</h2>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="text-gray-900">{contact.email}</p>
                                </div>
                            </div>

                            {contact.phone && (
                                <div className="flex items-center">
                                    <Phone className="h-5 w-5 text-gray-400 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <p className="text-gray-900">{contact.phone}</p>
                                    </div>
                                </div>
                            )}

                            {contact.company && (
                                <div className="flex items-center">
                                    <Building className="h-5 w-5 text-gray-400 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Company</p>
                                        <p className="text-gray-900">{contact.company}</p>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center">
                                <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                                <div>
                                    <p className="text-sm text-gray-500">Received</p>
                                    <p className="text-gray-900">{new Date(contact.created_at).toLocaleString()}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t">
                            <a
                                href={`mailto:${contact.email}?subject=Re: ${contact.subject}`}
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center"
                            >
                                <Mail className="h-4 w-4 mr-2" />
                                Reply via Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
