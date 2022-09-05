<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SingleParent extends Model
{
    use HasFactory;
    protected $table = 'singleparents';
    protected $fillable = [
        'residentID',
        'householdID',
        'circumstance',
        'needs',
        'resources',
        'assessment',
        'recommendation',
        'action',
    ];
}
