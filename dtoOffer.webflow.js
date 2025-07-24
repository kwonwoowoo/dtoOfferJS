// DTOOffer Standalone Widget for Webflow
// Complete bundled version with all dependencies and styles included
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
    // Google Analytics tracking if available
    if (window.gtag) {
      window.gtag('event', eventName, properties);
    }
    console.log('Event tracked:', eventName, properties);
  }

  function handleCheckoutClick() {
    trackEvent('WTP Checkout');
    // Navigate to your checkout page - update this URL
    window.location.href = '/dto/checkout';
  }

  function handleCloseUrgency() {
    const urgencyBar = document.getElementById('urgency-bar');
    if (urgencyBar) {
      urgencyBar.style.display = 'none';
    }
  }

  // SVG Icons as strings
  const icons = {
    arrowRight: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>',
    checkCircle: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>',
    clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>',
    users: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    star: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>',
    calendar: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    award: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/></svg>',
    trendingUp: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>',
    target: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    shield: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    user: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    phone: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>'
  };

  function createDTOOfferWidget() {
    const container = document.getElementById('dto-offer-widget');
    if (!container) {
      console.error('Container #dto-offer-widget not found');
      return;
    }

    // Track page view
    trackEvent('DTO Offer Page View');

    const html = `
      <div class="dto-min-h-screen dto-bg-white">
        <!-- Urgency Bar -->
        <div id="urgency-bar" class="dto-bg-red-600 dto-text-white dto-py-2 dto-px-4 dto-text-center dto-text-sm dto-font-medium">
          <div class="dto-container dto-mx-auto dto-flex dto-justify-between dto-items-center">
            <span>⚡ Last Chance: Only 12 spots remaining at this exclusive rate</span>
            <button onclick="window.DTOWidget.handleCloseUrgency()" class="dto-text-white hover:dto-text-gray-200">×</button>
          </div>
        </div>

        <!-- Hero Section -->
        <section class="dto-relative dto-pt-8 md:dto-pt-12 dto-pb-12 md:dto-pb-20 dto-overflow-hidden dto-bg-gradient-to-b dto-from-gray-50 dto-to-white">
          <div class="dto-container dto-mx-auto dto-px-4 md:dto-px-6 dto-relative dto-z-10">
            <div class="dto-max-w-5xl dto-mx-auto dto-text-center">
              <div class="dto-mb-6 dto-bg-red-600 dto-text-white dto-px-6 dto-py-2 dto-text-sm dto-font-bold dto-inline-block dto-rounded">
                EXCLUSIVE 80% OFF - LIMITED TIME ONLY
              </div>

              <h1 class="dto-text-4xl md:dto-text-6xl lg:dto-text-7xl dto-font-black dto-mb-6 md:dto-mb-8 dto-leading-tight dto-tracking-tight">
                <span class="dto-highlight-secondary">Wealth Through Property</span><br>
                2-Day <span class="dto-highlight-green">Intensive</span>
              </h1>

              <p class="dto-text-lg md:dto-text-xl dto-text-gray-700 dto-mb-8 dto-max-w-4xl dto-mx-auto dto-font-medium">
                Join Paul Smith, Abi Hookway, and Gordie Dutfield for an exclusive 2-day property 
                investment masterclass. Learn the exact strategies that have generated over 
                <span class="dto-font-extrabold dto-text-blue-600">
                  <span class="dto-highlight-marker">£30M in student portfolio value</span>
                </span>
              </p>

              <!-- Price & CTA -->
              <div class="dto-mb-8 dto-max-w-2xl dto-mx-auto">
                <div class="dto-border-2 dto-border-blue-600 dto-shadow-2xl dto-rounded-lg dto-bg-white">
                  <div class="dto-p-8">
                    <div class="dto-text-center dto-mb-6">
                      <div class="dto-flex dto-justify-center dto-items-baseline dto-gap-4 dto-mb-4">
                        <span class="dto-text-5xl dto-font-black dto-text-blue-600">£99</span>
                        <div class="dto-text-left">
                          <div class="dto-text-2xl dto-line-through dto-text-gray-500">£497</div>
                          <div class="dto-text-sm dto-font-bold dto-text-green-600">Save £398 (80% OFF)</div>
                        </div>
                      </div>
                      
                      <button onclick="window.DTOWidget.handleCheckoutClick()" class="dto-w-full dto-py-6 dto-text-xl dto-font-bold dto-bg-blue-600 dto-text-white dto-rounded-lg hover:dto-bg-blue-700 dto-transition-colors dto-mb-4 dto-flex dto-items-center dto-justify-center dto-gap-2">
                        Secure My Spot Now ${icons.arrowRight}
                      </button>

                      <div class="dto-flex dto-justify-center dto-gap-4 dto-items-center dto-text-sm dto-text-gray-600">
                        <div class="dto-flex dto-items-center">
                          ${icons.shield}
                          <span class="dto-ml-1">Money-Back Guarantee</span>
                        </div>
                        <div class="dto-flex dto-items-center">
                          ${icons.clock}
                          <span class="dto-ml-1 dto-text-red-500">Offer Expires Soon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="dto-flex dto-justify-center dto-gap-6 dto-items-center dto-text-sm dto-text-gray-600">
                <div class="dto-flex dto-items-center">
                  ${icons.calendar}
                  <span class="dto-ml-1">2 Full Days Training</span>
                </div>
                <div class="dto-flex dto-items-center">
                  ${icons.users}
                  <span class="dto-ml-1">Limited to 50 Attendees</span>
                </div>
                <div class="dto-flex dto-items-center">
                  ${icons.award}
                  <span class="dto-ml-1">CPD Accredited</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- What's Included Section -->
        <section class="dto-py-12 md:dto-py-20 dto-bg-gray-50">
          <div class="dto-container dto-mx-auto dto-px-4 md:dto-px-6">
            <div class="dto-max-w-6xl dto-mx-auto">
              <div class="dto-text-center dto-mb-12">
                <h2 class="dto-text-3xl md:dto-text-5xl dto-font-black dto-mb-6">
                  Your Complete <span class="dto-highlight-primary">Training Package</span>
                </h2>
                <p class="dto-text-lg dto-text-gray-700">
                  Everything you need to build a profitable property portfolio
                </p>
              </div>

              <div class="dto-grid dto-grid-cols-1 lg:dto-grid-cols-2 dto-gap-8 dto-mb-12">
                <!-- 2-Day Live Training -->
                <div class="dto-border-2 dto-border-blue-200 dto-shadow-lg dto-rounded-lg dto-bg-white">
                  <div class="dto-p-8">
                    <div class="dto-text-center dto-mb-6">
                      <div class="dto-w-16 dto-h-16 dto-bg-blue-100 dto-rounded-lg dto-flex dto-items-center dto-justify-center dto-mx-auto dto-mb-4">
                        ${icons.calendar}
                      </div>
                      <h3 class="dto-text-2xl dto-font-bold dto-mb-4">2-Day Live Training Includes:</h3>
                    </div>
                    
                    <div class="dto-space-y-4">
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.checkCircle}
                        <span class="dto-text-sm">How to safely access your property equity for new investments</span>
                      </div>
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.checkCircle}
                        <span class="dto-text-sm">Buy-refurb-refinance mastery training</span>
                      </div>
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.checkCircle}
                        <span class="dto-text-sm">Serviced accommodation business setup</span>
                      </div>
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.checkCircle}
                        <span class="dto-text-sm">Sourcing & selling deals for £10k+ monthly</span>
                      </div>
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.checkCircle}
                        <span class="dto-text-sm">No money down deal strategies</span>
                      </div>
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.checkCircle}
                        <span class="dto-text-sm">Property LTD entity setup & management</span>
                      </div>
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.checkCircle}
                        <span class="dto-text-sm">Live Q&A sessions</span>
                      </div>
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.checkCircle}
                        <span class="dto-text-sm">Mindset training</span>
                      </div>
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.checkCircle}
                        <span class="dto-text-sm">Complete property toolkit</span>
                      </div>
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.checkCircle}
                        <span class="dto-text-sm">90-day follow-up support</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Exclusive Bonuses -->
                <div class="dto-border-2 dto-border-green-200 dto-shadow-lg dto-rounded-lg dto-bg-white">
                  <div class="dto-p-8">
                    <div class="dto-text-center dto-mb-6">
                      <div class="dto-mb-4 dto-bg-green-600 dto-text-white dto-px-4 dto-py-2 dto-inline-block dto-rounded">
                        EXCLUSIVE BONUSES
                      </div>
                      <h3 class="dto-text-2xl dto-font-bold dto-mb-2">Premium Resources</h3>
                      <p class="dto-text-sm dto-text-gray-600">Valued at £5,625 - Included FREE</p>
                    </div>
                    
                    <div class="dto-space-y-4">
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.award}
                        <div>
                          <span class="dto-font-medium dto-text-sm">£100 Touchstone Education Voucher</span>
                          <p class="dto-text-xs dto-text-gray-600">Redeemable across our complete course portfolio</p>
                        </div>
                      </div>
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.award}
                        <div>
                          <span class="dto-font-medium dto-text-sm">Property Success E-Book Collection (£30 value)</span>
                          <p class="dto-text-xs dto-text-gray-600">£180K profit in 6 months through strategic property flipping</p>
                        </div>
                      </div>
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.award}
                        <div>
                          <span class="dto-font-medium dto-text-sm">Advanced Flipping Analysis Tool (£495 value)</span>
                          <p class="dto-text-xs dto-text-gray-600">Professional-grade calculator for property valuation and profit estimation</p>
                        </div>
                      </div>
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.award}
                        <div>
                          <span class="dto-font-medium dto-text-sm">Wealth Assessment Platform (£5,000 value)</span>
                          <p class="dto-text-xs dto-text-gray-600">Comprehensive wealth positioning and growth projections, plus our Net Worth Calculator</p>
                        </div>
                      </div>
                    </div>

                    <div class="dto-border-t dto-border-gray-200 dto-my-6"></div>
                    
                    <div class="dto-text-center">
                      <div class="dto-text-2xl dto-font-black dto-text-green-600 dto-mb-2">Total Value: £5,625</div>
                      <div class="dto-text-sm dto-text-gray-600">Your Investment: £99</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- CTA Section -->
              <div class="dto-text-center">
                <div class="dto-border-2 dto-border-blue-600 dto-shadow-2xl dto-max-w-2xl dto-mx-auto dto-rounded-lg dto-bg-white">
                  <div class="dto-p-8">
                    <h3 class="dto-text-2xl dto-font-bold dto-mb-4">Ready to Transform Your Financial Future?</h3>
                    <p class="dto-text-gray-600 dto-mb-6">
                      Join 1,200+ successful students who've used these exact strategies to build wealth through property
                    </p>
                    
                    <button onclick="window.DTOWidget.handleCheckoutClick()" class="dto-w-full dto-py-6 dto-text-xl dto-font-bold dto-bg-blue-600 dto-text-white dto-rounded-lg hover:dto-bg-blue-700 dto-transition-colors dto-mb-4 dto-flex dto-items-center dto-justify-center dto-gap-2">
                      Get My WTP Ticket for £99 ${icons.arrowRight}
                    </button>
                    
                    <p class="dto-text-xs dto-text-gray-600">
                      Protected by our 100% money-back guarantee
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Meet Your Trainers -->
        <section class="dto-py-12 md:dto-py-20 dto-bg-white">
          <div class="dto-container dto-mx-auto dto-px-4 md:dto-px-6">
            <div class="dto-max-w-6xl dto-mx-auto">
              <div class="dto-text-center dto-mb-12">
                <h2 class="dto-text-3xl md:dto-text-5xl dto-font-black dto-mb-6">
                  Meet Your <span class="dto-highlight-primary">Expert Trainers</span>
                </h2>
              </div>

              <div class="dto-grid dto-grid-cols-1 md:dto-grid-cols-2 dto-gap-8 dto-mb-12">
                <!-- Paul Smith -->
                <div class="dto-border-2 dto-border-blue-200 dto-shadow-lg dto-rounded-lg dto-bg-white">
                  <div class="dto-p-8">
                    <div class="dto-flex dto-items-start dto-gap-6">
                      <div class="dto-w-24 dto-h-24 dto-bg-gray-200 dto-rounded-full dto-flex-shrink-0"></div>
                      <div>
                        <h3 class="dto-text-xl dto-font-bold dto-mb-2">Paul Smith</h3>
                        <p class="dto-text-sm dto-text-blue-600 dto-font-medium dto-mb-4">Commercial Property Expert</p>
                        <div class="dto-space-y-2 dto-text-sm dto-text-gray-600">
                          <div class="dto-flex dto-items-center dto-gap-2">
                            ${icons.trendingUp}
                            <span>£30M+ property portfolio</span>
                          </div>
                          <div class="dto-flex dto-items-center dto-gap-2">
                            ${icons.award}
                            <span>40+ years experience</span>
                          </div>
                          <div class="dto-flex dto-items-center dto-gap-2">
                            ${icons.users}
                            <span>1,200+ investors mentored</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Abi Hookway -->
                <div class="dto-border-2 dto-border-blue-200 dto-shadow-lg dto-rounded-lg dto-bg-white">
                  <div class="dto-p-8">
                    <div class="dto-flex dto-items-start dto-gap-6">
                      <div class="dto-w-24 dto-h-24 dto-bg-gray-200 dto-rounded-full dto-flex-shrink-0"></div>
                      <div>
                        <h3 class="dto-text-xl dto-font-bold dto-mb-2">Abi Hookway</h3>
                        <p class="dto-text-sm dto-text-blue-600 dto-font-medium dto-mb-4">Property Investing Mum</p>
                        <div class="dto-space-y-2 dto-text-sm dto-text-gray-600">
                          <div class="dto-flex dto-items-center dto-gap-2">
                            ${icons.trendingUp}
                            <span>£8M+ portfolio in 8 years</span>
                          </div>
                          <div class="dto-flex dto-items-center dto-gap-2">
                            ${icons.target}
                            <span>From £24k debt to millionaire</span>
                          </div>
                          <div class="dto-flex dto-items-center dto-gap-2">
                            ${icons.users}
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
        <section class="dto-py-12 md:dto-py-20 dto-bg-gray-50">
          <div class="dto-container dto-mx-auto dto-px-4 md:dto-px-6">
            <div class="dto-max-w-6xl dto-mx-auto">
              <div class="dto-text-center dto-mb-12">
                <h2 class="dto-text-3xl md:dto-text-5xl dto-font-black dto-mb-6">
                  What Our <span class="dto-highlight-secondary">Students Say</span>
                </h2>
                <p class="dto-text-lg dto-text-gray-700">
                  Real results from real people
                </p>
              </div>

              <div class="dto-grid dto-grid-cols-1 md:dto-grid-cols-3 dto-gap-8 dto-mb-12">
                <!-- Testimonial 1 -->
                <div class="dto-shadow-lg dto-rounded-lg dto-bg-white">
                  <div class="dto-p-8">
                    <div class="dto-flex dto-items-center dto-mb-4">
                      ${icons.star}${icons.star}${icons.star}${icons.star}${icons.star}
                    </div>
                    <p class="dto-text-sm dto-text-gray-600 dto-mb-6">
                      "The strategies I learned at WTP helped me secure my first deal within 
                      3 months. ROI was 15% in year one! The follow-up support was incredible."
                    </p>
                    <div class="dto-flex dto-items-center dto-gap-3">
                      <div class="dto-w-10 dto-h-10 dto-bg-blue-100 dto-rounded-full dto-flex dto-items-center dto-justify-center">
                        ${icons.user}
                      </div>
                      <div>
                        <p class="dto-font-medium">Sarah Mitchell</p>
                        <p class="dto-text-xs dto-text-gray-600">First-time Investor, Manchester</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="dto-shadow-lg dto-rounded-lg dto-bg-white">
                  <div class="dto-p-8">
                    <div class="dto-flex dto-items-center dto-mb-4">
                      ${icons.star}${icons.star}${icons.star}${icons.star}${icons.star}
                    </div>
                    <p class="dto-text-sm dto-text-gray-600 dto-mb-6">
                      "Best investment I ever made. Paul and Abi's expertise is unmatched. 
                      I've built a £2M portfolio in 18 months using their strategies."
                    </p>
                    <div class="dto-flex dto-items-center dto-gap-3">
                      <div class="dto-w-10 dto-h-10 dto-bg-blue-100 dto-rounded-full dto-flex dto-items-center dto-justify-center">
                        ${icons.user}
                      </div>
                      <div>
                        <p class="dto-font-medium">James Robinson</p>
                        <p class="dto-text-xs dto-text-gray-600">Portfolio Investor, Birmingham</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Testimonial 3 -->
                <div class="dto-shadow-lg dto-rounded-lg dto-bg-white">
                  <div class="dto-p-8">
                    <div class="dto-flex dto-items-center dto-mb-4">
                      ${icons.star}${icons.star}${icons.star}${icons.star}${icons.star}
                    </div>
                    <p class="dto-text-sm dto-text-gray-600 dto-mb-6">
                      "The networking alone was worth the ticket price. I've partnered 
                      with 3 other attendees on deals totalling £5M in value."
                    </p>
                    <div class="dto-flex dto-items-center dto-gap-3">
                      <div class="dto-w-10 dto-h-10 dto-bg-blue-100 dto-rounded-full dto-flex dto-items-center dto-justify-center">
                        ${icons.user}
                      </div>
                      <div>
                        <p class="dto-font-medium">Emma Thompson</p>
                        <p class="dto-text-xs dto-text-gray-600">Property Developer, London</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Money-Back Guarantee -->
        <section class="dto-py-12 md:dto-py-20 dto-bg-green-50">
          <div class="dto-container dto-mx-auto dto-px-4 md:dto-px-6">
            <div class="dto-max-w-4xl dto-mx-auto dto-text-center">
              <div class="dto-w-20 dto-h-20 dto-bg-green-500 dto-rounded-full dto-flex dto-items-center dto-justify-center dto-mx-auto dto-mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              
              <h2 class="dto-text-3xl md:dto-text-4xl dto-font-black dto-mb-6">
                100% <span class="dto-highlight-green">Money-Back Guarantee</span>
              </h2>
              
              <p class="dto-text-lg dto-text-gray-700 dto-mb-8 dto-max-w-3xl dto-mx-auto">
                Dive into day one with ease. If you don't find our training top-notch, 
                we ensure a hassle-free refund. No questions asked.
              </p>
              
              <p class="dto-text-sm dto-text-gray-600 dto-italic">
                "We don't want your money - we want your commitment to success!"
              </p>
            </div>
          </div>
        </section>

        <!-- Final CTA -->
        <section class="dto-py-12 md:dto-py-20 dto-bg-white">
          <div class="dto-container dto-mx-auto dto-px-4 md:dto-px-6">
            <div class="dto-max-w-4xl dto-mx-auto dto-text-center">
              <div class="dto-mb-6 dto-bg-red-600 dto-text-white dto-px-6 dto-py-3 dto-text-lg dto-font-bold dto-inline-block dto-rounded">
                ⚡ LIMITED TIME: 80% OFF ENDS SOON
              </div>
              
              <h2 class="dto-text-3xl md:dto-text-5xl dto-font-black dto-mb-6">
                Don't Miss This <span class="dto-highlight-secondary">Exclusive Opportunity</span>
              </h2>
              
              <p class="dto-text-lg dto-text-gray-700 dto-mb-8">
                This 80% discount is only available to those who engaged with our content. 
                Secure your spot before the price returns to £497.
              </p>

              <div class="dto-border-2 dto-border-blue-600 dto-shadow-2xl dto-max-w-2xl dto-mx-auto dto-rounded-lg dto-bg-white">
                <div class="dto-p-8">
                  <div class="dto-flex dto-justify-center dto-items-baseline dto-gap-4 dto-mb-6">
                    <span class="dto-text-5xl dto-font-black dto-text-blue-600">£99</span>
                    <div class="dto-text-left">
                      <div class="dto-text-2xl dto-line-through dto-text-gray-500">£497</div>
                      <div class="dto-text-sm dto-font-bold dto-text-green-600">Save £398 Today</div>
                    </div>
                  </div>
                  
                  <button onclick="window.DTOWidget.handleCheckoutClick()" class="dto-w-full dto-py-6 dto-text-xl dto-font-bold dto-bg-blue-600 dto-text-white dto-rounded-lg hover:dto-bg-blue-700 dto-transition-colors dto-mb-4 dto-flex dto-items-center dto-justify-center dto-gap-2">
                    Claim My WTP Spot Now ${icons.arrowRight}
                  </button>
                  
                  <div class="dto-grid dto-grid-cols-2 dto-gap-4 dto-text-xs dto-text-gray-600">
                    <div class="dto-flex dto-items-center dto-justify-center">
                      ${icons.shield}
                      <span class="dto-ml-1">Money-Back Guarantee</span>
                    </div>
                    <div class="dto-flex dto-items-center dto-justify-center">
                      ${icons.clock}
                      <span class="dto-ml-1">Limited Availability</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="dto-mt-8 dto-text-sm dto-text-gray-600">
                <p>Questions? Contact our team:</p>
                <div class="dto-flex dto-justify-center dto-gap-6 dto-mt-2">
                  <div class="dto-flex dto-items-center">
                    ${icons.phone}
                    <span class="dto-ml-1">0800 123 4567</span>
                  </div>
                  <div class="dto-flex dto-items-center">
                    ${icons.mail}
                    <span class="dto-ml-1">support@touchstoneeducation.co.uk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;

    container.innerHTML = html;

    // Add custom styles
    if (!document.getElementById('dto-widget-styles')) {
      const style = document.createElement('style');
      style.id = 'dto-widget-styles';
      style.textContent = `
        /* DTO Widget Styles */
        .dto-min-h-screen { min-height: 100vh; }
        .dto-bg-white { background-color: #ffffff; }
        .dto-bg-red-600 { background-color: #dc2626; }
        .dto-bg-gray-50 { background-color: #f9fafb; }
        .dto-bg-gray-100 { background-color: #f3f4f6; }
        .dto-bg-gray-200 { background-color: #e5e7eb; }
        .dto-bg-blue-50 { background-color: #eff6ff; }
        .dto-bg-blue-100 { background-color: #dbeafe; }
        .dto-bg-blue-600 { background-color: #2563eb; }
        .dto-bg-blue-700 { background-color: #1d4ed8; }
        .dto-bg-green-50 { background-color: #f0fdf4; }
        .dto-bg-green-500 { background-color: #22c55e; }
        .dto-bg-green-600 { background-color: #16a34a; }
        .dto-bg-gradient-to-b { background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); }
        .dto-from-gray-50 { --tw-gradient-from: #f9fafb; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(249, 250, 251, 0)); }
        .dto-to-white { --tw-gradient-to: #ffffff; }
        
        .dto-text-white { color: #ffffff; }
        .dto-text-gray-500 { color: #6b7280; }
        .dto-text-gray-600 { color: #4b5563; }
        .dto-text-gray-700 { color: #374151; }
        .dto-text-blue-600 { color: #2563eb; }
        .dto-text-green-600 { color: #16a34a; }
        .dto-text-red-500 { color: #ef4444; }
        
        .dto-container { width: 100%; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; }
        @media (min-width: 640px) { .dto-container { max-width: 640px; } }
        @media (min-width: 768px) { .dto-container { max-width: 768px; } }
        @media (min-width: 1024px) { .dto-container { max-width: 1024px; } }
        @media (min-width: 1280px) { .dto-container { max-width: 1280px; } }
        
        .dto-mx-auto { margin-left: auto; margin-right: auto; }
        .dto-mb-2 { margin-bottom: 0.5rem; }
        .dto-mb-4 { margin-bottom: 1rem; }
        .dto-mb-6 { margin-bottom: 1.5rem; }
        .dto-mb-8 { margin-bottom: 2rem; }
        .dto-mb-12 { margin-bottom: 3rem; }
        .dto-mt-2 { margin-top: 0.5rem; }
        .dto-mt-8 { margin-top: 2rem; }
        .dto-ml-1 { margin-left: 0.25rem; }
        .dto-mr-1 { margin-right: 0.25rem; }
        
        .dto-px-4 { padding-left: 1rem; padding-right: 1rem; }
        .dto-px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .dto-py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .dto-py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .dto-py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .dto-py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .dto-p-8 { padding: 2rem; }
        .dto-pt-8 { padding-top: 2rem; }
        .dto-pb-12 { padding-bottom: 3rem; }
        
        .dto-text-xs { font-size: 0.75rem; line-height: 1rem; }
        .dto-text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .dto-text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        .dto-text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .dto-text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .dto-text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .dto-text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .dto-text-5xl { font-size: 3rem; line-height: 1; }
        
        .dto-font-medium { font-weight: 500; }
        .dto-font-bold { font-weight: 700; }
        .dto-font-black { font-weight: 900; }
        .dto-font-extrabold { font-weight: 800; }
        
        .dto-text-center { text-align: center; }
        .dto-text-left { text-align: left; }
        .dto-leading-tight { line-height: 1.25; }
        .dto-tracking-tight { letter-spacing: -0.025em; }
        .dto-line-through { text-decoration-line: line-through; }
        .dto-italic { font-style: italic; }
        
        .dto-flex { display: flex; }
        .dto-grid { display: grid; }
        .dto-inline-block { display: inline-block; }
        .dto-items-center { align-items: center; }
        .dto-items-start { align-items: flex-start; }
        .dto-items-baseline { align-items: baseline; }
        .dto-justify-center { justify-content: center; }
        .dto-justify-between { justify-content: space-between; }
        .dto-gap-2 { gap: 0.5rem; }
        .dto-gap-3 { gap: 0.75rem; }
        .dto-gap-4 { gap: 1rem; }
        .dto-gap-6 { gap: 1.5rem; }
        .dto-gap-8 { gap: 2rem; }
        .dto-flex-shrink-0 { flex-shrink: 0; }
        
        .dto-grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .dto-grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .dto-grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        
        .dto-w-full { width: 100%; }
        .dto-w-10 { width: 2.5rem; }
        .dto-w-16 { width: 4rem; }
        .dto-w-20 { width: 5rem; }
        .dto-w-24 { width: 6rem; }
        .dto-h-10 { height: 2.5rem; }
        .dto-h-16 { height: 4rem; }
        .dto-h-20 { height: 5rem; }
        .dto-h-24 { height: 6rem; }
        
        .dto-max-w-2xl { max-width: 42rem; }
        .dto-max-w-3xl { max-width: 48rem; }
        .dto-max-w-4xl { max-width: 56rem; }
        .dto-max-w-5xl { max-width: 64rem; }
        .dto-max-w-6xl { max-width: 72rem; }
        
        .dto-rounded { border-radius: 0.25rem; }
        .dto-rounded-lg { border-radius: 0.5rem; }
        .dto-rounded-full { border-radius: 9999px; }
        
        .dto-border-2 { border-width: 2px; }
        .dto-border-t { border-top-width: 1px; }
        .dto-border-blue-200 { border-color: #bfdbfe; }
        .dto-border-blue-600 { border-color: #2563eb; }
        .dto-border-green-200 { border-color: #bbf7d0; }
        .dto-border-gray-200 { border-color: #e5e7eb; }
        
        .dto-shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
        .dto-shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
        
        .dto-relative { position: relative; }
        .dto-z-10 { z-index: 10; }
        .dto-overflow-hidden { overflow: hidden; }
        
        .dto-space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5rem; }
        .dto-space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 1rem; }
        
        .dto-transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        
        /* Highlight styles */
        .dto-highlight-primary { background: linear-gradient(120deg, #2563eb 0%, #2563eb 100%); background-repeat: no-repeat; background-size: 100% 0.2em; background-position: 0 88%; color: #2563eb; }
        .dto-highlight-secondary { background: linear-gradient(120deg, #10b981 0%, #10b981 100%); background-repeat: no-repeat; background-size: 100% 0.2em; background-position: 0 88%; color: #10b981; }
        .dto-highlight-green { background: linear-gradient(120deg, #22c55e 0%, #22c55e 100%); background-repeat: no-repeat; background-size: 100% 0.2em; background-position: 0 88%; color: #22c55e; }
        .dto-highlight-marker { background: linear-gradient(120deg, #fbbf24 0%, #fbbf24 100%); background-repeat: no-repeat; background-size: 100% 0.4em; background-position: 0 85%; }
        
        /* Button hover effects */
        button:hover.dto-bg-blue-600 { background-color: #1d4ed8; }
        button:hover.dto-text-white { color: #f3f4f6; }
        
        /* Responsive design */
        @media (min-width: 768px) {
          .md\\:dto-pt-12 { padding-top: 3rem; }
          .md\\:dto-pb-20 { padding-bottom: 5rem; }
          .md\\:dto-py-20 { padding-top: 5rem; padding-bottom: 5rem; }
          .md\\:dto-px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
          .md\\:dto-mb-8 { margin-bottom: 2rem; }
          .md\\:dto-text-xl { font-size: 1.25rem; line-height: 1.75rem; }
          .md\\:dto-text-5xl { font-size: 3rem; line-height: 1; }
          .md\\:dto-text-6xl { font-size: 3.75rem; line-height: 1; }
          .md\\:dto-grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:dto-grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        
        @media (min-width: 1024px) {
          .lg\\:dto-text-7xl { font-size: 4.5rem; line-height: 1; }
          .lg\\:dto-grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        
        /* SVG icon styling */
        .dto-text-green-500 svg { color: #22c55e; }
        .dto-text-red-500 svg { color: #ef4444; }
        .dto-text-blue-600 svg { color: #2563eb; }
        .dto-text-green-600 svg { color: #16a34a; }
        .dto-text-yellow-400 svg { color: #fbbf24; }
      `;
      document.head.appendChild(style);
    }
  }

  // Expose functions globally for button clicks
  window.DTOWidget = {
    handleCheckoutClick: handleCheckoutClick,
    handleCloseUrgency: handleCloseUrgency
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createDTOOfferWidget);
  } else {
    createDTOOfferWidget();
  }

})();
