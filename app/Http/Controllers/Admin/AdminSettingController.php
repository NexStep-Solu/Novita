<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminSettingController extends Controller
{
    public function index()
    {
        $settings = Setting::orderBy('group')
            ->orderBy('key')
            ->get()
            ->groupBy('group');

        $groups = Setting::getGroups();

        return Inertia::render('admin/settings/index', [
            'settings' => $settings,
            'groups' => $groups,
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'settings' => 'required|array',
            'settings.*.key' => 'required|string|max:255',
            'settings.*.value' => 'nullable|string',
        ]);

        foreach ($validated['settings'] as $settingData) {
            $existing = Setting::where('key', $settingData['key'])->first();
            $type = $existing?->type ?? (str_starts_with($settingData['key'], 'nav_') ? 'boolean' : 'text');
            $group = $existing?->group ?? (str_starts_with($settingData['key'], 'nav_') ? 'navigation' : 'general');
            Setting::setValue(
                $settingData['key'],
                $settingData['value'],
                $type,
                $group
            );
        }

        return back()->with('success', 'Settings updated successfully.');
    }
}
