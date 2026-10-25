<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml">

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            {{-- Fallback metadata for when the SSR server is unavailable. --}}
            <title>NOVITA Pharmaceutical Co., Ltd. - Better Health, Longer Life</title>
            <meta name="description" content="NOVITA Pharmaceutical Co., Ltd. is a leading pharmaceutical manufacturer in Myanmar, committed to quality, innovation, and better healthcare outcomes. A KTECG Group member.">
            <meta property="og:type" content="website">
            <meta property="og:title" content="NOVITA Pharmaceutical Co., Ltd. - Better Health, Longer Life">
            <meta property="og:description" content="NOVITA Pharmaceutical Co., Ltd. is a leading pharmaceutical manufacturer in Myanmar, committed to quality, innovation, and better healthcare outcomes. A KTECG Group member.">
            <meta property="og:image" content="{{ url('/og-default.png') }}">
            <meta property="og:url" content="{{ url()->current() }}">
            <meta property="og:site_name" content="NOVITA Pharmaceutical Co., Ltd.">
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="NOVITA Pharmaceutical Co., Ltd. - Better Health, Longer Life">
            <meta name="twitter:description" content="NOVITA Pharmaceutical Co., Ltd. is a leading pharmaceutical manufacturer in Myanmar, committed to quality, innovation, and better healthcare outcomes.">
            <meta name="twitter:image" content="{{ url('/og-default.png') }}">
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
