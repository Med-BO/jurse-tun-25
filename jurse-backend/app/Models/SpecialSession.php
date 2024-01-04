<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpecialSession extends Model
{
    use HasFactory;

    protected $table = 'special_sessions';

    protected $fillable = [
        'title',
        'description',
        'order'
    ];
}
