<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    protected $table = 'key_note_speakers';

    protected $fillable = [
        'vpath',
        'title',
        'order'
    ];
}
