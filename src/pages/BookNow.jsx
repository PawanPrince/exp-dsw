import React, { useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Calendar, Mail, Phone, User, ArrowLeft, Check, Clock, Heart, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const BookNow = () => {
    const { state } = useLocation();
    const selectedPackage = state?.package;
    const pdfRef = useRef();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        weddingDate: '',
        venue: '',
        guestCount: '',
        notes: '',
    });

    const [formErrors, setFormErrors] = useState({
        phone: '',
        notes: '',
        weddingDate: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Get today's date in YYYY-MM-DD format for min date
    const today = new Date().toISOString().split('T')[0];

    // Check if all required fields are filled
    const areRequiredFieldsFilled = () => {
        return formData.fullName.trim() !== '' &&
               formData.email.trim() !== '' &&
               formData.phone.trim() !== '' &&
               formData.weddingDate.trim() !== '' &&
               !formErrors.phone &&
               !formErrors.notes &&
               !formErrors.weddingDate;
    };

    const validatePhone = (phone) => {
        const phoneDigits = phone.replace(/\D/g, '');
        if (phoneDigits.length < 10) {
            return 'Phone number must be at least 10 digits';
        }
        return '';
    };

    const validateNotes = (notes) => {
        const wordCount = notes.trim().split(/\s+/).filter(word => word.length > 0).length;
        if (notes.trim() && wordCount < 10) {
            return `Please write at least 10 words (currently ${wordCount} words)`;
        }
        return '';
    };

    const validateDate = (date) => {
        if (date && new Date(date) < new Date(today)) {
            return 'Please select a future date for your wedding';
        }
        return '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear previous errors and validate in real-time
        setFormErrors(prev => ({ ...prev, [name]: '' }));

        // Real-time validation
        if (name === 'phone') {
            const phoneError = validatePhone(value);
            setFormErrors(prev => ({ ...prev, phone: phoneError }));
        } else if (name === 'notes') {
            const notesError = validateNotes(value);
            setFormErrors(prev => ({ ...prev, notes: notesError }));
        } else if (name === 'weddingDate') {
            const dateError = validateDate(value);
            setFormErrors(prev => ({ ...prev, weddingDate: dateError }));
        }
    };

    const generatePDF = async () => {
        try {
            if (!pdfRef.current) {
                console.error('PDF reference not found');
                return;
            }

            // Check if required fields are filled
            if (!areRequiredFieldsFilled()) {
                alert('Please fill all required fields before downloading the PDF.');
                return;
            }

            // Create a temporary div with the content we want to convert to PDF
            const contentToCapture = document.createElement('div');
            contentToCapture.style.position = 'absolute';
            contentToCapture.style.left = '-9999px';
            contentToCapture.style.top = '0';
            contentToCapture.style.width = '800px';
            contentToCapture.style.backgroundColor = 'white';
            contentToCapture.style.padding = '20px';
            contentToCapture.style.fontFamily = 'Arial, sans-serif';

            // Create different status messages based on submission
            const statusSection = isSubmitted 
                ? `<div style="background: #dcfce7; border: 2px solid #16a34a; padding: 15px; border-radius: 10px; margin-bottom: 20px; text-align: center;">
                     <h3 style="color: #15803d; margin: 0; font-size: 18px;">✅ BOOKING SUBMITTED SUCCESSFULLY</h3>
                     <p style="color: #166534; margin: 5px 0 0 0; font-size: 14px;">This PDF is generated after successful submission. We will contact you within 24 hours.</p>
                   </div>`
                : `<div style="background: #fef3c7; border: 2px solid #d97706; padding: 15px; border-radius: 10px; margin-bottom: 20px; text-align: center;">
                     <h3 style="color: #92400e; margin: 0; font-size: 18px;">⚠️ BOOKING NOT YET SUBMITTED</h3>
                     <p style="color: #92400e; margin: 5px 0 0 0; font-size: 14px;">This PDF is generated before submission. Please submit your booking form to confirm your request.</p>
                   </div>`;

            // Create the content for PDF
            contentToCapture.innerHTML = `
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="color: #d97706; font-size: 28px; margin-bottom: 10px;">Wedding Photography Booking</h1>
                    <p style="color: #666; font-size: 16px;">Booking Details & Package Information</p>
                </div>
                
                ${statusSection}
                
                <div style="margin-bottom: 30px;">
                    <h2 style="color: #dc2626; font-size: 20px; margin-bottom: 15px; border-bottom: 2px solid #dc2626; padding-bottom: 5px;">Client Information</h2>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div><strong>Full Name:</strong> ${formData.fullName || 'Not provided'}</div>
                        <div><strong>Email:</strong> ${formData.email || 'Not provided'}</div>
                        <div><strong>Phone:</strong> ${formData.phone || 'Not provided'}</div>
                        <div><strong>Wedding Date:</strong> ${formData.weddingDate || 'Not provided'}</div>
                        <div><strong>Venue:</strong> ${formData.venue || 'Not provided'}</div>
                        <div><strong>Guest Count:</strong> ${formData.guestCount || 'Not provided'}</div>
                    </div>
                    ${formData.notes ? `<div style="margin-top: 15px;"><strong>Additional Notes:</strong><br/><p style="background: #f3f4f6; padding: 10px; border-radius: 5px; margin-top: 5px;">${formData.notes}</p></div>` : ''}
                </div>

                ${selectedPackage ? `
                <div style="margin-bottom: 30px;">
                    <h2 style="color: #dc2626; font-size: 20px; margin-bottom: 15px; border-bottom: 2px solid #dc2626; padding-bottom: 5px;">Selected Package</h2>
                    <div style="background: #fef3c7; padding: 20px; border-radius: 10px; border: 2px solid #d97706;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                            <h3 style="color: #92400e; font-size: 18px; margin: 0;">${selectedPackage.name}</h3>
                            <span style="color: #dc2626; font-size: 24px; font-weight: bold;">${selectedPackage.price}</span>
                        </div>
                        <div style="margin-top: 15px;">
                            <strong style="color: #92400e;">Package Features:</strong>
                            <ul style="margin-top: 10px; padding-left: 20px;">
                                ${selectedPackage.features.map(feature => `<li style="margin-bottom: 5px; color: #374151;">${feature}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                ` : ''}

                <div style="margin-top: 40px; text-align: center; padding: 20px; background: #f9fafb; border-radius: 10px;">
                    <p style="color: #6b7280; font-size: 14px; margin: 0;">
                        ${isSubmitted 
                            ? 'Thank you for choosing our wedding photography services!<br/>We have received your booking and will contact you within 24 hours.'
                            : 'Please submit your booking form to confirm your request.<br/>We will contact you within 24 hours after submission.'
                        }
                    </p>
                    <p style="color: #6b7280; font-size: 12px; margin-top: 10px;">
                        Generated on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
                    </p>
                </div>
            `;

            // Append to body temporarily
            document.body.appendChild(contentToCapture);

            // Generate canvas from the content
            const canvas = await html2canvas(contentToCapture, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#ffffff',
                width: 800,
                height: contentToCapture.scrollHeight
            });

            // Remove the temporary element
            document.body.removeChild(contentToCapture);

            // Create PDF
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = pdfWidth;
            const imgHeight = (canvas.height * pdfWidth) / canvas.width;

            let heightLeft = imgHeight;
            let position = 0;

            // Add first page
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;

            // Add additional pages if needed
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pdfHeight;
            }

            // Download the PDF
            const statusPrefix = isSubmitted ? 'Submitted' : 'Draft';
            const fileName = `${statusPrefix}_${formData.fullName ? formData.fullName.replace(/[^a-zA-Z0-9]/g, '_') : 'Wedding'}_Booking_Details.pdf`;
            pdf.save(fileName);

            console.log('PDF generated and downloaded successfully');
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('There was an error generating the PDF. Please try again.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate all fields before submission
        const phoneError = validatePhone(formData.phone);
        const notesError = validateNotes(formData.notes);
        const dateError = validateDate(formData.weddingDate);

        setFormErrors({
            phone: phoneError,
            notes: notesError,
            weddingDate: dateError
        });

        // Don't submit if there are validation errors
        if (phoneError || notesError || dateError) {
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                weddingDate: '',
                venue: '',
                guestCount: '',
                notes: '',
            });
            setFormErrors({ phone: '', notes: '', weddingDate: '' });
        }, 5000);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-rose-900 via-amber-900 to-orange-900 flex items-center justify-center p-4 py-20">
                <div className="max-w-md w-full bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl text-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-green-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
                    <p className="text-gray-200 mb-6">
                        Your booking request has been submitted successfully. We'll get back to you within 24 hours.
                    </p>
                    <button
                        onClick={generatePDF}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mb-4 "
                    >
                        <Download className="w-5 h-5" />
                        Download Booking PDF
                    </button>
                    <div className="flex items-center justify-center gap-2 text-amber-300">
                        <Heart className="w-5 h-5 animate-pulse" />
                        <span>We can't wait to capture your special day!</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-900 via-amber-900 to-orange-900 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors duration-300 cursor-pointer"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Packages
                </Link>

                {/* Welcome Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Let's Create Magic Together
                    </h1>
                    <p className="text-xl text-amber-200 mb-6">
                        Tell us about your special day and we'll make it unforgettable
                    </p>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Share your wedding details with us so we can provide you with the perfect photography experience. 
                        We'll capture every precious moment of your celebration with professional expertise and artistic vision.
                    </p>
                </div>

                {/* Fill Form Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-amber-300 mb-2">Fill Form</h2>
                    <p className="text-gray-200">
                        Please provide your information below to proceed with your booking
                    </p>
                </div>

                <div ref={pdfRef} className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                        {/* Left Side - Package Details */}
                        <div className="space-y-6">
                            {selectedPackage ? (
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-white">
                                            Selected Package
                                        </h3>
                                        <span className="text-2xl font-bold text-amber-300">
                                            {selectedPackage.price}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-medium text-amber-200 mb-3">
                                        {selectedPackage.name}
                                    </h4>
                                    <div className="grid grid-cols-1 gap-1">
                                        {selectedPackage.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                                <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-2xl">
                                    <p className="text-red-300 text-center">
                                        No package selected. Please go back and choose a package first.
                                    </p>
                                </div>
                            )}

                            {/* PDF Download Button */}
                            <button
                                onClick={generatePDF}
                                disabled={!areRequiredFieldsFilled()}
                                className={`w-full font-bold py-3 px-6 rounded-xl transition-all duration-300 transform shadow-lg hover:shadow-xl flex items-center justify-center gap-3 ${
                                    areRequiredFieldsFilled()
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white hover:scale-[1.02]'
                                        : 'bg-gradient-to-r from-gray-500 to-gray-600 text-gray-300 cursor-not-allowed'
                                }`}
                            >
                                <Download className="w-5 h-5" />
                                Download Booking Details
                            </button>
                            {!areRequiredFieldsFilled() && (
                                <p className="text-amber-200 text-center text-sm mt-2">
                                    Please fill all required fields to download PDF
                                </p>
                            )}
                        </div>

                        {/* Right Side - Booking Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Full Name */}
                                    <div className="group">
                                        <label className="block text-amber-200 font-medium mb-1 text-sm">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-amber-300/70" />
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                                required
                                                className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-300 text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="group">
                                        <label className="block text-amber-200 font-medium mb-1 text-sm">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-amber-300/70" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your.email@example.com"
                                                required
                                                className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-300 text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="group">
                                        <label className="block text-amber-200 font-medium mb-1 text-sm">
                                            Phone Number * (min 10 digits)
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-amber-300/70" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Your phone number"
                                                required
                                                className={`w-full bg-white/10 border rounded-lg pl-10 pr-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 text-sm ${
                                                    formErrors.phone 
                                                        ? 'border-red-500/50 focus:ring-red-400/50 focus:border-red-400/50' 
                                                        : 'border-white/20 focus:ring-amber-400/50 focus:border-amber-400/50'
                                                }`}
                                            />
                                        </div>
                                        {formErrors.phone && (
                                            <p className="text-red-300 text-xs mt-1">{formErrors.phone}</p>
                                        )}
                                    </div>

                                    {/* Wedding Date */}
                                    <div className="group">
                                        <label className="block text-amber-200 font-medium mb-1 text-sm">
                                            Wedding Date * (future dates only)
                                        </label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-amber-300/70" />
                                            <input
                                                type="date"
                                                name="weddingDate"
                                                value={formData.weddingDate}
                                                onChange={handleChange}
                                                min={today}
                                                required
                                                className={`w-full bg-white/10 border rounded-lg pl-10 pr-3 py-3 text-white focus:outline-none focus:ring-2 transition-all duration-300 text-sm ${
                                                    formErrors.weddingDate 
                                                        ? 'border-red-500/50 focus:ring-red-400/50 focus:border-red-400/50' 
                                                        : 'border-white/20 focus:ring-amber-400/50 focus:border-amber-400/50'
                                                }`}
                                            />
                                        </div>
                                        {formErrors.weddingDate && (
                                            <p className="text-red-300 text-xs mt-1">{formErrors.weddingDate}</p>
                                        )}
                                    </div>

                                    {/* Venue */}
                                    <div className="group">
                                        <label className="block text-amber-200 font-medium mb-1 text-sm">
                                            Wedding Venue
                                        </label>
                                        <input
                                            type="text"
                                            name="venue"
                                            value={formData.venue}
                                            onChange={handleChange}
                                            placeholder="Venue name or location"
                                            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-300 text-sm"
                                        />
                                    </div>

                                    {/* Guest Count */}
                                    <div className="group">
                                        <label className="block text-amber-200 font-medium mb-1 text-sm">
                                            Estimated Guest Count
                                        </label>
                                        <select
                                            name="guestCount"
                                            value={formData.guestCount}
                                            onChange={handleChange}
                                            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-300 text-sm"
                                        >
                                            <option value="" className="bg-gray-800">Select guest count</option>
                                            <option value="1-50" className="bg-gray-800">1-50 guests</option>
                                            <option value="51-100" className="bg-gray-800">51-100 guests</option>
                                            <option value="101-200" className="bg-gray-800">101-200 guests</option>
                                            <option value="200+" className="bg-gray-800">200+ guests</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Additional Notes */}
                                <div className="group">
                                    <label className="block text-amber-200 font-medium mb-1 text-sm">
                                        Additional Notes (minimum 10 words if filled)
                                    </label>
                                    <textarea
                                        name="notes"
                                        rows="3"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        placeholder="Tell us about your vision, special requests, or any questions you have..."
                                        className={`w-full bg-white/10 border rounded-lg px-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none text-sm ${
                                            formErrors.notes 
                                                ? 'border-red-500/50 focus:ring-red-400/50 focus:border-red-400/50' 
                                                : 'border-white/20 focus:ring-amber-400/50 focus:border-amber-400/50'
                                        }`}
                                    />
                                    {formErrors.notes && (
                                        <p className="text-red-300 text-xs mt-1">{formErrors.notes}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !selectedPackage}
                                        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:hover:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Clock className="w-5 h-5 animate-spin" />
                                                Processing Your Request...
                                            </>
                                        ) : (
                                            <>
                                                <Heart className="w-5 h-5" />
                                                Submit Booking Request
                                            </>
                                        )}
                                    </button>

                                    {!selectedPackage && (
                                        <p className="text-red-300 text-center mt-2 text-sm">
                                            Please select a package first
                                        </p>
                                    )}
                                </div>
                            </form>

                            {/* Footer Note */}
                            <div className="mt-4 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                                <p className="text-amber-200 text-center text-sm">
                                    <Heart className="w-3 h-3 inline mr-2" />
                                    We'll review your request and get back to you within 24 hours to discuss your special day!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookNow;