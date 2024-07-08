<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VacancyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'vacancyId' => $this->id,
            'city' => $this->city,
            'title' => $this->title,
            'description' => $this->description,
            'publishedDate' => $this->published_at?->format('d.m.Y'),

            'employerId' => $this->employer_id,
            'employerName' => $this->employer?->name,
            'employerContact' => $this->employer?->contact ?? '',
            'label' => '#' . $this->id . ' ' . $this->title,
            'value' => $this->id,
        ];
    }
}
