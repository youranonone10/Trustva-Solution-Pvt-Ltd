import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Calendar as CalendarIcon, Clock, User, Mail, Building, Phone } from 'lucide-react';
import { mockTimeSlots, mockBookingData } from '../mock';

export const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [customerInfo, setCustomerInfo] = useState(mockBookingData.customerInfo);
  const [showForm, setShowForm] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  // Generate calendar dates for current month
  const generateCalendarDates = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const dates = [];
    const endDate = new Date(lastDay);
    endDate.setDate(endDate.getDate() + (6 - lastDay.getDay()));
    
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
      dates.push(new Date(date));
    }
    return dates;
  };

  const dates = generateCalendarDates();
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long', year: 'numeric' });

  const handleDateSelect = (date) => {
    if (date < today.setHours(0, 0, 0, 0)) return; // Disable past dates
    setSelectedDate(date);
    setSelectedTime(null);
    setShowForm(false);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setShowForm(true);
  };

  const handleInputChange = (field, value) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBooking = (e) => {
    e.preventDefault();
    // Mock booking submission
    setIsBooked(true);
    setTimeout(() => {
      setIsBooked(false);
      setSelectedDate(null);
      setSelectedTime(null);
      setShowForm(false);
      setCustomerInfo(mockBookingData.customerInfo);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Schedule Your <span className="text-blue-600">Consultation</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Book a free consultation with our experts to discuss your outsourcing needs 
            and discover how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Calendar */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2 text-blue-600" />
                  {currentMonth}
                </h3>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-slate-600">
                    {day}
                  </div>
                ))}
                {dates.map((date, index) => {
                  const isToday = date.toDateString() === today.toDateString();
                  const isPast = date < today.setHours(0, 0, 0, 0);
                  const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                  const isCurrentMonth = date.getMonth() === today.getMonth();
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleDateSelect(date)}
                      disabled={isPast}
                      className={`p-2 text-sm rounded-lg transition-all duration-200 ${
                        isPast 
                          ? 'text-slate-300 cursor-not-allowed' 
                          : isSelected
                            ? 'bg-blue-600 text-white shadow-md'
                            : isToday
                              ? 'bg-blue-100 text-blue-600 font-semibold'
                              : isCurrentMonth
                                ? 'text-slate-900 hover:bg-blue-50'
                                : 'text-slate-400'
                      }`}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Time Slots */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                Available Times
              </h3>
              
              {selectedDate ? (
                <div className="grid grid-cols-2 gap-3">
                  {mockTimeSlots.map((slot, index) => (
                    <Button
                      key={index}
                      variant={selectedTime === slot.time ? "default" : "outline"}
                      onClick={() => handleTimeSelect(slot.time)}
                      className={`p-3 text-sm ${
                        selectedTime === slot.time 
                          ? 'bg-blue-600 text-white' 
                          : 'border-2 border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600'
                      }`}
                    >
                      {slot.time}
                    </Button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <CalendarIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">Please select a date first</p>
                </div>
              )}
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Your Details
              </h3>
              
              {showForm && selectedDate && selectedTime ? (
                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <User className="w-4 h-4 text-blue-600 mr-2" />
                      <label className="text-sm font-medium text-slate-700">Full Name *</label>
                    </div>
                    <Input
                      type="text"
                      required
                      value={customerInfo.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="border-2 border-slate-200 focus:border-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Mail className="w-4 h-4 text-blue-600 mr-2" />
                      <label className="text-sm font-medium text-slate-700">Email *</label>
                    </div>
                    <Input
                      type="email"
                      required
                      value={customerInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-2 border-slate-200 focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Building className="w-4 h-4 text-blue-600 mr-2" />
                      <label className="text-sm font-medium text-slate-700">Company</label>
                    </div>
                    <Input
                      type="text"
                      value={customerInfo.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="border-2 border-slate-200 focus:border-blue-500"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Phone className="w-4 h-4 text-blue-600 mr-2" />
                      <label className="text-sm font-medium text-slate-700">Phone</label>
                    </div>
                    <Input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="border-2 border-slate-200 focus:border-blue-500"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Message (Optional)
                    </label>
                    <Textarea
                      value={customerInfo.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-2 border-slate-200 focus:border-blue-500 resize-none"
                      rows={3}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Selected Appointment:</strong>
                    </p>
                    <p className="text-sm text-blue-600">
                      {selectedDate.toLocaleDateString()} at {selectedTime}
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                    disabled={isBooked}
                  >
                    {isBooked ? 'Booking Confirmed! ✓' : 'Confirm Booking'}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <Clock className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500 mb-2">Select date and time</p>
                  <p className="text-sm text-slate-400">Choose your preferred appointment slot</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};