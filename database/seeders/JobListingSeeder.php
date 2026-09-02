<?php

namespace Database\Seeders;

use App\Models\JobListing;
use Illuminate\Database\Seeder;

class JobListingSeeder extends Seeder
{
    public function run(): void
    {
        $jobs = [
            [
                'title' => 'Production Engineer',
                'slug' => 'production-engineer',
                'department' => 'Production',
                'location' => 'Yangon',
                'type' => 'full-time',
                'description' => 'We are looking for a skilled Production Engineer to join our manufacturing team. The ideal candidate will be responsible for optimizing production processes, ensuring quality standards, and driving continuous improvement initiatives.',
                'requirements' => [
                    "Bachelor's degree in Engineering or related field",
                    'Minimum 3 years experience in manufacturing',
                    'Knowledge of lean manufacturing principles',
                    'Strong problem-solving skills',
                    'Good communication skills',
                ],
                'benefits' => [
                    'Competitive salary',
                    'Health insurance',
                    'Annual leave',
                    'Training opportunities',
                    'Career growth',
                ],
                'salary_range' => 'Negotiable',
                'deadline' => now()->addDays(30),
                'is_active' => true,
            ],
            [
                'title' => 'Quality Control Specialist',
                'slug' => 'quality-control-specialist',
                'department' => 'Quality',
                'location' => 'Yangon',
                'type' => 'full-time',
                'description' => 'Join our quality team as a Quality Control Specialist. You will be responsible for ensuring products meet quality standards through inspection, testing, and documentation.',
                'requirements' => [
                    "Bachelor's degree in Quality Management or related field",
                    '2+ years experience in quality control',
                    'ISO 9001 knowledge',
                    'Attention to detail',
                    'Statistical analysis skills',
                ],
                'benefits' => [
                    'Competitive salary',
                    'Health insurance',
                    'Annual leave',
                    'Professional development',
                    'Certification support',
                ],
                'salary_range' => 'Negotiable',
                'deadline' => now()->addDays(25),
                'is_active' => true,
            ],
            [
                'title' => 'Maintenance Technician',
                'slug' => 'maintenance-technician',
                'department' => 'Maintenance',
                'location' => 'Yangon',
                'type' => 'full-time',
                'description' => 'We are seeking a Maintenance Technician to ensure optimal performance of our manufacturing equipment. Responsibilities include preventive maintenance, troubleshooting, and repairs.',
                'requirements' => [
                    'Technical diploma in Mechanical/Electrical Engineering',
                    '2+ years maintenance experience',
                    'Knowledge of industrial equipment',
                    'Electrical and mechanical skills',
                    'Ability to work shifts',
                ],
                'benefits' => [
                    'Competitive salary',
                    'Health insurance',
                    'Shift allowances',
                    'Training programs',
                    'Career advancement',
                ],
                'salary_range' => 'Negotiable',
                'deadline' => now()->addDays(20),
                'is_active' => true,
            ],
            [
                'title' => 'Sales Executive',
                'slug' => 'sales-executive',
                'department' => 'Sales',
                'location' => 'Yangon',
                'type' => 'full-time',
                'description' => 'Join our sales team to promote and sell NOVITA products to industrial clients. Build relationships and achieve sales targets.',
                'requirements' => [
                    "Bachelor's degree in Business or related field",
                    '1+ years sales experience',
                    'Excellent communication skills',
                    'Self-motivated and results-driven',
                    'Willingness to travel',
                ],
                'benefits' => [
                    'Base salary + commission',
                    'Health insurance',
                    'Travel allowances',
                    'Sales training',
                    'Career growth',
                ],
                'salary_range' => 'Negotiable + Commission',
                'deadline' => now()->addDays(15),
                'is_active' => true,
            ],
        ];

        foreach ($jobs as $job) {
            JobListing::create($job);
        }
    }
}
