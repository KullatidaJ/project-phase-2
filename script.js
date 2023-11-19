import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '20s', target: 100 }, // Ramp-up to 100 virtual users over 2 second
    { duration: '1m', target: 100 }, // Stay at 100 virtual users for 5 minutes
    { duration: '10s', target: 1500},
    { duration: '1m', target: 500},
    { duration: '20s', target: 0 },  // Ramp-down to 0 virtual users over 2 second
  ],
};


//ii. Stress testing
export default function () {
  // Make an HTTP POST request with a payload
  let response = http.get('http://45.144.164.182:8080/');

  // Check if the response status code is 200 (OK)
  check(response, {
    'is status 200': (r) => r.status === 200,
  });

  // Simulate user think time by sleeping for a short duration
  sleep(1);
}
