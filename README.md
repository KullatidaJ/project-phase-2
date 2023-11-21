# project-phase-2
## Performance testing 
i. Average-load test

![Alt text](image.png)
Performance ของ Average-load test ค่อนข้างช้า มี VUs 10 ระยะเวลาที่ต้องการทดสอบ 30s 

มีการส่ง request ไปทั้งหมด 74 request ระบบส่งข้อมูลตอบกลับให้ช้า ส่งไปประมาณ 20 คำขอ ระบบตอบกลับประมาณ 1 คำขอโดยเฉลี่ย

ii. Stress testing

![Alt text](image-3.png)
Performance ของ Stress testing ค่อนข้างช้า มีเวลาในการรอการตอบกลับนาน มีการขัดจังหวะและมีข้อผิดพลาดเยอะ มี VUs 200 ระยะเวลาที่ต้องการทดสอบ 4m 

มีการส่ง request ไปทั้งหมด 814 request ระบบส่งข้อมูลตอบกลับให้ช้า ส่งไปประมาณ 39 คำขอ ระบบตอบกลับประมาณ 1 คำขอโดยเฉลี่ย และมีคำขอที่ล้มเหลว 439 คำขอ

iii. Soak testing

![Alt text](image-1.png)
Performance ของ Soak testing ค่อนข้างช้า มี VUs 50 ระยะเวลาที่ต้องการทดสอบ 5m 

มีการส่ง request ไปทั้งหมด 2066 request ระบบส่งข้อมูลตอบกลับให้ช้า มีระยะเวลาในการรอส่ง request ประมาณ 5s ต่อคำขอ

iv. Spike testing

![Alt text](image-2.png)
Performance ของ Soak testing ค่อนข้างช้า มี VUs 100 ระยะเวลาที่ต้องการทดสอบ 7m

