<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ApiController extends Controller
{

    public function index()
    {
        $students = Student::all();
        return response()->json(['studentData' => $students], 200);

    }


    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:students,email',
            'phone' => 'required',
            'address' => 'required'
        ]);
        $data['name'] = $request->name;
        $data['email'] = $request->email;
        $data['phone'] = $request->phone;
        $data['address'] = $request->address;
        if (Student::create($data)) {
            return response()->json(['success' => 'Data was insert'], 200);
        } else {
            return response()->json(['error' => 'Data was not insert']);

        }
    }


    public function edit($id)
    {
        $studentData = Student::findOrFail($id);

        return response()->json(['student' => $studentData], 200);
    }


    public function update(Request $request)
    {
        $id = $request->student_id;
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|', [
                Rule::unique('students', 'email')->ignore($id)
            ],
            'phone' => 'required',
            'address' => 'required'
        ]);
        $data['name'] = $request->name;
        $data['email'] = $request->email;
        $data['phone'] = $request->phone;
        $data['address'] = $request->address;

        if (Student::findOrFail($id)->update($data)) {
            return response()->json(['success' => 'data updated']);
        }

    }


    public function delete(Request $request)
    {
        $id = $request->criteria;
        if (Student::findOrFail($id)->delete()) {
            return response()->json(['success' => 'Data was deleted']);
        }
    }

    public function search(Request $request)
    {
        $criteria = $request->search;

        $data = Student::where('name', 'LIKE', '%' . $criteria . '%')
            ->orWhere('email', 'LIKE', '%' . $criteria . '%')
            ->orWhere('phone', 'LIKE', '%' . $criteria . '%')
            ->orWhere('address', 'LIKE', '%' . $criteria . '%')
            ->get();

        return response()->json(['studentData' => $data]);
    }
}
