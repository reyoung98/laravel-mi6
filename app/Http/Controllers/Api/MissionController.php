<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mission;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMissionDetails;

class MissionController extends Controller
{
    public function index()
    {
        $missions = Mission::with('people')->get();

        return($missions);
    }

    public function show($missionId)
    {

        $mission = Mission::with('people')->findOrFail($missionId);

        return($mission);
    }

    public function store(Request $request)
    {
        $mission = Mission::findOrFail($request->input('id'));

        // dd($request->all());

        $mission->name = $request->input('name');
        $mission->year = $request->input('year');
        $mission->outcome = $request->input('outcome'); 
        // dd($mission);            // can compare old with new in 'preview' tab of Network

        $mission->save();
        return $mission;           // return mission after editing it
    }

    public function sendMissionDetails(Request $request, $missionId)
    {
        // dd($missionId);

        $mission = Mission::find($missionId);
        // dd($mission);

        Mail::to('test@test.com')
        ->send(new SendMissionDetails($mission));
    }

}
