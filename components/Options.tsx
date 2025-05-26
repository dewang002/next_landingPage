import React from 'react'

const Options = () => {
    return (
        <footer className="bg-white text-gray-700 py-12 overflow-hidden">
            <span className="inline-block border-t border-neutral-300 w-full align-middle  md:py-6" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">

                {/* Column 1 */}
                <div>
                    <h3 className="font-bold uppercase mb-4">House Cleaning</h3>
                    <ul className="space-y-2">
                        <li>What’s Included</li>
                        <li>Specialty Cleaning</li>
                        <li>Deep Cleaning Services</li>
                        <li>Careers</li>
                        <li>Customer Portal</li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="font-bold uppercase mb-4">Green Cleaning</h3>
                    <ul className="space-y-2">
                        <li>Green Cleaning For LEED®</li>
                        <li>House Cleaning Services</li>
                        <li>Cleaning Testimonials</li>
                        <li>House Cleaning With Pets</li>
                        <li>Reducing House Allergies</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="font-bold uppercase mb-4">Commercial Cleaning</h3>
                    <ul className="space-y-2">
                        <li>Green Cleaning For LEED®</li>
                        <li>Secure Daytime Cleaning</li>
                        <li>Apartment Cleaning Services</li>
                        <li>Event Cleaning Services</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h3 className="font-bold uppercase mb-4">What’s Included</h3>
                    <ul className="space-y-2">
                        <li>Specialty Cleaning</li>
                        <li>Deep Cleaning</li>
                        <li>Choosing a Cleaning Service</li>
                    </ul>
                </div>

                {/* Column 5: Map and Address */}
                <div className="md:col-span-1 flex flex-col items-start gap-4">
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.010524453425!2d-90.3201390240154!3d38.59234247178327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8cb34f0ce15cf%3A0x78187a4e7317783d!2sBetter%20Life%20Home%20Cleaning!5e0!3m2!1sen!2sus!4v1716773952113!5m2!1sen!2sus"
                        width="250"
                        height="150"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <p>7646 Watson Rd St Louis, MO 63119</p>
                    <p>(314) 288-0659</p>
                </div>
            </div>

            {/* Search Box */}
            <div className="mt-10 bg-gray-100 py-6 px-4 flex justify-center items-center mb-6">
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 border rounded-md w-64 mr-4"
                />
                <button className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700">
                    Search
                </button>
            </div>
            <span className="inline-block border-t border-neutral-300 w-full align-middle" />

        </footer>
    )
}

export default Options
