<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\ContactController;
use App\Models\Page;
use Illuminate\Support\Facades\Route;

// Public Routes
Route::get('/', [HomeController::class, 'index'])->name('home');

// Dynamic Pages - fetch Page with activeSections for DB-driven content
Route::get('/about-us', function () {
    $page = Page::where('slug', 'about-us')->with(['activeSections' => fn($q) => $q->orderBy('sort_order')])->first();
    return inertia('public/about', ['page' => $page]);
})->name('about');

Route::get('/our-facility', function () {
    $page = Page::where('slug', 'our-facility')->with(['activeSections' => fn($q) => $q->orderBy('sort_order')])->first();
    return inertia('public/facility', ['page' => $page]);
})->name('facility');

Route::get('/quality', function () {
    $page = Page::where('slug', 'quality')->with(['activeSections' => fn($q) => $q->orderBy('sort_order')])->first();
    return inertia('public/quality', ['page' => $page]);
})->name('quality');

Route::get('/product-development', function () {
    $page = Page::where('slug', 'product-development')->with(['activeSections' => fn($q) => $q->orderBy('sort_order')])->first();
    return inertia('public/rnd', ['page' => $page]);
})->name('rnd');

Route::get('/sustainability', function () {
    $page = Page::where('slug', 'sustainability')->with(['activeSections' => fn($q) => $q->orderBy('sort_order')])->first();
    return inertia('public/sustainability', ['page' => $page]);
})->name('sustainability');

Route::get('/leadership', function () {
    $page = Page::where('slug', 'leadership')->with(['activeSections' => fn($q) => $q->orderBy('sort_order')])->first();
    return inertia('public/leadership', ['page' => $page]);
})->name('leadership');

Route::get('/partnership', function () {
    $page = Page::where('slug', 'partnership')->with(['activeSections' => fn($q) => $q->orderBy('sort_order')])->first();
    return inertia('public/partnership', ['page' => $page]);
})->name('partnership');

// Products - dynamic via products table + page
Route::get('/products', function () {
    $page = Page::where('slug', 'products')->with(['activeSections' => fn($q) => $q->orderBy('sort_order')])->first();
    $products = \App\Models\Product::where('is_active', true)->orderBy('sort_order')->get();
    return inertia('public/products-page', ['page' => $page, 'products' => $products]);
})->name('products');

// News & Media - dynamic
Route::get('/news', function () {
    $page = Page::where('slug', 'news')->with(['activeSections' => fn($q) => $q->orderBy('sort_order')])->first();
    return inertia('public/news-index', ['page' => $page]);
})->name('news');

Route::get('/news/{slug}', function ($slug) {
    return inertia('public/news-show', ['slug' => $slug]);
})->name('news.show');

// Careers
Route::get('/careers', function () {
    $page = Page::where('slug', 'careers')->with(['activeSections' => fn($q) => $q->orderBy('sort_order')])->first();
    return inertia('public/careers', ['page' => $page]);
})->name('careers');

Route::get('/careers/{slug}', [CareerController::class, 'show'])->name('careers.show');

// Contact
Route::get('/contact', function () {
    $page = Page::where('slug', 'contact')->with(['activeSections' => fn($q) => $q->orderBy('sort_order')])->first();
    return inertia('public/contact', ['page' => $page]);
})->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

// Legal Pages
Route::get('/privacy', function () {
    return inertia('public/privacy');
})->name('privacy');
Route::get('/terms', function () {
    return inertia('public/terms');
})->name('terms');
Route::get('/medical-disclaimer', function () {
    return inertia('public/medical-disclaimer');
})->name('medical-disclaimer');

Route::redirect('/dashboard', '/admin')->name('dashboard');

require __DIR__.'/settings.php';
require __DIR__.'/admin.php';
