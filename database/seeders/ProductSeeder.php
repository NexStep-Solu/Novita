<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'name' => 'Industrial Valve Type A',
                'slug' => 'industrial-valve-type-a',
                'category' => 'Valves',
                'sku' => 'NV-VLV-001',
                'short_description' => 'High-performance industrial valve for heavy-duty applications.',
                'description' => 'Our Industrial Valve Type A is designed for demanding industrial applications. Made from premium materials with precision engineering, this valve offers exceptional durability, reliability, and performance.\n\nFeatures include corrosion resistance, high pressure tolerance, and easy maintenance. Ideal for oil & gas, chemical processing, and water treatment industries.',
                'features' => ['Corrosion resistant', 'High pressure tolerance', 'Easy maintenance', 'Long service life'],
                'specifications' => [
                    'Material' => 'Stainless Steel 316L',
                    'Size Range' => 'DN15 - DN300',
                    'Pressure Rating' => 'PN16 - PN160',
                    'Temperature Range' => '-20°C to 400°C',
                    'Connection' => 'Flanged / Threaded',
                ],
                'image_path' => 'products/valve-type-a.jpg',
                'gallery' => ['products/valve-type-a-1.jpg', 'products/valve-type-a-2.jpg'],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'Precision Pump Model X',
                'slug' => 'precision-pump-model-x',
                'category' => 'Pumps',
                'sku' => 'NV-PMP-001',
                'short_description' => 'High-efficiency precision pump for critical fluid handling.',
                'description' => 'The Precision Pump Model X delivers exceptional performance for critical fluid handling applications. With its advanced design and premium components, it ensures reliable operation and minimal downtime.\n\nSuitable for pharmaceutical, food & beverage, and chemical industries.',
                'features' => ['High efficiency', 'Low noise operation', 'Easy cleaning', 'Sanitary design'],
                'specifications' => [
                    'Flow Rate' => '0.5 - 50 L/min',
                    'Max Pressure' => '10 bar',
                    'Material' => 'AISI 316L',
                    'Surface Finish' => 'Ra ≤ 0.8 μm',
                    'Certification' => 'FDA / CE',
                ],
                'image_path' => 'products/pump-model-x.jpg',
                'gallery' => ['products/pump-model-x-1.jpg', 'products/pump-model-x-2.jpg'],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'name' => 'Control Panel Pro',
                'slug' => 'control-panel-pro',
                'category' => 'Control Systems',
                'sku' => 'NV-CTL-001',
                'short_description' => 'Advanced control panel for automated manufacturing processes.',
                'description' => 'The Control Panel Pro is our flagship automation solution, designed to streamline and optimize manufacturing processes. With intuitive interface and powerful capabilities, it provides complete control over your operations.\n\nFeatures include remote monitoring, data logging, and seamless integration with existing systems.',
                'features' => ['Touch screen interface', 'Remote monitoring', 'Data logging', 'Multi-language support'],
                'specifications' => [
                    'Display' => '10.1" TFT Touchscreen',
                    'Inputs' => '16 Digital / 8 Analog',
                    'Outputs' => '16 Digital / 4 Analog',
                    'Communication' => 'Modbus / CAN / Ethernet',
                    'Power' => '24VDC / 110-240VAC',
                ],
                'image_path' => 'products/control-panel-pro.jpg',
                'gallery' => ['products/control-panel-pro-1.jpg'],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 3,
            ],
            [
                'name' => 'Heavy Duty Motor M200',
                'slug' => 'heavy-duty-motor-m200',
                'category' => 'Motors',
                'sku' => 'NV-MTR-001',
                'short_description' => 'Robust industrial motor for continuous heavy-duty operation.',
                'description' => 'The Heavy Duty Motor M200 is engineered for continuous operation in demanding industrial environments. Its robust construction and advanced thermal management ensure reliable performance even under extreme conditions.',
                'features' => ['IE3 efficiency class', 'IP55 protection', 'Continuous duty', 'Low vibration'],
                'specifications' => [
                    'Power Range' => '0.75 - 315 kW',
                    'Voltage' => '380-415V / 50Hz',
                    'Speed' => '750 - 3000 RPM',
                    'Frame Size' => 'IEC 80 - 355',
                    'Insulation' => 'Class F',
                ],
                'image_path' => 'products/motor-m200.jpg',
                'gallery' => ['products/motor-m200-1.jpg', 'products/motor-m200-2.jpg'],
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 4,
            ],
            [
                'name' => 'Sensor Unit SU-100',
                'slug' => 'sensor-unit-su-100',
                'category' => 'Sensors',
                'sku' => 'NV-SNS-001',
                'short_description' => 'High-precision sensor unit for accurate process monitoring.',
                'description' => 'The Sensor Unit SU-100 provides accurate and reliable measurements for process monitoring and control. With its advanced sensing technology, it delivers consistent performance in various industrial applications.',
                'features' => ['High accuracy', 'Fast response time', 'Wide temperature range', 'Compact design'],
                'specifications' => [
                    'Accuracy' => '±0.1%',
                    'Response Time' => '< 10ms',
                    'Temperature Range' => '-40°C to 125°C',
                    'Output' => '4-20mA / 0-10V',
                    'Protection' => 'IP67',
                ],
                'image_path' => 'products/sensor-su-100.jpg',
                'gallery' => ['products/sensor-su-100-1.jpg'],
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 5,
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
