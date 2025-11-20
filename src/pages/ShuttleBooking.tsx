import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface ShuttleRoute {
  id: number;
  busNumber: string;
  duration: string;
  startLocation: string;
  startTime: string;
  endLocation: string;
  endTime: string;
  stops: number;
  availableSeats: number;
  price: string;
}

const ShuttleBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const shuttleData: ShuttleRoute = location.state?.shuttle;

  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [passengerName, setPassengerName] = useState('');
  const [passengerEmail, setPassengerEmail] = useState('');
  const [passengerPhone, setPassengerPhone] = useState('');

  // Generate seat layout (4 rows x 4 seats = 16 seats)
  const totalSeats = 16;
  const seatsPerRow = 4;

  const [bookedSeats] = useState(() => {
    // Generate consistent booked seats for this shuttle
    const booked = [];
    for (let i = 1; i <= totalSeats; i++) {
      if (Math.random() > 0.7) {
        booked.push(i);
      }
    }
    return booked;
  });

  useEffect(() => {
    if (!shuttleData) {
      navigate('/student-dashboard');
    }
  }, [shuttleData, navigate]);

  if (!shuttleData) {
    return <div>Loading...</div>;
  }

  const handleSeatClick = (seatNumber: number) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else if (selectedSeats.length >= 4) {
      alert('Maximum 4 seats can be selected per booking');
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat');
      return;
    }
    if (!passengerName || !passengerEmail || !passengerPhone) {
      alert('Please fill in all passenger details');
      return;
    }

    // Here you would typically send the booking data to a backend
    const bookingData = {
      shuttleId: shuttleData.id,
      selectedSeats,
      passengerName,
      passengerEmail,
      passengerPhone,
      totalPrice: selectedSeats.length * parseInt(shuttleData.price.replace('LKR ', '')),
      bookingDate: new Date().toISOString()
    };

    // Save to localStorage for demo purposes
    const existingBookings = JSON.parse(localStorage.getItem('shuttleBookings') || '[]');
    existingBookings.push(bookingData);
    localStorage.setItem('shuttleBookings', JSON.stringify(existingBookings));

    alert(`Booking confirmed! Seats: ${selectedSeats.join(', ')}`);
    navigate('/student-dashboard');
  };

  const renderSeat = (seatNumber: number) => {
    const isSelected = selectedSeats.includes(seatNumber);
    const isBooked = bookedSeats.includes(seatNumber);

    let seatClass = 'seat';
    if (isBooked) seatClass += ' booked';
    else if (isSelected) seatClass += ' selected';
    else seatClass += ' available';

    return (
      <div
        key={seatNumber}
        className={seatClass}
        onClick={() => !isBooked && handleSeatClick(seatNumber)}
      >
        {seatNumber}
      </div>
    );
  };

  const totalPrice = selectedSeats.length * parseInt(shuttleData.price.replace('LKR ', ''));

  return (
    <div className="shuttle-booking">
      <div className="booking-container">
        {/* Header */}
        <div className="booking-header">
          <button className="back-btn" onClick={() => navigate('/student-dashboard')}>
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </button>
          <h1>Book Your Shuttle</h1>
        </div>

        {/* Shuttle Details */}
        <div className="shuttle-details-card">
          <div className="shuttle-info">
            <div className="bus-header">
              <i className="fas fa-bus"></i>
              <h2>{shuttleData.busNumber}</h2>
            </div>
            <div className="route-info">
              <div className="route-point">
                <div className="location">
                  <h3>{shuttleData.startLocation}</h3>
                  <p>{shuttleData.startTime}</p>
                </div>
                <div className="route-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
                <div className="location">
                  <h3>{shuttleData.endLocation}</h3>
                  <p>{shuttleData.endTime}</p>
                </div>
              </div>
              <div className="route-meta">
                <span><i className="far fa-clock"></i> {shuttleData.duration}</span>
                <span><i className="fas fa-map-pin"></i> {shuttleData.stops} stops</span>
                <span><i className="fas fa-chair"></i> {totalSeats - bookedSeats.length} seats available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-content">
          {/* Seat Selection */}
          <div className="seat-selection-section">
            <h3>Select Your Seats</h3>
            <div className="seat-legend">
              <div className="legend-item">
                <div className="seat available"></div>
                <span>Available</span>
              </div>
              <div className="legend-item">
                <div className="seat selected"></div>
                <span>Selected</span>
              </div>
              <div className="legend-item">
                <div className="seat booked"></div>
                <span>Booked</span>
              </div>
            </div>

            <div className="bus-layout">
              <div className="bus-front">
                <i className="fas fa-bus"></i>
                <span>Front</span>
              </div>
              <div className="seats-grid">
                {Array.from({ length: totalSeats }, (_, index) => {
                  const seatNumber = index + 1;
                  return renderSeat(seatNumber);
                })}
              </div>
            </div>

            <div className="selected-seats-info">
              <p>Selected Seats: {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</p>
              <p>Maximum 4 seats per booking</p>
            </div>
          </div>

          {/* Passenger Details */}
          <div className="passenger-details-section">
            <h3>Passenger Details</h3>
            <div className="passenger-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={passengerName}
                  onChange={(e) => setPassengerName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={passengerEmail}
                  onChange={(e) => setPassengerEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={passengerPhone}
                  onChange={(e) => setPassengerPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="booking-summary">
          <div className="summary-details">
            <div className="summary-item">
              <span>Route:</span>
              <span>{shuttleData.startLocation} → {shuttleData.endLocation}</span>
            </div>
            <div className="summary-item">
              <span>Departure:</span>
              <span>{shuttleData.startTime}</span>
            </div>
            <div className="summary-item">
              <span>Seats Selected:</span>
              <span>{selectedSeats.length}</span>
            </div>
            <div className="summary-item">
              <span>Price per Seat:</span>
              <span>{shuttleData.price}</span>
            </div>
            <div className="summary-item total">
              <span>Total Amount:</span>
              <span>LKR {totalPrice}</span>
            </div>
          </div>

          <button
            className="confirm-booking-btn"
            onClick={handleBooking}
            disabled={selectedSeats.length === 0}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShuttleBooking;