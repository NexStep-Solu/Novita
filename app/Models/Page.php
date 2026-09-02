<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Page extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'title',
        'meta_title',
        'meta_description',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];

    /**
     * Get the sections for the page.
     */
    public function sections(): HasMany
    {
        return $this->hasMany(PageSection::class)->orderBy('sort_order');
    }

    /**
     * Get active sections only.
     */
    public function activeSections(): HasMany
    {
        return $this->sections()->where('is_active', true)->orderBy('sort_order');
    }

    /**
     * Find a page by its slug.
     */
    public static function findBySlug(string $slug): ?self
    {
        return static::where('slug', $slug)->where('is_active', true)->first();
    }

    /**
     * Get the SEO meta title.
     */
    public function getSeoTitleAttribute(): string
    {
        return $this->meta_title ?: $this->title . ' - NOVITA';
    }

    /**
     * Get the SEO meta description.
     */
    public function getSeoDescriptionAttribute(): string
    {
        return $this->meta_description ?: strip_tags($this->title);
    }
}
