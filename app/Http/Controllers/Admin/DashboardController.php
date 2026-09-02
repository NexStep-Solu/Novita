<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactSubmission;
use App\Models\JobListing;
use App\Models\News;
use App\Models\Page;
use App\Models\Product;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'pages' => Page::count(),
            'products' => Product::count(),
            'news' => News::count(),
            'jobs' => JobListing::count(),
            'contacts' => ContactSubmission::count(),
            'unread_contacts' => ContactSubmission::getUnreadCount(),
        ];

        $recentContacts = ContactSubmission::latest()
            ->limit(5)
            ->get();

        $recentNews = News::latest()
            ->limit(5)
            ->get();

        return Inertia::render('admin/dashboard', [
            'stats' => $stats,
            'recentContacts' => $recentContacts,
            'recentNews' => $recentNews,
        ]);
    }
}
