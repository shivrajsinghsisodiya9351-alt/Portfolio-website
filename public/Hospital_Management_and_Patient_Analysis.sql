-- Hospital Management and Patient Analysis SQL Queries
-- Author: Shivraj Singh Sisodiya

SELECT * FROM appointments;
SELECT * FROM bills;
SELECT * FROM doctors;
SELECT * FROM medicine_dispensing;
SELECT * FROM medicines;
SELECT * FROM patients;
SELECT * FROM staff;
SELECT * FROM stock_management;
SELECT * FROM tests;

-- 1 Find the top 10 doctors generating the highest revenue.
SELECT d.doctor_name,
  SUM(b.total_amount) AS Fess
FROM
  bills b 
JOIN
  appointments a ON b.appointment_id = a.appointment_id
JOIN 
  doctors d ON a.doctor_id = d.doctor_id
GROUP BY 
  doctor_name
ORDER BY
   SUM(consultation_fee) DESC
LIMIT 10;  

-- 2 Calculate total monthly hospital revenue and identify the highest revenue month.
SELECT 
   EXTRACT(MONTH FROM bill_date) AS month_name,
   SUM(total_amount) AS Total_revenue
FROM
  bills
GROUP BY
  month_name
ORDER BY Total_revenue DESC;

-- 3 Find the average patient stay duration by department.
SELECT 
       a.department,
	   AVG(p.discharge_date - p.admission_date) AS avg_stay_time --(Days)
FROM patients p 
JOIN appointments a ON p.patient_id = a.patient_id
GROUP BY
   a.department
ORDER BY
  avg_stay_time DESC;
 
-- 4 Identify the top 5 most prescribed medicines.
SELECT
   m.medicine_name,
   SUM(md.quantity_dispensed) AS Total_QTY
FROM
  medicines m
JOIN 
  medicine_dispensing md ON m.medicine_id = md.medicine_id
GROUP BY
  m.medicine_name
ORDER BY Total_QTY DESC
LIMIT 5;

-- 5 Find patients with pending or unpaid bills.
-- 6 Calculate doctor-wise appointment count and ranking.
SELECT 
     d.doctor_name,
	 COUNT(a.appointment_id) AS Total_appointments,
	 DENSE_RANK() OVER (ORDER BY COUNT(a.appointment_id) DESC) AS Doctor_rnk
FROM 
  doctors d 
JOIN 
  appointments a ON d.doctor_id = a.doctor_id
GROUP BY 
  d.doctor_name;

-- 7 Find the most common patient symptoms recorded in the dataset.
SELECT 
    a.symptoms,
    COUNT(p.patient_id) AS total_patients
FROM
   patients p
JOIN 
  appointments a ON p.patient_id = a.patient_id
GROUP BY
  a.symptoms
ORDER BY total_patients DESC
LIMIT 1;

-- 8 Analyze revenue contribution by insurance provider.
UPDATE patients
SET insurance_provider = 'Other'
WHERE insurance_provider IS NULL;

SELECT 
     p.insurance_provider,
	 SUM(b.total_amount) AS Total_Revenue_Distribut
FROM patients p 
LEFT JOIN bills b ON p.patient_id = b.patient_id
GROUP BY p.insurance_provider
ORDER BY Total_Revenue_Distribut DESC;

-- 9 Find the peak appointment day and month.
SELECT 
    TO_CHAR(appointment_datetime, 'Day') AS day_name,
	TO_CHAR(appointment_datetime, 'Month') AS Month_name,
    COUNT(*) AS total_appointments
FROM appointments
GROUP BY day_name, Month_name
ORDER BY total_appointments DESC
LIMIT 2;

SELECT 
    TO_CHAR(appointment_datetime, 'Day') AS day_name,
    COUNT(*) AS total_appointments
FROM appointments
GROUP BY day_name
ORDER BY total_appointments DESC
LIMIT 1;

SELECT 
	TO_CHAR(appointment_datetime, 'Month') AS Month_name,
    COUNT(*) AS total_appointments
FROM appointments
GROUP BY Month_name
ORDER BY total_appointments DESC
LIMIT 1;

