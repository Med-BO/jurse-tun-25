<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;

    protected $table = 'authors';

    protected $fillable = [
        'firstname', 
        'lastname',
        'organism',
        'special_session_id',
        'country',
    ];

    public function special_session_id()
    {
        return $this->belongsTo(SpecialSession::class, 'special_session_id');
    }

    public function country()
    {
        return $this->belongsTo(Country::class, 'country');
    }
}
