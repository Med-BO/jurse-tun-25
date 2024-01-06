<?php

namespace App\Http\Controllers;

use App\Models\SpecialSession;
use Illuminate\Http\Request;

class SpecialSessionController extends Controller
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
    public function show(SpecialSession $specialSession)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SpecialSession $specialSession)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SpecialSession $specialSession)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SpecialSession $specialSession)
    {
        //
    }


    public function getAll() {
        $specialSessions = SpecialSession::all();
        return response()->json($specialSessions);
    }
}
