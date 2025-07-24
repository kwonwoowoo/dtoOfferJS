// Complete standalone DTOOffer widget - matches DTOOffer.tsx exactly
(function() {
  'use strict';

  // Utility functions
  function createElement(tag, className, content) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (content) el.innerHTML = content;
    return el;
  }

  function trackEvent(eventName, properties = {}) {
    // Mixpanel tracking if available
    if (window.mixpanel) {
      window.mixpanel.track(eventName, properties);
    }
    console.log('Event tracked:', eventName, properties);
  }

  function handleCheckoutClick() {
    trackEvent('WTP Checkout');
    window.location.href = '/dto/checkout';
  }

  function createDTOOffer() {
    const container = document.getElementById('dto-offer-container');
    if (!container) {
      console.error('Container #dto-offer-container not found');
      return;
    }

    // Track page view
    trackEvent('DTO Offer Page View');

    const html = `
      <div class="min-h-screen bg-white">
        <!-- Urgency Bar -->
        <div id="urgency-bar" class="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium">
          <div class="container mx-auto flex justify-between items-center">
            <span>⚡ Last Chance: Only 12 spots remaining at this exclusive rate</span>
            <button onclick="document.getElementById('urgency-bar').style.display='none'" class="text-white hover:text-gray-200 text-lg font-bold">
              ×
            </button>
          </div>
        </div>

        <!-- Hero Section -->
        <section class="relative pt-8 md:pt-12 pb-12 md:pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div class="container mx-auto px-4 md:px-6 relative z-10">
            <div class="max-w-5xl mx-auto text-center transform transition-all duration-700 opacity-100 translate-y-0">
              <div class="mb-6 inline-flex items-center bg-red-600 text-white px-6 py-2 text-sm font-bold rounded-full">
                EXCLUSIVE 80% OFF - LIMITED TIME ONLY
              </div>

              <h1 class="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight tracking-tight">
                <span class="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Wealth Through Property</span>
                <br />2-Day <span class="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Intensive</span>
              </h1>

              <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto font-medium">
                Join Paul Smith, Abi Hookway, and Gordie Dutfield for an exclusive 2-day property 
                investment masterclass. Learn the exact strategies that have generated over
                <span class="font-extrabold text-blue-600 bg-yellow-200 px-2 py-1 rounded">
                  £30M in student portfolio value
                </span>
              </p>

              <!-- Price & CTA -->
              <div class="mb-8 max-w-2xl mx-auto">
                <div class="border-2 border-blue-600 shadow-2xl rounded-lg bg-white">
                  <div class="p-8">
                    <div class="text-center mb-6">
                      <div class="flex justify-center items-baseline gap-4 mb-4">
                        <span class="text-5xl font-black text-blue-600">£99</span>
                        <div class="text-left">
                          <div class="text-2xl line-through text-gray-500">£497</div>
                          <div class="text-sm font-bold text-green-600">Save £398 (80% OFF)</div>
                        </div>
                      </div>
                      
                      <button onclick="handleCheckoutClick()" class="w-full py-6 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg mb-4">
                        Secure My Spot Now 
                        <svg class="inline ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                      </button>

                      <div class="flex justify-center gap-4 items-center text-sm text-gray-600">
                        <div class="flex items-center">
                          <svg class="h-4 w-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span>Money-Back Guarantee</span>
                        </div>
                        <div class="flex items-center">
                          <svg class="h-4 w-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                          </svg>
                          <span>Offer Expires Soon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-center gap-6 items-center text-sm text-gray-600">
                <div class="flex items-center">
                  <svg class="h-4 w-4 text-blue-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                  </svg>
                  <span>2 Full Days Training</span>
                </div>
                <div class="flex items-center">
                  <svg class="h-4 w-4 text-blue-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                  <span>Limited to 50 Attendees</span>
                </div>
                <div class="flex items-center">
                  <svg class="h-4 w-4 text-blue-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>CPD Accredited</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- What's Included Section -->
        <section class="py-12 md:py-20 bg-gray-50">
          <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-6xl mx-auto">
              <div class="text-center mb-12">
                <h2 class="text-3xl md:text-5xl font-black mb-6">
                  Your Complete <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Training Package</span>
                </h2>
                <p class="text-lg text-gray-600">
                  Everything you need to build a profitable property portfolio
                </p>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <!-- 2-Day Live Training -->
                <div class="border-2 border-blue-100 shadow-lg rounded-lg bg-white">
                  <div class="p-8">
                    <div class="text-center mb-6">
                      <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg class="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <h3 class="text-2xl font-bold mb-4">2-Day Live Training Includes:</h3>
                    </div>
                    
                    <div class="space-y-4">
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-sm">How to safely access your property equity for new investments</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-sm">Buy-refurb-refinance mastery training</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-sm">Serviced accommodation business setup</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-sm">Sourcing & selling deals for £10k+ monthly</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-sm">No money down deal strategies</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-sm">Property LTD entity setup & management</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-sm">Live Q&A sessions</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-sm">Mindset training</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-sm">Complete property toolkit</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-sm">90-day follow-up support</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Exclusive Bonuses -->
                <div class="border-2 border-green-100 shadow-lg rounded-lg bg-white">
                  <div class="p-8">
                    <div class="text-center mb-6">
                      <div class="mb-4 inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        EXCLUSIVE BONUSES
                      </div>
                      <h3 class="text-2xl font-bold mb-2">Premium Resources</h3>
                      <p class="text-sm text-gray-600">Valued at £5,625 - Included FREE</p>
                    </div>
                    
                    <div class="space-y-4">
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <div>
                          <span class="font-medium text-sm">£100 Touchstone Education Voucher</span>
                          <p class="text-xs text-gray-600">Redeemable across our complete course portfolio</p>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <div>
                          <span class="font-medium text-sm">Property Success E-Book Collection (£30 value)</span>
                          <p class="text-xs text-gray-600">£180K profit in 6 months through strategic property flipping</p>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <div>
                          <span class="font-medium text-sm">Advanced Flipping Analysis Tool (£495 value)</span>
                          <p class="text-xs text-gray-600">Professional-grade calculator for property valuation and profit estimation</p>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <div>
                          <span class="font-medium text-sm">Wealth Assessment Platform (£5,000 value)</span>
                          <p class="text-xs text-gray-600">Comprehensive wealth positioning and growth projections, plus our Net Worth Calculator</p>
                        </div>
                      </div>
                    </div>

                    <div class="border-t border-gray-200 my-6"></div>
                    
                    <div class="text-center">
                      <div class="text-2xl font-black text-green-600 mb-2">Total Value: £5,625</div>
                      <div class="text-sm text-gray-600">Your Investment: £99</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- CTA Section -->
              <div class="text-center">
                <div class="border-2 border-blue-600 shadow-2xl max-w-2xl mx-auto rounded-lg bg-white">
                  <div class="p-8">
                    <h3 class="text-2xl font-bold mb-4">Ready to Transform Your Financial Future?</h3>
                    <p class="text-gray-600 mb-6">
                      Join 1,200+ successful students who've used these exact strategies to build wealth through property
                    </p>
                    
                    <button onclick="handleCheckoutClick()" class="w-full py-6 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg mb-4">
                      Get My WTP Ticket for £99 
                      <svg class="inline ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                      </svg>
                    </button>
                    
                    <p class="text-xs text-gray-600">
                      Protected by our 100% money-back guarantee
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Meet Your Trainers -->
        <section class="py-12 md:py-20 bg-white">
          <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-6xl mx-auto">
              <div class="text-center mb-12">
                <h2 class="text-3xl md:text-5xl font-black mb-6">
                  Meet Your <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Trainers</span>
                </h2>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <!-- Paul Smith -->
                <div class="border-2 border-blue-100 shadow-lg rounded-lg bg-white">
                  <div class="p-8">
                    <div class="flex items-start gap-6">
                      <div class="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div>
                        <h3 class="text-xl font-bold mb-2">Paul Smith</h3>
                        <p class="text-sm text-blue-600 font-medium mb-4">Commercial Property Expert</p>
                        <div class="space-y-2 text-sm text-gray-600">
                          <div class="flex items-center gap-2">
                            <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path>
                            </svg>
                            <span>£30M+ property portfolio</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>40+ years experience</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                            </svg>
                            <span>1,200+ investors mentored</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Abi Hookway -->
                <div class="border-2 border-blue-100 shadow-lg rounded-lg bg-white">
                  <div class="p-8">
                    <div class="flex items-start gap-6">
                      <div class="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div>
                        <h3 class="text-xl font-bold mb-2">Abi Hookway</h3>
                        <p class="text-sm text-blue-600 font-medium mb-4">Property Investing Mum</p>
                        <div class="space-y-2 text-sm text-gray-600">
                          <div class="flex items-center gap-2">
                            <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path>
                            </svg>
                            <span>£8M+ portfolio in 8 years</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>From £24k debt to millionaire</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                            </svg>
                            <span>Single mum success story</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Social Proof & Testimonials -->
        <section class="py-12 md:py-20 bg-gray-50">
          <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-6xl mx-auto">
              <div class="text-center mb-12">
                <h2 class="text-3xl md:text-5xl font-black mb-6">
                  What Our <span class="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Students Say</span>
                </h2>
                <p class="text-lg text-gray-600">
                  Real results from real people
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <!-- Testimonial 1 -->
                <div class="border-0 shadow-lg rounded-lg bg-white">
                  <div class="p-8">
                    <div class="flex items-center mb-4">
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <p class="text-sm text-gray-600 mb-6">
                      "The strategies I learned at WTP helped me secure my first deal within 
                      3 months. ROI was 15% in year one! The follow-up support was incredible."
                    </p>
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg class="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <p class="font-medium">Sarah Mitchell</p>
                        <p class="text-xs text-gray-600">First-time Investor, Manchester</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="border-0 shadow-lg rounded-lg bg-white">
                  <div class="p-8">
                    <div class="flex items-center mb-4">
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <p class="text-sm text-gray-600 mb-6">
                      "Best investment I ever made. Paul and Abi's expertise is unmatched. 
                      I've built a £2M portfolio in 18 months using their strategies."
                    </p>
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg class="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <p class="font-medium">James Robinson</p>
                        <p class="text-xs text-gray-600">Portfolio Investor, Birmingham</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Testimonial 3 -->
                <div class="border-0 shadow-lg rounded-lg bg-white">
                  <div class="p-8">
                    <div class="flex items-center mb-4">
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <p class="text-sm text-gray-600 mb-6">
                      "The networking alone was worth the ticket price. I've partnered 
                      with 3 other attendees on deals totalling £5M in value."
                    </p>
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg class="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <p class="font-medium">Emma Thompson</p>
                        <p class="text-xs text-gray-600">Property Developer, London</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Money-Back Guarantee -->
        <section class="py-12 md:py-20 bg-green-50">
          <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-4xl mx-auto text-center">
              <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              
              <h2 class="text-3xl md:text-4xl font-black mb-6">
                100% <span class="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Money-Back Guarantee</span>
              </h2>
              
              <p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Dive into day one with ease. If you don't find our training top-notch, 
                we ensure a hassle-free refund. No questions asked.
              </p>
              
              <p class="text-sm text-gray-600 italic">
                "We don't want your money - we want your commitment to success!"
              </p>
            </div>
          </div>
        </section>

        <!-- Final CTA -->
        <section class="py-12 md:py-20 bg-white">
          <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-4xl mx-auto text-center">
              <div class="mb-6 inline-flex items-center bg-red-600 text-white px-6 py-3 text-lg font-bold rounded-full animate-pulse">
                ⚡ LIMITED TIME: 80% OFF ENDS SOON
              </div>
              
              <h2 class="text-3xl md:text-5xl font-black mb-6">
                Don't Miss This <span class="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Exclusive Opportunity</span>
              </h2>
              
              <p class="text-lg text-gray-600 mb-8">
                This 80% discount is only available to those who engaged with our content. 
                Secure your spot before the price returns to £497.
              </p>

              <div class="border-2 border-blue-600 shadow-2xl max-w-2xl mx-auto rounded-lg bg-white">
                <div class="p-8">
                  <div class="flex justify-center items-baseline gap-4 mb-6">
                    <span class="text-5xl font-black text-blue-600">£99</span>
                    <div class="text-left">
                      <div class="text-2xl line-through text-gray-500">£497</div>
                      <div class="text-sm font-bold text-green-600">Save £398 Today</div>
                    </div>
                  </div>
                  
                  <button onclick="handleCheckoutClick()" class="w-full py-6 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg mb-4">
                    Claim My WTP Spot Now 
                    <svg class="inline ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                  
                  <div class="grid grid-cols-2 gap-4 text-xs text-gray-600">
                    <div class="flex items-center justify-center">
                      <svg class="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Money-Back Guarantee</span>
                    </div>
                    <div class="flex items-center justify-center">
                      <svg class="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Limited Availability</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8 text-sm text-gray-600">
                <p>Questions? Contact our team:</p>
                <div class="flex justify-center gap-6 mt-2">
                  <div class="flex items-center">
                    <svg class="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span>0800 123 4567</span>
                  </div>
                  <div class="flex items-center">
                    <svg class="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span>support@touchstoneeducation.co.uk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;

    container.innerHTML = html;

    // Make the checkout function globally available
    window.handleCheckoutClick = handleCheckoutClick;

    // Add comprehensive CSS styles
    if (!document.getElementById('dto-offer-complete-styles')) {
      const style = document.createElement('style');
      style.id = 'dto-offer-complete-styles';
      style.textContent = `
        /* Reset and base styles */
        .dto-offer-widget * {
          box-sizing: border-box;
        }
        
        /* Container styles */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        @media (min-width: 768px) {
          .container {
            padding: 0 1.5rem;
          }
        }
        
        /* Typography */
        .font-black { font-weight: 900; }
        .font-bold { font-weight: 700; }
        .font-medium { font-weight: 500; }
        
        /* Colors */
        .text-gray-600 { color: #4b5563; }
        .text-gray-500 { color: #6b7280; }
        .text-blue-600 { color: #2563eb; }
        .text-green-500 { color: #10b981; }
        .text-green-600 { color: #059669; }
        .text-red-500 { color: #ef4444; }
        .text-yellow-400 { color: #fbbf24; }
        
        .bg-white { background-color: #ffffff; }
        .bg-gray-50 { background-color: #f9fafb; }
        .bg-gray-200 { background-color: #e5e7eb; }
        .bg-blue-100 { background-color: #dbeafe; }
        .bg-green-50 { background-color: #f0fdf4; }
        .bg-green-500 { background-color: #10b981; }
        .bg-green-600 { background-color: #059669; }
        .bg-red-600 { background-color: #dc2626; }
        .bg-yellow-200 { background-color: #fef3c7; }
        
        /* Layout */
        .min-h-screen { min-height: 100vh; }
        .container { max-width: 1200px; margin: 0 auto; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-center { text-align: center; }
        .flex { display: flex; }
        .grid { display: grid; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .gap-2 { gap: 0.5rem; }
        .gap-3 { gap: 0.75rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }
        
        /* Grid */
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        
        @media (min-width: 1024px) {
          .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        
        /* Padding and margins */
        .p-2 { padding: 0.5rem; }
        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .p-8 { padding: 2rem; }
        .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        .mt-2 { margin-top: 0.5rem; }
        .mt-8 { margin-top: 2rem; }
        .mr-1 { margin-right: 0.25rem; }
        .ml-2 { margin-left: 0.5rem; }
        
        @media (min-width: 768px) {
          .md\\:py-20 { padding-top: 5rem; padding-bottom: 5rem; }
          .md\\:pt-12 { padding-top: 3rem; }
          .md\\:pb-20 { padding-bottom: 5rem; }
          .md\\:mb-8 { margin-bottom: 2rem; }
        }
        
        /* Sizing */
        .w-3 { width: 0.75rem; }
        .w-4 { width: 1rem; }
        .w-5 { width: 1.25rem; }
        .w-10 { width: 2.5rem; }
        .w-16 { width: 4rem; }
        .w-20 { width: 5rem; }
        .w-24 { width: 6rem; }
        .w-full { width: 100%; }
        .h-3 { height: 0.75rem; }
        .h-4 { height: 1rem; }
        .h-5 { height: 1.25rem; }
        .h-8 { height: 2rem; }
        .h-10 { height: 2.5rem; }
        .h-16 { height: 4rem; }
        .h-20 { height: 5rem; }
        .h-24 { height: 6rem; }
        
        .max-w-2xl { max-width: 42rem; }
        .max-w-3xl { max-width: 48rem; }
        .max-w-4xl { max-width: 56rem; }
        .max-w-5xl { max-width: 64rem; }
        .max-w-6xl { max-width: 72rem; }
        
        /* Typography sizes */
        .text-xs { font-size: 0.75rem; line-height: 1rem; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .text-5xl { font-size: 3rem; line-height: 1; }
        
        @media (min-width: 768px) {
          .md\\:text-xl { font-size: 1.25rem; line-height: 1.75rem; }
          .md\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
          .md\\:text-5xl { font-size: 3rem; line-height: 1; }
          .md\\:text-6xl { font-size: 3.75rem; line-height: 1; }
        }
        
        @media (min-width: 1024px) {
          .lg\\:text-7xl { font-size: 4.5rem; line-height: 1; }
        }
        
        /* Borders and rounded corners */
        .border-0 { border-width: 0; }
        .border-2 { border-width: 2px; }
        .border-t { border-top-width: 1px; }
        .border-gray-200 { border-color: #e5e7eb; }
        .border-blue-100 { border-color: #dbeafe; }
        .border-blue-600 { border-color: #2563eb; }
        .border-green-100 { border-color: #dcfce7; }
        
        .rounded { border-radius: 0.25rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-full { border-radius: 9999px; }
        
        /* Shadows */
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
        .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
        
        /* Transitions and animations */
        .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .duration-200 { transition-duration: 200ms; }
        .duration-700 { transition-duration: 700ms; }
        
        .transform { transform: translate(0, 0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1); }
        .hover\\:scale-105:hover { transform: scale(1.05); }
        .translate-y-0 { transform: translateY(0); }
        .opacity-100 { opacity: 1; }
        
        /* Animations */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        
        /* Flexbox utilities */
        .items-start { align-items: flex-start; }
        .items-baseline { align-items: baseline; }
        .justify-between { justify-content: space-between; }
        .flex-shrink-0 { flex-shrink: 0; }
        
        /* Text utilities */
        .line-through { text-decoration: line-through; }
        .leading-tight { line-height: 1.25; }
        .tracking-tight { letter-spacing: -0.025em; }
        .italic { font-style: italic; }
        
        /* Background gradients */
        .bg-gradient-to-b { background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); }
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .from-gray-50 { --tw-gradient-from: #f9fafb; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(249, 250, 251, 0)); }
        .to-white { --tw-gradient-to: #ffffff; }
        .from-orange-400 { --tw-gradient-from: #fb923c; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(251, 146, 60, 0)); }
        .to-red-500 { --tw-gradient-to: #ef4444; }
        .from-green-500 { --tw-gradient-from: #10b981; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(16, 185, 129, 0)); }
        .to-emerald-500 { --tw-gradient-to: #10b981; }
        .from-blue-600 { --tw-gradient-from: #2563eb; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(37, 99, 235, 0)); }
        .to-blue-700 { --tw-gradient-to: #1d4ed8; }
        .from-purple-600 { --tw-gradient-from: #9333ea; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(147, 51, 234, 0)); }
        .to-purple-600 { --tw-gradient-to: #9333ea; }
        
        /* Background clip */
        .bg-clip-text { background-clip: text; -webkit-background-clip: text; }
        .text-transparent { color: transparent; }
        
        /* Hover states */
        .hover\\:text-gray-200:hover { color: #e5e7eb; }
        .hover\\:from-blue-700:hover { --tw-gradient-from: #1d4ed8; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(29, 78, 216, 0)); }
        .hover\\:to-blue-800:hover { --tw-gradient-to: #1e40af; }
        
        /* Button styles */
        button {
          cursor: pointer;
          border: none;
          outline: none;
        }
        
        button:focus {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }
        
        /* SVG utilities */
        .fill-current { fill: currentColor; }
        
        /* Overflow */
        .overflow-hidden { overflow: hidden; }
        
        /* Position */
        .relative { position: relative; }
        
        /* Z-index */
        .z-10 { z-index: 10; }
        
        /* Space */
        .space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5rem; }
        .space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.75rem; }
        .space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 1rem; }
        
        /* Inline utilities */
        .inline { display: inline; }
        .inline-flex { display: inline-flex; }
      `;
      document.head.appendChild(style);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createDTOOffer);
  } else {
    createDTOOffer();
  }

})();
