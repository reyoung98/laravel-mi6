<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mission;

class MissionController extends Controller
{
    public function index()
    {
        $missions = Mission::with('people')->get();

        return($missions);
    }

    public function show( $missionId)
    {
        
        $mission = Mission::with('people')->findOrFail($missionId);

        return($mission);
    }
}
