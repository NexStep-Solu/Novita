<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    public function run(): void
    {
        $pages = [
            [
                'slug' => 'home',
                'title' => 'Home',
                'meta_title' => 'NOVITA - Leading Manufacturing Excellence',
                'meta_description' => 'NOVITA is a leading manufacturer committed to quality, innovation, and sustainability. Discover our world-class products and facilities.',
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'slug' => 'about-us',
                'title' => 'About Us',
                'meta_title' => 'About Us - NOVITA Company Profile',
                'meta_description' => 'Learn about NOVITA\'s history, mission, vision, and values. Discover our journey to manufacturing excellence.',
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'slug' => 'our-facility',
                'title' => 'Our Facility',
                'meta_title' => 'Our Facility - World-Class Manufacturing',
                'meta_description' => 'Explore NOVITA\'s state-of-the-art manufacturing facility equipped with advanced technology and equipment.',
                'is_active' => true,
                'sort_order' => 3,
            ],
            [
                'slug' => 'quality',
                'title' => 'Quality',
                'meta_title' => 'Quality Assurance - NOVITA Standards',
                'meta_description' => 'NOVITA maintains the highest quality standards with ISO certifications and rigorous quality control processes.',
                'is_active' => true,
                'sort_order' => 4,
            ],
            [
                'slug' => 'products',
                'title' => 'Products',
                'meta_title' => 'Our Products - NOVITA Manufacturing',
                'meta_description' => 'Explore NOVITA\'s comprehensive range of high-quality products designed for various industries.',
                'is_active' => true,
                'sort_order' => 5,
            ],
            [
                'slug' => 'news',
                'title' => 'News & Media',
                'meta_title' => 'News & Media - NOVITA Updates',
                'meta_description' => 'Stay updated with the latest news, announcements, and media coverage from NOVITA.',
                'is_active' => true,
                'sort_order' => 6,
            ],
            [
                'slug' => 'careers',
                'title' => 'Careers',
                'meta_title' => 'Careers - Join NOVITA Team',
                'meta_description' => 'Join NOVITA and be part of our growing team. Explore exciting career opportunities in manufacturing.',
                'is_active' => true,
                'sort_order' => 7,
            ],
            [
                'slug' => 'contact',
                'title' => 'Contact Us',
                'meta_title' => 'Contact Us - NOVITA Pharmaceutical Co., Ltd.',
                'meta_description' => 'Get in touch with NOVITA Pharmaceutical for inquiries, partnerships, and product information.',
                'is_active' => true,
                'sort_order' => 8,
            ],

            [
                'slug' => 'product-development',
                'title' => 'Product Development',
                'meta_title' => 'Product Development - NOVITA Pharmaceutical Co., Ltd.',
                'meta_description' => 'Explore NOVITA\'s research and development direction focused on quality medicines for Myanmar.',
                'is_active' => true,
                'sort_order' => 9,
            ],

            [
                'slug' => 'partnership',
                'title' => 'Business Partnership',
                'meta_title' => 'Business Partnership - NOVITA Pharmaceutical Co., Ltd.',
                'meta_description' => 'Partner with NOVITA Pharmaceutical for technical collaboration, equipment supply, raw materials, and distribution in Myanmar.',
                'is_active' => true,
                'sort_order' => 10,
            ],

            [
                'slug' => 'sustainability',
                'title' => 'Sustainability & EHS',
                'meta_title' => 'Sustainability & EHS - NOVITA Pharmaceutical Co., Ltd.',
                'meta_description' => 'Learn about NOVITA\'s commitment to sustainable pharmaceutical manufacturing, environmental stewardship, and employee health & safety.',
                'is_active' => true,
                'sort_order' => 11,
            ],

            [
                'slug' => 'news',
                'title' => 'News & Media',
                'meta_title' => 'News & Media - NOVITA Pharmaceutical Co., Ltd.',
                'meta_description' => 'Stay updated with the latest news, exhibition visits, factory updates, and company milestones from NOVITA Pharmaceutical.',
                'is_active' => true,
                'sort_order' => 12,
            ],

            [
                'slug' => 'careers',
                'title' => 'Careers',
                'meta_title' => 'Careers - NOVITA Pharmaceutical Co., Ltd.',
                'meta_description' => 'Join NOVITA Pharmaceutical. Explore career opportunities in pharmaceutical manufacturing, quality, and regulatory affairs in Myanmar.',
                'is_active' => true,
                'sort_order' => 13,
            ],
        ];

        foreach ($pages as $page) {
            Page::updateOrCreate(['slug' => $page['slug']], $page);
        }
    }
}
