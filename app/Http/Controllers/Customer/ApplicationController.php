<?php

namespace App\Http\Controllers\Customer;

use App\Enums\ApplyStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreApplicationRequest;
use App\Http\Requests\UpdateApplicationRequest;
use App\Http\Resources\ApplicationResource;
use App\Http\Resources\VacancyResource;
use App\Models\Application;
use App\Models\Vacancy;
use Inertia\Inertia;

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // TODO make Repository
        $apps = Application::query()->paginate(6);

        $applications = ApplicationResource::collection($apps);

        return Inertia::render('Customer/Application/ApplicationIndex', [
            'applications' => $applications,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $vacancies = VacancyResource::collection(
            Vacancy::query()->orderBy('created_at', 'desc')->get()
        );

        $statuses = collect(ApplyStatus::forSelect());
        $appStatuses = [];
        foreach ($statuses as $key => $status) {
            $obj = new \stdClass();
            $obj->label = $status;
            $obj->value = $key;
            $appStatuses[] = $obj;
        }
        return Inertia::render('Customer/Application/ApplicationCreate', [
            'vacancies' => $vacancies,
            'appStatuses' => $appStatuses,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreApplicationRequest $request)
    {
        //TODO store Application
        return response('Получил');
    }

    /**
     * Display the specified resource.
     */
    public function show(Application $application)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Application $application)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateApplicationRequest $request, Application $application)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Application $application)
    {
        //
    }
}
