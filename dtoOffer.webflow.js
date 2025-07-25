// Standalone JavaScript version of DTOOffer component for Webflow
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
    // Navigate to your checkout page
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

    // Add comprehensive CSS styles
    if (!document.getElementById('dto-offer-styles')) {
      const style = document.createElement('style');
      style.id = 'dto-offer-styles';
      style.textContent = `
        /* Reset and base styles */
        .dto-offer-container * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .dto-offer-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1f2937;
        }

        /* Color variables */
        .dto-offer-container {
          --primary: #1e40af;
          --secondary: #059669;
          --red-600: #dc2626;
          --gray-50: #f9fafb;
          --gray-100: #f3f4f6;
          --gray-500: #6b7280;
          --gray-600: #4b5563;
          --gray-800: #1f2937;
          --green-100: #dcfce7;
          --green-600: #16a34a;
          --green-800: #166534;
          --blue-600: #2563eb;
          --yellow-400: #facc15;
        }

        /* Layout utilities */
        .min-h-screen { min-height: 100vh; }
        .bg-gray-50 { background-color: var(--gray-50); }
        .bg-red-600 { background-color: var(--red-600); }
        .bg-white { background-color: white; }
        .bg-green-100 { background-color: var(--green-100); }
        .text-white { color: white; }
        .text-gray-500 { color: var(--gray-500); }
        .text-gray-600 { color: var(--gray-600); }
        .text-green-600 { color: var(--green-600); }
        .text-green-800 { color: var(--green-800); }
        .text-blue-600 { color: var(--blue-600); }
        .text-yellow-400 { color: var(--yellow-400); }
        .text-primary { color: var(--primary); }

        /* Typography */
        .text-sm { font-size: 0.875rem; }
        .text-lg { font-size: 1.125rem; }
        .text-xl { font-size: 1.25rem; }
        .text-2xl { font-size: 1.5rem; }
        .text-3xl { font-size: 1.875rem; }
        .text-5xl { font-size: 3rem; }
        .font-bold { font-weight: 700; }
        .font-black { font-weight: 900; }
        .line-through { text-decoration: line-through; }
        .text-center { text-align: center; }

        /* Spacing */
        .p-3 { padding: 0.75rem; }
        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .p-8 { padding: 2rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .px-8 { padding-left: 2rem; padding-right: 2rem; }
        .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mt-2 { margin-top: 0.5rem; }
        .mt-4 { margin-top: 1rem; }
        .ml-2 { margin-left: 0.5rem; }
        .mr-1 { margin-right: 0.25rem; }

        /* Layout */
        .container { 
          max-width: 1200px; 
          margin: 0 auto; 
          padding-left: 1rem; 
          padding-right: 1rem; 
        }
        .max-w-4xl { max-width: 56rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .flex { display: flex; }
        .inline-flex { display: inline-flex; }
        .items-center { align-items: center; }
        .items-baseline { align-items: baseline; }
        .items-start { align-items: flex-start; }
        .justify-center { justify-content: center; }
        .gap-1 { gap: 0.25rem; }
        .gap-2 { gap: 0.5rem; }
        .gap-3 { gap: 0.75rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .space-y-3 > * + * { margin-top: 0.75rem; }
        .grid { display: grid; }
        .overflow-hidden { overflow: hidden; }
        .flex-shrink-0 { flex-shrink: 0; }

        /* Border and shadow */
        .border-2 { border-width: 2px; }
        .border-primary { border-color: var(--primary); }
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-2xl { border-radius: 1rem; }
        .rounded-full { border-radius: 9999px; }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
        .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }

        /* Gradient backgrounds */
        .bg-gradient-to-r {
          background: linear-gradient(to right, var(--primary), var(--secondary));
        }

        /* Icons */
        .w-4 { width: 1rem; }
        .h-4 { height: 1rem; }
        .w-5 { width: 1.25rem; }
        .h-5 { height: 1.25rem; }
        .mt-0\.5 { margin-top: 0.125rem; }
        .inline { display: inline; }

        /* Animations */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

        /* Button styles */
        .btn-primary {
          background: linear-gradient(to right, var(--primary), var(--secondary));
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        /* Responsive grid */
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
          .md\\:py-12 { padding-top: 3rem; padding-bottom: 3rem; }
          .md\\:text-5xl { font-size: 3rem; }
        }

        /* Border opacity */
        .border-primary\\/20 { 
          border-color: rgba(30, 64, 175, 0.2); 
        }

        /* Gradient text */
        .bg-gradient-to-r.bg-clip-text {
          background: linear-gradient(to right, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-transparent {
          color: transparent;
        }

        /* Primary foreground for gradient backgrounds */
        .text-primary-foreground { 
          color: rgba(255, 255, 255, 0.9); 
        }

        /* Responsive text sizes */
        @media (max-width: 767px) {
          .text-3xl.md\\:text-5xl { font-size: 1.875rem; }
          .text-5xl { font-size: 2.5rem; }
        }
      `;
      document.head.appendChild(style);
    }

    const html = `
      <div class="min-h-screen bg-gray-50">
        <!-- Urgency Bar -->
        <div class="bg-red-600 text-white py-3 px-4 text-center text-sm font-bold animate-pulse">
          <div class="container mx-auto flex justify-center items-center gap-4">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
            </svg>
            <span>ONLY 12 SPOTS REMAINING - Secure your place now!</span>
          </div>
        </div>

        <div class="container mx-auto px-4 py-8">
          <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-8">
              <h1 class="text-3xl font-black mb-4">
                Wealth Through Property
                <br>
                <span class="bg-gradient-to-r bg-clip-text text-transparent">
                  2-Day Intensive
                </span>
              </h1>
              <p class="text-lg text-gray-600 mb-6">
                Join Paul Smith, his Grandad, and Christie to learn how to successfully invest in and develop your property investment portfolio
              </p>
            </div>

            <!-- Main Offer Card -->
            <div class="bg-white rounded-2xl shadow-2xl border-2 border-primary overflow-hidden mb-8">
              <div class="bg-gradient-to-r text-white p-6 text-center">
                <h2 class="text-2xl font-bold mb-2">Wealth Through Property</h2>
                <p class="text-primary-foreground mb-2">2-Day Intensive</p>
                <p class="text-primary-foreground">Learn the exact strategies that have generated over</p>
                <p class="text-primary-foreground">£1.2 million pounds of property investment opportunities</p>
              </div>

              <div class="p-8">
                <!-- Pricing -->
                <div class="text-center mb-8">
                  <div class="flex items-baseline justify-center gap-4 mb-4">
                    <span class="text-2xl text-gray-500 line-through">£497</span>
                    <span class="text-5xl font-black text-primary">£99</span>
                    <span class="text-sm text-gray-600">EARLY</span>
                  </div>
                  <div class="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-3 rounded-full text-sm font-bold">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    80% OFF for first 100 people only
                  </div>
                  <p class="text-sm text-gray-600 mt-2">🚨 Only 12 spots remaining</p>
                </div>

                <!-- Training Package -->
                <div class="text-center mb-8">
                  <h3 class="text-xl font-bold mb-4">Your Complete Training Package</h3>
                </div>

                <!-- What's Included -->
                <div class="grid gap-6 mb-8">
                  <div class="md:grid-cols-2 grid gap-6">
                    <div class="bg-gray-50 p-6 rounded-xl">
                      <div class="flex items-center gap-3 mb-4">
                        <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h4 class="font-bold">2-Day Live Training Includes:</h4>
                      </div>
                      <div class="space-y-3">
                        <div class="flex items-start gap-3">
                          <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span class="text-sm">Comprehensive property sourcing strategies</span>
                        </div>
                        <div class="flex items-start gap-3">
                          <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span class="text-sm">In-depth property analysis techniques</span>
                        </div>
                        <div class="flex items-start gap-3">
                          <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span class="text-sm">Market research & due diligence</span>
                        </div>
                        <div class="flex items-start gap-3">
                          <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span class="text-sm">Financing strategies & loan options</span>
                        </div>
                        <div class="flex items-start gap-3">
                          <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span class="text-sm">Property development strategies</span>
                        </div>
                        <div class="flex items-start gap-3">
                          <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span class="text-sm">Dealing with estate agents effectively</span>
                        </div>
                        <div class="flex items-start gap-3">
                          <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span class="text-sm">Marketing systems & exit strategies</span>
                        </div>
                        <div class="flex items-start gap-3">
                          <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span class="text-sm">Tax drag optimisation</span>
                        </div>
                        <div class="flex items-start gap-3">
                          <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span class="text-sm">Building teams to invest</span>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400 p-6 rounded-xl">
                      <div class="flex items-center gap-3 mb-4">
                        <svg class="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <h4 class="font-bold text-yellow-800">Premium Bonuses:</h4>
                      </div>
                      <div class="space-y-3">
                        <div class="flex items-start gap-3">
                          <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span class="text-sm font-medium">£500 Education Voucher towards Paul's advanced program</span>
                        </div>
                        <div class="flex items-start gap-3">
                          <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span class="text-sm font-medium">Exclusive Property Analysis Toolkit & Templates</span>
                        </div>
                        <div class="flex items-start gap-3">
                          <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span class="text-sm font-medium">Property Strategy Podcast & Video Resources</span>
                        </div>
                        <div class="flex items-start gap-3">
                          <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span class="text-sm font-medium">Property Deals Shared & Reviewed in Live Q&A Sessions</span>
                        </div>
                        <div class="flex items-start gap-3">
                          <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span class="text-sm font-medium">Live Q&A Sessions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Ready to Transform Section -->
                <div class="text-center mb-8 p-6 bg-gray-50 rounded-xl">
                  <h3 class="text-xl font-bold mb-2">Ready to Transform Your Financial Future?</h3>
                  <p class="text-sm text-gray-600">Join Paul Smith and his expert team for this intensive 2-day training</p>
                </div>

                <!-- CTA Button -->
                <div class="text-center">
                  <button id="checkout-btn" class="btn-primary">
                    Claim My Spot Now - £99
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                  <p class="text-sm text-gray-600 mt-4">
                    <svg class="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                    </svg>
                    🔐 30-day money-back guarantee • ⚡ Instant access
                  </p>
                </div>
              </div>
            </div>

            <!-- Meet Your Expert Trainers -->
            <div class="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 class="text-2xl font-bold text-center mb-8">Meet Your Expert Trainers</h3>
              <div class="grid gap-6">
                <div class="md:grid-cols-2 grid gap-6">
                  <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      PS
                    </div>
                    <div>
                      <h4 class="font-bold text-lg">Paul Smith</h4>
                      <p class="text-sm text-gray-600 mb-2">Property Investment Expert</p>
                      <div class="space-y-1 text-sm">
                        <p>✓ 15+ years property experience</p>
                        <p>✓ £2M+ in successful deals</p>
                        <p>✓ Trained 500+ investors</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      AH
                    </div>
                    <div>
                      <h4 class="font-bold text-lg">Alf Hudson</h4>
                      <p class="text-sm text-gray-600 mb-2">Property Development Specialist</p>
                      <div class="space-y-1 text-sm">
                        <p>✓ 30+ years industry experience</p>
                        <p>✓ Award-winning property coach</p>
                        <p>✓ Successful property developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- What Our Students Say -->
            <div class="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 class="text-2xl font-bold text-center mb-8">What Our Students Say</h3>
              <p class="text-center text-gray-600 mb-6">Real results from real students</p>
              
              <div class="grid gap-6">
                <div class="md:grid-cols-3 grid gap-6">
                  <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div class="flex items-center gap-1 mb-2">
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <p class="text-sm mb-3">"Absolutely game-changing! Paul's strategies helped me secure my first investment property within 3 months. The ROI has exceeded my expectations."</p>
                    <p class="text-xs text-gray-600 font-bold">Sarah Mitchell</p>
                  </div>
                  
                  <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div class="flex items-center gap-1 mb-2">
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <p class="text-sm mb-3">"The knowledge and strategies shared are worth 10x the price. I now have a clear roadmap to build my property portfolio with confidence."</p>
                    <p class="text-xs text-gray-600 font-bold">James Richardson</p>
                  </div>
                  
                  <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div class="flex items-center gap-1 mb-2">
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <p class="text-sm mb-3">"Professional, detailed, and incredibly valuable. This training gave me the confidence to make my first property investment."</p>
                    <p class="text-xs text-gray-600 font-bold">Emma Thompson</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Money Back Guarantee -->
            <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 text-center mb-8">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4">100% Money-Back Guarantee</h3>
              <p class="text-gray-600 mb-4">
                We're so confident you'll love this training that we offer a full 30-day money-back guarantee. 
                If you're not completely satisfied, we'll refund every penny.
              </p>
              <p class="text-sm text-gray-500">No questions asked</p>
            </div>

            <!-- Final CTA -->
            <div class="bg-red-600 text-white rounded-xl p-8 text-center">
              <div class="mb-4">
                <span class="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-bold">
                  ⚡ LIMITED TIME OFFER FOR FIRST 100 ONLY
                </span>
              </div>
              <h3 class="text-2xl font-bold mb-4">Don't Miss This Exclusive Opportunity</h3>
              <p class="mb-6">This discounted price is only available for the first 100 people who join today.</p>
              
              <div class="flex items-baseline justify-center gap-4 mb-6">
                <span class="text-2xl line-through">£497</span>
                <span class="text-5xl font-black">£99</span>
                <span class="text-sm">EARLY</span>
              </div>
              
              <button id="final-checkout-btn" class="bg-white text-red-600 px-8 py-4 rounded-lg text-xl font-bold hover:scale-105 transform transition-all duration-200 shadow-lg mb-4">
                Claim My Spot Now - £99
                <svg class="w-5 h-5 ml-2 inline" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </button>
              
              <p class="text-sm">
                🔐 30-day money-back guarantee • ⚡ Instant access
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Add event listeners for both checkout buttons
    const checkoutBtn = document.getElementById('checkout-btn');
    const finalCheckoutBtn = document.getElementById('final-checkout-btn');
    
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', handleCheckoutClick);
    }
    
    if (finalCheckoutBtn) {
      finalCheckoutBtn.addEventListener('click', handleCheckoutClick);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createDTOOffer);
  } else {
    createDTOOffer();
  }

})();
