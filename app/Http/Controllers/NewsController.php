<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index(Request $request)
    {
        $query = News::published()->orderBy('published_at', 'desc');

        // Filter by category
        if ($request->has('category') && $request->category !== 'all') {
            $query->inCategory($request->category);
        }

        // Search
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('content', 'like', "%{$search}%");
            });
        }

        $news = $query->paginate(9)->withQueryString();
        $categories = News::getCategories();
        $page = Page::where('slug', 'news')
            ->with(['activeSections' => fn ($q) => $q->orderBy('sort_order')])
            ->first();

        return Inertia::render('public/news/index', [
            'news' => $news,
            'categories' => $categories,
            'filters' => $request->only(['category', 'search']),
            'page' => $page,
        ]);
    }

    public function show(string $slug)
    {
        $article = News::where('slug', $slug)
            ->published()
            ->first();

        if (! $article) {
            $legacySlugs = [
                'groundbreaking-ceremony',
                'cphi-china-2024',
                'factory-development-phase-1',
                'cphi-thailand-2024',
                'technical-partnership',
                'recruitment-pharmaceutical-professionals',
                'bio-asia-taiwan-2024',
                'ispe-singapore-2024',
                'pharma-machtech-expo-india',
                'equipment-installation',
                'regulatory-presubmission',
            ];

            if (in_array($slug, $legacySlugs, true)) {
                return redirect()->route('news', [], 301);
            }

            abort(404);
        }

        $relatedNews = News::published()
            ->where('id', '!=', $article->id)
            ->where('category', $article->category)
            ->limit(3)
            ->get();

        return Inertia::render('public/news-show', [
            'article' => $article,
            'relatedNews' => $relatedNews,
        ]);
    }
}
