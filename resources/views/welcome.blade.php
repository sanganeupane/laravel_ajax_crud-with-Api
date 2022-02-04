<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{url('bootstrap/css/bootstrap.css')}}">
</head>
<body>
<div class="container"style="padding-top: 50px">

<div class="card">
<div class="card-header">
   <h2> Laravel Ajax Crud</h2>
</div>

<div class="card-body">

    <div class="row">


        <div class="col-md-4">
            <form action="">
                <input type="hidden" id="criteria" value="">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" class="form-control">
                    <div id="nameError"></div>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" id="email" class="form-control">
                    <div id="emailError"></div>
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="number" id="phone" class="form-control">
                    <div id="phoneError"></div>
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" id="address" class="form-control">
                    <div id="addressError"></div>
                </div>
                <div class="form-group">
                   <button id="addRecord" class="btn btn-success">Add Record</button>
                </div>
            </form>
        </div>


        <div class="col-md-8">
            <input type="text" id="search_data">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th>S.n</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody id="dataList"></tbody>
            </table>
        </div>
    </div>
</div>
</div>
</div>


<script src="{{url('bootstrap/js/jquery.js')}}"></script>
<script src="{{url('bootstrap/js/bootstrap.js')}}"></script>
<script src="{{url('bootstrap/js/sweetalert.js')}}"></script>
<script src="{{url('js/custom.js')}}"></script>
</body>
</html>
