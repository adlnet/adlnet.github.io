$(function() {

  var groups = ["xAPI","LRS","LRSTools","APTools","Reporting","Mobile","SCORM","Profile","VirtualWorlds","Tutorials", "Workshops"];

  var items = [
    
    // Keycloak Integration Slides 
    {
      tags: ["Reporting"],
      color: 'red',
      icon: 'fa-flask',
      title: "TADLP's IMI Cost Calculator",
      description: 'Method of Instruction Cost Estimation and Comparison Calculator v1.03.',
      link_gh: "https://github.com/adlnet/imi-cost-calc",
      link_ex: 'https://adlnet.github.io/imi-calc',
      link_ex_title: 'View Tool',
    },
    {
      tags: ["Tutorials"],
      color: 'blue',
      icon: 'fa-flask',
      title: 'Keycloak IdP Integration',
      description: 'Slide deck explaining how to integrate Keycloak with an external Identity Provider.',
      link_gh: "https://github.com/vbhayden/keycloak-federation-examples",
      link_ex: 'public/adl-tutorial-keycloak-id-providers.pdf',
      link_ex_title: 'PDF',
    },
    {
      tags: ["LRS","xAPI"],
      color: 'blue',
      icon: 'fa-university',
      title: 'ADL LRS',
      description: 'ADL’s Open Source Learning Record Store (LRS) is used to store learning data collected with the xAPI. It is a reference implementation of the system described in the <a href="https://github.com/adlnet/xAPI-Spec" target="_blank">xAPI Spec repository</a>. Use this project if you are looking to setup an LRS for testing purposes, try the live demo linked below.',
      link_ex: 'https://lrs.adlnet.gov',
      link_ex_title: 'Public LRS',
      link_gh: 'https://github.com/adlnet/ADL_LRS'
    },
    {
      tags: ["LRSTools","xAPI"],
      color: 'blue',
      icon: 'fa-check-circle-o',
      title: 'LRS Conformance Test Suite',
      description: 'This is a NodeJS project that tests the \'MUST\' requirements of the xAPI Spec and is based on the ADL testing requirements repository. This is actively being developed and new tests will be periodically added based on the testing requirements.',
      link_ex: 'https://lrstest.adlnet.gov/',
      link_ex_title: 'Website',
      link_gh: 'https://github.com/adlnet/lrs-conformance-test-suite'
    },    
    {
      tags: ["LRSTools","APTools","xAPI"],
      color: 'blue',
      icon: 'fa-flask',
      title: 'xAPI Lab',
      description: 'Assisting in developing xAPI statements and communicating with a Learning Record Store (LRS).',
      link_ex: 'http://adlnet.github.io/xapi-lab',
      link_ex_title: 'Live Demo',
      link_gh: 'https://github.com/adlnet/xapi-lab'
    },
    {
      tags: ["LRSTools", "xAPI", "APTools"],
      color: 'blue',
      icon: 'fa-list',
      title: 'xAPI Statement Viewer',
      description: 'A datatables and bootstrap based xAPI statement viewer for easier reading',
      link_ex: 'http://adlnet.github.io/xapi-statement-viewer',
      link_ex_title: 'Live Demo',
      link_gh: 'https://github.com/adlnet/xapi-statement-viewer'
    },
    {
      tags: ["APTools","xAPI", "APTools"],
      color: 'blue',
      icon: 'fa-gift',
      title: 'xAPI Wrapper',
      description: 'This JavaScript wrapper drastically simplifies communication to a Learning Record Store (LRS). All of our web-based xAPI samples use this file to abstract their communication to the LRS. Use this file for quick prototyping or proofs of concept in a web environment.',
      link_ref: 'http://adlnet.github.io/xAPIWrapper',
      link_ref_title: 'Reference Docs',
      link_gh: 'https://github.com/adlnet/xAPIWrapper'
    },
    {
      tags: ["Reporting","LRSTools","xAPI", "APTools"],
      color: 'blue',
      icon: 'fa-bar-chart',
      title: 'xAPI Dashboard',
      description: 'Provides a quick and easy way to generate graphs from your xAPI data, as well as a powerful query language to manipulate it.',
      link_ex: 'http://adlnet.github.io/xAPI-Dashboard',
      link_ex_title: 'Website',
      link_gh: 'https://github.com/adlnet/xAPI-Dashboard'
    },
    {
      tags: ["APTools","xAPI"],
      color: 'blue',
      icon: 'fa-share',
      title: 'xAPI Launch',
      description: 'xAPI Launch exists primarily to enable a learner to track experiences from any learning resource without some out-of-band method to add LRS credentials to the content, and without asking the user to input these credentials into some untrused third-party system. It also ensures that statements which claim to be part of an experience really came from that experience.',
      link_ex: 'http://adlnet.github.io/xapi-launch',
      link_ex_title: 'Website',
      link_gh: 'https://github.com/adlnet/xapi-launch'
    },
    {
      tags: ["Mobile","xAPI", "Profile"],
      color: 'blue',
      icon: 'fa-mobile',
      title: 'xAPI Roses',
      description: 'This app follows the ADL SCORM Profile for xAPI enabled learning content that allows organizations to incrementally transition from a centralized SCORM LMS to diverse and flexible systems without the loss of interoperability. As a user progresses through the different modules, statements are recorded that contain the same data that SCORM modules also collect.',
      link_ex: 'https://play.google.com/store/apps/details?id=org.adl.roses&hl=en',
      link_ex_title: 'Install App',
      link_gh: 'https://github.com/adlnet/xAPI-Android-Roses'
    },    
    {
      tags: ["APTools","xAPI", "Reporting"],
      color: 'blue',
      icon: 'fa-puzzle-piece',
      title: 'xAPI API Client Examples',
      description: 'These are client examples to help you learn and get started using the new API. These were created under the original Broad Agency Announcement (BAA) effort and have been updated to use the latest version of the xAPI. The samples include a Statement viewer, a Reporting example, and a Tetris game example. Use these examples to test out connectivity to a Learning Record Store or write learning content that is compatible with using the xAPI.',
      link_ex: 'http://adlnet.github.io/experienceapi_client_examples/',
      link_ex_title: 'Live Demo',
      link_gh: 'https://github.com/adlnet/experienceapi_client_examples'
    },
    {
      tags: ["Mobile","APTools","xAPI"],
      color: 'blue',
      icon: 'fa-youtube',
      title: 'xAPI Youtube',
      description: 'Send Youtube Video interactions to an LRS with xAPI.',
      link_ex: 'http://adlnet.github.io/xapi-youtube',
      link_ex_title: 'Website',
      link_gh: 'https://github.com/adlnet/xapi-youtube'
    },
    {
      tags: ["Mobile","APTools","xAPI"],
      color: 'blue',
      icon: 'fa-mobile',
      title: 'xAPI jQuery Mobile',
      description: 'Integration of xAPI using jQuery Mobile with course examples and templates to get you started.',
      link_ex: 'http://adlnet.github.io/xapi-jqm',
      link_ex_title: 'Website',
      link_gh: 'https://github.com/adlnet/xapi-jqm'
    },
    {
      tags: ["APTools","xAPI"],
      color: 'blue',
      icon: 'fa-coffee',
      title: 'jxapi',
      description: 'Experience API Java library.',
      link_gh: 'https://github.com/adlnet/jxapi'
    },
    {
      tags: ["SCORM","APTools","xAPI", "Profile"],
      color: 'blue',
      icon: 'fa-cogs',
      title: 'SCORM to xAPI Wrapper',
      description: 'APIWrapper.js file commonly used with SCORM with xAPI calls embedded.',
      link_gh: 'https://github.com/adlnet/SCORM-to-xAPI-Wrapper'
    },
    {
      tags: ["Profile","SCORM","xAPI"],
      color: 'blue',
      icon: 'fa-cog',
      title: 'xAPI SCORM Profile',
      description: 'Document describing how to report SCORM data to the Experience API.',
      link_ex: 'http://adlnet.github.io/xAPI-SCORM-Profile',
      link_ex_title: 'Website',
      link_gh: 'https://github.com/adlnet/xAPI-SCORM-Profile'
    },
    {
      tags: ["Profile","SCORM","xAPI"],
      color: 'blue',
      icon: 'fa-cog',
      title: 'cmi5 Profile',
      description: 'Document describing how to report cmi5 data to the Experience API.',
      link_gh: 'https://github.com/AICC/CMI-5_Spec_Current'
    },
    {
      tags: ['Tutorials'],
      color: 'blue',
      icon: 'fa-file-text',
      title: 'Intro to Developing Web-based xAPI Content',
      description: 'This project was created to support various xAPI Workshops.',
      link_ex: 'https://github.com/adlnet/Intro-to-Developing-Web-based-xAPI-Content/blob/master/webcontent/Readme.md',
      link_ex_title: 'Code Tutorial',
      link_gh: 'https://github.com/adlnet/Intro-to-Developing-Web-based-xAPI-Content'
    },
        {
      tags: ['Tutorials'],
      color: 'blue',
      icon: 'fa-file-text',
      title: 'Intro to xAPI Video Experiences',
      description: 'This project was created to support online video content.',
      link_ex: 'https://github.com/adlnet/Intro-to-xAPI-Video-Experiences',
      link_ex_title: 'Code Tutorial',
      link_gh: 'https://github.com/adlnet/Intro-to-xAPI-Video-Experiences'
    },
    {
      tags: ['Tutorials'],
      color: 'blue',
      icon: 'fa-file-text',
      title: 'Starting from SCORM: A Developer’s Guide',
      description: 'This project was first presented at the ADL xAPI Bootcamp in Alexandria, VA in 2015. It is now being maintained here to allow others to access this workshop. If you are interested in try the code tutorial, refer to the steps in the Instructions.',
      link_ex: 'https://github.com/adlnet/Starting-from-SCORM-A-Developers-Guide/blob/master/Instructions.md',
      link_ex_title: 'Code Tutorial',
      link_gh: 'https://github.com/adlnet/Starting-from-SCORM-A-Developers-Guide'
    },
    {
      tags: ['Tutorials'],
      color: 'blue',
      icon: 'fa-file-text',
      title: 'xAPI Data Visualization and Dashboards',
      description: 'This project was created to support various xAPI Workshops. If you are interested in trying the code tutorial, refer to the steps in the Instructions in the reporting Readme.',
      link_ex: 'https://github.com/adlnet/Intro-to-xAPI-Data-Visualization/tree/master/reporting/README.md',
      link_ex_title: 'Code Tutorial',
      link_gh: 'https://github.com/adlnet/Intro-to-xAPI-Data-Visualization'
    },
    {
      tags: ['Workshops','Tutorials'],
      color: 'blue',
      icon: 'fa-file-text',
      title: 'xAPI Workshops',
      description: 'This project was created to hold some of ADL\'s xAPI presentation resources. In the presentations folder there are PowerPoint decks with different xAPI information. In the tools folder, there is a workable statement generator with a few reporting graphs.',
      link_ex: 'https://adlnet.github.io/xAPI-Workshop/Tools/StatementGenerator/',
      link_ex_title: 'Workshop Demo',
      link_gh: 'https://github.com/adlnet/xAPI-Workshop/tree/master/Presentations'
    },
    {
      tags: ['Profile', 'xAPI'],
      color: 'blue',
      icon: 'fa-file-text',
      title: 'xAPI Vocabulary',
      description: 'A vocabulary scheme for IRI persistence when using xAPI verbs and activity types.',
      link_ex: 'http://xapi.vocab.pub/datasets/adl/',
      link_ex_title: 'Website',
      link_gh: 'https://github.com/adlnet/xapi-vocabulary'
    },
    {
      tags: ["VirtualWorlds"],
      color: 'blue',
      icon: 'fa-cube',
      title: 'Sandbox',
      description: 'The ADL Sandbox is a persistent virtual environment that runs in a web browser.',
      link_ex: 'http://vwf.adlnet.gov',
      link_ex_title: 'Website',
      link_gh: 'https://github.com/adlnet/Sandbox'
    },    
    {
      tags: [],
      color: 'grey',
      icon: 'fa-github',
      title: 'ADL on Github',
      description: 'The adlnet organization on github.',
      link_gh: 'https://github.com/adlnet'
    },
  ];

  // Build the menu
  Handlebars.registerHelper('listDataGroups', function(items, options) {
    var out = '<li class="active"><a href="#" data-group="">All</a></li>';
    for(var i=0, l=items.length; i<l; i++) { out += '<li><a href="#' + options.fn(items[i].toLowerCase()) + '" data-group="' + options.fn(items[i].toLowerCase()) + '">' + options.fn(items[i]) + '</a></li>'; }
    return out;
  });

  // Converts an array to '['item1','item2']' string notation
  Handlebars.registerHelper('arrayToString', function(items, options) {
    return JSON.stringify(items).toLowerCase();
  });

  // List the tags on the card
  Handlebars.registerHelper('listTags', function(items, options) {
    var out = '<ul>';
    for(var i=0, l=items.length; i<l; i++) { out += '<li>#' + options.fn(items[i]) + '</li>'; }
    out += '</ul>';
    return out;
  });

  // Get the HTML from the template in the script tag​
  var groupScript = $('#group-list-template').html(); 

  // Compile the template
  var groupTemplate = Handlebars.compile(groupScript);
  $('#filter').append(groupTemplate(groups)); 

  // Get the HTML from the template in the script tag​
  var itemScript = $('#item-template').html(); 

  // Compile the template
  var itemTemplate = Handlebars.compile(itemScript);
  $('#grid').append(itemTemplate(items)); 


  // Setup the filter grid
  var $grid = $('#grid'),
      $sizer = $grid.find('.shuffle__sizer');

  $grid.shuffle({
    itemSelector: '.item', // the selector for the items in the grid
    sizer: $sizer
  });

  /* reshuffle when user clicks a filter item */
  $('#filter a').click(function (e) {

    // set active class
    $('#filter a').parent("li").removeClass('active');
    $(this).parent("li").addClass('active');

    // get group name from clicked item
    var groupName = $(this).attr('data-group');

    // reshuffle grid
    $grid.shuffle('shuffle', groupName );

    e.preventDefault();

  });

  // Allow filtering by tags
  $('.panel-google-plus-tags li').click(function() {
    $('#filter a[data-group="' + $(this).text().substring(1).toLowerCase() + '"]').click();
  });
  
  // Filter by location hash
  var hash = window.location.hash;
  if (hash) {
    $('#filter a[data-group="' + hash.substring(1).toLowerCase() + '"]').click();
  }
});
