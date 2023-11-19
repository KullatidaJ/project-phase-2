import http from 'k6/http';

export let options = {
  stages: [
    { duration: '1m', target: 100 }, // เพิ่มจำนวน VUs เป็น 100 ในระหว่าง 20 วินาที
    { duration: '2m', target: 200 }, // เพิ่มจำนวน VUs เป็น 200 ในระหว่าง 1 นาที
    { duration: '1m', target: 100 }, // ลดจำนวน VUs เหลือ 100 ในระหว่าง 20 วินาที
  ],
};

export default function () {
  http.get('http://45.144.164.182:8080/');
}
