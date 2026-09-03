<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            // General Settings
            ['key' => 'site_name', 'value' => 'NOVITA', 'type' => 'text', 'group' => 'general'],
            ['key' => 'site_tagline', 'value' => 'Manufacturing Excellence', 'type' => 'text', 'group' => 'general'],
            ['key' => 'site_logo', 'value' => 'logo/novita-logo.png', 'type' => 'image', 'group' => 'general'],
            ['key' => 'site_favicon', 'value' => 'logo/favicon.ico', 'type' => 'image', 'group' => 'general'],
            ['key' => 'site_description', 'value' => 'NOVITA is a leading manufacturer committed to quality, innovation, and sustainability.', 'type' => 'textarea', 'group' => 'general'],

            // Contact Settings
            ['key' => 'contact_email', 'value' => 'info@novita-myanmar.com.mm', 'type' => 'text', 'group' => 'contact'],
            ['key' => 'business_email', 'value' => 'business@novita-myanmar.com.mm', 'type' => 'text', 'group' => 'contact'],
            ['key' => 'careers_email', 'value' => 'careers@novita-myanmar.com.mm', 'type' => 'text', 'group' => 'contact'],
            ['key' => 'contact_phone', 'value' => '(+95) 9 5000144', 'type' => 'text', 'group' => 'contact'],
            ['key' => 'factory_phone', 'value' => '(+95) 9 977 225 001', 'type' => 'text', 'group' => 'contact'],
            ['key' => 'contact_phone2', 'value' => '(+95) 9 977 225 004', 'type' => 'text', 'group' => 'contact'],
            ['key' => 'contact_address', 'value' => 'No. 216/222 Bo Myat Htun Housing, Room D3, Corner of 49 Street and Maharbandoola Road, Ward 1, Pazundaung Township, Yangon, Myanmar', 'type' => 'textarea', 'group' => 'contact'],
            ['key' => 'contact_working_hours', 'value' => 'Mon - Fri: 8:00 AM - 5:00 PM', 'type' => 'text', 'group' => 'contact'],

            // Social Media Settings
            ['key' => 'social_facebook', 'value' => 'https://facebook.com/novita', 'type' => 'text', 'group' => 'social'],
            ['key' => 'social_linkedin', 'value' => 'https://linkedin.com/company/novita', 'type' => 'text', 'group' => 'social'],
            ['key' => 'social_youtube', 'value' => 'https://youtube.com/novita', 'type' => 'text', 'group' => 'social'],

            // SEO Settings
            ['key' => 'seo_title', 'value' => 'NOVITA - Leading Manufacturing Excellence', 'type' => 'text', 'group' => 'seo'],
            ['key' => 'seo_description', 'value' => 'NOVITA is a leading manufacturer committed to quality, innovation, and sustainability. Discover our world-class products and facilities.', 'type' => 'textarea', 'group' => 'seo'],
            ['key' => 'seo_keywords', 'value' => 'manufacturing, industrial, valves, pumps, quality, Myanmar', 'type' => 'textarea', 'group' => 'seo'],

            // Footer Settings
            ['key' => 'footer_copyright', 'value' => '© ' . date('Y') . ' NOVITA. All rights reserved.', 'type' => 'text', 'group' => 'footer'],
            ['key' => 'footer_about_text', 'value' => 'NOVITA is committed to delivering high-quality manufacturing solutions while maintaining the highest standards of sustainability and innovation.', 'type' => 'textarea', 'group' => 'footer'],

            // Navigation Visibility
            ['key' => 'nav_home', 'value' => '1', 'type' => 'boolean', 'group' => 'navigation'],
            ['key' => 'nav_about', 'value' => '1', 'type' => 'boolean', 'group' => 'navigation'],
            ['key' => 'nav_facility', 'value' => '1', 'type' => 'boolean', 'group' => 'navigation'],
            ['key' => 'nav_quality', 'value' => '1', 'type' => 'boolean', 'group' => 'navigation'],
            ['key' => 'nav_products', 'value' => '1', 'type' => 'boolean', 'group' => 'navigation'],
            ['key' => 'nav_news', 'value' => '1', 'type' => 'boolean', 'group' => 'navigation'],
            ['key' => 'nav_careers', 'value' => '1', 'type' => 'boolean', 'group' => 'navigation'],
            ['key' => 'nav_contact', 'value' => '1', 'type' => 'boolean', 'group' => 'navigation'],
            ['key' => 'nav_product_development', 'value' => '0', 'type' => 'boolean', 'group' => 'navigation'],
            ['key' => 'nav_partnership', 'value' => '0', 'type' => 'boolean', 'group' => 'navigation'],
            ['key' => 'nav_sustainability', 'value' => '0', 'type' => 'boolean', 'group' => 'navigation'],
        ];

        foreach ($settings as $setting) {
            Setting::updateOrCreate(['key' => $setting['key']], $setting);
        }
    }
}
