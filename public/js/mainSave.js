// // Initialize Firebase
// // var config = {
// //   apiKey: "AIzaSyDR4Y6iQFSD9ViSb8km9IVMMTdxB-Wo2yE",
// //   authDomain: "savetapwater.firebaseapp.com",
// //   databaseURL: "https://savetapwater.firebaseio.com",
// //   projectId: "savetapwater",
// //   storageBucket: "savetapwater.appspot.com",
// //   messagingSenderId: "253670266228"
// // };
// // firebase.initializeApp(config);


// var database = firebase.database();
// var ref= database.ref('SJT');
// var taps;
// var keys;
// var div1 = document.getElementById('div1');
// var fetchStatus = document.getElementById('fetchStatus');
// var fetchWastage = document.getElementById('fetchWastage');
// var house = document.getElementById('getHouse');
// var OName = document.getElementById('OName');

// function showdata(){
//   ref.on('value',getData,errData);
//   // console.log(database);
//   // console.log(ref);

//     function getData(data){
//       taps = data.val();
//       console.log(taps);
//       keys = Object.keys(taps);
//       console.log(keys);
//       console.log('Hello World!');
//       var k = keys[0];
//       console.log(k);
//       var tapStatus = taps[k].tap;
//       var wastage = taps[k].notify;
//       var oName = taps[k].ownerName;
//       var hse = taps[k].house;
//       console.log(tapStatus,wastage);

//       if(tapStatus === 'Off'){
//         div1.src = "img/pink.png";
//         // fetchStatus.innerHTML = 'TAP OFF';
//         house.innerHTML = hse
//         fetchWastage.innerHTML = wastage;
//         OName.innerHTML = oName;
//       }
//       else if(tapStatus === 'On'){
//         div1.src = "img/white.png";
//         // fetchStatus.innerHTML = 'TAP ON';
//         house.innerHTML = hse
//         fetchWastage.innerHTML = wastage;
//         OName.innerHTML = oName;
//       }
//       else if(tapStatus === 'WaterWaste'){
//         div1.src = "img/red.png";
//         // fetchStatus.innerHTML = 'TAP ON';
//         house.innerHTML = hse
//       fetchWastage.innerHTML = wastage;
//       OName.innerHTML = oName;
//     }
//   }

//   function errData(err){
//     console.log('Error!');
//     console.log(err);
//   }

// }

// showdata();


console.log('Hello World');

var ref = firebase.database().ref();

ref.on ("value", function (snapshot) {
    var div1 = document.getElementById('div1');
    console.log(snapshot.val().User1.tapStatus);
    var tapStatus = snapshot.val().User1.tapStatus;
    if(tapStatus === 'Off'){
            div1.src = "img/pink.png";
            // fetchStatus.innerHTML = 'TAP OFF';
            // house.innerHTML = hse
            // fetchWastage.innerHTML = wastage;
            // OName.innerHTML = oName;
          }
          else if(tapStatus === 'On'){
            div1.src = "img/white.png";
            // fetchStatus.innerHTML = 'TAP ON';
            // house.innerHTML = hse
            // fetchWastage.innerHTML = wastage;
            // OName.innerHTML = oName;
          }
          else if(tapStatus === 'WaterWaste'){
            div1.src = "img/red.png";
            // fetchStatus.innerHTML = 'TAP ON';
          //   house.innerHTML = hse
          // fetchWastage.innerHTML = wastage;
          // OName.innerHTML = oName;
        }
    
});