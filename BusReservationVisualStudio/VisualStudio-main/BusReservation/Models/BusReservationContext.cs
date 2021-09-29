using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BusReservation.Models
{
    public partial class BusReservationContext : DbContext
    {
        public BusReservationContext()
        {
        }

        public BusReservationContext(DbContextOptions<BusReservationContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Tbladmin> Tbladmin { get; set; }
        public virtual DbSet<Tblbooking> Tblbooking { get; set; }
        public virtual DbSet<Tblbus> Tblbus { get; set; }
        public virtual DbSet<Tblbusschedule> Tblbusschedule { get; set; }
        public virtual DbSet<Tbldriver> Tbldriver { get; set; }
        public virtual DbSet<Tblpayment> Tblpayment { get; set; }
        public virtual DbSet<Tblregcustomer> Tblregcustomer { get; set; }
        public virtual DbSet<Tblseats> Tblseats { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-LA8719G;Database=BusReservation;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tbladmin>(entity =>
            {
                entity.HasKey(e => e.AdminId)
                    .HasName("PK__tbladmin__AD0500A62D6F3CE9");

                entity.ToTable("tbladmin");

                entity.Property(e => e.AdminId)
                    .HasColumnName("adminId")
                    .ValueGeneratedNever();

                entity.Property(e => e.EmailId)
                    .HasColumnName("emailId")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasColumnName("fullName")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .HasColumnName("userName")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.UserPassword)
                    .HasColumnName("userPassword")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Tblbooking>(entity =>
            {
                entity.HasKey(e => e.BookingId)
                    .HasName("PK__tblbooki__C6D03BCD9F612DE1");

                entity.ToTable("tblbooking");

                entity.Property(e => e.BookingId)
                    .HasColumnName("bookingId")
                    .ValueGeneratedNever();

                entity.Property(e => e.BookingStatus).HasColumnName("booking_status");

                entity.Property(e => e.DateOfBooking)
                    .HasColumnName("date_of_booking")
                    .HasColumnType("datetime");

                entity.Property(e => e.NumberOfSeats).HasColumnName("number_of_seats");

                entity.Property(e => e.ScheduleId).HasColumnName("scheduleId");

                entity.Property(e => e.TotalAmount).HasColumnName("total_amount");

                entity.Property(e => e.UserName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Schedule)
                    .WithMany(p => p.Tblbooking)
                    .HasForeignKey(d => d.ScheduleId)
                    .HasConstraintName("FK__tblbookin__sched__440B1D61");

                entity.HasOne(d => d.UserNameNavigation)
                    .WithMany(p => p.Tblbooking)
                    .HasForeignKey(d => d.UserName)
                    .HasConstraintName("FK__tblbookin__UserN__4316F928");
            });

            modelBuilder.Entity<Tblbus>(entity =>
            {
                entity.HasKey(e => e.BusId)
                    .HasName("PK__tblbus__A443D25D680856EC");

                entity.ToTable("tblbus");

                entity.Property(e => e.BusId)
                    .HasColumnName("busId")
                    .ValueGeneratedNever();

                entity.Property(e => e.BusNumber)
                    .IsRequired()
                    .HasColumnName("busNumber")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.BusType)
                    .HasColumnName("busType")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Capacity).HasColumnName("capacity");
            });

            modelBuilder.Entity<Tblbusschedule>(entity =>
            {
                entity.HasKey(e => e.ScheduleId)
                    .HasName("PK__tblbussc__A532EDD46935E099");

                entity.ToTable("tblbusschedule");

                entity.Property(e => e.ScheduleId)
                    .HasColumnName("scheduleId")
                    .ValueGeneratedNever();

                entity.Property(e => e.ArrivalTime).HasColumnName("arrival_time");

                entity.Property(e => e.BusId).HasColumnName("busId");

                entity.Property(e => e.DepartureTime).HasColumnName("departure_time");

                entity.Property(e => e.Destination)
                    .IsRequired()
                    .HasColumnName("destination")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.FareAmount).HasColumnName("fare_amount");

                entity.Property(e => e.ScheduledDate)
                    .HasColumnName("scheduled_date")
                    .HasColumnType("date");

                entity.Property(e => e.Startingpt)
                    .IsRequired()
                    .HasColumnName("startingpt")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Bus)
                    .WithMany(p => p.Tblbusschedule)
                    .HasForeignKey(d => d.BusId)
                    .HasConstraintName("FK__tblbussch__busId__3E52440B");
            });

            modelBuilder.Entity<Tbldriver>(entity =>
            {
                entity.HasKey(e => e.DriverId)
                    .HasName("PK__tbldrive__F1532DF284FF23D7");

                entity.ToTable("tbldriver");

                entity.Property(e => e.DriverId)
                    .HasColumnName("driverId")
                    .ValueGeneratedNever();

                entity.Property(e => e.BusId).HasColumnName("busId");

                entity.Property(e => e.DriverContact)
                    .HasColumnName("driverContact")
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.DriverName)
                    .IsRequired()
                    .HasColumnName("driverName")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Bus)
                    .WithMany(p => p.Tbldriver)
                    .HasForeignKey(d => d.BusId)
                    .HasConstraintName("FK__tbldriver__busId__3B75D760");
            });

            modelBuilder.Entity<Tblpayment>(entity =>
            {
                entity.HasKey(e => e.PaymentId)
                    .HasName("PK__tblpayme__A0D9EFC663128E18");

                entity.ToTable("tblpayment");

                entity.Property(e => e.PaymentId)
                    .HasColumnName("paymentId")
                    .ValueGeneratedNever();

                entity.Property(e => e.AmountPaid).HasColumnName("amount_paid");

                entity.Property(e => e.BookingId).HasColumnName("bookingId");

                entity.Property(e => e.PaymentDate)
                    .HasColumnName("payment_date")
                    .HasColumnType("date");

                entity.HasOne(d => d.Booking)
                    .WithMany(p => p.Tblpayment)
                    .HasForeignKey(d => d.BookingId)
                    .HasConstraintName("FK__tblpaymen__booki__49C3F6B7");
            });

            modelBuilder.Entity<Tblregcustomer>(entity =>
            {
                entity.HasKey(e => e.UserName)
                    .HasName("PK__tblregcu__C9F284573877A2EB");

                entity.ToTable("tblregcustomer");

                entity.Property(e => e.UserName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerAge).HasColumnName("customerAge");

                entity.Property(e => e.CustomerContact)
                    .IsRequired()
                    .HasColumnName("customerContact")
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerEmail)
                    .HasColumnName("customerEmail")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerGender)
                    .HasColumnName("customerGender")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerName)
                    .IsRequired()
                    .HasColumnName("customerName")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.WalletAmount).HasColumnName("Wallet_amount");
            });

            modelBuilder.Entity<Tblseats>(entity =>
            {
                entity.HasKey(e => e.SeatId)
                    .HasName("PK__tblseats__BC5329EAFF0510C0");

                entity.ToTable("tblseats");

                entity.Property(e => e.SeatId)
                    .HasColumnName("seatId")
                    .ValueGeneratedNever();

                entity.Property(e => e.BookingId).HasColumnName("bookingId");

                entity.Property(e => e.SeatNumber).HasColumnName("seatNumber");

                entity.HasOne(d => d.Booking)
                    .WithMany(p => p.Tblseats)
                    .HasForeignKey(d => d.BookingId)
                    .HasConstraintName("FK__tblseats__bookin__46E78A0C");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
