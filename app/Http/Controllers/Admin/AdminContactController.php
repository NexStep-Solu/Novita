<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactSubmission;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminContactController extends Controller
{
    public function index()
    {
        $contacts = ContactSubmission::orderBy('created_at', 'desc')
            ->paginate(20)
            ->withQueryString();

        $unreadCount = ContactSubmission::getUnreadCount();

        return Inertia::render('admin/contacts/index', [
            'contacts' => $contacts,
            'unreadCount' => $unreadCount,
        ]);
    }

    public function show(string $id)
    {
        $contact = ContactSubmission::findOrFail($id);
        $contact->markAsRead();

        return Inertia::render('admin/contacts/show', [
            'contact' => $contact,
        ]);
    }

    public function destroy(string $id)
    {
        $contact = ContactSubmission::findOrFail($id);
        $contact->delete();

        return redirect()->route('admin.contacts.index')
            ->with('success', 'Contact deleted successfully.');
    }

    public function markAsRead(string $id)
    {
        $contact = ContactSubmission::findOrFail($id);
        $contact->markAsRead();

        return back()->with('success', 'Contact marked as read.');
    }
}
