<?php

namespace Database\Factories;

use App\Enums\ApplyStatus;
use App\Models\Application;
use App\Models\Vacancy;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Application>
 */
class ApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $vacancies = Vacancy::query()->pluck('id');

        return [
            'vacancy_id' => fake()->randomElement($vacancies),
            'status' => ApplyStatus::DRAFT,
            'date_apply' => fake()->dateTimeBetween('-5 days'),
            'contact' => fake()->name . ', ' . fake()->phoneNumber ,
            'text' => fake()->realText(500),
            'letter_file' => fake()->url,
            'comment' => fake()->realText(50),
        ];
    }
}
