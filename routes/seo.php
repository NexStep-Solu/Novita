<?php

use App\Models\Page;
use App\Models\News;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Response;

Route::get('/sitemap.xml', function (): Response {
    $pages = Page::where('is_active', true)->orderBy('sort_order')->get();
    $news = News::where('is_published', true)->orderBy('published_at', 'desc')->get();

    $baseUrl = config('app.url', 'https://novita-myanmar.com.mm');

    $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
    $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"' . "\n";
    $xml .= '  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"' . "\n";
    $xml .= '  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9' . "\n";
    $xml .= '    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">' . "\n";

    // Static pages
    $staticPages = [
        '/' => ['changefreq' => 'weekly', 'priority' => '1.0'],
        '/about-us' => ['changefreq' => 'monthly', 'priority' => '0.8'],
        '/our-facility' => ['changefreq' => 'monthly', 'priority' => '0.8'],
        '/quality' => ['changefreq' => 'monthly', 'priority' => '0.8'],
        '/products' => ['changefreq' => 'weekly', 'priority' => '0.9'],
        '/product-development' => ['changefreq' => 'monthly', 'priority' => '0.7'],
        '/partnership' => ['changefreq' => 'monthly', 'priority' => '0.7'],
        '/sustainability' => ['changefreq' => 'monthly', 'priority' => '0.7'],
        '/leadership' => ['changefreq' => 'monthly', 'priority' => '0.7'],
        '/news' => ['changefreq' => 'weekly', 'priority' => '0.8'],
        '/careers' => ['changefreq' => 'weekly', 'priority' => '0.8'],
        '/contact' => ['changefreq' => 'monthly', 'priority' => '0.8'],
        '/privacy' => ['changefreq' => 'yearly', 'priority' => '0.3'],
        '/terms' => ['changefreq' => 'yearly', 'priority' => '0.3'],
        '/medical-disclaimer' => ['changefreq' => 'yearly', 'priority' => '0.3'],
    ];

    foreach ($staticPages as $path => $config) {
        $xml .= '  <url>' . "\n";
        $xml .= '    <loc>' . $baseUrl . $path . '</loc>' . "\n";
        $xml .= '    <changefreq>' . $config['changefreq'] . '</changefreq>' . "\n";
        $xml .= '    <priority>' . $config['priority'] . '</priority>' . "\n";
        $xml .= '  </url>' . "\n";
    }

    // Dynamic DB pages
    foreach ($pages as $page) {
        if (in_array($page->slug, ['home', 'contact'])) continue; // already in static
        $xml .= '  <url>' . "\n";
        $xml .= '    <loc>' . $baseUrl . '/' . $page->slug . '</loc>' . "\n";
        $xml .= '    <changefreq>monthly</changefreq>' . "\n";
        $xml .= '    <priority>0.7</priority>' . "\n";
        $xml .= '  </url>' . "\n";
    }

    // News articles
    foreach ($news as $article) {
        $xml .= '  <url>' . "\n";
        $xml .= '    <loc>' . $baseUrl . '/news/' . $article->slug . '</loc>' . "\n";
        $xml .= '    <lastmod>' . $article->updated_at->format('Y-m-d') . '</lastmod>' . "\n";
        $xml .= '    <changefreq>monthly</changefreq>' . "\n";
        $xml .= '    <priority>0.6</priority>' . "\n";
        $xml .= '  </url>' . "\n";
    }

    $xml .= '</urlset>';

    return response($xml, 200, [
        'Content-Type' => 'application/xml',
        'Cache-Control' => 'public, max-age=3600',
    ]);
});

Route::get('/robots.txt', function (): Response {
    $content = "User-agent: *\n";
    $content .= "Allow: /\n";
    $content .= "Disallow: /admin/\n";
    $content .= "Disallow: /settings/\n";
    $content .= "Disallow: /login\n";
    $content .= "Disallow: /register\n";
    $content .= "\n";
    $content .= "Sitemap: " . config('app.url', 'https://novita-myanmar.com.mm') . "/sitemap.xml\n";

    return response($content, 200, [
        'Content-Type' => 'text/plain',
        'Cache-Control' => 'public, max-age=86400',
    ]);
});
