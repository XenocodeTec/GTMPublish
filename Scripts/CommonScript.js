var CommonScript = {
    FillState: function (CountryId) {
        $.ajax({
            url: '/Master/FillState?CountryId=' + CountryId,
            type: 'GET',
            dataType: 'json',
            async: false,
            contentType: 'application/json; charset=utf-8',
            success: function (result) {
                $('#StateId').empty();
                $('#StateId').append($('<option>', { value: 0, text: "Select" }));

                $('#CityId').empty();
                $('#CityId').append($('<option>', { value: 0, text: "Select" }));

                var jsonObj = result;
                $.each(jsonObj, function (i, item) {
                    $('#StateId').append($('<option>', { value: item.StateId, text: item.StateName }));
                });
            },
            error: function (data) { console.log(data); }
        });
    },

    FillCity: function (StateId) {
        $.ajax({
            url: '/Master/FillCity?StateId=' + StateId,
            type: 'GET',
            dataType: 'json',
            async: false,
            contentType: 'application/json; charset=utf-8',
            success: function (result) {
                var jsonObj = result;
                $('#CityId').empty();
                $('#CityId').append($('<option>', { value: 0, text: "Select" }));
                $.each(jsonObj, function (i, item) {
                    $('#CityId').append($('<option>', { value: item.CityId, text: item.CityName }));
                });
            },
            error: function (data) { console.log(data); }
        });
    }
}