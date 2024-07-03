<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreApplicationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'vacancy_id' => ['required', 'integer', 'exists:vacancies,id'],
            'status' => ['string', 'nullable'],
            'date_apply' => ['nullable', 'date'],
            'contact' => ['required','string'],
            'text' => ['string', 'nullable'],
            'comment' => ['string', 'nullable'],
        ];
    }
}
