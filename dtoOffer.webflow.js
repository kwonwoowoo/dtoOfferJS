// Standalone JavaScript version of DTOOffer component for Webflow integration via CDN
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
    // For Webflow: Create container if not present
    let container = document.getElementById('dto-offer-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'dto-offer-container';
      // Optionally you can add a class here for Webflow styling
      document.body.prepend(container);
    }

    // Track page view
    trackEvent('DTO Offer Page View');

    // IMPORTANT: Webflow strips custom classes and some Tailwind classes.
    // Use inline styles as fallback for critical styles.
    // External CSS should be loaded via CDN (see note below).

    const html = `
      <div style="min-height:100vh;background:#f9fafb;">
        <!-- Urgency Bar -->
        <div style="background:#dc2626;color:white;padding:12px 16px;text-align:center;font-size:0.95rem;font-weight:bold;animation:pulse 1s infinite;">
          <span style="display:inline-flex;align-items:center;gap:8px;">
            <svg style="width:16px;height:16px;vertical-align:middle;" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
            </svg>
            <span>ONLY 12 SPOTS REMAINING - Secure your place now!</span>
          </span>
        </div>

        <div style="max-width:1200px;margin:0 auto;padding:32px 16px;">
          <div style="max-width:900px;margin:0 auto;">
            <!-- Header -->
            <div style="text-align:center;margin-bottom:32px;">
              <h1 style="font-size:2.25rem;font-weight:900;margin-bottom:16px;line-height:1.2;">
                Transform Your Financial Future with 
                <span style="background:linear-gradient(to right,#3b82f6,#10b981);background-clip:text;-webkit-background-clip:text;color:transparent;">
                  Wealth Through Property
                </span>
              </h1>
              <p style="font-size:1.125rem;color:#4b5563;margin-bottom:24px;">
                Join 1,200+ successful students who've built life-changing property portfolios
              </p>
            </div>

            <!-- Main Offer Card -->
            <div style="background:white;border-radius:24px;box-shadow:0 8px 32px rgba(59,130,246,0.08);border:2px solid rgba(59,130,246,0.2);overflow:hidden;margin-bottom:32px;">
              <div style="background:linear-gradient(to right,#3b82f6,#10b981);color:white;padding:24px;text-align:center;">
                <h2 style="font-size:1.5rem;font-weight:bold;margin-bottom:8px;">2-Day Intensive Training Event</h2>
                <p style="opacity:0.9;">Everything you need to start building wealth through property</p>
              </div>

              <div style="padding:32px;">
                <!-- Pricing -->
                <div style="text-align:center;margin-bottom:32px;">
                  <div style="display:flex;align-items:baseline;justify-content:center;gap:16px;margin-bottom:16px;">
                    <span style="font-size:1.25rem;color:#6b7280;text-decoration:line-through;">£497</span>
                    <span style="font-size:2.5rem;font-weight:900;color:#3b82f6;">£99</span>
                  </div>
                  <div style="display:inline-flex;align-items:center;gap:8px;background:#d1fae5;color:#065f46;padding:8px 16px;border-radius:9999px;font-size:0.95rem;font-weight:bold;">
                    <svg style="width:16px;height:16px;vertical-align:middle;" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    80% OFF - Limited Time
                  </div>
                </div>

                <!-- What's Included -->
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:32px;">
                  <div>
                    <h3 style="font-size:1.25rem;font-weight:bold;margin-bottom:16px;">Training Modules Include:</h3>
                    <div style="display:flex;flex-direction:column;gap:12px;">
                      <div style="display:flex;align-items:start;gap:12px;">
                        <svg style="width:20px;height:20px;color:#16a34a;margin-top:2px;flex-shrink:0;" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span style="font-size:1rem;">Property sourcing and analysis strategies</span>
                      </div>
                      <div style="display:flex;align-items:start;gap:12px;">
                        <svg style="width:20px;height:20px;color:#16a34a;margin-top:2px;flex-shrink:0;" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span style="font-size:1rem;">Financing and mortgage optimization</span>
                      </div>
                      <div style="display:flex;align-items:start;gap:12px;">
                        <svg style="width:20px;height:20px;color:#16a34a;margin-top:2px;flex-shrink:0;" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span style="font-size:1rem;">Legal frameworks and tax strategies</span>
                      </div>
                      <div style="display:flex;align-items:start;gap:12px;">
                        <svg style="width:20px;height:20px;color:#16a34a;margin-top:2px;flex-shrink:0;" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span style="font-size:1rem;">Portfolio scaling and exit strategies</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 style="font-size:1.25rem;font-weight:bold;margin-bottom:16px;">Bonus Materials:</h3>
                    <div style="display:flex;flex-direction:column;gap:12px;">
                      <div style="display:flex;align-items:start;gap:12px;">
                        <svg style="width:20px;height:20px;color:#2563eb;margin-top:2px;flex-shrink:0;" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span style="font-size:1rem;">£500 Education Voucher</span>
                      </div>
                      <div style="display:flex;align-items:start;gap:12px;">
                        <svg style="width:20px;height:20px;color:#2563eb;margin-top:2px;flex-shrink:0;" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span style="font-size:1rem;">Property Analysis Toolkit</span>
                      </div>
                      <div style="display:flex;align-items:start;gap:12px;">
                        <svg style="width:20px;height:20px;color:#2563eb;margin-top:2px;flex-shrink:0;" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span style="font-size:1rem;">Exclusive Deal Database Access</span>
                      </div>
                      <div style="display:flex;align-items:start;gap:12px;">
                        <svg style="width:20px;height:20px;color:#2563eb;margin-top:2px;flex-shrink:0;" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span style="font-size:1rem;">90-Day Follow-up Support</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- CTA Button -->
                <div style="text-align:center;">
                  <button id="checkout-btn" style="background:linear-gradient(to right,#3b82f6,#10b981);color:white;padding:16px 32px;border-radius:12px;font-size:1.25rem;font-weight:bold;box-shadow:0 4px 16px rgba(59,130,246,0.16);border:none;cursor:pointer;transition:transform 0.2s;">
                    Secure My Spot Now - £99
                    <svg style="width:20px;height:20px;margin-left:8px;vertical-align:middle;" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                  <p style="font-size:0.95rem;color:#4b5563;margin-top:16px;">
                    <svg style="width:16px;height:16px;vertical-align:middle;margin-right:4px;" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                    </svg>
                    30-day money-back guarantee
                  </p>
                </div>
              </div>
            </div>

            <!-- Social Proof -->
            <div style="background:white;border-radius:16px;padding:24px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
              <div style="display:flex;align-items:center;justify-content:center;gap:4px;margin-bottom:16px;">
                <svg style="width:20px;height:20px;color:#fbbf24;" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <!-- repeat stars -->
                <svg style="width:20px;height:20px;color:#fbbf24;" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg style="width:20px;height:20px;color:#fbbf24;" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg style="width:20px;height:20px;color:#fbbf24;" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg style="width:20px;height:20px;color:#fbbf24;" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p style="text-align:center;color:#4b5563;font-size:0.95rem;">
                "Life-changing event. Worth every penny and more!" - Sarah M.
              </p>
              <p style="text-align:center;font-size:0.8rem;color:#6b7280;margin-top:8px;">
                Join 1,200+ successful property investors
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Add event listener for checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', handleCheckoutClick);
    }

    // You can optionally inject additional CSS via CDN for gradients, fonts, or utility styles
    // Example:
    // if (!document.getElementById('dto-offer-cdn-styles')) {
    //   const link = document.createElement('link');
    //   link.id = 'dto-offer-cdn-styles';
    //   link.rel = 'stylesheet';
    //   link.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@3.3.3/dist/tailwind.min.css';
    //   document.head.appendChild(link);
    // }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createDTOOffer);
  } else {
    createDTOOffer();
  }

})();
