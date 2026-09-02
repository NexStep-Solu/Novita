<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobListing extends Model
{
    use HasFactory;

    protected $table = 'job_listings';

    protected $fillable = [
        'title',
        'slug',
        'department',
        'location',
        'type',
        'description',
        'requirements',
        'benefits',
        'salary_range',
        'deadline',
        'is_active',
    ];

    protected $casts = [
        'requirements' => 'array',
        'benefits' => 'array',
        'deadline' => 'datetime',
        'is_active' => 'boolean',
    ];

    /**
     * Get the route key name for route model binding.
     */
    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    /**
     * Scope to get only active jobs.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope to filter by department.
     */
    public function scopeInDepartment($query, string $department)
    {
        return $query->where('department', $department);
    }

    /**
     * Scope to filter by location.
     */
    public function scopeInLocation($query, string $location)
    {
        return $query->where('location', $location);
    }

    /**
     * Scope to filter by type.
     */
    public function scopeOfType($query, string $type)
    {
        return $query->where('type', $type);
    }

    /**
     * Get unique departments.
     */
    public static function getDepartments(): array
    {
        return static::where('is_active', true)
            ->distinct()
            ->pluck('department')
            ->filter()
            ->toArray();
    }

    /**
     * Get unique locations.
     */
    public static function getLocations(): array
    {
        return static::where('is_active', true)
            ->distinct()
            ->pluck('location')
            ->filter()
            ->toArray();
    }

    /**
     * Get job types.
     */
    public static function getTypes(): array
    {
        return ['full-time', 'part-time', 'contract', 'internship'];
    }
}
