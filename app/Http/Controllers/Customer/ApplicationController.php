<?php

namespace App\Http\Controllers\Customer;

use App\Enums\ApplyStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\Application\UpdateApplicationRequest;
use App\Http\Requests\StoreApplicationRequest;
use App\Http\Resources\ApplicationResource;
use App\Http\Resources\VacancyResource;
use App\Models\Application;
use App\Models\Vacancy;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\App;
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
        $applications = ApplicationResource::collection(
            Application::query()->orderBy('created_at', 'desc')->paginate(6)
        );

        return Inertia::render('Customer/Application/ApplicationIndex', [
            'applications' => $applications,
            'locale' => App::getLocale(),
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
            'locale' => App::getLocale(),
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
        return Inertia::render('Customer/Application/ApplicationShow', [
            'application' => new ApplicationResource($application)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Application $application): Response
    {
        $statuses = collect(ApplyStatus::forSelect());
        $appStatuses = [];
        foreach ($statuses as $key => $status) {
            $obj = new \stdClass();
            $obj->label = $status;
            $obj->value = $key;
            $appStatuses[] = $obj;
        }
        return Inertia::render('Customer/Application/ApplicationEdit', [
            'application' => new ApplicationResource($application),
            'statuses' => $appStatuses,
            'locale' => App::getLocale(),
        ]);
    }

    // /**
    //  * Update the specified resource in storage.
    //  */
    // public function replace(ReplaceApplicationRequest $request, Application $application)
    // {
    //     // PUT
    //     dd($request);
    // }
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateApplicationRequest $request, Application $application)
    {
        // dd($request->validated(), $application);
        // PATCH
        $application->update($request->validated());

        return response()->redirectToRoute('customer.applications.index');
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
