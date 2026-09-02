<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\News;
use App\Models\Product;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $page = Page::where('slug', 'home')
            ->where('is_active', true)
            ->with(['activeSections' => function ($query) {
                $query->orderBy('sort_order');
            }])
            ->firstOrFail();

        $featuredProducts = Product::active()
            ->featured()
            ->orderBy('sort_order')
            ->limit(6)
            ->get();

        $latestNews = News::published()
            ->orderBy('published_at', 'desc')
            ->limit(3)
            ->get();

        $settings = [
            'site_name' => Setting::getValue('site_name', 'NOVITA'),
            'site_tagline' => Setting::getValue('site_tagline', 'Manufacturing Excellence'),
            'contact_email' => Setting::getValue('contact_email'),
            'contact_phone' => Setting::getValue('contact_phone'),
        ];

        return Inertia::render('public/home', [
            'page' => $page,
            'featuredProducts' => $featuredProducts,
            'latestNews' => $latestNews,
            'settings' => $settings,
        ]);
    }
}
