<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewOrganizerRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "first_name" => "nullable|string",
            "last_name" => "nullable|string",
            "international_code" => "nullable|string",
            "birth_date" => "nullable|string",
            "gender" => "nullable|string",
            "marriage" => "nullable|string",
            "job" => "nullable|string",
            "job_place" => "nullable|string",
            "education" => "nullable|string",
            "phone_number" => "nullable|string",
            "account_number" => "nullable|string",
            "address" => "nullable|string",
            "image" => "nullable",
        ];
    }
}
