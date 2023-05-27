var email = 'hkleinber3s@ucoz.ru';
var password = 'password';

function authorize(email, password)
{
    // base64 encoded basic auth username:password@web.site
    var creds = btoa(email + ":" + password)
    return "Basic " + creds
}

export async function post(path, body) {
    let request = await fetch("https://api.hubhopper.app"+path, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": authorize(email, password)
        }
    });
    return await request.json()
}
export async function get(path) {
    let request = await fetch("https://api.hubhopper.app"+path, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": authorize(email, password)
        }
    });
    return await request.json()
}

export async function get_hubs() {
    const data = JSON.parse(await get('/get_hubs/'));
    // console.log(data)
    return data.map(data => ({
        loc: [data.fields.latitude, data.fields.longitude],
        address: data.fields.info,
        id: data.pk
    }))
}
export async function find_rides(destination_hub_id, source_hub_id) {
    return await post('/find-rides/', {'destination_hub_id':destination_hub_id, 'source_hub_id':source_hub_id})
}
export async function create_ride(destination_hub_id, source_hub_id) {
    return await post('/create-ride/', {'destination_hub_id':destination_hub_id, 'source_hub_id':source_hub_id})
}
export async function join_request(ride_id, source_hub_id) {
    return await post('/request-join-ride/', {'ride_id':ride_id, 'passenger_hub_id':source_hub_id})
}
export async function accept_join_request(ride_id, passenger_id) {
    return await post('/request-join-ride/', {'ride_id':ride_id, 'passenger_id':passenger_id})
}
export async function cancel_ride(ride_id) {
    return await post('/request-join-ride/', {'ride_id':ride_id})
}
export async function finish_ride(ride_id) {
    return await post('/request-join-ride/', {'ride_id':ride_id})
}
export async function update() {
    return await get('/update/')
}

