<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use Illuminate\Database\Seeder;

class PageSectionSeeder extends Seeder
{
    public function run(): void
    {
        // Home Page Sections
        $home = Page::where('slug', 'home')->first();

        if ($home) {
            // Hero Section - NOVITA Pharma
            PageSection::create([
                'page_id' => $home->id,
                'section_type' => 'hero',
                'title' => 'Building Trust Through Quality Medicines',
                'subtitle' => 'NOVITA Pharmaceutical Co., Ltd. is committed to developing safe, effective, and accessible medicines for a healthier Myanmar — from OSD manufacturing to rigorous quality control.',
                'content' => null,
                'image_path' => null,
                'link_url' => '/about-us',
                'link_text' => 'Learn More',
                'meta' => ['slogan' => 'Better Health, Longer Life', 'badge' => 'Member of KTECG Group • 20+ Years', 'cta_secondary_text' => 'Contact Us', 'cta_secondary_url' => '/contact'],
                'sort_order' => 1,
                'is_active' => true,
            ]);

            // Vision & Mission
            PageSection::create([
                'page_id' => $home->id,
                'section_type' => 'vision_mission',
                'title' => 'Vision & Mission',
                'subtitle' => 'Guided by quality, driven by care',
                'content' => null,
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [
                    'vision_title' => 'Our Vision',
                    'vision_desc' => 'To be a trusted pharmaceutical company in Myanmar, providing quality medicines that improve healthcare outcomes and contribute to a healthier nation.',
                    'mission_title' => 'Our Mission',
                    'mission_desc' => 'To develop, manufacture, and supply safe, effective, and affordable medicines through quality manufacturing processes, regulatory compliance, and continuous improvement.',
                ],
                'sort_order' => 2,
                'is_active' => true,
            ]);

            // Quality Commitment
            PageSection::create([
                'page_id' => $home->id,
                'section_type' => 'quality',
                'title' => 'Commitment to Quality',
                'subtitle' => 'Quality First',
                'content' => 'Quality is at the heart of everything we do. Our manufacturing facility is designed to meet international GMP standards, and we are committed to obtaining PIC/S GMP certification.',
                'image_path' => null,
                'link_url' => '/quality',
                'link_text' => 'Learn about our quality commitment',
                'meta' => [
                    'features' => [
                        'International GMP Standards',
                        'PIC/S GMP Certification Aligned',
                        'Rigorous Quality Control Testing',
                    ],
                ],
                'sort_order' => 3,
                'is_active' => true,
            ]);

            // Facility
            PageSection::create([
                'page_id' => $home->id,
                'section_type' => 'facility',
                'title' => 'Manufacturing Excellence',
                'subtitle' => 'Our Facility',
                'content' => 'Our state-of-the-art facility is being developed to meet international pharmaceutical manufacturing standards.',
                'image_path' => null,
                'link_url' => '/our-facility',
                'link_text' => 'Explore our facility',
                'meta' => [
                    'cards' => [
                        ['title' => 'OSD Manufacturing', 'desc' => 'Tablets and hard gelatin capsules production with modern equipment.'],
                        ['title' => 'Quality Control', 'desc' => 'Fully equipped QC laboratory for comprehensive product testing.'],
                        ['title' => 'GMP Compliance', 'desc' => 'Designed to meet international GMP and PIC/S standards.'],
                    ],
                ],
                'sort_order' => 4,
                'is_active' => true,
            ]);

            // Why Choose
            PageSection::create([
                'page_id' => $home->id,
                'section_type' => 'why',
                'title' => 'Your Trusted Pharmaceutical Partner',
                'subtitle' => 'Why NOVITA',
                'content' => null,
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [
                    'features' => [
                        ['title' => 'Patient Safety', 'description' => 'Every product undergoes rigorous testing to ensure safety and efficacy for patients.'],
                        ['title' => 'Expert Team', 'description' => 'Our experienced professionals are dedicated to pharmaceutical excellence.'],
                        ['title' => 'GMP Standards', 'description' => 'Designed to meet international GMP and PIC/S certification requirements.'],
                    ],
                ],
                'sort_order' => 5,
                'is_active' => true,
            ]);

            // Stats Section - NOVITA
            PageSection::create([
                'page_id' => $home->id,
                'section_type' => 'stats',
                'title' => 'Our Impact',
                'subtitle' => 'Numbers that speak for our commitment',
                'content' => null,
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [
                    'stats' => [
                        ['label' => 'Years of Experience', 'value' => '20+', 'sub' => 'KTECG Group'],
                        ['label' => 'Team Members', 'value' => '100+', 'sub' => 'Growing'],
                        ['label' => 'Product Lines', 'value' => '50+', 'sub' => 'Planned'],
                        ['label' => 'Patients Served', 'value' => '1M+', 'sub' => 'Goal'],
                    ],
                ],
                'sort_order' => 6,
                'is_active' => true,
            ]);

            // CTA Section
            PageSection::create([
                'page_id' => $home->id,
                'section_type' => 'cta',
                'title' => 'Partner with NOVITA',
                'subtitle' => "We're looking for partners who share our vision of providing quality medicines for Myanmar.",
                'content' => null,
                'image_path' => null,
                'link_url' => '/partnership',
                'link_text' => 'Business Partnership',
                'meta' => ['cta_secondary_text' => 'Contact Us', 'cta_secondary_url' => '/contact'],
                'sort_order' => 7,
                'is_active' => true,
            ]);
        }

        // About Us Page Sections - Premium
        $about = Page::where('slug', 'about-us')->first();

        if ($about) {
            // Hero
            PageSection::create([
                'page_id' => $about->id,
                'section_type' => 'hero',
                'title' => 'Our Story',
                'subtitle' => 'NOVITA Pharmaceutical Co., Ltd., a member of KTECG Group, is dedicated to developing safe, effective, and accessible medicines for a healthier Myanmar.',
                'content' => null,
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => ['badge' => 'About Us'],
                'sort_order' => 1,
                'is_active' => true,
            ]);

            // Company Overview
            PageSection::create([
                'page_id' => $about->id,
                'section_type' => 'overview',
                'title' => 'NOVITA Pharmaceutical Co., Ltd.',
                'subtitle' => 'Company Overview',
                'content' => "NOVITA Pharmaceutical Co., Ltd., a member of KTECG Group, is a leading pharmaceutical company established with the vision of providing high-quality, affordable medicines to the people of Myanmar.\n\nFounded as part of KTECG Group's expansion into the pharmaceutical sector, NOVITA combines decades of construction and engineering expertise with modern pharmaceutical manufacturing capabilities.\n\nWith KTECG Group's 20+ years of pharmaceutical construction experience, NOVITA benefits from world-class facility design and infrastructure that meets international standards.",
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [],
                'sort_order' => 2,
                'is_active' => true,
            ]);

            // Purpose & KTECG
            PageSection::create([
                'page_id' => $about->id,
                'section_type' => 'purpose',
                'title' => 'Company Purpose & Background',
                'subtitle' => 'Founding purpose and KTECG legacy',
                'content' => null,
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [
                    'purpose_title' => 'Our Purpose',
                    'purpose_desc' => 'NOVITA was established with a clear purpose: to bridge the gap in Myanmar\'s pharmaceutical market by providing safe, effective, and affordable medicines. We recognized the need for a locally-manufactured solution that meets international quality standards while remaining accessible.',
                    'ktecg_title' => 'KTECG Group Legacy',
                    'ktecg_desc' => 'As part of KTECG Group, NOVITA leverages over 20 years of pharmaceutical construction experience. KTECG has been at the forefront of building world-class pharmaceutical facilities across the region.',
                ],
                'sort_order' => 3,
                'is_active' => true,
            ]);

            // Vision & Mission
            PageSection::create([
                'page_id' => $about->id,
                'section_type' => 'vision_mission',
                'title' => 'Vision & Mission',
                'subtitle' => 'Guiding principles',
                'content' => null,
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [
                    'vision' => 'To become one of Myanmar\'s most trusted pharmaceutical companies, improving lives through quality, accessible, and reliable medicines.',
                    'mission' => [
                        'To manufacture safe, effective, and consistently high-quality pharmaceutical products.',
                        'To develop our manufacturing operations in alignment with internationally recognized GMP and PIC/S principles.',
                        'To make essential medicines more accessible and affordable for the people of Myanmar.',
                        'To build a skilled, responsible, and quality-driven pharmaceutical team.',
                        'To continuously improve our products, processes, and technologies through innovation and professional collaboration.',
                        'To conduct our business with integrity, accountability, and respect for patients, employees, business partners, society, and the environment.',
                    ],
                ],
                'sort_order' => 4,
                'is_active' => true,
            ]);

            // Core Values
            PageSection::create([
                'page_id' => $about->id,
                'section_type' => 'core_values',
                'title' => 'Our Core Values',
                'subtitle' => 'Our core values define who we are',
                'content' => null,
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [
                    'values' => [
                        ['title' => 'Quality First', 'desc' => 'We place product quality and patient safety at the heart of every decision.'],
                        ['title' => 'Integrity', 'desc' => 'We conduct business honestly, ethically, and transparently.'],
                        ['title' => 'Patient Commitment', 'desc' => 'We remain focused on health, safety, and well-being of people.'],
                        ['title' => 'Continuous Improvement', 'desc' => 'We continually strengthen our people, systems, technology, and practices.'],
                        ['title' => 'Collaboration', 'desc' => 'Lasting success comes from teamwork, mutual respect, and partnerships.'],
                        ['title' => 'Social Responsibility', 'desc' => "We contribute positively to Myanmar's healthcare sector and communities."],
                    ],
                ],
                'sort_order' => 5,
                'is_active' => true,
            ]);

            // MD Message
            PageSection::create([
                'page_id' => $about->id,
                'section_type' => 'md_message',
                'title' => 'Welcome to NOVITA Pharmaceutical Co., Ltd.',
                'subtitle' => 'Message from the Managing Director',
                'content' => "NOVITA was established with a clear purpose: to contribute to the development of Myanmar's healthcare sector by providing safe, effective, high-quality, and accessible medicines. We believe that every patient deserves medicine they can trust.\n\nSupported by the extensive pharmaceutical construction experience of KTECG Group, NOVITA is developing a modern facility with a strong focus on quality systems, appropriate technology, skilled personnel, and internationally recognized GMP and PIC/S principles.\n\nAs we move forward, we will continue to invest in our people, strengthen our technical capabilities, and work closely with experienced partners. With integrity and dedication, we aim to make a meaningful contribution to public health and become a trusted brand in Myanmar.",
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => ['md_name' => 'U Maung Aye', 'md_title' => 'Managing Director'],
                'sort_order' => 6,
                'is_active' => true,
            ]);

            // CTA
            PageSection::create([
                'page_id' => $about->id,
                'section_type' => 'cta',
                'title' => 'Partner with NOVITA',
                'subtitle' => "Whether you're looking for quality medicines or partnership opportunities, we're here to help.",
                'content' => null,
                'image_path' => null,
                'link_url' => '/contact',
                'link_text' => 'Contact Us Today',
                'meta' => ['secondary_text' => 'View Our Products', 'secondary_url' => '/products'],
                'sort_order' => 7,
                'is_active' => true,
            ]);
        }

        // Leadership Page Sections
        $leadership = Page::where('slug', 'leadership')->first();
        if ($leadership) {
            PageSection::create([
                'page_id' => $leadership->id,
                'section_type' => 'hero',
                'title' => 'Our Leadership',
                'subtitle' => 'Meet the experienced team guiding NOVITA\'s mission to provide quality medicines for a healthier Myanmar.',
                'content' => null,
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => ['badge' => 'Leadership'],
                'sort_order' => 1,
                'is_active' => true,
            ]);
            PageSection::create([
                'page_id' => $leadership->id,
                'section_type' => 'managing_director',
                'title' => 'U Maung Aye',
                'subtitle' => 'Managing Director',
                'content' => 'Our Managing Director leads NOVITA with a vision to provide quality medicines to Myanmar. With extensive experience in pharmaceutical manufacturing and operations, they drive our mission of building trust through quality.',
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [],
                'sort_order' => 2,
                'is_active' => true,
            ]);
            PageSection::create([
                'page_id' => $leadership->id,
                'section_type' => 'board',
                'title' => 'Board of Directors',
                'subtitle' => 'Governance',
                'content' => 'Our board provides strategic oversight and governance to ensure NOVITA achieves its mission.',
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [
                    'members' => [
                        ['name' => 'Chairman Name', 'title' => 'Chairman of the Board', 'bio' => 'With over 30 years of experience in the pharmaceutical industry, our Chairman brings extensive leadership and strategic vision to NOVITA.', 'image' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face'],
                    ],
                ],
                'sort_order' => 3,
                'is_active' => true,
            ]);
            PageSection::create([
                'page_id' => $leadership->id,
                'section_type' => 'directors',
                'title' => 'Directors',
                'subtitle' => 'Leadership',
                'content' => 'Our directors lead key functional areas to ensure operational excellence.',
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [
                    'members' => [
                        ['name' => 'Director Name', 'title' => 'Director of Operations', 'bio' => 'Responsible for overseeing manufacturing operations and ensuring compliance with international quality standards.', 'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'],
                        ['name' => 'Director Name', 'title' => 'Director of Quality', 'bio' => 'Leading our quality assurance and control teams to maintain the highest standards in pharmaceutical manufacturing.', 'image' => 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face'],
                    ],
                ],
                'sort_order' => 4,
                'is_active' => true,
            ]);
            PageSection::create([
                'page_id' => $leadership->id,
                'section_type' => 'senior_management',
                'title' => 'Senior Management',
                'subtitle' => 'Leadership',
                'content' => 'Our senior management team brings extensive experience in pharmaceutical manufacturing and operations.',
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [
                    'members' => [
                        ['name' => 'Manager Name', 'title' => 'Head of Manufacturing', 'bio' => 'Overseeing production operations and ensuring efficient manufacturing processes.', 'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'],
                        ['name' => 'Manager Name', 'title' => 'Head of Quality Assurance', 'bio' => 'Ensuring all products meet regulatory requirements and quality standards.', 'image' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'],
                        ['name' => 'Manager Name', 'title' => 'Head of Research & Development', 'bio' => 'Leading product development initiatives and formulation research.', 'image' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'],
                        ['name' => 'Manager Name', 'title' => 'Head of Regulatory Affairs', 'bio' => 'Managing regulatory submissions and ensuring compliance with Myanmar FDA requirements.', 'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face'],
                    ],
                ],
                'sort_order' => 5,
                'is_active' => true,
            ]);
        }

        // Our Facility Page Sections
        $facility = Page::where('slug', 'our-facility')->first();

        if ($facility) {
            // Hero Section
            PageSection::create([
                'page_id' => $facility->id,
                'section_type' => 'hero',
                'title' => 'Our Facility',
                'subtitle' => 'State-of-the-art manufacturing infrastructure designed for excellence.',
                'content' => null,
                'image_path' => 'sections/hero-facility.jpg',
                'link_url' => null,
                'link_text' => null,
                'meta' => [],
                'sort_order' => 1,
                'is_active' => true,
            ]);

            // Facility Overview
            PageSection::create([
                'page_id' => $facility->id,
                'section_type' => 'content',
                'title' => 'World-Class Infrastructure',
                'subtitle' => 'Designed for efficiency, quality, and sustainability',
                'content' => 'Our manufacturing facility spans over 50,000 square meters and is equipped with the latest technology and equipment. The facility is designed to ensure maximum efficiency while maintaining the highest quality standards.\n\nFrom automated production lines to advanced quality testing labs, every aspect of our facility is optimized for excellence.',
                'image_path' => 'sections/facility-overview.jpg',
                'link_url' => null,
                'link_text' => null,
                'meta' => ['layout' => 'right-image'],
                'sort_order' => 2,
                'is_active' => true,
            ]);

            // Facility Stats
            PageSection::create([
                'page_id' => $facility->id,
                'section_type' => 'stats',
                'title' => 'Facility at a Glance',
                'subtitle' => 'Key numbers that define our manufacturing capabilities',
                'content' => null,
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [
                    'stats' => [
                        ['label' => 'Total Area', 'value' => '50,000+ sqm'],
                        ['label' => 'Production Lines', 'value' => '12'],
                        ['label' => 'Daily Capacity', 'value' => '10,000 units'],
                        ['label' => 'Automation Level', 'value' => '85%'],
                    ],
                ],
                'sort_order' => 3,
                'is_active' => true,
            ]);

            // Gallery
            PageSection::create([
                'page_id' => $facility->id,
                'section_type' => 'gallery',
                'title' => 'Facility Gallery',
                'subtitle' => 'Take a virtual tour of our manufacturing facility',
                'content' => null,
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [
                    'images' => [
                        ['path' => 'sections/facility-1.jpg', 'caption' => 'Production Floor'],
                        ['path' => 'sections/facility-2.jpg', 'caption' => 'Quality Lab'],
                        ['path' => 'sections/facility-3.jpg', 'caption' => 'Warehouse'],
                        ['path' => 'sections/facility-4.jpg', 'caption' => 'Assembly Line'],
                    ],
                ],
                'sort_order' => 4,
                'is_active' => true,
            ]);
        }

        // Quality Page Sections
        $quality = Page::where('slug', 'quality')->first();

        if ($quality) {
            // Hero Section
            PageSection::create([
                'page_id' => $quality->id,
                'section_type' => 'hero',
                'title' => 'Quality Assurance',
                'subtitle' => 'Uncompromising commitment to quality in every product we deliver.',
                'content' => null,
                'image_path' => 'sections/hero-quality.jpg',
                'link_url' => null,
                'link_text' => null,
                'meta' => [],
                'sort_order' => 1,
                'is_active' => true,
            ]);

            // Quality Policy
            PageSection::create([
                'page_id' => $quality->id,
                'section_type' => 'content',
                'title' => 'Our Quality Policy',
                'subtitle' => 'Quality is not just a department - it\'s our culture',
                'content' => 'At NOVITA, quality is embedded in every aspect of our operations. From raw material sourcing to final product delivery, we maintain rigorous quality control processes to ensure that every product meets the highest standards.\n\nOur quality management system is certified to ISO 9001:2015, and we continuously invest in training, technology, and process improvement to maintain our competitive edge.',
                'image_path' => 'sections/quality-policy.jpg',
                'link_url' => null,
                'link_text' => null,
                'meta' => ['layout' => 'left-image'],
                'sort_order' => 2,
                'is_active' => true,
            ]);

            // Certifications
            PageSection::create([
                'page_id' => $quality->id,
                'section_type' => 'features',
                'title' => 'Our Certifications',
                'subtitle' => 'Internationally recognized quality certifications',
                'content' => null,
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [
                    'features' => [
                        [
                            'icon' => 'award',
                            'title' => 'ISO 9001:2015',
                            'description' => 'Quality Management System certification ensuring consistent quality.',
                        ],
                        [
                            'icon' => 'leaf',
                            'title' => 'ISO 14001:2015',
                            'description' => 'Environmental Management System certification for sustainable operations.',
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'ISO 45001:2018',
                            'description' => 'Occupational Health and Safety Management certification.',
                        ],
                        [
                            'icon' => 'check-circle',
                            'title' => 'CE Certified',
                            'description' => 'Products meet EU safety, health, and environmental requirements.',
                        ],
                    ],
                ],
                'sort_order' => 3,
                'is_active' => true,
            ]);
        }

        // Careers Page Sections
        $careers = Page::where('slug', 'careers')->first();

        if ($careers) {
            // Hero Section
            PageSection::create([
                'page_id' => $careers->id,
                'section_type' => 'hero',
                'title' => 'Join Our Team',
                'subtitle' => 'Be part of a dynamic team that\'s shaping the future of manufacturing.',
                'content' => null,
                'image_path' => 'sections/hero-careers.jpg',
                'link_url' => '#openings',
                'link_text' => 'View Open Positions',
                'meta' => [],
                'sort_order' => 1,
                'is_active' => true,
            ]);

            // Why Join Us
            PageSection::create([
                'page_id' => $careers->id,
                'section_type' => 'features',
                'title' => 'Why Work at NOVITA?',
                'subtitle' => 'We invest in our people because they are our greatest asset',
                'content' => null,
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [
                    'features' => [
                        [
                            'icon' => 'trending-up',
                            'title' => 'Career Growth',
                            'description' => 'Clear career progression paths and promotion opportunities.',
                        ],
                        [
                            'icon' => 'book-open',
                            'title' => 'Learning & Development',
                            'description' => 'Continuous training programs and skill development.',
                        ],
                        [
                            'icon' => 'heart',
                            'title' => 'Health & Wellness',
                            'description' => 'Comprehensive health insurance and wellness programs.',
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Team Culture',
                            'description' => 'Collaborative and inclusive work environment.',
                        ],
                    ],
                ],
                'sort_order' => 2,
                'is_active' => true,
            ]);
        }

        // Contact Page Sections
        $contact = Page::where('slug', 'contact')->first();

        if ($contact) {
            // Hero Section
            PageSection::create([
                'page_id' => $contact->id,
                'section_type' => 'hero',
                'title' => 'Contact Us',
                'subtitle' => 'We\'d love to hear from you. Get in touch with our team.',
                'content' => null,
                'image_path' => 'sections/hero-contact.jpg',
                'link_url' => null,
                'link_text' => null,
                'meta' => [],
                'sort_order' => 1,
                'is_active' => true,
            ]);

            // Contact Info
            PageSection::create([
                'page_id' => $contact->id,
                'section_type' => 'content',
                'title' => 'Get in Touch',
                'subtitle' => 'Reach out to us through any of these channels',
                'content' => null,
                'image_path' => null,
                'link_url' => null,
                'link_text' => null,
                'meta' => [
                    'contact_info' => [
                        ['icon' => 'map-pin', 'label' => 'Address', 'value' => 'Industrial Zone, Yangon, Myanmar'],
                        ['icon' => 'phone', 'label' => 'Phone', 'value' => '+95 1 234 5678'],
                        ['icon' => 'mail', 'label' => 'Email', 'value' => 'info@novita.com'],
                        ['icon' => 'clock', 'label' => 'Working Hours', 'value' => 'Mon - Fri: 8:00 AM - 5:00 PM'],
                    ],
                ],
                'sort_order' => 2,
                'is_active' => true,
            ]);
        }
    }
}
