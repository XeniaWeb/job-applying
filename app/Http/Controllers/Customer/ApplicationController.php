<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreApplicationRequest;
use App\Http\Requests\UpdateApplicationRequest;
use App\Http\Resources\ApplicationResource;
use App\Http\Resources\VacancyResource;
use App\Models\Application;
use App\Models\Vacancy;
use Illuminate\Http\RedirectResponse;
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
    public function create(): \Inertia\Response
    {
        $vacancies = VacancyResource::collection(
            Vacancy::query()->orderBy('created_at', 'desc')->get()
        );

        return Inertia::render('Customer/Application/ApplicationCreate', [
            'vacancies' => $vacancies,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreApplicationRequest $request): RedirectResponse
    {
        $data = $request->validated();

        if (!empty($data['letter_file'])) {
                $card = $data['letter_file']->store('/', 'photos');
            }
        $apply = Application::create($data);

        if (!empty($apply->letter_file)) {
            $apply->update(['letter_file' => $card]);
        }
        $apply->fresh();

        return response()->redirectToRoute('customer.applications.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Application $application)
    {
        // TODO show Application
        return 'Show ID = ' . $application->id;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Application $application)
    {
        // TODO edit Application
        return 'Edit ID = ' . $application->id;
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
    public function destroy(Application $application): RedirectResponse
    {
        $application->delete();

        return response()->redirectToRoute('customer.applications.index');
    }
}
