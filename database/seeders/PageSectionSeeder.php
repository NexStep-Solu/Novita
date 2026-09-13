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

            // Phase 1 - OSD
            PageSection::updateOrCreate(
                ['page_id' => $facility->id, 'section_type' => 'phase1'],
                [
                    'title' => 'Oral Solid Dosage Facility',
                    'subtitle' => 'PHASE 1',
                    'content' => 'The first phase focuses on Oral Solid Dosage (OSD) forms, specifically tablets and hard gelatin capsules, to meet immediate healthcare needs.',
                    'image_path' => null,
                    'meta' => [
                        'badge' => 'PHASE 1',
                        'features' => [
                            ['t' => 'Tablet Manufacturing', 'd' => 'Modern tablet press machines for various formulations'],
                            ['t' => 'Capsule Manufacturing', 'd' => 'Automated hard gelatin capsule filling and polishing'],
                            ['t' => 'Planned Annual Production', 'd' => 'Capacity designed to meet growing domestic demand'],
                            ['t' => 'Two-Shift Operation', 'd' => 'Optimized production schedule for maximum efficiency'],
                        ],
                    ],
                    'sort_order' => 5,
                    'is_active' => true,
                ]
            );

            // Expansion Roadmap
            PageSection::updateOrCreate(
                ['page_id' => $facility->id, 'section_type' => 'expansion'],
                [
                    'title' => 'Expansion Roadmap',
                    'subtitle' => 'FUTURE PLANS',
                    'content' => 'Master plan includes provisions for future expansion to meet growing healthcare needs.',
                    'meta' => [
                        'badge' => 'FUTURE PLANS',
                        'phases' => [
                            ['n' => '1', 't' => 'Phase 1: Oral Solid Dosage', 'd' => 'Tablets and capsules (Current Development)', 'active' => true],
                            ['n' => '2', 't' => 'Phase 2: Liquid Dosage Forms', 'd' => 'Syrups, suspensions, and oral solutions', 'active' => false],
                            ['n' => '3', 't' => 'Phase 3: Injectable Products', 'd' => 'Parenteral and ophthalmic preparations', 'active' => false],
                            ['n' => '4', 't' => 'Phase 4: Export-Ready Facility', 'd' => 'International market expansion capabilities', 'active' => false],
                        ],
                    ],
                    'sort_order' => 6,
                    'is_active' => true,
                ]
            );

            // Construction Progress
            PageSection::updateOrCreate(
                ['page_id' => $facility->id, 'section_type' => 'progress'],
                [
                    'title' => 'Building in Progress',
                    'subtitle' => 'CONSTRUCTION PROGRESS',
                    'content' => 'Follow our journey building a world-class facility.',
                    'meta' => [
                        'badge' => 'CONSTRUCTION PROGRESS',
                        'is_placeholder' => true,
                        'under_upgrading' => true,
                    ],
                    'sort_order' => 7,
                    'is_active' => true,
                ]
            );

            // CTA
            PageSection::updateOrCreate(
                ['page_id' => $facility->id, 'section_type' => 'cta'],
                [
                    'title' => 'Interested in Our Facility?',
                    'subtitle' => 'Learn more about our products and partnership opportunities.',
                    'link_text' => 'View Our Products',
                    'link_url' => '/products',
                    'meta' => [
                        'secondary_text' => 'Contact Us',
                        'secondary_url' => '/contact',
                    ],
                    'sort_order' => 8,
                    'is_active' => true,
                ]
            );
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

            // Patient Safety
            PageSection::updateOrCreate(
                ['page_id' => $quality->id, 'section_type' => 'patient_safety'],
                [
                    'title' => 'Patient Safety Commitment',
                    'subtitle' => 'Patient safety is our top priority — from raw material sourcing to final delivery.',
                    'content' => '',
                    'meta' => [
                        'cards' => [
                            ['title' => 'Safety First', 'desc' => 'Every product undergoes rigorous safety testing before reaching patients.'],
                            ['title' => 'Efficacy Guaranteed', 'desc' => 'We ensure our medicines deliver the intended therapeutic benefits.'],
                            ['title' => 'Product Integrity', 'desc' => 'Maintaining product quality throughout the entire supply chain.'],
                        ],
                    ],
                    'sort_order' => 4,
                    'is_active' => true,
                ]
            );

            // Quality Systems
            PageSection::updateOrCreate(
                ['page_id' => $quality->id, 'section_type' => 'quality_systems'],
                [
                    'title' => 'Comprehensive Quality Framework',
                    'subtitle' => 'QUALITY SYSTEMS',
                    'content' => '',
                    'meta' => [
                        'badge' => 'QUALITY SYSTEMS',
                        'cards' => [
                            ['title' => 'Quality Control Laboratory', 'desc' => 'HPLC, dissolution testing, and stability chambers for comprehensive product testing.'],
                            ['title' => 'Data Integrity', 'desc' => 'ALCOA+ principles ensuring data is Attributable, Legible, Contemporaneous, Original, Accurate.'],
                            ['title' => 'Supplier Qualification', 'desc' => 'Rigorous evaluation ensuring raw materials meet our quality standards.'],
                            ['title' => 'Employee Training', 'desc' => 'Comprehensive quality, safety, and job-specific programs for workforce competency.'],
                            ['title' => 'Validation & Qualification', 'desc' => 'Equipment, process, cleaning, and computer system validation for consistency.'],
                            ['title' => 'Continuous Improvement', 'desc' => 'CAPA, trend analysis, and management review for system enhancement.'],
                        ],
                    ],
                    'sort_order' => 5,
                    'is_active' => true,
                ]
            );

            // EHS
            PageSection::updateOrCreate(
                ['page_id' => $quality->id, 'section_type' => 'ehs'],
                [
                    'title' => 'Environmental, Health & Safety',
                    'subtitle' => 'EHS COMMITMENT',
                    'content' => 'Protecting environment, ensuring health & safety, being a responsible corporate citizen.',
                    'meta' => [
                        'badge' => 'EHS COMMITMENT',
                        'items' => [
                            ['title' => 'Environmental Protection', 'desc' => 'Waste management, emission control, and sustainable practices.'],
                            ['title' => 'Occupational Safety', 'desc' => 'Safe working conditions preventing workplace injuries.'],
                            ['title' => 'Employee Health', 'desc' => 'Regular health monitoring and wellness programs.'],
                        ],
                    ],
                    'sort_order' => 6,
                    'is_active' => true,
                ]
            );

            // CTA
            PageSection::updateOrCreate(
                ['page_id' => $quality->id, 'section_type' => 'cta'],
                [
                    'title' => 'Quality You Can Trust',
                    'subtitle' => 'Learn more about our products and commitment to excellence.',
                    'link_text' => 'View Our Products',
                    'link_url' => '/products',
                    'meta' => [
                        'secondary_text' => 'Contact Us',
                        'secondary_url' => '/contact',
                    ],
                    'sort_order' => 7,
                    'is_active' => true,
                ]
            );
        }

        // Products Page Sections
        $products = Page::where('slug', 'products')->first();

        if ($products) {
            // Hero
            PageSection::updateOrCreate(
                ['page_id' => $products->id, 'section_type' => 'hero'],
                [
                    'title' => 'Pharmaceutical Products',
                    'subtitle' => "NOVITA is developing a range of high-quality medicines to meet Myanmar's healthcare needs. Product information will be available following regulatory approval.",
                    'meta' => ['badge' => 'OUR PRODUCTS'],
                    'sort_order' => 1,
                    'is_active' => true,
                ]
            );

            // Notice
            PageSection::updateOrCreate(
                ['page_id' => $products->id, 'section_type' => 'notice'],
                [
                    'title' => 'Regulatory Notice',
                    'content' => 'Product information will be available following regulatory approval. All claims will comply with WHO Ethical Criteria and Myanmar FDA regulations.',
                    'sort_order' => 2,
                    'is_active' => true,
                ]
            );

            // Product Categories
            PageSection::updateOrCreate(
                ['page_id' => $products->id, 'section_type' => 'product_categories'],
                [
                    'title' => 'Our Product Portfolio',
                    'subtitle' => 'Focused on essential medicines in oral solid dosage forms.',
                    'meta' => [
                        'badge' => 'PRODUCT CATEGORIES',
                        'items' => [
                            ['title' => 'Tablets', 'desc' => 'Our OSD facility is designed to produce a variety of tablet formulations, including immediate-release and modified-release.', 'features' => ['Immediate-release tablets', 'Film-coated tablets', 'Modified-release formulations']],
                            ['title' => 'Hard Gelatin Capsules', 'desc' => 'Manufacturing hard gelatin capsules with various fill formulations to meet different therapeutic needs.', 'features' => ['Powder-filled capsules', 'Pellet-filled capsules', 'Combination formulations']],
                        ],
                    ],
                    'sort_order' => 3,
                    'is_active' => true,
                ]
            );

            // Therapeutic Categories
            PageSection::updateOrCreate(
                ['page_id' => $products->id, 'section_type' => 'therapeutic_categories'],
                [
                    'title' => 'Main Therapeutic Categories',
                    'subtitle' => 'Essential medicines across key therapeutic areas.',
                    'meta' => [
                        'badge' => 'THERAPEUTIC FOCUS',
                        'items' => [
                            ['title' => 'Cardiovascular', 'desc' => 'Medicines for heart and circulatory conditions'],
                            ['title' => 'Anti-Infective', 'desc' => 'Medicines for bacterial and fungal infections'],
                            ['title' => 'Central Nervous System', 'desc' => 'Pain management and neurological conditions'],
                            ['title' => 'Respiratory', 'desc' => 'Medicines for respiratory system conditions'],
                        ],
                    ],
                    'sort_order' => 4,
                    'is_active' => true,
                ]
            );

            // Pipeline
            PageSection::updateOrCreate(
                ['page_id' => $products->id, 'section_type' => 'pipeline'],
                [
                    'title' => 'Products Under Development',
                    'subtitle' => 'DEVELOPMENT PIPELINE',
                    'content' => 'Active pipeline focused on essential medicines — following strict quality protocols and regulatory requirements.',
                    'meta' => [
                        'badge' => 'DEVELOPMENT PIPELINE',
                        'items' => [
                            ['title' => 'Regulatory Submission Phase', 'desc' => 'Multiple products in various stages of submission to Myanmar FDA.'],
                            ['title' => 'Clinical Evaluation', 'desc' => 'Comprehensive quality testing and bioequivalence studies where required.'],
                            ['title' => 'Scale-Up Planning', 'desc' => 'Approved products will be scaled up at our new facility.'],
                        ],
                    ],
                    'sort_order' => 5,
                    'is_active' => true,
                ]
            );

            // Future Portfolio
            PageSection::updateOrCreate(
                ['page_id' => $products->id, 'section_type' => 'future_portfolio'],
                [
                    'title' => 'Future Product Portfolio',
                    'subtitle' => 'FUTURE PLANS',
                    'content' => 'Expanding as facility and approvals progress.',
                    'meta' => [
                        'badge' => 'FUTURE PLANS',
                        'items' => [
                            ['title' => 'Injectable Products', 'desc' => 'Parenteral and ophthalmic preparations for hospital and clinical use.'],
                            ['title' => 'Liquid Dosage Forms', 'desc' => 'Syrups, suspensions, and oral solutions.'],
                            ['title' => 'Specialty Products', 'desc' => 'Extended-release and combination formulations.'],
                        ],
                    ],
                    'sort_order' => 6,
                    'is_active' => true,
                ]
            );

            // Compliance
            PageSection::updateOrCreate(
                ['page_id' => $products->id, 'section_type' => 'compliance'],
                [
                    'title' => 'Regulatory Compliance',
                    'content' => 'All product information, promotional materials, and marketing communications will be compliant with international standards.',
                    'meta' => [
                        'items' => [
                            'Based on approved and verified information',
                            'Compliant with Myanmar FDA regulations',
                            'Aligned with WHO Ethical Criteria',
                            'Accurate, balanced, and not misleading',
                        ],
                    ],
                    'sort_order' => 7,
                    'is_active' => true,
                ]
            );

            // CTA
            PageSection::updateOrCreate(
                ['page_id' => $products->id, 'section_type' => 'cta'],
                [
                    'title' => 'Partner with NOVITA',
                    'subtitle' => 'For partnership and product inquiries, contact us.',
                    'link_text' => 'Contact Us',
                    'link_url' => '/contact',
                    'sort_order' => 8,
                    'is_active' => true,
                ]
            );
        }

        // Product Development (R&D) Page Sections
        $rnd = Page::where('slug', 'product-development')->first();

        if ($rnd) {
            // Hero
            PageSection::updateOrCreate(
                ['page_id' => $rnd->id, 'section_type' => 'hero'],
                [
                    'title' => 'Our R&D Direction',
                    'subtitle' => "NOVITA is building a research and development foundation focused on developing quality medicines that meet Myanmar's healthcare needs.",
                    'meta' => ['badge' => 'Innovation'],
                    'sort_order' => 1,
                    'is_active' => true,
                ]
            );

            // Overview
            PageSection::updateOrCreate(
                ['page_id' => $rnd->id, 'section_type' => 'overview'],
                [
                    'title' => 'Building R&D Capabilities',
                    'subtitle' => 'Our Vision',
                    'content' => "NOVITA recognizes that a strong research and development function is essential for long-term success in the pharmaceutical industry. We are strategically building our R&D capabilities to support our mission of providing quality medicines.\n\nWhile our R&D team is currently being established, we have defined clear strategic directions that will guide our product development efforts and innovation initiatives.",
                    'meta' => [
                        'badge' => 'Our Vision',
                        'highlight' => "Our goal is to develop products that address the specific healthcare needs of Myanmar's population.",
                    ],
                    'sort_order' => 2,
                    'is_active' => true,
                ]
            );

            // Focus Areas
            PageSection::updateOrCreate(
                ['page_id' => $rnd->id, 'section_type' => 'focus_areas'],
                [
                    'title' => 'Key Development Areas',
                    'subtitle' => 'Focus Areas',
                    'content' => 'Our R&D strategy focuses on these core areas to ensure product quality and market relevance.',
                    'meta' => [
                        'badge' => 'Focus Areas',
                        'features' => [
                            ['title' => 'Formulation Development', 'desc' => 'Developing optimal drug formulations that ensure efficacy, stability, and patient compliance. Our focus includes solid oral dosage forms with potential expansion to other forms.'],
                            ['title' => 'Analytical Method Development', 'desc' => 'Establishing robust analytical methods for product testing, quality control, and stability assessment using modern analytical techniques.'],
                            ['title' => 'Product Improvement', 'desc' => 'Continuous enhancement of existing formulations to improve bioavailability, reduce side effects, and enhance patient experience.'],
                            ['title' => 'Technology Transfer', 'desc' => 'Adapting and implementing proven pharmaceutical technologies to our manufacturing processes for efficient scale-up.'],
                            ['title' => 'Stability Studies', 'desc' => 'Conducting comprehensive stability studies to establish product shelf life and storage conditions according to ICH guidelines.'],
                            ['title' => 'Technical Partnerships', 'desc' => 'Collaborating with international pharmaceutical companies and research institutions for knowledge transfer and capability building.'],
                        ],
                    ],
                    'sort_order' => 3,
                    'is_active' => true,
                ]
            );

            // Approach
            PageSection::updateOrCreate(
                ['page_id' => $rnd->id, 'section_type' => 'approach'],
                [
                    'title' => 'Strategic Development Approach',
                    'subtitle' => 'Our Approach',
                    'content' => 'Our R&D strategy is built on a foundation of scientific rigor, regulatory compliance, and market needs assessment.',
                    'meta' => [
                        'badge' => 'Our Approach',
                        'steps' => [
                            ['title' => 'Market Needs Assessment', 'desc' => 'Identifying healthcare gaps and essential medicine needs in Myanmar.'],
                            ['title' => 'Scientific Evaluation', 'desc' => 'Feasibility studies and technical assessment of potential products.'],
                            ['title' => 'Development & Validation', 'desc' => 'Formulation development, analytical method validation, and stability studies.'],
                            ['title' => 'Regulatory Submission', 'desc' => 'Preparing and submitting dossiers to Myanmar FDA for approval.'],
                        ],
                    ],
                    'sort_order' => 4,
                    'is_active' => true,
                ]
            );

            // Collaboration
            PageSection::updateOrCreate(
                ['page_id' => $rnd->id, 'section_type' => 'collaboration'],
                [
                    'title' => 'Collaboration with Technical Partners',
                    'subtitle' => 'Partnerships',
                    'content' => 'NOVITA seeks to establish strategic partnerships to accelerate our R&D capabilities.',
                    'meta' => [
                        'badge' => 'Partnerships',
                        'cards' => [
                            ['title' => 'Research Institutions', 'desc' => 'Collaborating with universities and research centers for scientific expertise and knowledge exchange.'],
                            ['title' => 'International Pharma Companies', 'desc' => 'Technology transfer partnerships for proven formulations and manufacturing processes.'],
                            ['title' => 'Industry Consultants', 'desc' => 'Engaging expert consultants for specialized R&D projects and capability building.'],
                        ],
                    ],
                    'sort_order' => 5,
                    'is_active' => true,
                ]
            );

            // CTA
            PageSection::updateOrCreate(
                ['page_id' => $rnd->id, 'section_type' => 'cta'],
                [
                    'title' => 'Interested in R&D Collaboration?',
                    'subtitle' => 'We welcome opportunities to collaborate with research institutions and pharmaceutical partners.',
                    'link_text' => 'Contact Us',
                    'link_url' => '/contact',
                    'sort_order' => 6,
                    'is_active' => true,
                ]
            );
        }

        // Partnership Page Sections
        $partnership = Page::where('slug', 'partnership')->first();

        if ($partnership) {
            // Hero
            PageSection::updateOrCreate(
                ['page_id' => $partnership->id, 'section_type' => 'hero'],
                [
                    'title' => 'Business Partnership',
                    'subtitle' => 'NOVITA seeks to build strategic partnerships with companies that share our vision of providing quality medicines for Myanmar.',
                    'meta' => ['badge' => 'Partnerships'],
                    'sort_order' => 1,
                    'is_active' => true,
                ]
            );

            // Opportunities
            PageSection::updateOrCreate(
                ['page_id' => $partnership->id, 'section_type' => 'opportunities'],
                [
                    'title' => 'Partnership Opportunities',
                    'subtitle' => 'Opportunities',
                    'content' => 'We are looking for partners who can help us achieve our mission of providing quality medicines.',
                    'meta' => [
                        'badge' => 'Opportunities',
                        'items' => [
                            ['title' => 'Technical Collaboration', 'desc' => 'Partner with NOVITA to provide technical expertise in pharmaceutical manufacturing, quality systems, and regulatory compliance.', 'features' => ['Manufacturing process optimization', 'Quality management system development', 'Regulatory consulting', 'Training and knowledge transfer']],
                            ['title' => 'Equipment & Technology Partners', 'desc' => 'Supply pharmaceutical manufacturing equipment, analytical instruments, and technology solutions for our facility.', 'features' => ['Manufacturing equipment', 'Quality control instruments', 'HVAC and utility systems', 'Packaging machinery']],
                            ['title' => 'Raw & Packaging Material Suppliers', 'desc' => 'Supply pharmaceutical-grade raw materials, active pharmaceutical ingredients (APIs), and packaging materials.', 'features' => ['Active Pharmaceutical Ingredients (APIs)', 'Excipients and raw materials', 'Primary packaging materials', 'Secondary and tertiary packaging']],
                            ['title' => 'Distribution Partnerships', 'desc' => 'Partner with us to distribute NOVITA products across Myanmar and regional markets.', 'features' => ['National distribution network', 'Hospital and clinic supply', 'Pharmacy chain partnerships', 'Regional market expansion']],
                        ],
                    ],
                    'sort_order' => 2,
                    'is_active' => true,
                ]
            );

            // Contract Manufacturing
            PageSection::updateOrCreate(
                ['page_id' => $partnership->id, 'section_type' => 'contract_manufacturing'],
                [
                    'title' => 'Contract Manufacturing',
                    'subtitle' => 'Future Opportunity',
                    'content' => 'In the future, NOVITA plans to offer contract manufacturing services to pharmaceutical companies looking for a reliable manufacturing partner in Myanmar.',
                    'meta' => [
                        'highlight' => 'Contract manufacturing services will be available once our facility is fully operational and regulatory approvals are in place.',
                    ],
                    'sort_order' => 3,
                    'is_active' => true,
                ]
            );

            // Why Partner
            PageSection::updateOrCreate(
                ['page_id' => $partnership->id, 'section_type' => 'why_partner'],
                [
                    'title' => 'Why Partner with NOVITA',
                    'subtitle' => 'Benefits',
                    'meta' => [
                        'badge' => 'Benefits',
                        'items' => [
                            ['title' => 'Quality Commitment', 'desc' => 'We maintain the highest quality standards in pharmaceutical manufacturing, ensuring reliable partnerships.'],
                            ['title' => 'International Standards', 'desc' => 'Our facility is designed to meet international GMP standards, ensuring compatibility with global partners.'],
                            ['title' => 'KTECG Group Support', 'desc' => "Backed by KTECG Group's 20+ years of experience in pharmaceutical construction."],
                        ],
                    ],
                    'sort_order' => 4,
                    'is_active' => true,
                ]
            );

            // Inquiry Form Info
            PageSection::updateOrCreate(
                ['page_id' => $partnership->id, 'section_type' => 'inquiry_info'],
                [
                    'title' => 'Partnership Inquiry',
                    'subtitle' => 'Get in Touch',
                    'content' => 'Interested in partnering with NOVITA? Fill out the form below and our business development team will contact you.',
                    'meta' => [
                        'badge' => 'Get in Touch',
                        'email' => 'partnerships@novita.com',
                        'types' => ['Technical Collaboration', 'Equipment & Technology Supply', 'Raw & Packaging Material Supply', 'Distribution Partnership'],
                    ],
                    'sort_order' => 5,
                    'is_active' => true,
                ]
            );

            // CTA
            PageSection::updateOrCreate(
                ['page_id' => $partnership->id, 'section_type' => 'cta'],
                [
                    'title' => "Let's Build Together",
                    'subtitle' => 'Join NOVITA in our mission to provide quality medicines for Myanmar.',
                    'link_text' => 'Contact Us',
                    'link_url' => 'mailto:partnerships@novita.com',
                    'sort_order' => 6,
                    'is_active' => true,
                ]
            );
        }

        // Sustainability Page Sections
        $sustainability = Page::where('slug', 'sustainability')->first();

        if ($sustainability) {
            // Hero
            PageSection::updateOrCreate(
                ['page_id' => $sustainability->id, 'section_type' => 'hero'],
                [
                    'title' => 'Environment, Health & Safety',
                    'subtitle' => 'NOVITA is committed to sustainable pharmaceutical manufacturing with comprehensive EHS systems designed to protect our employees, community, and environment.',
                    'meta' => ['badge' => 'Sustainability & EHS'],
                    'sort_order' => 1,
                    'is_active' => true,
                ]
            );

            // Overview
            PageSection::updateOrCreate(
                ['page_id' => $sustainability->id, 'section_type' => 'overview'],
                [
                    'title' => 'Sustainable Manufacturing',
                    'subtitle' => 'Our Commitment',
                    'content' => "As a pharmaceutical company committed to public health, NOVITA recognizes its responsibility to minimize environmental impact while ensuring the highest standards of employee safety and community wellbeing.\n\nOur EHS systems are being designed and implemented in alignment with international standards and local regulatory requirements to ensure responsible and sustainable operations.",
                    'meta' => [
                        'badge' => 'Our Commitment',
                        'highlight' => 'Our goal is to achieve zero environmental incidents and maintain a safe workplace for all employees.',
                    ],
                    'sort_order' => 2,
                    'is_active' => true,
                ]
            );

            // Employee Safety
            PageSection::updateOrCreate(
                ['page_id' => $sustainability->id, 'section_type' => 'employee_safety'],
                [
                    'title' => 'Employee Health & Safety',
                    'subtitle' => 'Worker Protection',
                    'content' => 'Protecting our employees is our highest priority. Our EHS systems are designed to prevent workplace injuries and occupational illnesses.',
                    'meta' => [
                        'badge' => 'Worker Protection',
                        'features' => [
                            ['title' => 'Safety Management System', 'desc' => 'Implementation of a comprehensive safety management system with clear policies, procedures, and responsibilities.'],
                            ['title' => 'Risk Assessment', 'desc' => 'Regular workplace risk assessments to identify hazards and implement appropriate control measures.'],
                            ['title' => 'Health Surveillance', 'desc' => 'Employee health monitoring programs for early detection and prevention of occupational diseases.'],
                            ['title' => 'Personal Protective Equipment', 'desc' => 'Appropriate PPE provided to all employees based on workplace hazard assessments.'],
                            ['title' => 'Emergency Preparedness', 'desc' => 'Emergency response plans and regular drills for fire, chemical spills, and medical emergencies.'],
                            ['title' => 'Safety Training', 'desc' => 'Comprehensive safety training programs for all employees including new hire orientation and refresher courses.'],
                        ],
                    ],
                    'sort_order' => 3,
                    'is_active' => true,
                ]
            );

            // Environmental Management
            PageSection::updateOrCreate(
                ['page_id' => $sustainability->id, 'section_type' => 'environment'],
                [
                    'title' => 'Environmental Management',
                    'subtitle' => 'Environmental Stewardship',
                    'content' => 'NOVITA is committed to minimizing environmental impact through responsible waste management and resource efficiency.',
                    'meta' => [
                        'badge' => 'Environmental Stewardship',
                        'cards' => [
                            ['title' => 'Responsible Waste Management', 'desc' => 'Our waste management system is being designed to handle all waste streams responsibly, including pharmaceutical waste, general waste, and hazardous materials.', 'features' => ['Waste segregation at source', 'Proper storage and containment', 'Licensed waste disposal partners', 'Waste tracking and documentation']],
                            ['title' => 'Wastewater Treatment', 'desc' => 'Our facility will include a wastewater treatment system to ensure all discharged water meets environmental standards.', 'features' => ['Pharmaceutical wastewater treatment', 'pH neutralization systems', 'Biological treatment processes', 'Continuous monitoring and compliance']],
                        ],
                    ],
                    'sort_order' => 4,
                    'is_active' => true,
                ]
            );

            // Energy Efficiency
            PageSection::updateOrCreate(
                ['page_id' => $sustainability->id, 'section_type' => 'energy'],
                [
                    'title' => 'Energy Efficiency',
                    'subtitle' => 'Resource Efficiency',
                    'content' => 'NOVITA is incorporating energy-efficient design and technologies to minimize energy consumption and reduce our carbon footprint.',
                    'meta' => [
                        'badge' => 'Resource Efficiency',
                        'items' => [
                            ['title' => 'Energy-Efficient Equipment', 'desc' => 'Selection of high-efficiency HVAC systems, lighting, and manufacturing equipment.'],
                            ['title' => 'Building Design', 'desc' => 'Energy-efficient building insulation, natural lighting optimization, and thermal management.'],
                            ['title' => 'Monitoring Systems', 'desc' => 'Energy monitoring systems to track consumption and identify efficiency opportunities.'],
                        ],
                    ],
                    'sort_order' => 5,
                    'is_active' => true,
                ]
            );

            // Community & Ethics
            PageSection::updateOrCreate(
                ['page_id' => $sustainability->id, 'section_type' => 'community'],
                [
                    'title' => 'Community & Ethical Practices',
                    'subtitle' => 'Social Responsibility',
                    'content' => 'NOVITA is committed to being a responsible corporate citizen and conducting business with the highest ethical standards.',
                    'meta' => [
                        'badge' => 'Social Responsibility',
                        'items' => [
                            ['title' => 'Environmental Protection', 'desc' => 'Minimizing environmental impact through responsible operations, pollution prevention, and continuous improvement in environmental performance.'],
                            ['title' => 'Community Responsibility', 'desc' => 'Engaging with local communities, supporting health initiatives, and contributing to the socioeconomic development of Myanmar.'],
                            ['title' => 'Ethical Business Practices', 'desc' => 'Conducting business with integrity, transparency, and in compliance with all applicable laws and regulations.'],
                        ],
                    ],
                    'sort_order' => 6,
                    'is_active' => true,
                ]
            );

            // EHS Framework
            PageSection::updateOrCreate(
                ['page_id' => $sustainability->id, 'section_type' => 'framework'],
                [
                    'title' => 'EHS Management System',
                    'subtitle' => 'Framework',
                    'content' => 'Our EHS management system is being developed based on international standards to ensure systematic approach to environmental, health, and safety management.',
                    'meta' => [
                        'badge' => 'Framework',
                        'items' => [
                            ['title' => 'ISO 14001', 'desc' => 'Environmental Management System'],
                            ['title' => 'ISO 45001', 'desc' => 'Occupational Health & Safety'],
                            ['title' => 'GMP', 'desc' => 'Environmental Controls'],
                            ['title' => 'Local', 'desc' => 'Regulatory Compliance'],
                        ],
                    ],
                    'sort_order' => 7,
                    'is_active' => true,
                ]
            );

            // CTA
            PageSection::updateOrCreate(
                ['page_id' => $sustainability->id, 'section_type' => 'cta'],
                [
                    'title' => 'Our Sustainability Commitment',
                    'subtitle' => 'NOVITA is dedicated to sustainable pharmaceutical manufacturing that protects our employees, community, and environment.',
                    'link_text' => 'Contact Us',
                    'link_url' => '/contact',
                    'sort_order' => 8,
                    'is_active' => true,
                ]
            );
        }

        // News Page Sections
        $news = Page::where('slug', 'news')->first();

        if ($news) {
            // Hero
            PageSection::updateOrCreate(
                ['page_id' => $news->id, 'section_type' => 'hero'],
                [
                    'title' => 'News & Updates',
                    'subtitle' => 'Stay updated with facility developments, exhibition visits, and company milestones.',
                    'meta' => ['badge' => 'NEWS & UPDATES'],
                    'sort_order' => 1,
                    'is_active' => true,
                ]
            );

            // CTA
            PageSection::updateOrCreate(
                ['page_id' => $news->id, 'section_type' => 'cta'],
                [
                    'title' => 'Stay Connected',
                    'subtitle' => 'Follow us for facility and company updates.',
                    'link_text' => 'Contact Us',
                    'link_url' => '/contact',
                    'sort_order' => 2,
                    'is_active' => true,
                ]
            );
        }

        // Careers Page Sections
        $careers = Page::where('slug', 'careers')->first();

        if ($careers) {
            // Hero
            PageSection::updateOrCreate(
                ['page_id' => $careers->id, 'section_type' => 'hero'],
                [
                    'title' => 'Join Our Team',
                    'subtitle' => "Be part of Myanmar's pharmaceutical future. Help us build world-class manufacturing capabilities.",
                    'meta' => ['badge' => 'CAREERS'],
                    'sort_order' => 1,
                    'is_active' => true,
                ]
            );

            // Why Work
            PageSection::updateOrCreate(
                ['page_id' => $careers->id, 'section_type' => 'why_work'],
                [
                    'title' => 'Why Work With NOVITA',
                    'subtitle' => 'WHY NOVITA',
                    'content' => "Making a difference in Myanmar's healthcare landscape.",
                    'meta' => [
                        'badge' => 'WHY NOVITA',
                        'items' => [
                            ['title' => 'Meaningful Work', 'desc' => 'Contribute to providing quality medicines that improve healthcare outcomes.'],
                            ['title' => 'Growth Opportunities', 'desc' => 'Join a growing company with career advancement and development.'],
                            ['title' => 'International Exposure', 'desc' => 'Work with international partners and global best practices.'],
                            ['title' => 'Professional Development', 'desc' => 'Training programs and skill development opportunities.'],
                        ],
                    ],
                    'sort_order' => 2,
                    'is_active' => true,
                ]
            );

            // Culture
            PageSection::updateOrCreate(
                ['page_id' => $careers->id, 'section_type' => 'culture'],
                [
                    'title' => 'Company Culture',
                    'subtitle' => 'OUR CULTURE',
                    'content' => 'We foster integrity, innovation, and collaboration — united by a shared mission for a healthier Myanmar.',
                    'meta' => [
                        'badge' => 'OUR CULTURE',
                        'items' => [
                            ['title' => 'Quality First', 'desc' => 'Committed to highest standards in everything we do.'],
                            ['title' => 'Team Collaboration', 'desc' => 'We work together to achieve common goals.'],
                            ['title' => 'Continuous Improvement', 'desc' => 'We encourage learning and innovation at all levels.'],
                            ['title' => 'Integrity & Ethics', 'desc' => 'Business with honesty and transparency.'],
                        ],
                    ],
                    'sort_order' => 3,
                    'is_active' => true,
                ]
            );

            // Positions
            PageSection::updateOrCreate(
                ['page_id' => $careers->id, 'section_type' => 'positions'],
                [
                    'title' => 'Available Positions',
                    'subtitle' => 'OPPORTUNITIES',
                    'content' => 'Career opportunities will be announced as our organization continues to grow.',
                    'meta' => [
                        'badge' => 'OPPORTUNITIES',
                        'note' => 'As NOVITA expands, we will look for talented individuals. Check back regularly.',
                        'cta' => 'In the meantime, send your CV for future opportunities.',
                    ],
                    'sort_order' => 4,
                    'is_active' => true,
                ]
            );

            // Training
            PageSection::updateOrCreate(
                ['page_id' => $careers->id, 'section_type' => 'training'],
                [
                    'title' => 'Training & Development',
                    'subtitle' => 'GROWTH',
                    'content' => 'Investing in our people through comprehensive programs.',
                    'meta' => [
                        'badge' => 'GROWTH',
                        'items' => [
                            ['title' => 'On-the-Job Training', 'desc' => 'Hands-on training with experienced professionals in manufacturing and QC.'],
                            ['title' => 'GMP Training', 'desc' => 'Comprehensive training on GMP and international quality standards.'],
                            ['title' => 'Leadership Development', 'desc' => 'Programs to develop future leaders within the organization.'],
                        ],
                    ],
                    'sort_order' => 5,
                    'is_active' => true,
                ]
            );

            // CV Form Info
            PageSection::updateOrCreate(
                ['page_id' => $careers->id, 'section_type' => 'cv_form'],
                [
                    'title' => 'Send Your CV',
                    'subtitle' => 'SUBMIT YOUR CV',
                    'content' => 'Interested in joining NOVITA? Send your CV to our HR department.',
                    'meta' => [
                        'badge' => 'SUBMIT YOUR CV',
                        'includes' => ['Updated CV/Resume', 'Cover letter', 'Educational certificates', 'Professional certifications (if any)'],
                    ],
                    'sort_order' => 6,
                    'is_active' => true,
                ]
            );

            // CTA
            PageSection::updateOrCreate(
                ['page_id' => $careers->id, 'section_type' => 'cta'],
                [
                    'title' => 'Ready to Make a Difference?',
                    'subtitle' => "Join NOVITA and be part of Myanmar's pharmaceutical future.",
                    'link_text' => 'Send Your CV',
                    'link_url' => 'mailto:careers@novita-myanmar.com.mm',
                    'sort_order' => 7,
                    'is_active' => true,
                ]
            );
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
            // Hero
            PageSection::updateOrCreate(
                ['page_id' => $contact->id, 'section_type' => 'hero'],
                [
                    'title' => 'Contact Us',
                    'subtitle' => "We'd love to hear from you. Get in touch with our team.",
                    'meta' => ['badge' => 'GET IN TOUCH'],
                    'sort_order' => 1,
                    'is_active' => true,
                ]
            );

            // Info Cards
            PageSection::updateOrCreate(
                ['page_id' => $contact->id, 'section_type' => 'info_cards'],
                [
                    'title' => 'Contact Information',
                    'meta' => [
                        'badge' => 'CONTACT INFO',
                        'cards' => [
                            [
                                'title' => 'Registered Office',
                                'company' => 'NOVITA Pharmaceutical Co., Ltd.',
                                'address' => 'No. 216/222 Bo Myat Htun Housing, Room D3, Corner of 49 Street and Maharbandoola Road, Ward 1, Pazundaung Township, Yangon, Myanmar',
                                'phone' => '(+95) 9 5000144',
                                'email' => 'info@novita-myanmar.com.mm',
                                'map_url' => 'https://maps.app.goo.gl/HJVXT2ghQCwvZzCB7',
                            ],
                            [
                                'title' => 'Factory',
                                'address_lines' => ['No. 92,93 & 94', 'Makhayar Min Thar Gyi Street', 'Thilawa Local Industrial Zone', 'Yangon, Myanmar'],
                                'phone' => '(+95) 9 977 225 001',
                                'map_url' => 'https://maps.app.goo.gl/EHKjgoAaFnA4oSgZA',
                            ],
                            [
                                'title' => 'Additional Phone',
                                'lines' => ['For general inquiries'],
                                'phone' => '(+95) 9 977 225 004',
                                'note' => 'Factory under development. Visits by appointment only.',
                            ],
                            [
                                'title' => 'Office Hours',
                                'hours' => [
                                    ['Monday - Friday', '8:30 AM - 5:00 PM'],
                                    ['Saturday', '8:30 AM - 1:00 PM'],
                                    ['Sunday', 'Closed'],
                                ],
                                'social' => true,
                            ],
                        ],
                    ],
                    'sort_order' => 2,
                    'is_active' => true,
                ]
            );

            // Department Emails
            PageSection::updateOrCreate(
                ['page_id' => $contact->id, 'section_type' => 'department_emails'],
                [
                    'title' => 'Department Contacts',
                    'subtitle' => 'CONTACT BY DEPARTMENT',
                    'meta' => [
                        'badge' => 'CONTACT BY DEPARTMENT',
                        'departments' => [
                            ['title' => 'General Inquiries', 'email' => 'info@novita-myanmar.com.mm', 'icon' => 'message-square'],
                            ['title' => 'Business Inquiries', 'email' => 'business@novita-myanmar.com.mm', 'icon' => 'globe'],
                            ['title' => 'Careers', 'email' => 'careers@novita-myanmar.com.mm', 'icon' => 'mail'],
                        ],
                    ],
                    'sort_order' => 3,
                    'is_active' => true,
                ]
            );

            // Map
            PageSection::updateOrCreate(
                ['page_id' => $contact->id, 'section_type' => 'map'],
                [
                    'title' => 'Our Location',
                    'subtitle' => 'FIND US',
                    'meta' => [
                        'badge' => 'FIND US',
                        'embed_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.0422271533384!2d96.17007459999999!3d16.774574599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec8a4118f851%3A0xa6ccb0a1cd234422!2s181%20Bo%20Myat%20Htun%20St%2C%20Yangon%2C%20Myanmar%20(Burma)!5e0!3m2!1sen!2sqa!4v1788407292856!5m2!1sen!2sqa',
                        'map_url' => 'https://maps.app.goo.gl/HJVXT2ghQCwvZzCB7',
                        'map_label' => 'Open in Google Maps — 181 Bo Myat Htun St, Yangon',
                        'height' => 450,
                    ],
                    'sort_order' => 4,
                    'is_active' => true,
                ]
            );

            // Contact Form
            PageSection::updateOrCreate(
                ['page_id' => $contact->id, 'section_type' => 'contact_form'],
                [
                    'title' => 'Contact Form',
                    'subtitle' => 'SEND A MESSAGE',
                    'content' => "Have a question? Fill out the form and we'll reply within 2 business days.",
                    'meta' => [
                        'badge' => 'SEND A MESSAGE',
                        'commitments' => [
                            'Response within 2 business days',
                            'Confidential handling of all inquiries',
                            'Dedicated support for business partners',
                        ],
                        'subjects' => [
                            ['value' => 'general', 'label' => 'General Inquiry'],
                            ['value' => 'business', 'label' => 'Business Partnership'],
                            ['value' => 'products', 'label' => 'Product Information'],
                            ['value' => 'careers', 'label' => 'Career Opportunities'],
                            ['value' => 'other', 'label' => 'Other'],
                        ],
                    ],
                    'sort_order' => 5,
                    'is_active' => true,
                ]
            );
        }
    }
}
