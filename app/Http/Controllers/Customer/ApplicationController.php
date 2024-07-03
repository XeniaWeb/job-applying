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
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

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
    public function create(): Response
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
        $data['customer_id'] = Auth::id();

        Application::create($data);

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
    public function edit(Application $application): Response
    {
        $statuses = ApplyStatus::forSelect();

        return Inertia::render('Customer/Application/ApplicationEdit', [
            'application' => new ApplicationResource($application),
            'statuses' => $statuses,
        ]);
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
