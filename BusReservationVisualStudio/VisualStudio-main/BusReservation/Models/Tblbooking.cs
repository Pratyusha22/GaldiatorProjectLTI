using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BusReservation.Models
{
    public partial class Tblbooking
    {
        public Tblbooking()
        {
            Tblpayment = new HashSet<Tblpayment>();
            Tblseats = new HashSet<Tblseats>();
        }

        public int BookingId { get; set; }
        public string UserName { get; set; }
        public int? ScheduleId { get; set; }
        public int? NumberOfSeats { get; set; }
        public DateTime? DateOfBooking { get; set; }
        public double? TotalAmount { get; set; }
        public int? BookingStatus { get; set; }

        public virtual Tblbusschedule Schedule { get; set; }
        public virtual Tblregcustomer UserNameNavigation { get; set; }
        public virtual ICollection<Tblpayment> Tblpayment { get; set; }
        public virtual ICollection<Tblseats> Tblseats { get; set; }
    }
}
