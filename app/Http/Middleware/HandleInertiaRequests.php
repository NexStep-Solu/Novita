<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'auth' => [
                'user' => $request->user(),
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            'navVisibility' => \App\Models\Setting::where('group', 'navigation')->pluck('value', 'key')->map(fn ($v) => $v === '1' || $v === 1 || $v === true)->toArray(),
            'contactEmail' => \App\Models\Setting::getValue('contact_email', 'info@novita-myanmar.com.mm'),
            'businessEmail' => \App\Models\Setting::getValue('business_email', 'business@novita-myanmar.com.mm'),
            'careersEmail' => \App\Models\Setting::getValue('careers_email', 'careers@novita-myanmar.com.mm'),
            'contactAddress' => \App\Models\Setting::getValue('contact_address', 'No. 216/222 Bo Myat Htun Housing, Room D3, Corner of 49 Street and Maharbandoola Road, Ward 1, Pazundaung Township, Yangon, Myanmar'),
            'contactPhone' => \App\Models\Setting::getValue('contact_phone', '(+95) 9 5000144'),
            'factoryPhone' => \App\Models\Setting::getValue('factory_phone', '09 977225001'),
            'contactPhone2' => \App\Models\Setting::getValue('contact_phone2', '09 977225004'),
        ];
    }
}
