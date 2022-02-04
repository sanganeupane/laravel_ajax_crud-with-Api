$(document).ready(function () {

    let ApiUrl = "http://127.0.0.1:8000/api";

    $("#addRecord").on('click', function (e) {
        e.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let phone = $('#phone').val();
        let address = $('#address').val();
        let criteria = $('#criteria').val();

        if (criteria == '') {
            let sendData = {
                name: name,
                email: email,
                address: address,
                phone: phone
            }
            insert(sendData);
        } else {
            let sendData = {
                student_id: criteria,
                name: name,
                email: email,
                address: address,
                phone: phone
            }
            update(sendData);
        }


    });

    function insert(data) {
        $.ajax({
            type: 'post',
            url: ApiUrl,
            data: data,
            success: function (response) {
                let msg = response.success;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: msg,
                    showConfirmButton: false,
                    timer: 3000
                });

                display();

                $('#name').val('');
                $('#email').val('');
                $('#phone').val('');
                $('#address').val('');

            },
            error: function (e) {
                $("#nameError").html(e.responseJSON.errors.name);
                $("#emailError").html(e.responseJSON.errors.email);
                $("#phoneError").html(e.responseJSON.errors.phone);
                $("#addressError").html(e.responseJSON.errors.address);
            }
        })
    }


    function display() {
        $.ajax({
            type: 'get',
            url: ApiUrl,
            success: function (response) {
                let students = response.studentData;
                let outPut = "";
                students.forEach((student, key) => {
                    outPut += "<tr>";
                    outPut += `<td>${++key}</td>`;
                    outPut += `<td>${student.name}</td>`;
                    outPut += `<td>${student.email}</td>`;
                    outPut += `<td>${student.phone}</td>`;
                    outPut += `<td>${student.address}</td>`;
                    outPut += `<td>
                             <button class="edit_record" data-id="${student.id}">Edit</button>
                            <button class="delete_record" data-id="${student.id}">delete</button>
                              </td>`;
                    outPut += "</tr>";
                })

                $('#dataList').html(outPut);

                $('.delete_record').each((id, eml) => {
                    $(eml).on('click', function () {
                        let student_id = $(eml).data('id');
                        deleteRecord(student_id);
                    });
                })
                $('.edit_record').each((id, eml) => {
                    $(eml).on('click', function () {
                        let student_id = $(eml).data('id');
                        editRecord(student_id);
                    });
                })


            }
        });
    }

    display();


    function deleteRecord(id) {
        let dUrl = ApiUrl + '/delete/' + id;

        $.ajax({
            type: 'get',
            url: dUrl,
            success: function (response) {
                let msg = response.success;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: msg,
                    showConfirmButton: false,
                    timer: 3000
                });

                display();
            }
        })

    }

    function editRecord(id) {
        let dUrl = ApiUrl + '/edit/' + id;

        $.ajax({
            type: 'get',
            url: dUrl,
            success: function (response) {
                let data = response.student;
                $('#criteria').val(data.id);
                $('#name').val(data.name);
                $('#email').val(data.email);
                $('#phone').val(data.phone);
                $('#address').val(data.address);
            }
        })
    }


    function update(data) {

        let uUrl = ApiUrl + '/edit-action';

        $.ajax({
            type: 'post',
            url: uUrl,
            data: data,
            success: function (response) {
                let msg = response.success;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: msg,
                    showConfirmButton: false,
                    timer: 3000
                });
                display();

                $('#criteria').val('');
                $('#name').val('');
                $('#email').val('');
                $('#phone').val('');
                $('#address').val('');
            }
        })
    }


    $('#search_data').on('keyup', function () {
        let value = $(this).val();
        let getUrl = ApiUrl + '/search';
        let data = {search: value}
        $.ajax({
            type: 'post',
            url: getUrl,
            data: data,
            success: function (response) {
                let students = response.studentData;
                let outPut = "";
                students.forEach((student, key) => {
                    outPut += "<tr>";
                    outPut += `<td>${++key}</td>`;
                    outPut += `<td>${student.name}</td>`;
                    outPut += `<td>${student.email}</td>`;
                    outPut += `<td>${student.phone}</td>`;
                    outPut += `<td>${student.address}</td>`;
                    outPut += `<td>
                             <button class="edit_record" data-id="${student.id}">Edit</button>
                            <button class="delete_record" data-id="${student.id}">delete</button>
                              </td>`;
                    outPut += "</tr>";
                })

                $('#dataList').html(outPut);

                $('.delete_record').each((id, eml) => {
                    $(eml).on('click', function () {
                        let student_id = $(eml).data('id');
                        deleteRecord(student_id);
                    });
                })
                $('.edit_record').each((id, eml) => {
                    $(eml).on('click', function () {
                        let student_id = $(eml).data('id');
                        editRecord(student_id);
                    });
                })


            }
        })

    });


});
