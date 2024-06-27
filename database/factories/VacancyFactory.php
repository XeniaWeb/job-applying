<?php

namespace Database\Factories;

use App\Models\Employer;
use App\Models\Vacancy;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Vacancy>
 */
class VacancyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $employer = Employer::query()->pluck('id');

        return [
            'title' => fake()->jobTitle(),
            'description' => fake()->realText(100),
            'employer_id' => fake()->randomElement($employer),
            'city' => fake()->city(),
            'published_at' => fake()->dateTimeBetween('-30 days', '-1 days'),
        ];
    }
}
