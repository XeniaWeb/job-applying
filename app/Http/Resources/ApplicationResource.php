<?php

namespace App\Http\Resources;

use App\Enums\ApplyStatus;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ApplicationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'vacancyId' => $this->vacancy_id,
            'status' => $this->status,
            'dateApply' => $this->date_apply ?? 'Not applied',
            'contact' => $this->contact,
            'text' => $this->text ?? '',
            'comment' => $this->comment ?? '',

            'statusValue' => ApplyStatus::forSelect()[$this->status->value],
            'statusValueShort' => ApplyStatus::forList()[$this->status->value],

            'vacancyTitle' => $this->vacancy->title,
            'vacancyDescription' => $this->vacancy->description,
            'vacancyCity' => $this->vacancy->city,

            'employerId' => $this->vacancy->employer_id,
            'employerName' => $this->vacancy->employer?->name,
            'employerContact' => $this->vacancy->employer?->contact ?? '',
        ];
    }
}
