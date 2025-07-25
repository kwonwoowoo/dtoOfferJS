(function() {
  'use strict';

  // React-like utility functions
  function createElement(tag, props = {}, ...children) {
    const element = document.createElement(tag);
    
    // Set attributes
    Object.keys(props).forEach(key => {
      if (key === 'className') {
        element.className = props[key];
      } else if (key === 'onClick') {
        element.addEventListener('click', props[key]);
      } else if (key.startsWith('data-')) {
        element.setAttribute(key, props[key]);
      } else if (key === 'style' && typeof props[key] === 'object') {
        Object.assign(element.style, props[key]);
      } else {
        element.setAttribute(key, props[key]);
      }
    });

    // Add children
    children.flat().forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child instanceof Node) {
        element.appendChild(child);
      }
    });

    return element;
  }

  // Icon components (Lucide icons as SVG)
  const icons = {
    ArrowRight: () => createElement('svg', {
      className: 'lucide-arrow-right',
      width: '20',
      height: '20',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, createElement('path', { d: 'M5 12h14' }), createElement('path', { d: 'M12 5l7 7-7 7' })),

    CheckCircle: () => createElement('svg', {
      className: 'lucide-check-circle',
      width: '20',
      height: '20',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, createElement('path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' }), createElement('path', { d: 'M9 11l3 3L22 4' })),

    Clock: () => createElement('svg', {
      className: 'lucide-clock',
      width: '16',
      height: '16',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, createElement('circle', { cx: '12', cy: '12', r: '10' }), createElement('polyline', { points: '12,6 12,12 16,14' })),

    Users: () => createElement('svg', {
      className: 'lucide-users',
      width: '16',
      height: '16',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, createElement('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }), createElement('circle', { cx: '9', cy: '7', r: '4' }), createElement('path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }), createElement('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })),

    Star: () => createElement('svg', {
      className: 'lucide-star',
      width: '16',
      height: '16',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, createElement('polygon', { points: '12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26' })),

    Calendar: () => createElement('svg', {
      className: 'lucide-calendar',
      width: '16',
      height: '16',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, createElement('rect', { x: '3', y: '4', width: '18', height: '18', rx: '2', ry: '2' }), createElement('line', { x1: '16', y1: '2', x2: '16', y2: '6' }), createElement('line', { x1: '8', y1: '2', x2: '8', y2: '6' }), createElement('line', { x1: '3', y1: '10', x2: '21', y2: '10' })),

    Award: () => createElement('svg', {
      className: 'lucide-award',
      width: '16',
      height: '16',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, createElement('circle', { cx: '12', cy: '8', r: '7' }), createElement('polyline', { points: '8.21,13.89 7,23 12,20 17,23 15.79,13.88' })),

    TrendingUp: () => createElement('svg', {
      className: 'lucide-trending-up',
      width: '16',
      height: '16',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, createElement('polyline', { points: '22,7 13.5,15.5 8.5,10.5 2,17' }), createElement('polyline', { points: '16,7 22,7 22,13' })),

    Target: () => createElement('svg', {
      className: 'lucide-target',
      width: '16',
      height: '16',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, createElement('circle', { cx: '12', cy: '12', r: '10' }), createElement('circle', { cx: '12', cy: '12', r: '6' }), createElement('circle', { cx: '12', cy: '12', r: '2' })),

    Shield: () => createElement('svg', {
      className: 'lucide-shield',
      width: '20',
      height: '20',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10' })),

    User: () => createElement('svg', {
      className: 'lucide-user',
      width: '20',
      height: '20',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, createElement('path', { d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' }), createElement('circle', { cx: '12', cy: '7', r: '4' })),

    Phone: () => createElement('svg', {
      className: 'lucide-phone',
      width: '16',
      height: '16',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, createElement('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })),

    Mail: () => createElement('svg', {
      className: 'lucide-mail',
      width: '16',
      height: '16',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, createElement('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }), createElement('polyline', { points: '22,6 12,13 2,6' }))
  };

  // Highlight component
  function createHighlight(text, type = 'primary') {
    const highlightClasses = {
      primary: 'bg-blue-100 text-blue-800 px-1 rounded',
      secondary: 'bg-red-100 text-red-800 px-1 rounded',
      green: 'bg-green-100 text-green-800 px-1 rounded',
      marker: 'bg-yellow-200 text-yellow-900 px-1 rounded'
    };
    
    return createElement('span', { className: highlightClasses[type] || highlightClasses.primary }, text);
  }

  // Badge component
  function createBadge(text, className = '') {
    return createElement('span', {
      className: `inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${className}`
    }, text);
  }

  // Button component
  function createButton(text, onClick, className = '', icon = null) {
    const button = createElement('button', {
      className: `inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`,
      onClick: onClick
    }, text);

    if (icon) {
      button.appendChild(createElement('span', { className: 'ml-2' }, icon));
    }

    return button;
  }

  // Card components
  function createCard(children, className = '') {
    return createElement('div', {
      className: `rounded-lg border bg-card text-card-foreground shadow-sm ${className}`
    }, children);
  }

  function createCardContent(children, className = '') {
    return createElement('div', { className: `p-6 ${className}` }, children);
  }

  // Separator component
  function createSeparator() {
    return createElement('div', { className: 'shrink-0 bg-border h-[1px] w-full my-4' });
  }

  // State management
  let urgencyVisible = true;

  // Tracking functions
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

    // Track page view
    trackEvent('DTO Offer Page View');

    // Create main container
    const mainDiv = createElement('div', { className: 'min-h-screen bg-white' });

    // Urgency Bar
    if (urgencyVisible) {
      const urgencyBar = createElement('div', {
        className: 'bg-red-600 text-white py-2 px-4 text-center text-sm font-medium'
      });
      
      const urgencyContent = createElement('div', {
        className: 'container mx-auto flex justify-between items-center'
      });
      
      urgencyContent.appendChild(createElement('span', {}, '⚡ Last Chance: Only 12 spots remaining at this exclusive rate'));
      
      const closeBtn = createElement('button', {
        className: 'text-white hover:text-gray-200',
        onClick: () => {
          urgencyVisible = false;
          urgencyBar.style.display = 'none';
        }
      }, '×');
      
      urgencyContent.appendChild(closeBtn);
      urgencyBar.appendChild(urgencyContent);
      mainDiv.appendChild(urgencyBar);
    }

    // Hero Section
    const heroSection = createElement('section', {
      className: 'relative pt-8 md:pt-12 pb-12 md:pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white'
    });

    const heroContainer = createElement('div', {
      className: 'container mx-auto px-4 md:px-6 relative z-10'
    });

    const heroContent = createElement('div', {
      className: 'max-w-5xl mx-auto text-center transform transition-all duration-700 opacity-100 translate-y-0'
    });

    // Badge
    heroContent.appendChild(createBadge('EXCLUSIVE 80% OFF - LIMITED TIME ONLY', 'mb-6 bg-red-600 text-white px-6 py-2 text-sm font-bold'));

    // Main headline
    const h1 = createElement('h1', {
      className: 'text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-[1.05] tracking-tight'
    });
    h1.appendChild(createHighlight('Wealth Through Property', 'secondary'));
    h1.appendChild(createElement('br'));
    h1.appendChild(document.createTextNode('2-Day '));
    h1.appendChild(createHighlight('Intensive', 'green'));
    heroContent.appendChild(h1);

    // Subtitle
    const subtitle = createElement('p', {
      className: 'text-lg md:text-xl text-foreground/90 mb-8 max-w-4xl mx-auto font-medium'
    });
    subtitle.innerHTML = 'Join Paul Smith, Abi Hookway, and Gordie Dutfield for an exclusive 2-day property investment masterclass. Learn the exact strategies that have generated over ';
    subtitle.appendChild(createElement('span', { className: 'font-extrabold text-primary' }, createHighlight('£30M in student portfolio value', 'marker')));
    heroContent.appendChild(subtitle);

    // Price & CTA Card
    const priceCard = createCard(null, 'border-2 border-primary shadow-2xl mb-8 max-w-2xl mx-auto');
    const priceContent = createCardContent(null, 'p-8');
    
    const priceSection = createElement('div', { className: 'text-center mb-6' });
    
    const priceDisplay = createElement('div', { className: 'flex justify-center items-baseline gap-4 mb-4' });
    priceDisplay.appendChild(createElement('span', { className: 'text-5xl font-black text-primary' }, '£99'));
    
    const priceDetails = createElement('div', { className: 'text-left' });
    priceDetails.appendChild(createElement('div', { className: 'text-2xl line-through text-gray-500' }, '£497'));
    priceDetails.appendChild(createElement('div', { className: 'text-sm font-bold text-green-600' }, 'Save £398 (80% OFF)'));
    priceDisplay.appendChild(priceDetails);
    
    priceSection.appendChild(priceDisplay);
    
    // CTA Button
    const ctaButton = createButton('Secure My Spot Now', handleCheckoutClick, 'w-full py-6 text-xl font-bold bg-primary text-white hover:bg-primary/90 mb-4', icons.ArrowRight());
    priceSection.appendChild(ctaButton);
    
    // Trust indicators
    const trustIndicators = createElement('div', { className: 'flex justify-center gap-4 items-center text-sm text-foreground/70' });
    
    const guarantee = createElement('div', { className: 'flex items-center' });
    guarantee.appendChild(icons.Shield());
    guarantee.appendChild(createElement('span', { className: 'ml-1' }, 'Money-Back Guarantee'));
    
    const expires = createElement('div', { className: 'flex items-center' });
    expires.appendChild(icons.Clock());
    expires.appendChild(createElement('span', { className: 'ml-1' }, 'Offer Expires Soon'));
    
    trustIndicators.appendChild(guarantee);
    trustIndicators.appendChild(expires);
    priceSection.appendChild(trustIndicators);
    
    priceContent.appendChild(priceSection);
    priceCard.appendChild(priceContent);
    heroContent.appendChild(priceCard);

    // Bottom hero indicators
    const bottomIndicators = createElement('div', { className: 'flex justify-center gap-6 items-center text-sm text-foreground/70' });
    
    const indicator1 = createElement('div', { className: 'flex items-center' });
    indicator1.appendChild(icons.Calendar());
    indicator1.appendChild(createElement('span', { className: 'ml-1' }, '2 Full Days Training'));
    
    const indicator2 = createElement('div', { className: 'flex items-center' });
    indicator2.appendChild(icons.Users());
    indicator2.appendChild(createElement('span', { className: 'ml-1' }, 'Limited to 50 Attendees'));
    
    const indicator3 = createElement('div', { className: 'flex items-center' });
    indicator3.appendChild(icons.Award());
    indicator3.appendChild(createElement('span', { className: 'ml-1' }, 'CPD Accredited'));
    
    bottomIndicators.appendChild(indicator1);
    bottomIndicators.appendChild(indicator2);
    bottomIndicators.appendChild(indicator3);
    heroContent.appendChild(bottomIndicators);

    heroContainer.appendChild(heroContent);
    heroSection.appendChild(heroContainer);
    mainDiv.appendChild(heroSection);

    // What's Included Section
    const includedSection = createElement('section', { className: 'py-12 md:py-20 bg-gray-50' });
    const includedContainer = createElement('div', { className: 'container mx-auto px-4 md:px-6' });
    const includedContent = createElement('div', { className: 'max-w-6xl mx-auto' });

    // Section header
    const includedHeader = createElement('div', { className: 'text-center mb-12' });
    const includedH2 = createElement('h2', { className: 'text-3xl md:text-5xl font-black mb-6' });
    includedH2.appendChild(document.createTextNode('Your Complete '));
    includedH2.appendChild(createHighlight('Training Package', 'primary'));
    includedHeader.appendChild(includedH2);
    includedHeader.appendChild(createElement('p', { className: 'text-lg text-foreground/80' }, 'Everything you need to build a profitable property portfolio'));
    includedContent.appendChild(includedHeader);

    // Grid container
    const gridContainer = createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12' });

    // Training card
    const trainingCard = createCard(null, 'border-2 border-primary/20 shadow-lg');
    const trainingContent = createCardContent(null, 'p-8');
    
    const trainingHeader = createElement('div', { className: 'text-center mb-6' });
    const trainingIcon = createElement('div', { className: 'w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4' });
    trainingIcon.appendChild(icons.Calendar());
    trainingHeader.appendChild(trainingIcon);
    trainingHeader.appendChild(createElement('h3', { className: 'text-2xl font-bold mb-4' }, '2-Day Live Training Includes:'));
    trainingContent.appendChild(trainingHeader);

    // Training benefits
    const trainingBenefits = [
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
    ];

    const benefitsList = createElement('div', { className: 'space-y-4' });
    trainingBenefits.forEach(benefit => {
      const benefitItem = createElement('div', { className: 'flex items-start gap-3' });
      benefitItem.appendChild(icons.CheckCircle());
      benefitItem.appendChild(createElement('span', { className: 'text-sm' }, benefit));
      benefitsList.appendChild(benefitItem);
    });
    trainingContent.appendChild(benefitsList);
    trainingCard.appendChild(trainingContent);
    gridContainer.appendChild(trainingCard);

    // Bonuses card
    const bonusCard = createCard(null, 'border-2 border-secondary/20 shadow-lg');
    const bonusContent = createCardContent(null, 'p-8');
    
    const bonusHeader = createElement('div', { className: 'text-center mb-6' });
    bonusHeader.appendChild(createBadge('EXCLUSIVE BONUSES', 'mb-4 bg-green-600 text-white px-4 py-2'));
    bonusHeader.appendChild(createElement('h3', { className: 'text-2xl font-bold mb-2' }, 'Premium Resources'));
    bonusHeader.appendChild(createElement('p', { className: 'text-sm text-foreground/70' }, 'Valued at £5,625 - Included FREE'));
    bonusContent.appendChild(bonusHeader);

    // Bonus items
    const bonusItems = [
      { title: '£100 Touchstone Education Voucher', desc: 'Redeemable across our complete course portfolio' },
      { title: 'Property Success E-Book Collection (£30 value)', desc: '£180K profit in 6 months through strategic property flipping' },
      { title: 'Advanced Flipping Analysis Tool (£495 value)', desc: 'Professional-grade calculator for property valuation and profit estimation' },
      { title: 'Wealth Assessment Platform (£5,000 value)', desc: 'Comprehensive wealth positioning and growth projections, plus our Net Worth Calculator' }
    ];

    const bonusList = createElement('div', { className: 'space-y-4' });
    bonusItems.forEach(item => {
      const bonusItem = createElement('div', { className: 'flex items-start gap-3' });
      bonusItem.appendChild(icons.Award());
      const bonusText = createElement('div');
      bonusText.appendChild(createElement('span', { className: 'font-medium text-sm' }, item.title));
      bonusText.appendChild(createElement('p', { className: 'text-xs text-foreground/60' }, item.desc));
      bonusItem.appendChild(bonusText);
      bonusList.appendChild(bonusItem);
    });
    bonusContent.appendChild(bonusList);

    bonusContent.appendChild(createSeparator());

    const bonusTotal = createElement('div', { className: 'text-center' });
    bonusTotal.appendChild(createElement('div', { className: 'text-2xl font-black text-green-600 mb-2' }, 'Total Value: £5,625'));
    bonusTotal.appendChild(createElement('div', { className: 'text-sm text-foreground/70' }, 'Your Investment: £99'));
    bonusContent.appendChild(bonusTotal);

    bonusCard.appendChild(bonusContent);
    gridContainer.appendChild(bonusCard);
    includedContent.appendChild(gridContainer);

    // Final CTA in this section
    const finalCTA = createElement('div', { className: 'text-center' });
    const finalCTACard = createCard(null, 'border-2 border-primary shadow-2xl max-w-2xl mx-auto');
    const finalCTAContent = createCardContent(null, 'p-8');
    
    finalCTAContent.appendChild(createElement('h3', { className: 'text-2xl font-bold mb-4' }, 'Ready to Transform Your Financial Future?'));
    finalCTAContent.appendChild(createElement('p', { className: 'text-foreground/70 mb-6' }, 'Join 1,200+ successful students who\'ve used these exact strategies to build wealth through property'));
    finalCTAContent.appendChild(createButton('Get My WTP Ticket for £99', handleCheckoutClick, 'w-full py-6 text-xl font-bold bg-primary text-white hover:bg-primary/90 mb-4', icons.ArrowRight()));
    finalCTAContent.appendChild(createElement('p', { className: 'text-xs text-foreground/60' }, 'Protected by our 100% money-back guarantee'));
    
    finalCTACard.appendChild(finalCTAContent);
    finalCTA.appendChild(finalCTACard);
    includedContent.appendChild(finalCTA);

    includedContainer.appendChild(includedContent);
    includedSection.appendChild(includedContainer);
    mainDiv.appendChild(includedSection);

    // Meet Your Trainers Section
    const trainersSection = createElement('section', { className: 'py-12 md:py-20 bg-white' });
    const trainersContainer = createElement('div', { className: 'container mx-auto px-4 md:px-6' });
    const trainersContent = createElement('div', { className: 'max-w-6xl mx-auto' });

    const trainersHeader = createElement('div', { className: 'text-center mb-12' });
    const trainersH2 = createElement('h2', { className: 'text-3xl md:text-5xl font-black mb-6' });
    trainersH2.appendChild(document.createTextNode('Meet Your '));
    trainersH2.appendChild(createHighlight('Expert Trainers', 'primary'));
    trainersHeader.appendChild(trainersH2);
    trainersContent.appendChild(trainersHeader);

    // Trainers grid
    const trainersGrid = createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-8 mb-12' });

    // Paul Smith
    const paulCard = createCard(null, 'border-2 border-primary/20 shadow-lg');
    const paulContent = createCardContent(null, 'p-8');
    const paulFlex = createElement('div', { className: 'flex items-start gap-6' });
    
    const paulAvatar = createElement('div', { className: 'w-24 h-24 bg-gray-200 rounded-full flex-shrink-0' });
    const paulInfo = createElement('div');
    paulInfo.appendChild(createElement('h3', { className: 'text-xl font-bold mb-2' }, 'Paul Smith'));
    paulInfo.appendChild(createElement('p', { className: 'text-sm text-primary font-medium mb-4' }, 'Commercial Property Expert'));
    
    const paulStats = createElement('div', { className: 'space-y-2 text-sm text-foreground/70' });
    const paulStat1 = createElement('div', { className: 'flex items-center gap-2' });
    paulStat1.appendChild(icons.TrendingUp());
    paulStat1.appendChild(createElement('span', {}, '£30M+ property portfolio'));
    
    const paulStat2 = createElement('div', { className: 'flex items-center gap-2' });
    paulStat2.appendChild(icons.Award());
    paulStat2.appendChild(createElement('span', {}, '40+ years experience'));
    
    const paulStat3 = createElement('div', { className: 'flex items-center gap-2' });
    paulStat3.appendChild(icons.Users());
    paulStat3.appendChild(createElement('span', {}, '1,200+ investors mentored'));
    
    paulStats.appendChild(paulStat1);
    paulStats.appendChild(paulStat2);
    paulStats.appendChild(paulStat3);
    paulInfo.appendChild(paulStats);
    
    paulFlex.appendChild(paulAvatar);
    paulFlex.appendChild(paulInfo);
    paulContent.appendChild(paulFlex);
    paulCard.appendChild(paulContent);
    trainersGrid.appendChild(paulCard);

    // Abi Hookway
    const abiCard = createCard(null, 'border-2 border-primary/20 shadow-lg');
    const abiContent = createCardContent(null, 'p-8');
    const abiFlex = createElement('div', { className: 'flex items-start gap-6' });
    
    const abiAvatar = createElement('div', { className: 'w-24 h-24 bg-gray-200 rounded-full flex-shrink-0' });
    const abiInfo = createElement('div');
    abiInfo.appendChild(createElement('h3', { className: 'text-xl font-bold mb-2' }, 'Abi Hookway'));
    abiInfo.appendChild(createElement('p', { className: 'text-sm text-primary font-medium mb-4' }, 'Property Investing Mum'));
    
    const abiStats = createElement('div', { className: 'space-y-2 text-sm text-foreground/70' });
    const abiStat1 = createElement('div', { className: 'flex items-center gap-2' });
    abiStat1.appendChild(icons.TrendingUp());
    abiStat1.appendChild(createElement('span', {}, '£8M+ portfolio in 8 years'));
    
    const abiStat2 = createElement('div', { className: 'flex items-center gap-2' });
    abiStat2.appendChild(icons.Target());
    abiStat2.appendChild(createElement('span', {}, 'From £24k debt to millionaire'));
    
    const abiStat3 = createElement('div', { className: 'flex items-center gap-2' });
    abiStat3.appendChild(icons.Users());
    abiStat3.appendChild(createElement('span', {}, 'Single mum success story'));
    
    abiStats.appendChild(abiStat1);
    abiStats.appendChild(abiStat2);
    abiStats.appendChild(abiStat3);
    abiInfo.appendChild(abiStats);
    
    abiFlex.appendChild(abiAvatar);
    abiFlex.appendChild(abiInfo);
    abiContent.appendChild(abiFlex);
    abiCard.appendChild(abiContent);
    trainersGrid.appendChild(abiCard);

    trainersContent.appendChild(trainersGrid);
    trainersContainer.appendChild(trainersContent);
    trainersSection.appendChild(trainersContainer);
    mainDiv.appendChild(trainersSection);

    // Testimonials Section
    const testimonialsSection = createElement('section', { className: 'py-12 md:py-20 bg-gray-50' });
    const testimonialsContainer = createElement('div', { className: 'container mx-auto px-4 md:px-6' });
    const testimonialsContent = createElement('div', { className: 'max-w-6xl mx-auto' });

    const testimonialsHeader = createElement('div', { className: 'text-center mb-12' });
    const testimonialsH2 = createElement('h2', { className: 'text-3xl md:text-5xl font-black mb-6' });
    testimonialsH2.appendChild(document.createTextNode('What Our '));
    testimonialsH2.appendChild(createHighlight('Students Say', 'secondary'));
    testimonialsHeader.appendChild(testimonialsH2);
    testimonialsHeader.appendChild(createElement('p', { className: 'text-lg text-foreground/80' }, 'Real results from real people'));
    testimonialsContent.appendChild(testimonialsHeader);

    // Testimonials grid
    const testimonialsGrid = createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8 mb-12' });

    const testimonials = [
      {
        quote: 'The strategies I learned at WTP helped me secure my first deal within 3 months. ROI was 15% in year one! The follow-up support was incredible.',
        name: 'Sarah Mitchell',
        title: 'First-time Investor, Manchester'
      },
      {
        quote: 'Best investment I ever made. Paul and Abi\'s expertise is unmatched. I\'ve built a £2M portfolio in 18 months using their strategies.',
        name: 'James Robinson',
        title: 'Portfolio Investor, Birmingham'
      },
      {
        quote: 'The networking alone was worth the ticket price. I\'ve partnered with 3 other attendees on deals totalling £5M in value.',
        name: 'Emma Thompson',
        title: 'Property Developer, London'
      }
    ];

    testimonials.forEach(testimonial => {
      const testimonialCard = createCard(null, 'border-0 shadow-lg');
      const testimonialContent = createCardContent(null, 'p-8');
      
      // Stars
      const stars = createElement('div', { className: 'flex items-center mb-4' });
      for (let i = 0; i < 5; i++) {
        stars.appendChild(icons.Star());
      }
      testimonialContent.appendChild(stars);
      
      // Quote
      testimonialContent.appendChild(createElement('p', { className: 'text-sm text-foreground/70 mb-6' }, `"${testimonial.quote}"`));
      
      // Author
      const author = createElement('div', { className: 'flex items-center gap-3' });
      const avatar = createElement('div', { className: 'w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center' });
      avatar.appendChild(icons.User());
      
      const authorInfo = createElement('div');
      authorInfo.appendChild(createElement('p', { className: 'font-medium' }, testimonial.name));
      authorInfo.appendChild(createElement('p', { className: 'text-xs text-foreground/60' }, testimonial.title));
      
      author.appendChild(avatar);
      author.appendChild(authorInfo);
      testimonialContent.appendChild(author);
      
      testimonialCard.appendChild(testimonialContent);
      testimonialsGrid.appendChild(testimonialCard);
    });

    testimonialsContent.appendChild(testimonialsGrid);
    testimonialsContainer.appendChild(testimonialsContent);
    testimonialsSection.appendChild(testimonialsContainer);
    mainDiv.appendChild(testimonialsSection);

    // Money-Back Guarantee Section
    const guaranteeSection = createElement('section', { className: 'py-12 md:py-20 bg-green-50' });
    const guaranteeContainer = createElement('div', { className: 'container mx-auto px-4 md:px-6' });
    const guaranteeContent = createElement('div', { className: 'max-w-4xl mx-auto text-center' });

    const guaranteeIcon = createElement('div', { className: 'w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6' });
    const shieldIcon = icons.Shield();
    shieldIcon.style.color = 'white';
    shieldIcon.style.width = '40px';
    shieldIcon.style.height = '40px';
    guaranteeIcon.appendChild(shieldIcon);
    guaranteeContent.appendChild(guaranteeIcon);

    const guaranteeH2 = createElement('h2', { className: 'text-3xl md:text-4xl font-black mb-6' });
    guaranteeH2.appendChild(document.createTextNode('100% '));
    guaranteeH2.appendChild(createHighlight('Money-Back Guarantee', 'green'));
    guaranteeContent.appendChild(guaranteeH2);

    guaranteeContent.appendChild(createElement('p', { className: 'text-lg text-foreground/80 mb-8 max-w-3xl mx-auto' }, 'Dive into day one with ease. If you don\'t find our training top-notch, we ensure a hassle-free refund. No questions asked.'));
    guaranteeContent.appendChild(createElement('p', { className: 'text-sm text-foreground/60 italic' }, '"We don\'t want your money - we want your commitment to success!"'));

    guaranteeContainer.appendChild(guaranteeContent);
    guaranteeSection.appendChild(guaranteeContainer);
    mainDiv.appendChild(guaranteeSection);

    // Final CTA Section
    const finalCTASection = createElement('section', { className: 'py-12 md:py-20 bg-white' });
    const finalCTAContainer = createElement('div', { className: 'container mx-auto px-4 md:px-6' });
    const finalCTAContent = createElement('div', { className: 'max-w-4xl mx-auto text-center' });

    finalCTAContent.appendChild(createBadge('⚡ LIMITED TIME: 80% OFF ENDS SOON', 'mb-6 bg-red-600 text-white px-6 py-3 text-lg font-bold'));

    const finalH2 = createElement('h2', { className: 'text-3xl md:text-5xl font-black mb-6' });
    finalH2.appendChild(document.createTextNode('Don\'t Miss This '));
    finalH2.appendChild(createHighlight('Exclusive Opportunity', 'secondary'));
    finalCTAContent.appendChild(finalH2);

    finalCTAContent.appendChild(createElement('p', { className: 'text-lg text-foreground/80 mb-8' }, 'This 80% discount is only available to those who engaged with our content. Secure your spot before the price returns to £497.'));

    // Final price card
    const finalPriceCard = createCard(null, 'border-2 border-primary shadow-2xl max-w-2xl mx-auto');
    const finalPriceContent = createCardContent(null, 'p-8');

    const finalPriceDisplay = createElement('div', { className: 'flex justify-center items-baseline gap-4 mb-6' });
    finalPriceDisplay.appendChild(createElement('span', { className: 'text-5xl font-black text-primary' }, '£99'));
    
    const finalPriceDetails = createElement('div', { className: 'text-left' });
    finalPriceDetails.appendChild(createElement('div', { className: 'text-2xl line-through text-gray-500' }, '£497'));
    finalPriceDetails.appendChild(createElement('div', { className: 'text-sm font-bold text-green-600' }, 'Save £398 Today'));
    finalPriceDisplay.appendChild(finalPriceDetails);
    finalPriceContent.appendChild(finalPriceDisplay);

    finalPriceContent.appendChild(createButton('Claim My WTP Spot Now', handleCheckoutClick, 'w-full py-6 text-xl font-bold bg-primary text-white hover:bg-primary/90 mb-4', icons.ArrowRight()));

    const finalTrustGrid = createElement('div', { className: 'grid grid-cols-2 gap-4 text-xs text-foreground/60' });
    
    const finalGuarantee = createElement('div', { className: 'flex items-center justify-center' });
    finalGuarantee.appendChild(icons.Shield());
    finalGuarantee.appendChild(createElement('span', { className: 'ml-1' }, 'Money-Back Guarantee'));
    
    const finalLimited = createElement('div', { className: 'flex items-center justify-center' });
    finalLimited.appendChild(icons.Clock());
    finalLimited.appendChild(createElement('span', { className: 'ml-1' }, 'Limited Availability'));
    
    finalTrustGrid.appendChild(finalGuarantee);
    finalTrustGrid.appendChild(finalLimited);
    finalPriceContent.appendChild(finalTrustGrid);

    finalPriceCard.appendChild(finalPriceContent);
    finalCTAContent.appendChild(finalPriceCard);

    // Contact info
    const contactInfo = createElement('div', { className: 'mt-8 text-sm text-foreground/60' });
    contactInfo.appendChild(createElement('p', {}, 'Questions? Contact our team:'));
    
    const contactFlex = createElement('div', { className: 'flex justify-center gap-6 mt-2' });
    
    const phoneContact = createElement('div', { className: 'flex items-center' });
    phoneContact.appendChild(icons.Phone());
    phoneContact.appendChild(createElement('span', { className: 'ml-1' }, '0800 123 4567'));
    
    const emailContact = createElement('div', { className: 'flex items-center' });
    emailContact.appendChild(icons.Mail());
    emailContact.appendChild(createElement('span', { className: 'ml-1' }, 'support@touchstoneeducation.co.uk'));
    
    contactFlex.appendChild(phoneContact);
    contactFlex.appendChild(emailContact);
    contactInfo.appendChild(contactFlex);
    finalCTAContent.appendChild(contactInfo);

    finalCTAContainer.appendChild(finalCTAContent);
    finalCTASection.appendChild(finalCTAContainer);
    mainDiv.appendChild(finalCTASection);

    // Add all styles
    const styles = `
      .container { max-width: 1200px; margin: 0 auto; }
      .bg-primary { background-color: #3b82f6; }
      .text-primary { color: #3b82f6; }
      .bg-secondary { background-color: #10b981; }
      .text-secondary { color: #10b981; }
      .bg-green-600 { background-color: #059669; }
      .bg-red-600 { background-color: #dc2626; }
      .text-white { color: white; }
      .text-gray-500 { color: #6b7280; }
      .text-green-600 { color: #059669; }
      .text-foreground\\/90 { color: rgba(0, 0, 0, 0.9); }
      .text-foreground\\/80 { color: rgba(0, 0, 0, 0.8); }
      .text-foreground\\/70 { color: rgba(0, 0, 0, 0.7); }
      .text-foreground\\/60 { color: rgba(0, 0, 0, 0.6); }
      .border-primary { border-color: #3b82f6; }
      .border-primary\\/20 { border-color: rgba(59, 130, 246, 0.2); }
      .border-secondary\\/20 { border-color: rgba(16, 185, 129, 0.2); }
      .bg-primary\\/10 { background-color: rgba(59, 130, 246, 0.1); }
      .bg-primary\\/20 { background-color: rgba(59, 130, 246, 0.2); }
      .hover\\:bg-primary\\/90:hover { background-color: rgba(59, 130, 246, 0.9); }
      .font-black { font-weight: 900; }
      .font-bold { font-weight: 700; }
      .font-medium { font-weight: 500; }
      .font-extrabold { font-weight: 800; }
      .leading-\\[1\\.05\\] { line-height: 1.05; }
      .tracking-tight { letter-spacing: -0.025em; }
      .rounded-lg { border-radius: 0.5rem; }
      .rounded-full { border-radius: 9999px; }
      .rounded-md { border-radius: 0.375rem; }
      .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
      .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
      .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
      .bg-gradient-to-b { background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); }
      .from-gray-50 { --tw-gradient-from: #f9fafb; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(249, 250, 251, 0)); }
      .to-white { --tw-gradient-to: #ffffff; }
      .bg-gray-50 { background-color: #f9fafb; }
      .bg-gray-200 { background-color: #e5e7eb; }
      .bg-white { background-color: white; }
      .bg-green-50 { background-color: #f0fdf4; }
      .bg-green-500 { background-color: #22c55e; }
      .line-through { text-decoration: line-through; }
      .italic { font-style: italic; }
      .space-y-4 > * + * { margin-top: 1rem; }
      .space-y-2 > * + * { margin-top: 0.5rem; }
      .grid { display: grid; }
      .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
      .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .gap-8 { gap: 2rem; }
      .gap-6 { gap: 1.5rem; }
      .gap-4 { gap: 1rem; }
      .gap-3 { gap: 0.75rem; }
      .gap-2 { gap: 0.5rem; }
      .flex { display: flex; }
      .items-center { align-items: center; }
      .items-start { align-items: flex-start; }
      .items-baseline { align-items: baseline; }
      .justify-center { justify-content: center; }
      .justify-between { justify-content: space-between; }
      .text-center { text-align: center; }
      .text-left { text-align: left; }
      .max-w-2xl { max-width: 42rem; }
      .max-w-3xl { max-width: 48rem; }
      .max-w-4xl { max-width: 56rem; }
      .max-w-5xl { max-width: 64rem; }
      .max-w-6xl { max-width: 72rem; }
      .mx-auto { margin-left: auto; margin-right: auto; }
      .mb-2 { margin-bottom: 0.5rem; }
      .mb-4 { margin-bottom: 1rem; }
      .mb-6 { margin-bottom: 1.5rem; }
      .mb-8 { margin-bottom: 2rem; }
      .mb-12 { margin-bottom: 3rem; }
      .mt-2 { margin-top: 0.5rem; }
      .mt-8 { margin-top: 2rem; }
      .ml-1 { margin-left: 0.25rem; }
      .ml-2 { margin-left: 0.5rem; }
      .mr-1 { margin-right: 0.25rem; }
      .pt-8 { padding-top: 2rem; }
      .pb-12 { padding-bottom: 3rem; }
      .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
      .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
      .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
      .px-1 { padding-left: 0.25rem; padding-right: 0.25rem; }
      .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
      .px-4 { padding-left: 1rem; padding-right: 1rem; }
      .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
      .p-6 { padding: 1.5rem; }
      .p-8 { padding: 2rem; }
      .w-full { width: 100%; }
      .w-10 { width: 2.5rem; }
      .w-16 { width: 4rem; }
      .w-20 { width: 5rem; }
      .w-24 { width: 6rem; }
      .h-10 { height: 2.5rem; }
      .h-16 { height: 4rem; }
      .h-20 { height: 5rem; }
      .h-24 { height: 6rem; }
      .h-\\[1px\\] { height: 1px; }
      .min-h-screen { min-height: 100vh; }
      .text-xs { font-size: 0.75rem; line-height: 1rem; }
      .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
      .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
      .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
      .text-2xl { font-size: 1.5rem; line-height: 2rem; }
      .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
      .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
      .text-5xl { font-size: 3rem; line-height: 1; }
      .border { border-width: 1px; }
      .border-2 { border-width: 2px; }
      .border-0 { border-width: 0px; }
      .rounded { border-radius: 0.25rem; }
      .inline-flex { display: inline-flex; }
      .flex-shrink-0 { flex-shrink: 0; }
      .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
      .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
      .duration-700 { transition-duration: 700ms; }
      .opacity-100 { opacity: 1; }
      .translate-y-0 { transform: translateY(0px); }
      .transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
      .relative { position: relative; }
      .z-10 { z-index: 10; }
      .overflow-hidden { overflow: hidden; }
      .focus-visible\\:outline-none:focus-visible { outline: 2px solid transparent; outline-offset: 2px; }
      .focus-visible\\:ring-2:focus-visible { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }
      .focus-visible\\:ring-ring:focus-visible { --tw-ring-color: #3b82f6; }
      .focus-visible\\:ring-offset-2:focus-visible { --tw-ring-offset-width: 2px; }
      .disabled\\:opacity-50:disabled { opacity: 0.5; }
      .disabled\\:pointer-events-none:disabled { pointer-events: none; }
      .ring-offset-background { --tw-ring-offset-color: #ffffff; }
      .hover\\:text-gray-200:hover { color: #e5e7eb; }
      .cursor-pointer { cursor: pointer; }
      .my-4 { margin-top: 1rem; margin-bottom: 1rem; }
      .shrink-0 { flex-shrink: 0; }
      .bg-border { background-color: #e4e4e7; }
      .bg-card { background-color: #ffffff; }
      .text-card-foreground { color: #0f172a; }
      
      @media (min-width: 768px) {
        .md\\:text-6xl { font-size: 3.75rem; line-height: 1; }
        .md\\:text-5xl { font-size: 3rem; line-height: 1; }
        .md\\:text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .md\\:mb-8 { margin-bottom: 2rem; }
        .md\\:pt-12 { padding-top: 3rem; }
        .md\\:pb-20 { padding-bottom: 5rem; }
        .md\\:py-20 { padding-top: 5rem; padding-bottom: 5rem; }
        .md\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      }
      
      @media (min-width: 1024px) {
        .lg\\:text-7xl { font-size: 4.5rem; line-height: 1; }
        .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
    `;

    if (!document.getElementById('dto-offer-styles')) {
      const styleSheet = createElement('style', { id: 'dto-offer-styles' });
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }

    // Clear container and add the component
    container.innerHTML = '';
    container.appendChild(mainDiv);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createDTOOffer);
  } else {
    createDTOOffer();
  }

})();
