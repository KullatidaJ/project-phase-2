import http from 'k6/http';

export let options = {
  stages: [
    { duration: '1m', target: 50 }, // เพิ่มจำนวน VUs เป็น 50 ในระหว่าง 1 นาที
    { duration: '5m', target: 100 }, // คงที่จำนวน VUs ที่ 50 ในระหว่าง 5 นาที
    { duration: '1m', target: 20 },  // ลดจำนวน VUs เหลือ 0 ในระหว่าง 1 นาที
  ],
};

export default function () {
  http.get('http://45.144.164.182:8080/');
}
