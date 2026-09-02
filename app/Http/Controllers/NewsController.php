<?php

namespace App\Http\Controllers;

use App\Models\News;
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

        return Inertia::render('public/news/index', [
            'news' => $news,
            'categories' => $categories,
            'filters' => $request->only(['category', 'search']),
        ]);
    }

    public function show(string $slug)
    {
        $article = News::where('slug', $slug)
            ->where('is_published', true)
            ->firstOrFail();

        $relatedNews = News::published()
            ->where('id', '!=', $article->id)
            ->where('category', $article->category)
            ->limit(3)
            ->get();

        return Inertia::render('public/news/show', [
            'article' => $article,
            'relatedNews' => $relatedNews,
        ]);
    }
}
