using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BusReservation.Models;

namespace BusReservation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class TblpaymentsController : ControllerBase
    {
        BusReservationContext _context;

        public TblpaymentsController(BusReservationContext context)
        {
            _context = context;
        }

        // GET: api/Tblpayments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tblpayment>>> GetTblpayment()
        {
            return await _context.Tblpayment.ToListAsync();
        }

        // GET: api/Tblpayments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tblpayment>> GetTblpayment(int id)
        {
            
            var tblpayment = await _context.Tblpayment.FindAsync(id);

            if (tblpayment == null)
            {
                return NotFound();
            }

            return tblpayment;
        }

        // PUT: api/Tblpayments/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblpayment(int id, Tblpayment tblpayment)
        {
            if (id != tblpayment.PaymentId)
            {
                return BadRequest();
            }

            _context.Entry(tblpayment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblpaymentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Tblpayments
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Tblpayment>> PostTblpayment(Tblpayment tblpayment)
        {
            //tblpayment Newtblpayment = new tblpayment
            //{
                //Trip = trip,
                //PaymentId = 1,
                //BookingTime = DateTime.Now.ToString(),
                //IsBlocked = false
            //};

            //_context.Tblpayment.Add(Newticket);
            //Save new Seats to DB
            
            _context.Tblpayment.Add(tblpayment);
           // db.SaveChanges();
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TblpaymentExists(tblpayment.PaymentId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTblpayment", new { id = tblpayment.PaymentId }, tblpayment);
        }

        // DELETE: api/Tblpayments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Tblpayment>> DeleteTblpayment(int id)
        {
            var tblpayment = await _context.Tblpayment.FindAsync(id);
            if (tblpayment == null)
            {
                return NotFound();
            }

            _context.Tblpayment.Remove(tblpayment);
            await _context.SaveChangesAsync();

            return tblpayment;
        }

        private bool TblpaymentExists(int id)
        {
            return _context.Tblpayment.Any(e => e.PaymentId == id);
        }
    }
}
