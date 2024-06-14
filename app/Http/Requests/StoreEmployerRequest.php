<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreEmployerRequest extends FormRequest
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
            'name' => ['required', 'string'],
            'description' => ['nullable', 'string'],
            'email' => ['required', 'email'],
            'web_site' => ['nullable', 'url'],
            'city' => ['required', 'string'],
            'address' => ['required', 'string'],
            'contact' => ['required', 'string'],
            'comment' => ['nullable', 'string', 'max:255'],
        ];
    }
}
