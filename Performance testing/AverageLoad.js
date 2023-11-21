import http from 'k6/http';

export let options = {
  vus: 10, // จำนวน Virtual Users (VUs)
  duration: '30s', // ระยะเวลาทดสอบ
};

export default function () {
  http.get('http://45.144.164.182:8080/');
}
