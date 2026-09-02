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
                'meta_title' => 'Contact Us - Get in Touch with NOVITA',
                'meta_description' => 'Contact NOVITA for inquiries, quotes, or partnerships. We\'re here to help.',
                'is_active' => true,
                'sort_order' => 8,
            ],
        ];

        foreach ($pages as $page) {
            Page::create($page);
        }
    }
}
