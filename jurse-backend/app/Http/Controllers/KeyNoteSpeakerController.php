<?php

namespace App\Http\Controllers;

use App\Models\KeyNoteSpeaker;
use Illuminate\Http\Request;

class KeyNoteSpeakerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(KeyNoteSpeaker $keyNoteSpeaker)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(KeyNoteSpeaker $keyNoteSpeaker)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, KeyNoteSpeaker $keyNoteSpeaker)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(KeyNoteSpeaker $keyNoteSpeaker)
    {
        //
    }

    public function getAll() {
        $keyNoteSpeakers = KeyNoteSpeaker::all();
        return response()->json($keyNoteSpeakers);
    }
}
