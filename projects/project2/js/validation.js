$(document).ready(function() {
    $("#registrationForm").validate({
        rules: {
            firstName: "required",
            lastName: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            date:"required"
        },
        messages: {
            firstName: "Please enter your first name",
            lastName: "Please enter your last name",
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter a password",
                minlength: "Your password must be at least 8 characters long"
            }
        },
        errorElement: "div",
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        },
        submitHandler: function(form) {
            $.ajax({
                url: $(form).attr('action'),
                type: $(form).attr('method'),
                data: $(form).serialize(),
                success: function(response) {
                    toastr.success('Form submitted successfully!');
                    form.reset();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    toastr.error('Form submission failed: ' + textStatus);
                    form.reset();
                }
            });
        }
    });
});
