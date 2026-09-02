<?php

namespace App\Http\Controllers;

use App\Models\JobListing;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CareerController extends Controller
{
    public function index(Request $request)
    {
        $query = JobListing::active()->orderBy('created_at', 'desc');

        // Filter by department
        if ($request->has('department') && $request->department !== 'all') {
            $query->inDepartment($request->department);
        }

        // Filter by location
        if ($request->has('location') && $request->location !== 'all') {
            $query->inLocation($request->location);
        }

        // Filter by type
        if ($request->has('type') && $request->type !== 'all') {
            $query->ofType($request->type);
        }

        // Search
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('department', 'like', "%{$search}%");
            });
        }

        $jobs = $query->paginate(10)->withQueryString();
        $departments = JobListing::getDepartments();
        $locations = JobListing::getLocations();
        $types = JobListing::getTypes();

        return Inertia::render('public/careers/index', [
            'jobs' => $jobs,
            'departments' => $departments,
            'locations' => $locations,
            'types' => $types,
            'filters' => $request->only(['department', 'location', 'type', 'search']),
        ]);
    }

    public function show(string $slug)
    {
        $job = JobListing::where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        return Inertia::render('public/careers/show', [
            'job' => $job,
        ]);
    }
}
