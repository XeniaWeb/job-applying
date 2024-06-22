<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $request->id,
            'name' => $request->name,
            'description' => $request->description,
            'email' => $request->email,
            'webSite' => $request->web_site,
            'city' => $request->city,
            'address' => $request->address,
            'contact' => $request->contact,
            'comment' => $request->comment,
        ];
    }
}
