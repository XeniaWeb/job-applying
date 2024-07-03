<?php

namespace App\Models;

use App\Enums\ApplyStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Application extends Model
{
    use HasFactory;

    protected $fillable = [
        'vacancy_id',
        'customer_id',
        'status',
        'date_apply',
        'contact',
        'text',
        'comment',
    ];

    protected $casts = [
        'date_apply' => 'datetime',
        'status' => ApplyStatus::class,
    ];

    public function vacancy(): BelongsTo
    {
        return $this->belongsTo(Vacancy::class);
    }
}
