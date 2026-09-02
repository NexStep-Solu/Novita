<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Seeder;

class NewsSeeder extends Seeder
{
    public function run(): void
    {
        $news = [
            [
                'title' => 'NOVITA Achieves ISO 9001:2015 Certification',
                'slug' => 'novita-achieves-iso-9001-certification',
                'excerpt' => 'We are proud to announce that NOVITA has successfully achieved ISO 9001:2015 quality management certification.',
                'content' => 'NOVITA is proud to announce a significant milestone in our commitment to quality - we have successfully achieved ISO 9001:2015 certification.\n\nThis internationally recognized certification validates our quality management system and demonstrates our commitment to delivering consistent, high-quality products to our customers.\n\nThe certification process involved a comprehensive audit of our quality management system, including documentation review, process evaluation, and on-site inspection.\n\n"We are thrilled to receive this certification," said the Quality Director. "It reflects the hard work and dedication of our entire team to maintaining the highest quality standards."\n\nThis achievement reinforces NOVITA\'s position as a trusted manufacturing partner committed to excellence.',
                'image_path' => 'news/iso-certification.jpg',
                'author' => 'NOVITA Team',
                'category' => 'company',
                'published_at' => now()->subDays(7),
                'is_published' => true,
            ],
            [
                'title' => 'New Production Line inaugurated',
                'slug' => 'new-production-line-inaugurated',
                'excerpt' => 'NOVITA inaugurates a new state-of-the-art production line to meet growing demand.',
                'content' => 'NOVITA has officially inaugurated its newest production line, marking a significant expansion of our manufacturing capabilities.\n\nThe new production line, representing an investment of over $2 million, features the latest automation technology and is designed to increase our production capacity by 40%.\n\nKey features of the new line include:\n- Advanced robotic assembly systems\n- AI-powered quality inspection\n- Real-time production monitoring\n- Energy-efficient operations\n\nThis expansion is in response to the growing demand for our products in both domestic and international markets.\n\nThe inauguration ceremony was attended by company executives, government officials, and industry partners.',
                'image_path' => 'news/production-line.jpg',
                'author' => 'NOVITA Team',
                'category' => 'company',
                'published_at' => now()->subDays(14),
                'is_published' => true,
            ],
            [
                'title' => 'NOVITA Signs Partnership Agreement with Global Tech',
                'slug' => 'novita-signs-partnership-global-tech',
                'excerpt' => 'Strategic partnership to drive innovation in manufacturing technology.',
                'content' => 'NOVITA has signed a strategic partnership agreement with Global Tech, a leading technology provider, to drive innovation in manufacturing technology.\n\nThe partnership will focus on:\n- Developing smart manufacturing solutions\n- Implementing Industry 4.0 technologies\n- Creating sustainable manufacturing processes\n- Enhancing product quality through AI and machine learning\n\n"This partnership represents an exciting opportunity to combine our manufacturing expertise with Global Tech\'s technological capabilities," said the CEO of NOVITA.\n\nThe collaboration is expected to result in significant improvements in production efficiency, product quality, and environmental sustainability.',
                'image_path' => 'news/partnership.jpg',
                'author' => 'NOVITA Team',
                'category' => 'industry',
                'published_at' => now()->subDays(21),
                'is_published' => true,
            ],
            [
                'title' => 'NOVITA Launches New Product Line',
                'slug' => 'novita-launches-new-product-line',
                'excerpt' => 'Introducing our latest range of innovative products designed for the future.',
                'content' => 'NOVITA is excited to announce the launch of our latest product line, featuring innovative designs and advanced technology.\n\nThe new product line includes:\n- Next-generation industrial valves with smart monitoring\n- High-efficiency pumps with IoT connectivity\n- Advanced control systems with AI capabilities\n\nThese products have been developed based on extensive customer research and market analysis, addressing the evolving needs of modern manufacturing.\n\nKey benefits include:\n- 30% improvement in energy efficiency\n- Enhanced reliability and durability\n- Seamless integration with existing systems\n- Remote monitoring and predictive maintenance capabilities\n\nThe new products are now available for order and will be showcased at upcoming industry exhibitions.',
                'image_path' => 'news/product-launch.jpg',
                'author' => 'NOVITA Team',
                'category' => 'product',
                'published_at' => now()->subDays(30),
                'is_published' => true,
            ],
        ];

        foreach ($news as $article) {
            News::create($article);
        }
    }
}
