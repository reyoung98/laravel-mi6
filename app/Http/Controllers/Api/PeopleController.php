<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;
use Illuminate\Support\Facades\Mail;
use App\Mail\TestEmail;

class PeopleController extends Controller
{
    public function search(Request $request)
    {
        $search = $request->input('search');
        $status = $request->input('status');

        $results = Person::where('name', 'like', "{$search}%")
        ->when($status, function ($query, $status) {
            return $query->where('status_id', $status);
        })
        ->limit(20)
        ->get();

        return($results);
    }

    public function sendTestEmail() 
    {
        $temp_var = 'Blueberry';

        Mail::to('test@test.com')
        ->send(new TestEmail($temp_var));
    }
}
