console.log('Hello World');

var ref = firebase.database().ref();

ref.on ("value", function (snapshot) {
    console.log(snapshot.val().User1.tapStatus);
    document.getElementById('tap').innerHTML = snapshot.val().User1.tapStatus;

    if (snapshot.val().User1.tapStatus === 'WaterWaste') {
        
        $.get("/waste", function(result){
            // $("span").html(result);
            console.log('inside wastage')
        });
    }
});