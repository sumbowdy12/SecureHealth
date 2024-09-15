# healthsecure
FIT 5163 Programming Assignment

Demo Website: secure-health.vercel.app

Navigation:
Home website displays backend database in its raw, encrypted form

Patients, who know their id/key, can access their individual records by navigating to secure-health.vercel.app/[patientid]. Their secret key is used to decrypt their data, but cannot be used to decrypt any other records

Doctor/healthcare professionals can access all the records in the database and can decrypt it through having access to all patient's secret keys. Doctors can update, create and delete patient records accordingly. Doctor is accessed through secure-health.vercel.app/doctor
