<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\SingleParent;

class SingleParentController extends Controller
{
    public function store(Request $request)
    {
        $singleparent = new SingleParent;
        $singleparent->circumtance = $request->input('circumstance');
        $singleparent->needs = $request->input('needs');
        $singleparent->resources = $request->input('resources');
        $singleparent->assessment = $request->input('assessment');
        $singleparent->recommendation = $request->input('recommendation');
        $singleparent->action = $request->input('action');
        $singleparent->save();

        return response()->json([
            'status'=> 200,
            'message'=>'Student Added Successfully',
        ]);
    }
}
