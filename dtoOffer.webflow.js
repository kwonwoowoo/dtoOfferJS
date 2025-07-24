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

  // Lucide React icons as SVG strings
  const icons = {
    arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m22 21-3-3 3-3"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    award: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    trendingUp: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>',
    target: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    user: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>'
  };

  function createDTOOffer() {
    const container = document.getElementById('dto-offer-container');
    if (!container) {
      console.error('Container #dto-offer-container not found');
      return;
    }

    trackEvent('DTO Offer Page View');

    // Add comprehensive styles
    const style = document.createElement('style');
    style.id = 'dto-offer-styles';
    style.textContent = `
      .dto-offer-widget {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        line-height: 1.6;
        color: #1a1a1a;
        background: white;
        margin: 0;
        padding: 0;
      }
      
      .dto-offer-widget * {
        box-sizing: border-box;
      }
      
      /* Urgency Bar */
      .urgency-bar {
        background: #dc2626;
        color: white;
        padding: 8px 16px;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        position: relative;
      }
      
      .urgency-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .urgency-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      /* Container */
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
      }
      
      /* Hero Section */
      .hero-section {
        background: linear-gradient(to bottom, #f9fafb, white);
        padding: 32px 0 80px 0;
        text-align: center;
      }
      
      .badge {
        display: inline-block;
        background: #dc2626;
        color: white;
        padding: 8px 24px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 24px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .hero-title {
        font-size: 56px;
        font-weight: 900;
        line-height: 1.05;
        margin-bottom: 32px;
        letter-spacing: -0.02em;
      }
      
      .highlight-secondary {
        background: linear-gradient(120deg, #fbbf24 0%, #f59e0b 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
      }
      
      .highlight-green {
        background: linear-gradient(120deg, #10b981 0%, #059669 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
      }
      
      .highlight-marker {
        background: #fef3c7;
        padding: 2px 4px;
        border-radius: 4px;
      }
      
      .hero-description {
        font-size: 20px;
        color: #4b5563;
        margin-bottom: 32px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }
      
      /* Price Card */
      .price-card {
        max-width: 500px;
        margin: 0 auto 32px auto;
        background: white;
        border: 2px solid #3b82f6;
        border-radius: 12px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        padding: 32px;
      }
      
      .price-display {
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: 16px;
        margin-bottom: 16px;
      }
      
      .price-main {
        font-size: 48px;
        font-weight: 900;
        color: #3b82f6;
      }
      
      .price-old {
        font-size: 24px;
        text-decoration: line-through;
        color: #6b7280;
      }
      
      .price-save {
        font-size: 14px;
        font-weight: 700;
        color: #059669;
      }
      
      /* Button */
      .conversion-btn {
        width: 100%;
        background: #1e40af;
        color: white;
        border: none;
        padding: 20px 24px;
        border-radius: 8px;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-bottom: 16px;
        transition: background-color 0.2s;
      }
      
      .conversion-btn:hover {
        background: #1d4ed8;
      }
      
      .features-row {
        display: flex;
        justify-content: center;
        gap: 24px;
        align-items: center;
        font-size: 14px;
        color: #6b7280;
        flex-wrap: wrap;
      }
      
      .feature-item {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      
      .feature-item svg {
        width: 16px;
        height: 16px;
      }
      
      .info-badges {
        display: flex;
        justify-content: center;
        gap: 24px;
        align-items: center;
        font-size: 14px;
        color: #6b7280;
        flex-wrap: wrap;
      }
      
      /* Sections */
      .section {
        padding: 80px 0;
      }
      
      .section-gray {
        background: #f9fafb;
      }
      
      .section-title {
        font-size: 48px;
        font-weight: 900;
        text-align: center;
        margin-bottom: 24px;
        line-height: 1.1;
      }
      
      .section-subtitle {
        font-size: 20px;
        color: #6b7280;
        text-align: center;
        margin-bottom: 48px;
      }
      
      /* Grid */
      .grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        margin-bottom: 48px;
      }
      
      .grid-3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
        margin-bottom: 48px;
      }
      
      /* Cards */
      .card {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        padding: 32px;
      }
      
      .card-primary {
        border: 2px solid rgba(59, 130, 246, 0.2);
      }
      
      .card-secondary {
        border: 2px solid rgba(16, 185, 129, 0.2);
      }
      
      .card-icon {
        width: 64px;
        height: 64px;
        background: rgba(59, 130, 246, 0.1);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px auto;
      }
      
      .card-icon svg {
        width: 32px;
        height: 32px;
        color: #3b82f6;
      }
      
      .card-title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 16px;
        text-align: center;
      }
      
      .check-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .check-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 16px;
        font-size: 14px;
      }
      
      .check-item svg {
        color: #10b981;
        margin-top: 2px;
        flex-shrink: 0;
      }
      
      /* Bonus Section */
      .bonus-badge {
        background: #10b981;
        color: white;
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 16px;
        display: inline-block;
      }
      
      .value-highlight {
        font-size: 32px;
        font-weight: 900;
        color: #10b981;
        margin-bottom: 8px;
      }
      
      .separator {
        height: 1px;
        background: #e5e7eb;
        margin: 24px 0;
      }
      
      /* Trainers */
      .trainer-card {
        display: flex;
        align-items: flex-start;
        gap: 24px;
      }
      
      .trainer-avatar {
        width: 96px;
        height: 96px;
        background: #e5e7eb;
        border-radius: 50%;
        flex-shrink: 0;
      }
      
      .trainer-name {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 8px;
      }
      
      .trainer-title {
        font-size: 14px;
        color: #3b82f6;
        font-weight: 600;
        margin-bottom: 16px;
      }
      
      .trainer-stats {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .trainer-stat {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
        font-size: 14px;
        color: #6b7280;
      }
      
      /* Testimonials */
      .testimonial-card {
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        padding: 32px;
      }
      
      .stars {
        display: flex;
        gap: 4px;
        margin-bottom: 16px;
      }
      
      .stars svg {
        color: #fbbf24;
        fill: currentColor;
      }
      
      .testimonial-text {
        font-size: 14px;
        color: #6b7280;
        margin-bottom: 24px;
        line-height: 1.6;
      }
      
      .testimonial-author {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      
      .author-avatar {
        width: 40px;
        height: 40px;
        background: rgba(59, 130, 246, 0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .author-avatar svg {
        color: #3b82f6;
      }
      
      .author-name {
        font-weight: 600;
        margin-bottom: 2px;
      }
      
      .author-location {
        font-size: 12px;
        color: #6b7280;
      }
      
      /* Guarantee Section */
      .guarantee-section {
        background: #f0fdf4;
        text-align: center;
      }
      
      .guarantee-icon {
        width: 80px;
        height: 80px;
        background: #10b981;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 24px auto;
      }
      
      .guarantee-icon svg {
        width: 40px;
        height: 40px;
        color: white;
      }
      
      /* Contact Info */
      .contact-info {
        display: flex;
        justify-content: center;
        gap: 24px;
        margin-top: 32px;
        font-size: 14px;
        color: #6b7280;
        flex-wrap: wrap;
      }
      
      .contact-item {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      
      /* Mobile Responsive */
      @media (max-width: 768px) {
        .hero-title {
          font-size: 36px;
        }
        
        .hero-description {
          font-size: 18px;
        }
        
        .section-title {
          font-size: 32px;
        }
        
        .grid-2, .grid-3 {
          grid-template-columns: 1fr;
        }
        
        .price-display {
          flex-direction: column;
          gap: 8px;
        }
        
        .features-row, .info-badges {
          flex-direction: column;
          gap: 12px;
        }
        
        .trainer-card {
          flex-direction: column;
          text-align: center;
        }
        
        .contact-info {
          flex-direction: column;
          gap: 12px;
        }
      }
    `;
    document.head.appendChild(style);

    // Create the main HTML structure
    container.innerHTML = `
      <div class="dto-offer-widget">
        <!-- Urgency Bar -->
        <div class="urgency-bar" id="urgency-bar">
          <div class="urgency-content">
            <span>⚡ Last Chance: Only 12 spots remaining at this exclusive rate</span>
            <button class="urgency-close" onclick="document.getElementById('urgency-bar').style.display='none'">×</button>
          </div>
        </div>

        <!-- Hero Section -->
        <section class="hero-section">
          <div class="container">
            <div class="badge">EXCLUSIVE 80% OFF - LIMITED TIME ONLY</div>
            
            <h1 class="hero-title">
              <span class="highlight-secondary">Wealth Through Property</span><br>
              2-Day <span class="highlight-green">Intensive</span>
            </h1>
            
            <p class="hero-description">
              Join Paul Smith, Abi Hookway, and Gordie Dutfield for an exclusive 2-day property 
              investment masterclass. Learn the exact strategies that have generated over 
              <span class="highlight-marker"><strong>£30M in student portfolio value</strong></span>
            </p>

            <!-- Price & CTA -->
            <div class="price-card">
              <div class="price-display">
                <span class="price-main">£99</span>
                <div>
                  <div class="price-old">£497</div>
                  <div class="price-save">Save £398 (80% OFF)</div>
                </div>
              </div>
              
              <button class="conversion-btn" id="checkout-btn">
                Secure My Spot Now ${icons.arrowRight}
              </button>

              <div class="features-row">
                <div class="feature-item">
                  ${icons.shield}
                  <span>Money-Back Guarantee</span>
                </div>
                <div class="feature-item">
                  ${icons.clock}
                  <span>Offer Expires Soon</span>
                </div>
              </div>
            </div>

            <div class="info-badges">
              <div class="feature-item">
                ${icons.calendar}
                <span>2 Full Days Training</span>
              </div>
              <div class="feature-item">
                ${icons.users}
                <span>Limited to 50 Attendees</span>
              </div>
              <div class="feature-item">
                ${icons.award}
                <span>CPD Accredited</span>
              </div>
            </div>
          </div>
        </section>

        <!-- What's Included Section -->
        <section class="section section-gray">
          <div class="container">
            <h2 class="section-title">
              Your Complete <span class="highlight-secondary">Training Package</span>
            </h2>
            <p class="section-subtitle">
              Everything you need to build a profitable property portfolio
            </p>

            <div class="grid-2">
              <!-- 2-Day Live Training -->
              <div class="card card-primary">
                <div class="card-icon">
                  ${icons.calendar}
                </div>
                <h3 class="card-title">2-Day Live Training Includes:</h3>
                
                <ul class="check-list">
                  <li class="check-item">
                    ${icons.checkCircle}
                    <span>How to safely access your property equity for new investments</span>
                  </li>
                  <li class="check-item">
                    ${icons.checkCircle}
                    <span>Buy-refurb-refinance mastery training</span>
                  </li>
                  <li class="check-item">
                    ${icons.checkCircle}
                    <span>Serviced accommodation business setup</span>
                  </li>
                  <li class="check-item">
                    ${icons.checkCircle}
                    <span>Sourcing & selling deals for £10k+ monthly</span>
                  </li>
                  <li class="check-item">
                    ${icons.checkCircle}
                    <span>No money down deal strategies</span>
                  </li>
                  <li class="check-item">
                    ${icons.checkCircle}
                    <span>Property LTD entity setup & management</span>
                  </li>
                  <li class="check-item">
                    ${icons.checkCircle}
                    <span>Live Q&A sessions</span>
                  </li>
                  <li class="check-item">
                    ${icons.checkCircle}
                    <span>Mindset training</span>
                  </li>
                  <li class="check-item">
                    ${icons.checkCircle}
                    <span>Complete property toolkit</span>
                  </li>
                  <li class="check-item">
                    ${icons.checkCircle}
                    <span>90-day follow-up support</span>
                  </li>
                </ul>
              </div>

              <!-- Exclusive Bonuses -->
              <div class="card card-secondary">
                <div style="text-align: center; margin-bottom: 24px;">
                  <div class="bonus-badge">EXCLUSIVE BONUSES</div>
                  <h3 class="card-title" style="margin-bottom: 8px;">Premium Resources</h3>
                  <p style="font-size: 14px; color: #6b7280;">Valued at £5,625 - Included FREE</p>
                </div>
                
                <ul class="check-list">
                  <li class="check-item">
                    ${icons.award}
                    <div>
                      <span style="font-weight: 600; font-size: 14px;">£100 Touchstone Education Voucher</span>
                      <p style="font-size: 12px; color: #6b7280; margin: 4px 0 0 0;">Redeemable across our complete course portfolio</p>
                    </div>
                  </li>
                  <li class="check-item">
                    ${icons.award}
                    <div>
                      <span style="font-weight: 600; font-size: 14px;">Property Success E-Book Collection (£30 value)</span>
                      <p style="font-size: 12px; color: #6b7280; margin: 4px 0 0 0;">£180K profit in 6 months through strategic property flipping</p>
                    </div>
                  </li>
                  <li class="check-item">
                    ${icons.award}
                    <div>
                      <span style="font-weight: 600; font-size: 14px;">Advanced Flipping Analysis Tool (£495 value)</span>
                      <p style="font-size: 12px; color: #6b7280; margin: 4px 0 0 0;">Professional-grade calculator for property valuation and profit estimation</p>
                    </div>
                  </li>
                  <li class="check-item">
                    ${icons.award}
                    <div>
                      <span style="font-weight: 600; font-size: 14px;">Wealth Assessment Platform (£5,000 value)</span>
                      <p style="font-size: 12px; color: #6b7280; margin: 4px 0 0 0;">Comprehensive wealth positioning and growth projections, plus our Net Worth Calculator</p>
                    </div>
                  </li>
                </ul>

                <div class="separator"></div>
                
                <div style="text-align: center;">
                  <div class="value-highlight">Total Value: £5,625</div>
                  <div style="font-size: 14px; color: #6b7280;">Your Investment: £99</div>
                </div>
              </div>
            </div>

            <!-- CTA Section -->
            <div style="text-align: center;">
              <div class="price-card">
                <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 16px;">Ready to Transform Your Financial Future?</h3>
                <p style="color: #6b7280; margin-bottom: 24px;">
                  Join 1,200+ successful students who've used these exact strategies to build wealth through property
                </p>
                
                <button class="conversion-btn" onclick="handleCheckoutClick()">
                  Get My WTP Ticket for £99 ${icons.arrowRight}
                </button>
                
                <p style="font-size: 12px; color: #6b7280;">
                  Protected by our 100% money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Meet Your Trainers -->
        <section class="section">
          <div class="container">
            <h2 class="section-title">
              Meet Your <span class="highlight-secondary">Expert Trainers</span>
            </h2>

            <div class="grid-2">
              <!-- Paul Smith -->
              <div class="card card-primary">
                <div class="trainer-card">
                  <div class="trainer-avatar"></div>
                  <div>
                    <h3 class="trainer-name">Paul Smith</h3>
                    <p class="trainer-title">Commercial Property Expert</p>
                    <ul class="trainer-stats">
                      <li class="trainer-stat">
                        ${icons.trendingUp}
                        <span>£30M+ property portfolio</span>
                      </li>
                      <li class="trainer-stat">
                        ${icons.award}
                        <span>40+ years experience</span>
                      </li>
                      <li class="trainer-stat">
                        ${icons.users}
                        <span>1,200+ investors mentored</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Abi Hookway -->
              <div class="card card-primary">
                <div class="trainer-card">
                  <div class="trainer-avatar"></div>
                  <div>
                    <h3 class="trainer-name">Abi Hookway</h3>
                    <p class="trainer-title">Property Investing Mum</p>
                    <ul class="trainer-stats">
                      <li class="trainer-stat">
                        ${icons.trendingUp}
                        <span>£8M+ portfolio in 8 years</span>
                      </li>
                      <li class="trainer-stat">
                        ${icons.target}
                        <span>From £24k debt to millionaire</span>
                      </li>
                      <li class="trainer-stat">
                        ${icons.users}
                        <span>Single mum success story</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Social Proof & Testimonials -->
        <section class="section section-gray">
          <div class="container">
            <h2 class="section-title">
              What Our <span class="highlight-secondary">Students Say</span>
            </h2>
            <p class="section-subtitle">Real results from real people</p>

            <div class="grid-3">
              <!-- Testimonial 1 -->
              <div class="testimonial-card">
                <div class="stars">
                  ${icons.star}${icons.star}${icons.star}${icons.star}${icons.star}
                </div>
                <p class="testimonial-text">
                  "The strategies I learned at WTP helped me secure my first deal within 
                  3 months. ROI was 15% in year one! The follow-up support was incredible."
                </p>
                <div class="testimonial-author">
                  <div class="author-avatar">
                    ${icons.user}
                  </div>
                  <div>
                    <p class="author-name">Sarah Mitchell</p>
                    <p class="author-location">First-time Investor, Manchester</p>
                  </div>
                </div>
              </div>

              <!-- Testimonial 2 -->
              <div class="testimonial-card">
                <div class="stars">
                  ${icons.star}${icons.star}${icons.star}${icons.star}${icons.star}
                </div>
                <p class="testimonial-text">
                  "Best investment I ever made. Paul and Abi's expertise is unmatched. 
                  I've built a £2M portfolio in 18 months using their strategies."
                </p>
                <div class="testimonial-author">
                  <div class="author-avatar">
                    ${icons.user}
                  </div>
                  <div>
                    <p class="author-name">James Robinson</p>
                    <p class="author-location">Portfolio Investor, Birmingham</p>
                  </div>
                </div>
              </div>

              <!-- Testimonial 3 -->
              <div class="testimonial-card">
                <div class="stars">
                  ${icons.star}${icons.star}${icons.star}${icons.star}${icons.star}
                </div>
                <p class="testimonial-text">
                  "The networking alone was worth the ticket price. I've partnered 
                  with 3 other attendees on deals totalling £5M in value."
                </p>
                <div class="testimonial-author">
                  <div class="author-avatar">
                    ${icons.user}
                  </div>
                  <div>
                    <p class="author-name">Emma Thompson</p>
                    <p class="author-location">Property Developer, London</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Money-Back Guarantee -->
        <section class="section guarantee-section">
          <div class="container">
            <div class="guarantee-icon">
              ${icons.shield}
            </div>
            
            <h2 class="section-title">
              100% <span class="highlight-green">Money-Back Guarantee</span>
            </h2>
            
            <p class="section-subtitle" style="max-width: 600px; margin: 0 auto 32px auto;">
              Dive into day one with ease. If you don't find our training top-notch, 
              we ensure a hassle-free refund. No questions asked.
            </p>
            
            <p style="font-size: 14px; color: #6b7280; font-style: italic;">
              "We don't want your money - we want your commitment to success!"
            </p>
          </div>
        </section>

        <!-- Final CTA -->
        <section class="section">
          <div class="container" style="text-align: center;">
            <div class="badge" style="background: #dc2626;">
              ⚡ LIMITED TIME: 80% OFF ENDS SOON
            </div>
            
            <h2 class="section-title">
              Don't Miss This <span class="highlight-secondary">Exclusive Opportunity</span>
            </h2>
            
            <p class="section-subtitle">
              This 80% discount is only available to those who engaged with our content. 
              Secure your spot before the price returns to £497.
            </p>

            <div class="price-card">
              <div class="price-display">
                <span class="price-main">£99</span>
                <div>
                  <div class="price-old">£497</div>
                  <div class="price-save">Save £398 Today</div>
                </div>
              </div>
              
              <button class="conversion-btn" onclick="handleCheckoutClick()">
                Claim My WTP Spot Now ${icons.arrowRight}
              </button>
              
              <div class="features-row">
                <div class="feature-item">
                  ${icons.shield}
                  <span>Money-Back Guarantee</span>
                </div>
                <div class="feature-item">
                  ${icons.clock}
                  <span>Limited Availability</span>
                </div>
              </div>
            </div>

            <div class="contact-info">
              <p style="margin-bottom: 8px;">Questions? Contact our team:</p>
              <div style="display: flex; justify-content: center; gap: 24px; flex-wrap: wrap;">
                <div class="contact-item">
                  ${icons.phone}
                  <span>0800 123 4567</span>
                </div>
                <div class="contact-item">
                  ${icons.mail}
                  <span>support@touchstoneeducation.co.uk</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;

    // Add event listeners
    const checkoutBtns = container.querySelectorAll('#checkout-btn, .conversion-btn');
    checkoutBtns.forEach(btn => {
      btn.addEventListener('click', handleCheckoutClick);
    });

    // Make handleCheckoutClick available globally for inline onclick handlers
    window.handleCheckoutClick = handleCheckoutClick;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createDTOOffer);
  } else {
    createDTOOffer();
  }

})();
