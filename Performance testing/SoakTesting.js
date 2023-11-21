import http from 'k6/http';

export let options = {
  vus: 50, // จำนวน VUs คงที่
  duration: '5m', // ทดสอบเป็นเวลา 1 ชั่วโมง
};

export default function () {
  http.get('http://45.144.164.182:8080/');
}
