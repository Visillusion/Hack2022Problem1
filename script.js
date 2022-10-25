function myDistance(c1, address, city) {
    var obj3;
    var miles = "";
    return fetch('https://rbxcopy.com/address?address=' + address + "&city=" + city)
        .then(res => res.json())
        .then(data3 => {
            obj3 = data3;
        })
        .then(() => {
            var c2 = obj3['data']['lng'] + "," + obj3['data']['lat'];
            var obj;
            var distance;
            return fetch('https://rbxcopy.com/distance?c1=' + c1 + '&c2=' + c2)
                .then(res => res.json())
                .then(data => {
                    obj = data;
                })
                .then(() => {
                    //console.log(obj);
                    distance = obj['routes'][0]['distance'];
                    miles = (distance / 1000) / 1.609;
                    miles = Math.round(miles * 100) / 100;
                    console.log(miles);
                    return miles;
                });
        });
}

function multiAddressDistance(address, city, address2, city2) {
    var obj3;
    var obj2;
    fetch('https://rbxcopy.com/address?address=' + address + "&city=" + city)
        .then(res => res.json())
        .then(data3 => {
            obj3 = data3;
        })
        .then(() => {
            fetch('https://rbxcopy.com/address?address=' + address2 + "&city=" + city2)
                .then(res => res.json())
                .then(data2 => {
                    obj2 = data2;
                })
                .then(() => {
                    //console.log(obj2);
                    var c1 = obj3['data']['lng'] + "," + obj3['data']['lat'];
                    var c2 = obj2['data']['lng'] + "," + obj2['data']['lat'];
                    var obj;
                    var distance;
                    fetch('https://rbxcopy.com/distance?c1=' + c1 + '&c2=' + c2)
                        .then(res => res.json())
                        .then(data => {
                            obj = data;
                        })
                        .then(() => {
                            //console.log(obj);
                            distance = obj['routes'][0]['distance'];
                            miles = (distance / 1000) / 1.609;
                            miles = Math.round(miles * 100) / 100;
                            return (miles);
                        });
                });
        });
}