-- 10 Identify medicines that are low in stock or near expiry.
SELECT 
    medicine_name,
    stock_quantity,
    CASE
        WHEN stock_quantity < 100 THEN 'Critical Low Stock'
        WHEN stock_quantity BETWEEN 101 AND 200 THEN 'Low Stock'
        ELSE 'Sufficient Stock'
    END AS stock_status
FROM medicines;

-- 11 Calculate average billing amount per patient.
SELECT
      p.patient_id,
      p.full_name,
	  ROUND(AVG(b.total_amount),2) AS Avg_bill
FROM patients p 
JOIN bills b ON p.patient_id = b.patient_id
GROUP BY p.patient_id, p.full_name
ORDER BY Avg_bill DESC;

-- 12 Find department-wise patient count and admission trends.
SELECT 
     a.department,
     COUNT(p.patient_id) AS Total_patient
FROM patients p 
JOIN appointments a ON p.patient_id = a.patient_id
GROUP BY a.department;
	 
SELECT 
     TO_CHAR(admission_date,'Month') AS Month_name,
     COUNT(patient_id) AS Total_patient
FROM patients p 
WHERE admission_date IS NOT NULL
GROUP BY Month_name
ORDER BY Total_patient DESC;
	 
-- 13 Identify repeat patients with multiple appointments.
SELECT 
      p.patient_id,
	  p.full_name,
	  COUNT(a.appointment_id) AS Total_appointments
FROM patients p
JOIN appointments a ON p.patient_id = a.patient_id
GROUP BY p.patient_id, p.full_name
HAVING COUNT(a.appointment_id) > 1
ORDER BY Total_appointments DESC;

-- 14 Find the doctor with the highest average patient rating.

-- 15 Analyze gender distribution among patients and doctors.
SELECT
      gender,
	  COUNT(patient_id) AS Total_patient
FROM patients
GROUP BY gender
ORDER BY Total_patient DESC;
      
SELECT
      gender,
	  COUNT(doctor_id) AS Total_Doctor
FROM doctors
GROUP BY gender
ORDER BY Total_Doctor DESC;
      
-- 16 Calculate medicine dispensing trends by month.
SELECT 
      TO_CHAR(dispensed_date,'month') AS Month_name,
      SUM(quantity_dispensed) AS Total_QTY_dispense
FROM medicine_dispensing
GROUP BY Month_name
ORDER BY Total_QTY_dispense DESC;

-- 17 Find the percentage contribution of consultation, test, and medicine charges.
SELECT
      p.full_name,
      SUM(b.consultation_charge) * 100 / SUM(b.total_amount) AS consltant_contribution,
	  SUM(b.test_charge) * 100 / SUM(b.total_amount) AS test_contribution,
	  SUM(b.medicine_charge) * 100 / SUM(b.total_amount) AS medicine_contribution,
	  SUM(b.room_charge) * 100 / SUM(b.total_amount) AS room_contribution
FROM patients p    
JOIN bills b ON p.patient_id = b.patient_id
GROUP BY p.full_name, b.total_amount;

-- 18 Identify age groups with the highest hospital visits.
SELECT 
   CASE
	  WHEN EXTRACT(YEAR FROM AGE(admission_date , date_of_birth)) BETWEEN 0 AND 18 THEN '0-18'
	  WHEN EXTRACT(YEAR FROM AGE(admission_date , date_of_birth)) BETWEEN 19 AND 35 THEN '19-35'
	  WHEN EXTRACT(YEAR FROM AGE(admission_date , date_of_birth)) BETWEEN 36 AND 50 THEN '36-50'
	  ELSE '50+'
   END AS Age_GROUP,
   COUNT(patient_id) AS Total_patients
FROM patients 
GROUP BY Age_group
ORDER BY Total_patients DESC;

-- 19 Find patients with the highest total billing amount.
SELECT p.patient_id,
       p.full_name,
	   SUM(b.total_amount) AS Total_billing_amount
FROM patients p
JOIN bills b ON p.patient_id = b.patient_id
GROUP BY p.patient_id, p.full_name
ORDER BY Total_billing_amount DESC
LIMIT 1;
