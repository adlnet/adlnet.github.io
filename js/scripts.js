$(function() {

  var groups = ["xAPI","LRS","LRSTools","APTools","Reporting","Mobile","SCORM","Profile","VirtualWorlds","Tutorials",'Reuse'];

  var items = [
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
      tags: ["LRSTools","xAPI"],
      color: 'blue',
      icon: 'fa-list',
      title: 'xAPI Statement Viewer',
      description: 'A datatables and bootstrap based xAPI statement viewer for easier reading',
      link_ex: 'http://adlnet.github.io/xapi-statement-viewer',
      link_ex_title: 'Live Demo',
      link_gh: 'https://github.com/adlnet/xapi-statement-viewer'
    },
    {
      tags: ["APTools","xAPI"],
      color: 'blue',
      icon: 'fa-gift',
      title: 'xAPI Wrapper',
      description: 'This JavaScript wrapper drastically simplifies communication to a Learning Record Store (LRS). All of our web-based xAPI samples use this file to abstract their communication to the LRS. Use this file for quick prototyping or proofs of concept in a web environment.',
      link_ref: 'http://adlnet.github.io/xAPIWrapper',
      link_ref_title: 'Reference Docs',
      link_gh: 'https://github.com/adlnet/xAPIWrapper'
    },
    {
      tags: ["Reporting","LRSTools","xAPI"],
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
      tags: ["SCORM","APTools","xAPI"],
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
      tags: ["APTools","xAPI"],
      color: 'blue',
      icon: 'fa-language',
      title: 'xAPI Verbs',
      description: 'Predefined ADL Experience API Verbs.',
      link_gh: 'https://github.com/adlnet/xAPIVerbs'
    },
    {
      tags: ['Reuse'],
      color: 'blue',
      icon: 'fa-sitemap',
      title: 'RUSSEL',
      description: 'Re-Usability Support System for eLearning is an open-source software project to manage and repurpose courses, documents and multimedia assets. It will make content more useful through a rich metadata environment with ratings, analytics and comments that will support communities of practice and collaboration. It will include an Electronic Performance Support System (EPSS) for reuse and repurposing of SCORM-conformant content based on instructional design best practices and reusable design frameworks.',
      link_ex: 'http://russel.adlnet.org',
      link_ex_title: 'Live Demo',
      link_gh: 'https://github.com/adlnet/RUSSEL'
    },
    {
      tags: ['Reuse'],
      color: 'blue',
      icon: 'fa-search-plus',
      title: 'DECALS',
      description: 'Data for Enabling Content in Adaptive Learning Systems is an open-source software project that builds on the foundation set forth in the RUSSEL Project. It adds interactive search, user content contribution, and machine actionable metadata capabilities to the Learning Registry.',
      link_ex: 'http://lr.adlnet.org',
      link_ex_title: 'Live Demo',
      link_gh: 'https://github.com/adlnet/DECALS'
    },
    {
      tags: ['Reuse'],
      color: 'blue',
      icon: 'fa-repeat',
      title: 'Learning Registry',
      description: 'A joint project of the U.S. Departments of Education and Defense providing a new approach to capturing, connecting, and sharing data about learning resources.',
      link_ex: 'http://learningregistry.org',
      link_ex_title: 'Website',
      link_gh: 'https://github.com/LearningRegistry'
    },
    {
      tags: [],
      color: 'grey',
      icon: 'fa-github',
      title: 'ADL on Github',
      description: 'The adlnet organization on github.',
      link_gh: 'https://github.com/adlnet'
    }
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
