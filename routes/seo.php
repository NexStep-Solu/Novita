<?php

use App\Models\JobListing;
use App\Models\Page;
use App\Models\News;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Response;

Route::get('/sitemap.xml', function (): Response {
    $baseUrl = rtrim(config('app.url', 'https://novita-myanmar.com.mm'), '/');

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
    ];

    // Keyed by path so database pages cannot add duplicate <url> entries.
    $urls = [];

    foreach ($staticPages as $path => $config) {
        $urls[$path] = [
            'loc' => $baseUrl . $path,
            'changefreq' => $config['changefreq'],
            'priority' => $config['priority'],
            'lastmod' => null,
        ];
    }

    $pages = Page::where('is_active', true)->orderBy('sort_order')->get();

    foreach ($pages as $page) {
        $path = '/' . ltrim($page->slug, '/');

        if (isset($urls[$path]) || in_array($page->slug, ['home', 'contact'], true)) {
            continue;
        }

        $urls[$path] = [
            'loc' => $baseUrl . $path,
            'changefreq' => 'monthly',
            'priority' => '0.7',
            'lastmod' => $page->updated_at?->format('Y-m-d'),
        ];
    }

    $news = News::where('is_published', true)
        ->where('published_at', '<=', now())
        ->orderBy('published_at', 'desc')
        ->get();

    foreach ($news as $article) {
        $path = '/news/' . $article->slug;

        $urls[$path] = [
            'loc' => $baseUrl . $path,
            'changefreq' => 'monthly',
            'priority' => '0.6',
            'lastmod' => $article->updated_at?->format('Y-m-d'),
        ];
    }

    $jobs = JobListing::where('is_active', true)
        ->where(function ($query) {
            $query->whereNull('deadline')
                ->orWhere('deadline', '>=', now());
        })
        ->orderBy('created_at', 'desc')
        ->get();

    foreach ($jobs as $job) {
        $path = '/careers/' . $job->slug;

        $urls[$path] = [
            'loc' => $baseUrl . $path,
            'changefreq' => 'weekly',
            'priority' => '0.6',
            'lastmod' => $job->updated_at?->format('Y-m-d'),
        ];
    }

    $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
    $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";

    foreach ($urls as $url) {
        $xml .= '  <url>' . "\n";
        $xml .= '    <loc>' . htmlspecialchars($url['loc'], ENT_XML1 | ENT_QUOTES, 'UTF-8') . '</loc>' . "\n";

        if ($url['lastmod']) {
            $xml .= '    <lastmod>' . $url['lastmod'] . '</lastmod>' . "\n";
        }

        $xml .= '    <changefreq>' . $url['changefreq'] . '</changefreq>' . "\n";
        $xml .= '    <priority>' . $url['priority'] . '</priority>' . "\n";
        $xml .= '  </url>' . "\n";
    }

    $xml .= '</urlset>';

    return response($xml, 200, [
        'Content-Type' => 'application/xml; charset=UTF-8',
        'Cache-Control' => 'public, max-age=3600',
    ]);
});

Route::get('/robots.txt', function (): Response {
    $baseUrl = rtrim(config('app.url', 'https://novita-myanmar.com.mm'), '/');

    $content = "# NOVITA Pharmaceutical Co., Ltd.\n";
    $content .= "# {$baseUrl}\n";
    $content .= "#\n";
    $content .= "# AI search and answer-engine crawlers are welcome under these rules.\n";
    $content .= "# LLM guidance: {$baseUrl}/llms.txt\n\n";
    $content .= "User-agent: *\n";
    $content .= "Allow: /\n";
    $content .= "Disallow: /admin\n";
    $content .= "Disallow: /admin/\n";
    $content .= "Disallow: /settings\n";
    $content .= "Disallow: /settings/\n";
    $content .= "Disallow: /dashboard\n";
    $content .= "Disallow: /login\n";
    $content .= "Disallow: /register\n";
    $content .= "Disallow: /forgot-password\n";
    $content .= "Disallow: /reset-password\n";
    $content .= "Disallow: /verify-email\n";
    $content .= "Disallow: /confirm-password\n";
    $content .= "Disallow: /two-factor-challenge\n\n";
    $content .= "Sitemap: {$baseUrl}/sitemap.xml\n";

    return response($content, 200, [
        'Content-Type' => 'text/plain; charset=UTF-8',
        'Cache-Control' => 'public, max-age=86400',
    ]);
});
