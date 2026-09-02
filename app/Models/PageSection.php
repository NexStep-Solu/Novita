<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PageSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'page_id',
        'section_type',
        'title',
        'subtitle',
        'content',
        'image_path',
        'link_url',
        'link_text',
        'meta',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'page_id' => 'integer',
        'meta' => 'array',
        'sort_order' => 'integer',
        'is_active' => 'boolean',
    ];

    /**
     * Get the page that owns the section.
     */
    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }

    /**
     * Check if section is a specific type.
     */
    public function isType(string $type): bool
    {
        return $this->section_type === $type;
    }

    /**
     * Get meta data with default value.
     */
    public function getMetaValue(string $key, mixed $default = null): mixed
    {
        return data_get($this->meta, $key, $default);
    }
}
