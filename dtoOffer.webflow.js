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

    trackEvent('DTO Offer Page View');

    const html = `
      <div class="min-h-screen bg-white">
        <!-- Urgency Bar -->
        <div id="urgency-bar" class="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium">
          <div class="container mx-auto flex justify-between items-center">
            <span>⚡ Last Chance: Only 12 spots remaining at this exclusive rate</span>
            <button onclick="document.getElementById('urgency-bar').style.display='none'" class="text-white hover:text-gray-200">×</button>
          </div>
        </div>

        <!-- Hero Section -->
        <section class="relative pt-8 md:pt-12 pb-12 md:pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div class="container mx-auto px-4 md:px-6 relative z-10">
            <div class="max-w-5xl mx-auto text-center">
              <div class="mb-6 bg-red-600 text-white px-6 py-2 text-sm font-bold inline-block rounded">
                EXCLUSIVE 80% OFF - LIMITED TIME ONLY
              </div>

              <h1 class="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight tracking-tight">
                <span class="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Wealth Through Property</span>
                <br />2-Day <span class="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Intensive</span>
              </h1>

              <p class="text-lg md:text-xl text-gray-700 mb-8 max-w-4xl mx-auto font-medium">
                Join Paul Smith, Abi Hookway, and Gordie Dutfield for an exclusive 2-day property 
                investment masterclass. Learn the exact strategies that have generated over
                <span class="font-extrabold text-blue-600 bg-yellow-200 px-2 py-1 rounded">£30M in student portfolio value</span>
              </p>

              <!-- Price & CTA -->
              <div class="mb-8 max-w-2xl mx-auto">
                <div class="border-2 border-blue-600 shadow-2xl bg-white rounded-lg">
                  <div class="p-8">
                    <div class="text-center mb-6">
                      <div class="flex justify-center items-baseline gap-4 mb-4">
                        <span class="text-5xl font-black text-blue-600">£99</span>
                        <div class="text-left">
                          <div class="text-2xl line-through text-gray-500">£497</div>
                          <div class="text-sm font-bold text-green-600">Save £398 (80% OFF)</div>
                        </div>
                      </div>
                      
                      <button id="main-cta-btn" class="w-full py-6 text-xl font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors mb-4">
                        Secure My Spot Now →
                      </button>

                      <div class="flex justify-center gap-4 items-center text-sm text-gray-600">
                        <div class="flex items-center">
                          <svg class="h-4 w-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                          </svg>
                          <span>Money-Back Guarantee</span>
                        </div>
                        <div class="flex items-center">
                          <svg class="h-4 w-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
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
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                  </svg>
                  <span>2 Full Days Training</span>
                </div>
                <div class="flex items-center">
                  <svg class="h-4 w-4 text-blue-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  <span>Limited to 50 Attendees</span>
                </div>
                <div class="flex items-center">
                  <svg class="h-4 w-4 text-blue-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
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
                  Your Complete <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Training Package</span>
                </h2>
                <p class="text-lg text-gray-700">
                  Everything you need to build a profitable property portfolio
                </p>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <!-- 2-Day Live Training -->
                <div class="border-2 border-blue-200 shadow-lg bg-white rounded-lg">
                  <div class="p-8">
                    <div class="text-center mb-6">
                      <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg class="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <h3 class="text-2xl font-bold mb-4">2-Day Live Training Includes:</h3>
                    </div>
                    
                    <div class="space-y-4">
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm">How to safely access your property equity for new investments</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm">Buy-refurb-refinance mastery training</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm">Serviced accommodation business setup</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm">Sourcing & selling deals for £10k+ monthly</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm">No money down deal strategies</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm">Property LTD entity setup & management</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm">Live Q&A sessions</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm">Mindset training</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm">Complete property toolkit</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm">90-day follow-up support</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Exclusive Bonuses -->
                <div class="border-2 border-green-200 shadow-lg bg-white rounded-lg">
                  <div class="p-8">
                    <div class="text-center mb-6">
                      <div class="mb-4 bg-green-600 text-white px-4 py-2 inline-block rounded">
                        EXCLUSIVE BONUSES
                      </div>
                      <h3 class="text-2xl font-bold mb-2">Premium Resources</h3>
                      <p class="text-sm text-gray-600">Valued at £5,625 - Included FREE</p>
                    </div>
                    
                    <div class="space-y-4">
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <div>
                          <span class="font-medium text-sm">£100 Touchstone Education Voucher</span>
                          <p class="text-xs text-gray-500">Redeemable across our complete course portfolio</p>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <div>
                          <span class="font-medium text-sm">Property Success E-Book Collection (£30 value)</span>
                          <p class="text-xs text-gray-500">£180K profit in 6 months through strategic property flipping</p>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <div>
                          <span class="font-medium text-sm">Advanced Flipping Analysis Tool (£495 value)</span>
                          <p class="text-xs text-gray-500">Professional-grade calculator for property valuation and profit estimation</p>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <svg class="h-5 w-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <div>
                          <span class="font-medium text-sm">Wealth Assessment Platform (£5,000 value)</span>
                          <p class="text-xs text-gray-500">Comprehensive wealth positioning and growth projections, plus our Net Worth Calculator</p>
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
                <div class="border-2 border-blue-600 shadow-2xl max-w-2xl mx-auto bg-white rounded-lg">
                  <div class="p-8">
                    <h3 class="text-2xl font-bold mb-4">Ready to Transform Your Financial Future?</h3>
                    <p class="text-gray-600 mb-6">
                      Join 1,200+ successful students who've used these exact strategies to build wealth through property
                    </p>
                    
                    <button id="secondary-cta-btn" class="w-full py-6 text-xl font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors mb-4">
                      Get My WTP Ticket for £99 →
                    </button>
                    
                    <p class="text-xs text-gray-500">
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
                  Meet Your <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Expert Trainers</span>
                </h2>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <!-- Paul Smith -->
                <div class="border-2 border-blue-200 shadow-lg bg-white rounded-lg">
                  <div class="p-8">
                    <div class="flex items-start gap-6">
                      <div class="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div>
                        <h3 class="text-xl font-bold mb-2">Paul Smith</h3>
                        <p class="text-sm text-blue-600 font-medium mb-4">Commercial Property Expert</p>
                        <div class="space-y-2 text-sm text-gray-600">
                          <div class="flex items-center gap-2">
                            <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span>£30M+ property portfolio</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span>40+ years experience</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                            </svg>
                            <span>1,200+ investors mentored</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Abi Hookway -->
                <div class="border-2 border-blue-200 shadow-lg bg-white rounded-lg">
                  <div class="p-8">
                    <div class="flex items-start gap-6">
                      <div class="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div>
                        <h3 class="text-xl font-bold mb-2">Abi Hookway</h3>
                        <p class="text-sm text-blue-600 font-medium mb-4">Property Investing Mum</p>
                        <div class="space-y-2 text-sm text-gray-600">
                          <div class="flex items-center gap-2">
                            <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span>£8M+ portfolio in 8 years</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
                            </svg>
                            <span>From £24k debt to millionaire</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
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
                  What Our <span class="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Students Say</span>
                </h2>
                <p class="text-lg text-gray-700">
                  Real results from real people
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <!-- Testimonial 1 -->
                <div class="border-0 shadow-lg bg-white rounded-lg">
                  <div class="p-8">
                    <div class="flex items-center mb-4">
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p class="text-sm text-gray-600 mb-6">
                      "The strategies I learned at WTP helped me secure my first deal within 
                      3 months. ROI was 15% in year one! The follow-up support was incredible."
                    </p>
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg class="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p class="font-medium">Sarah Mitchell</p>
                        <p class="text-xs text-gray-500">First-time Investor, Manchester</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="border-0 shadow-lg bg-white rounded-lg">
                  <div class="p-8">
                    <div class="flex items-center mb-4">
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p class="text-sm text-gray-600 mb-6">
                      "Best investment I ever made. Paul and Abi's expertise is unmatched. 
                      I've built a £2M portfolio in 18 months using their strategies."
                    </p>
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg class="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p class="font-medium">James Robinson</p>
                        <p class="text-xs text-gray-500">Portfolio Investor, Birmingham</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Testimonial 3 -->
                <div class="border-0 shadow-lg bg-white rounded-lg">
                  <div class="p-8">
                    <div class="flex items-center mb-4">
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p class="text-sm text-gray-600 mb-6">
                      "The networking alone was worth the ticket price. I've partnered 
                      with 3 other attendees on deals totalling £5M in value."
                    </p>
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg class="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p class="font-medium">Emma Thompson</p>
                        <p class="text-xs text-gray-500">Property Developer, London</p>
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
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </div>
              
              <h2 class="text-3xl md:text-4xl font-black mb-6">
                100% <span class="bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">Money-Back Guarantee</span>
              </h2>
              
              <p class="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
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
              <div class="mb-6 bg-red-600 text-white px-6 py-3 text-lg font-bold inline-block rounded">
                ⚡ LIMITED TIME: 80% OFF ENDS SOON
              </div>
              
              <h2 class="text-3xl md:text-5xl font-black mb-6">
                Don't Miss This <span class="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Exclusive Opportunity</span>
              </h2>
              
              <p class="text-lg text-gray-700 mb-8">
                This 80% discount is only available to those who engaged with our content. 
                Secure your spot before the price returns to £497.
              </p>

              <div class="border-2 border-blue-600 shadow-2xl max-w-2xl mx-auto bg-white rounded-lg">
                <div class="p-8">
                  <div class="flex justify-center items-baseline gap-4 mb-6">
                    <span class="text-5xl font-black text-blue-600">£99</span>
                    <div class="text-left">
                      <div class="text-2xl line-through text-gray-500">£497</div>
                      <div class="text-sm font-bold text-green-600">Save £398 Today</div>
                    </div>
                  </div>
                  
                  <button id="final-cta-btn" class="w-full py-6 text-xl font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors mb-4">
                    Claim My WTP Spot Now →
                  </button>
                  
                  <div class="grid grid-cols-2 gap-4 text-xs text-gray-500">
                    <div class="flex items-center justify-center">
                      <svg class="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Money-Back Guarantee</span>
                    </div>
                    <div class="flex items-center justify-center">
                      <svg class="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
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
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>0800 123 4567</span>
                  </div>
                  <div class="flex items-center">
                    <svg class="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
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

    // Add event listeners for all CTA buttons
    const mainCtaBtn = document.getElementById('main-cta-btn');
    const secondaryCtaBtn = document.getElementById('secondary-cta-btn');
    const finalCtaBtn = document.getElementById('final-cta-btn');

    if (mainCtaBtn) {
      mainCtaBtn.addEventListener('click', handleCheckoutClick);
    }
    if (secondaryCtaBtn) {
      secondaryCtaBtn.addEventListener('click', handleCheckoutClick);
    }
    if (finalCtaBtn) {
      finalCtaBtn.addEventListener('click', handleCheckoutClick);
    }

    // Add some basic styling if not already present
    if (!document.getElementById('dto-offer-styles')) {
      const style = document.createElement('style');
      style.id = 'dto-offer-styles';
      style.textContent = `
        .dto-offer-container * {
          box-sizing: border-box;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .md\\:text-6xl { font-size: 3rem; }
          .md\\:text-5xl { font-size: 2.5rem; }
          .md\\:py-20 { padding-top: 3rem; padding-bottom: 3rem; }
          .md\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
          .md\\:grid-cols-2 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
          .md\\:grid-cols-3 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
          .lg\\:grid-cols-2 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        }
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
