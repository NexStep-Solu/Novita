<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\PageSection;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminPageController extends Controller
{
    public function index()
    {
        $pages = Page::orderBy('sort_order')
            ->withCount('sections')
            ->get();

        return Inertia::render('admin/pages/index', [
            'pages' => $pages,
        ]);
    }

    public function edit(string $id)
    {
        $page = Page::with(['sections' => function ($query) {
            $query->orderBy('sort_order');
        }])->findOrFail($id);

        return Inertia::render('admin/pages/edit', [
            'page' => $page,
        ]);
    }

    public function update(Request $request, string $id)
    {
        $page = Page::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'is_active' => 'boolean',
            'sort_order' => 'integer|min:0',
        ]);

        $page->update($validated);

        return back()->with('success', 'Page updated successfully.');
    }

    public function updateSections(Request $request, string $id)
    {
        $page = Page::findOrFail($id);

        $validated = $request->validate([
            'sections' => 'required|array',
            'sections.*.id' => 'nullable|integer',
            'sections.*.section_type' => 'required|string|max:255',
            'sections.*.title' => 'nullable|string|max:255',
            'sections.*.subtitle' => 'nullable|string|max:500',
            'sections.*.content' => 'nullable|string',
            'sections.*.image_path' => 'nullable|string|max:255',
            'sections.*.link_url' => 'nullable|string|max:255',
            'sections.*.link_text' => 'nullable|string|max:255',
            'sections.*.meta' => 'nullable|array',
            'sections.*.sort_order' => 'integer|min:0',
            'sections.*.is_active' => 'boolean',
        ]);

        foreach ($validated['sections'] as $sectionData) {
            if (!empty($sectionData['id'])) {
                $section = PageSection::find($sectionData['id']);
                if ($section && $section->page_id === $page->id) {
                    $section->update($sectionData);
                }
            } else {
                $sectionData['page_id'] = $page->id;
                PageSection::create($sectionData);
            }
        }

        return back()->with('success', 'Page sections updated successfully.');
    }

    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|image|max:4096',
        ]);

        $path = $request->file('file')->store('sections', 'public');

        return response()->json([
            'path' => $path,
            'url' => asset('storage/' . $path),
        ]);
    }

    public function destroy(string $id)
    {
        $page = Page::findOrFail($id);
        $page->sections()->delete();
        $page->delete();

        return redirect()->route('admin.pages.index')
            ->with('success', 'Page deleted successfully.');
    }
}
