<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Requests\Employer\StoreEmployerRequest;
use App\Http\Requests\Employer\UpdateEmployerRequest;
use App\Http\Resources\EmployerResource;
use App\Models\Employer;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class EmployerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response|string
     */
    public function index(): Response|string
    {
        // TODO make Repository
        $employers =  EmployerResource::collection(
            Employer::query()->orderBy('created_at', 'desc')->paginate(3)
        );

        return Inertia::render('Customer/Employer/EmployerIndex', [
            'employers' => $employers,
        ]);
    }

    /**
     * Show the form for creating a new resource
     *
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Customer/Employer/EmployerCreate');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreEmployerRequest $request
     * @return RedirectResponse
     */
    public function store(StoreEmployerRequest $request): RedirectResponse
    {
        Employer::create($request->validated());

        return response()->redirectToRoute('customer.employers.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Employer $employer)
    {
        return Inertia::render('Customer/Employer/EmployerShow', [
            'employer' => new EmployerResource($employer)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     * @param Employer $employer
     * @return Response
     */
    public function edit(Employer $employer): Response
    {
        return Inertia::render('Customer/Employer/EmployerEdit', [
            'employer' => new EmployerResource($employer)
        ]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateEmployerRequest $request
     * @param Employer $employer
     * @return RedirectResponse
     */
    public function update(UpdateEmployerRequest $request, Employer $employer): RedirectResponse
    {
        $employer->update($request->validated());

        return response()->redirectToRoute('customer.employers.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employer $employer): RedirectResponse
    {
        $employer->delete();

        return response()->redirectToRoute('customer.employers.index');
    }
}
