// THREE - Complete standalone JavaScript bundle for DTOOffer component
// Includes all CSS variables, styles, and exact visual matching
(function() {
  'use strict';

  // Inject all necessary CSS first
  function injectStyles() {
    if (document.getElementById('dto-offer-complete-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'dto-offer-complete-styles';
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700;800;900&display=swap');
      
      /* CSS Variables from original theme */
      .dto-offer-container {
        --background: 0 0% 100%;
        --foreground: 220 35% 12%;
        --muted: 220 20% 97%;
        --muted-foreground: 220 15% 45%;
        --popover: 0 0% 100%;
        --popover-foreground: 220 35% 12%;
        --card: 0 0% 100%;
        --card-foreground: 220 35% 12%;
        --border: 220 20% 93%;
        --input: 220 20% 93%;
        --primary: 188 51% 18%;
        --primary-foreground: 0 0% 100%;
        --secondary: 47 76% 54%;
        --secondary-foreground: 0 0% 12%;
        --accent: 350 100% 60%;
        --accent-foreground: 0 0% 100%;
        --destructive: 0 84% 60%;
        --destructive-foreground: 0 0% 100%;
        --ring: 27 36% 44%;
        --radius: 0.75rem;
      }

      /* Base styles */
      .dto-offer-container * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      .dto-offer-container {
        font-family: 'Albert Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        background-color: hsl(var(--background));
        color: hsl(var(--foreground));
      }

      .dto-offer-container h1,
      .dto-offer-container h2,
      .dto-offer-container h3,
      .dto-offer-container h4,
      .dto-offer-container h5,
      .dto-offer-container h6 {
        font-family: 'Albert Sans', sans-serif;
        font-weight: 800;
        letter-spacing: -0.04em;
      }

      /* Conversion button styling */
      .dto-conversion-btn {
        background-color: #e3bc31 !important;
        color: white !important;
        font-weight: 700;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        width: 100%;
      }

      .dto-conversion-btn:hover {
        background-color: #d4a929 !important;
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      }

      /* Utility classes */
      .dto-container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
      .dto-text-center { text-align: center; }
      .dto-mb-4 { margin-bottom: 1rem; }
      .dto-mb-6 { margin-bottom: 1.5rem; }
      .dto-mb-8 { margin-bottom: 2rem; }
      .dto-mb-12 { margin-bottom: 3rem; }
      .dto-mt-8 { margin-top: 2rem; }
      .dto-py-12 { padding-top: 3rem; padding-bottom: 3rem; }
      .dto-py-20 { padding-top: 5rem; padding-bottom: 5rem; }
      .dto-px-4 { padding-left: 1rem; padding-right: 1rem; }
      .dto-px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
      .dto-px-8 { padding-left: 2rem; padding-right: 2rem; }
      .dto-p-8 { padding: 2rem; }
      .dto-flex { display: flex; }
      .dto-grid { display: grid; }
      .dto-grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
      .dto-grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .dto-grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .dto-gap-4 { gap: 1rem; }
      .dto-gap-6 { gap: 1.5rem; }
      .dto-gap-8 { gap: 2rem; }
      .dto-items-center { align-items: center; }
      .dto-items-start { align-items: flex-start; }
      .dto-justify-center { justify-content: center; }
      .dto-justify-between { justify-content: space-between; }
      .dto-w-full { width: 100%; }
      .dto-max-w-2xl { max-width: 42rem; }
      .dto-max-w-3xl { max-width: 48rem; }
      .dto-max-w-4xl { max-width: 56rem; }
      .dto-max-w-5xl { max-width: 64rem; }
      .dto-max-w-6xl { max-width: 72rem; }
      .dto-mx-auto { margin-left: auto; margin-right: auto; }

      /* Typography */
      .dto-text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
      .dto-text-5xl { font-size: 3rem; line-height: 1; }
      .dto-text-6xl { font-size: 3.75rem; line-height: 1; }
      .dto-text-7xl { font-size: 4.5rem; line-height: 1; }
      .dto-text-xl { font-size: 1.25rem; line-height: 1.75rem; }
      .dto-text-2xl { font-size: 1.5rem; line-height: 2rem; }
      .dto-text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
      .dto-text-lg { font-size: 1.125rem; line-height: 1.75rem; }
      .dto-text-sm { font-size: 0.875rem; line-height: 1.25rem; }
      .dto-text-xs { font-size: 0.75rem; line-height: 1rem; }
      .dto-font-black { font-weight: 900; }
      .dto-font-bold { font-weight: 700; }
      .dto-font-medium { font-weight: 500; }
      .dto-font-extrabold { font-weight: 800; }
      .dto-leading-tight { line-height: 1.25; }

      /* Colors */
      .dto-text-primary { color: hsl(var(--primary)); }
      .dto-text-secondary { color: hsl(var(--secondary)); }
      .dto-text-green-600 { color: #059669; }
      .dto-text-red-500 { color: #ef4444; }
      .dto-text-yellow-400 { color: #facc15; }
      .dto-text-gray-500 { color: #6b7280; }
      .dto-text-white { color: white; }
      .dto-bg-white { background-color: white; }
      .dto-bg-gray-50 { background-color: #f9fafb; }
      .dto-bg-green-50 { background-color: #f0fdf4; }
      .dto-bg-green-500 { background-color: #22c55e; }
      .dto-bg-red-600 { background-color: #dc2626; }
      .dto-bg-primary { background-color: hsl(var(--primary)); }
      .dto-bg-secondary { background-color: hsl(var(--secondary)); }

      /* Cards */
      .dto-card {
        background-color: hsl(var(--card));
        border: 1px solid hsl(var(--border));
        border-radius: calc(var(--radius) - 2px);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        transition: all 0.3s ease;
      }

      .dto-card:hover {
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }

      .dto-card-primary {
        border: 2px solid hsla(var(--primary), 0.2);
      }

      .dto-card-secondary {
        border: 2px solid hsla(var(--secondary), 0.2);
      }

      .dto-card-shadow-2xl {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      }

      /* Badges */
      .dto-badge {
        display: inline-flex;
        align-items: center;
        border-radius: calc(var(--radius) - 2px);
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        font-weight: 600;
        transition: all 0.3s ease;
      }

      .dto-badge-red {
        background-color: #dc2626;
        color: white;
      }

      .dto-badge-secondary {
        background-color: hsl(var(--secondary));
        color: hsl(var(--secondary-foreground));
      }

      /* Gradients */
      .dto-bg-gradient-primary {
        background: linear-gradient(135deg, #f9fafb 0%, white 100%);
      }

      /* Highlights */
      .dto-highlight-secondary {
        background: linear-gradient(120deg, hsl(var(--secondary)) 0%, hsl(var(--secondary)) 100%);
        background-size: 100% 0.3em;
        background-repeat: no-repeat;
        background-position: 0 88%;
        padding: 0 0.1em;
      }

      .dto-highlight-primary {
        background: linear-gradient(120deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 100%);
        background-size: 100% 0.3em;
        background-repeat: no-repeat;
        background-position: 0 88%;
        padding: 0 0.1em;
      }

      .dto-highlight-green {
        background: linear-gradient(120deg, #22c55e 0%, #16a34a 100%);
        background-size: 100% 0.3em;
        background-repeat: no-repeat;
        background-position: 0 88%;
        padding: 0 0.1em;
      }

      .dto-highlight-marker {
        background: linear-gradient(120deg, #fef3c7 0%, #fed7aa 100%);
        background-size: 100% 0.5em;
        background-repeat: no-repeat;
        background-position: 0 88%;
        padding: 0 0.1em;
      }

      /* Icons */
      .dto-icon {
        width: 1.25rem;
        height: 1.25rem;
        flex-shrink: 0;
      }

      .dto-icon-sm {
        width: 1rem;
        height: 1rem;
      }

      .dto-icon-lg {
        width: 2rem;
        height: 2rem;
      }

      .dto-icon-xl {
        width: 2.5rem;
        height: 2.5rem;
      }

      /* Separators */
      .dto-separator {
        height: 1px;
        background-color: hsl(var(--border));
        margin: 1.5rem 0;
      }

      /* Avatar/Profile circles */
      .dto-avatar {
        width: 6rem;
        height: 6rem;
        background-color: #e5e7eb;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .dto-avatar-sm {
        width: 2.5rem;
        height: 2.5rem;
        background-color: hsla(var(--primary), 0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* Responsive design */
      @media (min-width: 768px) {
        .dto-md\\:text-6xl { font-size: 3.75rem; line-height: 1; }
        .dto-md\\:text-5xl { font-size: 3rem; line-height: 1; }
        .dto-md\\:py-20 { padding-top: 5rem; padding-bottom: 5rem; }
        .dto-md\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .dto-md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .dto-md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      }

      @media (min-width: 1024px) {
        .dto-lg\\:text-7xl { font-size: 4.5rem; line-height: 1; }
        .dto-lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }

      /* Animations */
      .dto-opacity-0 { opacity: 0; }
      .dto-opacity-100 { opacity: 1; }
      .dto-translate-y-10 { transform: translateY(2.5rem); }
      .dto-translate-y-0 { transform: translateY(0); }
      .dto-transition-all { transition: all 0.7s ease; }

      /* Line through for pricing */
      .dto-line-through { text-decoration: line-through; }

      /* Fill current for stars */
      .dto-fill-current { fill: currentColor; }

      /* Urgency bar */
      .dto-urgency-bar {
        background-color: #dc2626;
        color: white;
        padding: 0.5rem 1rem;
        text-align: center;
        font-size: 0.875rem;
        font-weight: 500;
      }
    `;
    document.head.appendChild(style);
  }

  // Utility functions
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

  // Icon components as SVG strings
  const icons = {
    arrowRight: '<svg class="dto-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>',
    checkCircle: '<svg class="dto-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    clock: '<svg class="dto-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    users: '<svg class="dto-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path></svg>',
    star: '<svg class="dto-icon dto-fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>',
    calendar: '<svg class="dto-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>',
    award: '<svg class="dto-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>',
    shield: '<svg class="dto-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',
    trendingUp: '<svg class="dto-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>',
    target: '<svg class="dto-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>',
    user: '<svg class="dto-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>',
    phone: '<svg class="dto-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>',
    mail: '<svg class="dto-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>'
  };

  function createDTOOffer() {
    const container = document.getElementById('dto-offer-container');
    if (!container) {
      console.error('Container #dto-offer-container not found');
      return;
    }

    // Inject styles first
    injectStyles();

    // Track page view
    trackEvent('DTO Offer Page View');

    // Main HTML content with exact styling
    const html = `
      <div class="dto-offer-container">
        <!-- Urgency Bar -->
        <div class="dto-urgency-bar" id="urgency-bar">
          <div class="dto-container dto-flex dto-justify-between dto-items-center">
            <span>⚡ Last Chance: Only 12 spots remaining at this exclusive rate</span>
            <button onclick="document.getElementById('urgency-bar').style.display='none'" class="dto-text-white" style="background:none;border:none;font-size:1.5rem;cursor:pointer;">×</button>
          </div>
        </div>

        <!-- Hero Section -->
        <section class="dto-py-12 dto-md:py-20 dto-bg-gradient-primary">
          <div class="dto-container">
            <div class="dto-max-w-5xl dto-mx-auto dto-text-center dto-transition-all dto-opacity-100 dto-translate-y-0">
              <div class="dto-badge dto-badge-red dto-mb-6" style="font-size:0.875rem;font-weight:700;padding:0.75rem 1.5rem;">
                EXCLUSIVE 80% OFF - LIMITED TIME ONLY
              </div>

              <h1 class="dto-text-4xl dto-md:text-6xl dto-lg:text-7xl dto-font-black dto-mb-6 dto-md:dto-mb-8 dto-leading-tight">
                <span class="dto-highlight-secondary">Wealth Through Property</span><br>
                2-Day <span class="dto-highlight-green">Intensive</span>
              </h1>

              <p class="dto-text-lg dto-md:dto-text-xl dto-mb-8 dto-max-w-4xl dto-mx-auto dto-font-medium" style="color:hsl(var(--foreground)/0.9);">
                Join Paul Smith, Abi Hookway, and Gordie Dutfield for an exclusive 2-day property 
                investment masterclass. Learn the exact strategies that have generated over 
                <span class="dto-font-extrabold dto-text-primary">
                  <span class="dto-highlight-marker">£30M in student portfolio value</span>
                </span>
              </p>

              <!-- Price & CTA -->
              <div class="dto-mb-8 dto-max-w-2xl dto-mx-auto">
                <div class="dto-card dto-card-primary dto-card-shadow-2xl dto-p-8">
                  <div class="dto-text-center dto-mb-6">
                    <div class="dto-flex dto-justify-center dto-items-baseline dto-gap-4 dto-mb-4">
                      <span class="dto-text-5xl dto-font-black dto-text-primary">£99</span>
                      <div>
                        <div class="dto-text-2xl dto-line-through dto-text-gray-500">£497</div>
                        <div class="dto-text-sm dto-font-bold dto-text-green-600">Save £398 (80% OFF)</div>
                      </div>
                    </div>
                    
                    <button onclick="handleCheckoutClick()" class="dto-conversion-btn dto-mb-4">
                      Secure My Spot Now ${icons.arrowRight}
                    </button>

                    <div class="dto-flex dto-justify-center dto-gap-4 dto-items-center dto-text-sm" style="color:hsl(var(--foreground)/0.7);">
                      <div class="dto-flex dto-items-center">
                        ${icons.shield}
                        <span style="margin-left:0.25rem;color:#22c55e;">Money-Back Guarantee</span>
                      </div>
                      <div class="dto-flex dto-items-center">
                        ${icons.clock}
                        <span style="margin-left:0.25rem;color:#ef4444;">Offer Expires Soon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="dto-flex dto-justify-center dto-gap-6 dto-items-center dto-text-sm" style="color:hsl(var(--foreground)/0.7);">
                <div class="dto-flex dto-items-center">
                  ${icons.calendar}
                  <span style="margin-left:0.25rem;">2 Full Days Training</span>
                </div>
                <div class="dto-flex dto-items-center">
                  ${icons.users}
                  <span style="margin-left:0.25rem;">Limited to 50 Attendees</span>
                </div>
                <div class="dto-flex dto-items-center">
                  ${icons.award}
                  <span style="margin-left:0.25rem;">CPD Accredited</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- What's Included Section -->
        <section class="dto-py-12 dto-md:dto-py-20 dto-bg-gray-50">
          <div class="dto-container">
            <div class="dto-max-w-6xl dto-mx-auto">
              <div class="dto-text-center dto-mb-12">
                <h2 class="dto-text-3xl dto-md:dto-text-5xl dto-font-black dto-mb-6">
                  Your Complete <span class="dto-highlight-primary">Training Package</span>
                </h2>
                <p class="dto-text-lg" style="color:hsl(var(--foreground)/0.8);">
                  Everything you need to build a profitable property portfolio
                </p>
              </div>

              <div class="dto-grid dto-grid-cols-1 dto-lg:dto-grid-cols-2 dto-gap-8 dto-mb-12">
                <!-- 2-Day Live Training -->
                <div class="dto-card dto-card-primary dto-p-8">
                  <div class="dto-text-center dto-mb-6">
                    <div class="dto-mx-auto dto-mb-4" style="width:4rem;height:4rem;background-color:hsla(var(--primary),0.1);border-radius:0.5rem;display:flex;align-items:center;justify-content:center;">
                      ${icons.calendar.replace('dto-icon', 'dto-icon-xl')}
                    </div>
                    <h3 class="dto-text-2xl dto-font-bold dto-mb-4">2-Day Live Training Includes:</h3>
                  </div>
                  
                  <div style="display:flex;flex-direction:column;gap:1rem;">
                    ${[
                      'How to safely access your property equity for new investments',
                      'Buy-refurb-refinance mastery training',
                      'Serviced accommodation business setup',
                      'Sourcing & selling deals for £10k+ monthly',
                      'No money down deal strategies',
                      'Property LTD entity setup & management',
                      'Live Q&A sessions',
                      'Mindset training',
                      'Complete property toolkit',
                      '90-day follow-up support'
                    ].map(item => `
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.checkCircle.replace('currentColor', '#22c55e')}
                        <span class="dto-text-sm">${item}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <!-- Exclusive Bonuses -->
                <div class="dto-card dto-card-secondary dto-p-8">
                  <div class="dto-text-center dto-mb-6">
                    <div class="dto-badge dto-badge-secondary dto-mb-4">
                      EXCLUSIVE BONUSES
                    </div>
                    <h3 class="dto-text-2xl dto-font-bold dto-mb-2">Premium Resources</h3>
                    <p class="dto-text-sm" style="color:hsl(var(--foreground)/0.7);">Valued at £5,625 - Included FREE</p>
                  </div>
                  
                  <div style="display:flex;flex-direction:column;gap:1rem;">
                    ${[
                      {
                        title: '£100 Touchstone Education Voucher',
                        desc: 'Redeemable across our complete course portfolio'
                      },
                      {
                        title: 'Property Success E-Book Collection (£30 value)',
                        desc: '£180K profit in 6 months through strategic property flipping'
                      },
                      {
                        title: 'Advanced Flipping Analysis Tool (£495 value)',
                        desc: 'Professional-grade calculator for property valuation and profit estimation'
                      },
                      {
                        title: 'Wealth Assessment Platform (£5,000 value)',
                        desc: 'Comprehensive wealth positioning and growth projections, plus our Net Worth Calculator'
                      }
                    ].map(item => `
                      <div class="dto-flex dto-items-start dto-gap-3">
                        ${icons.award.replace('currentColor', 'hsl(var(--secondary))')}
                        <div>
                          <span class="dto-font-medium dto-text-sm">${item.title}</span>
                          <p class="dto-text-xs" style="color:hsl(var(--foreground)/0.6);">${item.desc}</p>
                        </div>
                      </div>
                    `).join('')}
                  </div>

                  <div class="dto-separator"></div>
                  
                  <div class="dto-text-center">
                    <div class="dto-text-2xl dto-font-black dto-text-secondary dto-mb-2">Total Value: £5,625</div>
                    <div class="dto-text-sm" style="color:hsl(var(--foreground)/0.7);">Your Investment: £99</div>
                  </div>
                </div>
              </div>

              <!-- CTA Section -->
              <div class="dto-text-center">
                <div class="dto-card dto-card-primary dto-card-shadow-2xl dto-max-w-2xl dto-mx-auto dto-p-8">
                  <h3 class="dto-text-2xl dto-font-bold dto-mb-4">Ready to Transform Your Financial Future?</h3>
                  <p class="dto-mb-6" style="color:hsl(var(--foreground)/0.7);">
                    Join 1,200+ successful students who've used these exact strategies to build wealth through property
                  </p>
                  
                  <button onclick="handleCheckoutClick()" class="dto-conversion-btn dto-mb-4">
                    Get My WTP Ticket for £99 ${icons.arrowRight}
                  </button>
                  
                  <p class="dto-text-xs" style="color:hsl(var(--foreground)/0.6);">
                    Protected by our 100% money-back guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Meet Your Trainers -->
        <section class="dto-py-12 dto-md:dto-py-20 dto-bg-white">
          <div class="dto-container">
            <div class="dto-max-w-6xl dto-mx-auto">
              <div class="dto-text-center dto-mb-12">
                <h2 class="dto-text-3xl dto-md:dto-text-5xl dto-font-black dto-mb-6">
                  Meet Your <span class="dto-highlight-primary">Expert Trainers</span>
                </h2>
              </div>

              <div class="dto-grid dto-grid-cols-1 dto-md:dto-grid-cols-2 dto-gap-8 dto-mb-12">
                <!-- Paul Smith -->
                <div class="dto-card dto-card-primary dto-p-8">
                  <div class="dto-flex dto-items-start dto-gap-6">
                    <div class="dto-avatar"></div>
                    <div>
                      <h3 class="dto-text-xl dto-font-bold dto-mb-2">Paul Smith</h3>
                      <p class="dto-text-sm dto-text-primary dto-font-medium dto-mb-4">Commercial Property Expert</p>
                      <div style="display:flex;flex-direction:column;gap:0.5rem;font-size:0.875rem;color:hsl(var(--foreground)/0.7);">
                        <div class="dto-flex dto-items-center dto-gap-2">
                          ${icons.trendingUp.replace('currentColor', 'hsl(var(--primary))')}
                          <span>£30M+ property portfolio</span>
                        </div>
                        <div class="dto-flex dto-items-center dto-gap-2">
                          ${icons.award.replace('currentColor', 'hsl(var(--primary))')}
                          <span>40+ years experience</span>
                        </div>
                        <div class="dto-flex dto-items-center dto-gap-2">
                          ${icons.users.replace('currentColor', 'hsl(var(--primary))')}
                          <span>1,200+ investors mentored</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Abi Hookway -->
                <div class="dto-card dto-card-primary dto-p-8">
                  <div class="dto-flex dto-items-start dto-gap-6">
                    <div class="dto-avatar"></div>
                    <div>
                      <h3 class="dto-text-xl dto-font-bold dto-mb-2">Abi Hookway</h3>
                      <p class="dto-text-sm dto-text-primary dto-font-medium dto-mb-4">Property Investing Mum</p>
                      <div style="display:flex;flex-direction:column;gap:0.5rem;font-size:0.875rem;color:hsl(var(--foreground)/0.7);">
                        <div class="dto-flex dto-items-center dto-gap-2">
                          ${icons.trendingUp.replace('currentColor', 'hsl(var(--primary))')}
                          <span>£8M+ portfolio in 8 years</span>
                        </div>
                        <div class="dto-flex dto-items-center dto-gap-2">
                          ${icons.target.replace('currentColor', 'hsl(var(--primary))')}
                          <span>From £24k debt to millionaire</span>
                        </div>
                        <div class="dto-flex dto-items-center dto-gap-2">
                          ${icons.users.replace('currentColor', 'hsl(var(--primary))')}
                          <span>Single mum success story</span>
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
        <section class="dto-py-12 dto-md:dto-py-20 dto-bg-gray-50">
          <div class="dto-container">
            <div class="dto-max-w-6xl dto-mx-auto">
              <div class="dto-text-center dto-mb-12">
                <h2 class="dto-text-3xl dto-md:dto-text-5xl dto-font-black dto-mb-6">
                  What Our <span class="dto-highlight-secondary">Students Say</span>
                </h2>
                <p class="dto-text-lg" style="color:hsl(var(--foreground)/0.8);">
                  Real results from real people
                </p>
              </div>

              <div class="dto-grid dto-grid-cols-1 dto-md:dto-grid-cols-3 dto-gap-8 dto-mb-12">
                ${[
                  {
                    text: 'The strategies I learned at WTP helped me secure my first deal within 3 months. ROI was 15% in year one! The follow-up support was incredible.',
                    name: 'Sarah Mitchell',
                    title: 'First-time Investor, Manchester'
                  },
                  {
                    text: 'Best investment I ever made. Paul and Abi\'s expertise is unmatched. I\'ve built a £2M portfolio in 18 months using their strategies.',
                    name: 'James Robinson',
                    title: 'Portfolio Investor, Birmingham'
                  },
                  {
                    text: 'The networking alone was worth the ticket price. I\'ve partnered with 3 other attendees on deals totalling £5M in value.',
                    name: 'Emma Thompson',
                    title: 'Property Developer, London'
                  }
                ].map(testimonial => `
                  <div class="dto-card dto-p-8">
                    <div class="dto-flex dto-items-center dto-mb-4">
                      ${Array(5).fill(icons.star.replace('dto-icon', 'dto-icon-sm').replace('currentColor', '#facc15')).join('')}
                    </div>
                    <p class="dto-text-sm dto-mb-6" style="color:hsl(var(--foreground)/0.7);">
                      "${testimonial.text}"
                    </p>
                    <div class="dto-flex dto-items-center dto-gap-3">
                      <div class="dto-avatar-sm">
                        ${icons.user.replace('currentColor', 'hsl(var(--primary))')}
                      </div>
                      <div>
                        <p class="dto-font-medium">${testimonial.name}</p>
                        <p class="dto-text-xs" style="color:hsl(var(--foreground)/0.6);">${testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>

        <!-- Money-Back Guarantee -->
        <section class="dto-py-12 dto-md:dto-py-20 dto-bg-green-50">
          <div class="dto-container">
            <div class="dto-max-w-4xl dto-mx-auto dto-text-center">
              <div class="dto-mx-auto dto-mb-6" style="width:5rem;height:5rem;background-color:#22c55e;border-radius:50%;display:flex;align-items:center;justify-content:center;">
                ${icons.shield.replace('dto-icon', 'dto-icon-xl').replace('currentColor', 'white')}
              </div>
              
              <h2 class="dto-text-3xl dto-md:dto-text-4xl dto-font-black dto-mb-6">
                100% <span class="dto-highlight-green">Money-Back Guarantee</span>
              </h2>
              
              <p class="dto-text-lg dto-mb-8 dto-max-w-3xl dto-mx-auto" style="color:hsl(var(--foreground)/0.8);">
                Dive into day one with ease. If you don't find our training top-notch, 
                we ensure a hassle-free refund. No questions asked.
              </p>
              
              <p class="dto-text-sm" style="color:hsl(var(--foreground)/0.6);font-style:italic;">
                "We don't want your money - we want your commitment to success!"
              </p>
            </div>
          </div>
        </section>

        <!-- Final CTA -->
        <section class="dto-py-12 dto-md:dto-py-20 dto-bg-white">
          <div class="dto-container">
            <div class="dto-max-w-4xl dto-mx-auto dto-text-center">
              <div class="dto-badge dto-badge-red dto-mb-6" style="font-size:1.125rem;font-weight:700;padding:0.75rem 1.5rem;">
                ⚡ LIMITED TIME: 80% OFF ENDS SOON
              </div>
              
              <h2 class="dto-text-3xl dto-md:dto-text-5xl dto-font-black dto-mb-6">
                Don't Miss This <span class="dto-highlight-secondary">Exclusive Opportunity</span>
              </h2>
              
              <p class="dto-text-lg dto-mb-8" style="color:hsl(var(--foreground)/0.8);">
                This 80% discount is only available to those who engaged with our content. 
                Secure your spot before the price returns to £497.
              </p>

              <div class="dto-card dto-card-primary dto-card-shadow-2xl dto-max-w-2xl dto-mx-auto dto-p-8">
                <div class="dto-flex dto-justify-center dto-items-baseline dto-gap-4 dto-mb-6">
                  <span class="dto-text-5xl dto-font-black dto-text-primary">£99</span>
                  <div>
                    <div class="dto-text-2xl dto-line-through dto-text-gray-500">£497</div>
                    <div class="dto-text-sm dto-font-bold dto-text-green-600">Save £398 Today</div>
                  </div>
                </div>
                
                <button onclick="handleCheckoutClick()" class="dto-conversion-btn dto-mb-4">
                  Claim My WTP Spot Now ${icons.arrowRight}
                </button>
                
                <div class="dto-grid dto-grid-cols-2 dto-gap-4 dto-text-xs" style="color:hsl(var(--foreground)/0.6);">
                  <div class="dto-flex dto-items-center dto-justify-center">
                    ${icons.shield.replace('dto-icon', 'dto-icon-sm')}
                    <span style="margin-left:0.25rem;">Money-Back Guarantee</span>
                  </div>
                  <div class="dto-flex dto-items-center dto-justify-center">
                    ${icons.clock.replace('dto-icon', 'dto-icon-sm')}
                    <span style="margin-left:0.25rem;">Limited Availability</span>
                  </div>
                </div>
              </div>

              <div class="dto-mt-8 dto-text-sm" style="color:hsl(var(--foreground)/0.6);">
                <p>Questions? Contact our team:</p>
                <div class="dto-flex dto-justify-center dto-gap-6 dto-mt-2">
                  <div class="dto-flex dto-items-center">
                    ${icons.phone.replace('dto-icon', 'dto-icon-sm')}
                    <span style="margin-left:0.25rem;">0800 123 4567</span>
                  </div>
                  <div class="dto-flex dto-items-center">
                    ${icons.mail.replace('dto-icon', 'dto-icon-sm')}
                    <span style="margin-left:0.25rem;">support@touchstoneeducation.co.uk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;

    container.innerHTML = html;

    // Make checkout function globally available
    window.handleCheckoutClick = handleCheckoutClick;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createDTOOffer);
  } else {
    createDTOOffer();
  }
})();
