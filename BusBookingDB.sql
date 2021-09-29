

create database BusReservation

use BusReservation

create table tbladmin(adminId int primary key,
fullName varchar(20) not null,
emailId varchar(20),
userName varchar(30),
userPassword  varchar(30)
)

INSERT INTO tbladmin (adminId,fullName,emailId,userName,userPassword) VALUES (1,'Asutosh','asutosh@gmail.com','Asutosh@123','Ashu@123')
INSERT INTO tbladmin (adminId,fullName,emailId,userName,userPassword) VALUES (2,'Astha','astha@gmail.com','Astha@123','Astha@123')
INSERT INTO tbladmin (adminId,fullName,emailId,userName,userPassword) VALUES (3,'Avinash','avinash@gmail.com','Avinash@123','Avi@123')
INSERT INTO tbladmin (adminId,fullName,emailId,userName,userPassword) VALUES (4,'Pratyusha','pratyusha@gmail.com','pratyusha@123','Usha@123')

select * from tbladmin




create table tblbus(busId int primary key,
busNumber varchar(20) not null,
busType varchar(20),
capacity int,
)


insert into tblbus(busId,busNumber,busType,capacity) values (1,'MP28P0737','Normal',50),
(2,'MH04P4321','Normal',50),
(3,'MH10Y0913','Rental',50),
(4,'GJ22P4444','Normal',50),
(5,'MP29Y4242','Rental',50)

select * from tblbus


create table tbldriver(driverId int primary key,
driverName varchar(20) not null,
driverContact varchar(15),
busId int references tblbus(busId))

insert into tbldriver(driverId,driverName,driverContact) values (1,'Chandan',9401527351),
(2,'Hemant',9287737120),
(3,'Ishaan',7023723829),
(4,'Jairaj',9406728123),
(5,'Omkar',9327652123)


select * from tbldriver





create table tblbusschedule(scheduleId int primary key,
startingpt varchar(30) not null,
destination varchar(30) not null,
scheduled_date date,
departure_time time,
arrival_time time,
fare_amount float, 
busId int references tblbus(busId),
)

insert into tblbusschedule (scheduleId,startingpt,destination,scheduled_date,departure_time,arrival_time,fare_amount) values
(1,'Pune', 'Mumbai','2021-10-7', '12:30', '21:10',700),
(2,'Mumbai', 'Goa','2021-10-7', '9:30', '18:10', 300),
(3,'Bangalore', 'Mumbai','2021-10-7', '13:30', '22:10', 1800),
(4,'Pune', 'Mumbai','2021-10-7', '6:30', '15:10',700),
(5,'Bangalore', 'Mumbai','2021-10-7', '12:30', '21:10',700),
(6,'Bangalore', 'Goa','2021-10-7', '9:30', '18:10', 300),
(7,'Goa', 'Mumbai','2021-10-7', '13:30', '22:10', 1800),
(8,'Mumbai', 'Bangalore','2021-10-7', '6:30', '15:10',700)

select * from tblbusschedule

update tblbusschedule set busid=1 where scheduleId=1
update tblbusschedule set busid=2 where scheduleId=2
update tblbusschedule set busid=3 where scheduleId=3
update tblbusschedule set busid=4 where scheduleId=4
update tblbusschedule set busid=5 where scheduleId=5




create table tblregcustomer(UserName varchar(30) primary key,
customerName varchar(30) not null,
customerContact varchar(15) not null,
customerEmail varchar(30),
customerGender varchar(10),
customerAge int,
Password varchar(30),
Wallet_amount float, 
)

insert into tblregcustomer(UserName,CustomerName,CustomerContact,CustomerEmail,customerGender,customerAge,Password,Wallet_amount) 
values ('geetaJ','Geeta Jain','9876567861','geetaj@gmail.com','F',46,'geetaJ',1000),
('AaravJ','Aarav Jain','9406765452','aarav@gmail.com','M',20,'Aaravjain123@',1000),
('AsmitaB','Asmita Baj','9406235452','asmi@gmail.com','F',25,'Asmibaj123@',1000),
('drashanK','Drashan Kapoor','8834985588','drashan@gmail.com','M',22,'Darshan123$',NULL),
('LokeshG','Lokesh Goyal','9406725732','lokeshg@gmail.com','M',52,'LokeshG',5000)

select * from tblregcustomer

create table tblbooking(bookingId int primary key,
UserName varchar(30)  references tblregcustomer(UserName),
scheduleId int references tblbusschedule(scheduleId),
number_of_seats int,
date_of_booking datetime,
total_amount float,
booking_status int)

select * from tblbooking

create table tblseats(seatId int primary key,
seatNumber int,
bookingId int references tblbooking(bookingId),
)

select * from tblseats

create table tblpayment(paymentId int primary key,
bookingId int references tblbooking(bookingId),
amount_paid float,
payment_date date,
)

select * from tblpayment