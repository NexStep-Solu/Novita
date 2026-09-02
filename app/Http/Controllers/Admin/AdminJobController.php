<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\JobListing;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminJobController extends Controller
{
    public function index()
    {
        $jobs = JobListing::orderBy('created_at', 'desc')
            ->get();

        $departments = JobListing::getDepartments();
        $locations = JobListing::getLocations();

        return Inertia::render('admin/jobs/index', [
            'jobs' => $jobs,
            'departments' => $departments,
            'locations' => $locations,
        ]);
    }

    public function create()
    {
        $departments = JobListing::getDepartments();
        $locations = JobListing::getLocations();
        $types = JobListing::getTypes();

        return Inertia::render('admin/jobs/create', [
            'departments' => $departments,
            'locations' => $locations,
            'types' => $types,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'department' => 'nullable|string|max:255',
            'location' => 'nullable|string|max:255',
            'type' => 'required|string|max:255',
            'description' => 'nullable|string',
            'requirements' => 'nullable|array',
            'benefits' => 'nullable|array',
            'salary_range' => 'nullable|string|max:255',
            'deadline' => 'nullable|date',
            'is_active' => 'boolean',
        ]);

        $validated['slug'] = Str::slug($validated['title']);

        JobListing::create($validated);

        return redirect()->route('admin.jobs.index')
            ->with('success', 'Job listing created successfully.');
    }

    public function edit(string $id)
    {
        $job = JobListing::findOrFail($id);
        $departments = JobListing::getDepartments();
        $locations = JobListing::getLocations();
        $types = JobListing::getTypes();

        return Inertia::render('admin/jobs/edit', [
            'job' => $job,
            'departments' => $departments,
            'locations' => $locations,
            'types' => $types,
        ]);
    }

    public function update(Request $request, string $id)
    {
        $job = JobListing::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'department' => 'nullable|string|max:255',
            'location' => 'nullable|string|max:255',
            'type' => 'required|string|max:255',
            'description' => 'nullable|string',
            'requirements' => 'nullable|array',
            'benefits' => 'nullable|array',
            'salary_range' => 'nullable|string|max:255',
            'deadline' => 'nullable|date',
            'is_active' => 'boolean',
        ]);

        $validated['slug'] = Str::slug($validated['title']);

        $job->update($validated);

        return back()->with('success', 'Job listing updated successfully.');
    }

    public function destroy(string $id)
    {
        $job = JobListing::findOrFail($id);
        $job->delete();

        return redirect()->route('admin.jobs.index')
            ->with('success', 'Job listing deleted successfully.');
    }
}
