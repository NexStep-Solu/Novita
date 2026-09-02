<?php

namespace App\Http\Controllers;

use App\Models\ContactSubmission;
use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function show()
    {
        $page = Page::where('slug', 'contact')
            ->where('is_active', true)
            ->with(['activeSections' => function ($query) {
                $query->orderBy('sort_order');
            }])
            ->firstOrFail();

        return Inertia::render('public/contact', [
            'page' => $page,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'company' => 'nullable|string|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        ContactSubmission::create($validated);

        return back()->with('success', 'Thank you for your message. We will get back to you soon.');
    }
}
