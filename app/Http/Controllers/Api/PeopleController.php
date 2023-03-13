<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;

class PeopleController extends Controller
{
    public function search(Request $request)
    {
        $search = $request->input('search');

        $results = Person::where('name', 'like', "{$search}%")
        // ->orderBy('publication_date', 'desc')
        ->limit(20)
        ->get();

        return($results);
    }
}
