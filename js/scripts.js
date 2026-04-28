$(function() {

  var groups = ["DLE", "ECC", "ELRR", "LDSS", "Portal", "MMT", "xAPI","LRS","LRSTools","APTools","Reporting","Mobile","Profile","Tutorials", "Workshops", "Catapult"];

  var items = [
    {
      tags: ['DLE', 'xAPI', 'Reporting'],
      color: 'blue',
      icon: 'fa-university',
      title: 'DoDI Refrence',
      description: 'This is the combination of the DoDI 1322.26 "Distributed Learning" References that allow for policy to update the requirements and best practices without having to move through the slow channels of a full policy review.  The version of this reference is the culmination of the efforts of the Advanced Distributed Learning (ADL) Initiative, the authority referenced in the DoDI, and focuses on adoption of data standards to enable data interoperability across the Department of War and Whole of Government.s',
      link_ex: 'https://adlnet.github.io/dodireference/'
    },
    {
      tags: ['DLE', 'ECC'],
      color: 'blue',
      icon: 'fa-university',
      title: 'ecc-openlxp-xms',
      description: 'The Experience Management Service (XMS) is a part of the OpenLXP Enterprise Course Catalog (ECC) platform. It is the backend responsible for managing courses/catalogs. <br><br> XMS is the user interface facilitating modification and augmentation of records by learning experience owners and managers.',
      link_gh: 'https://github.com/adlnet/ecc-openlxp-xms'
    },
    {
      tags: ['DLE', 'ECC'],
      color: 'blue',
      icon: 'fa-university',
      title: 'ecc-openlxp-authentication',
      description: 'This is a Django package built on the social-auth-app-django package to allow additional authentication options for the OpenLXP project. <brt><br> Currently this package adds support for storing SAML configurations in the database used by Django, to allow for site administrators to set SAML configurations through the admin app.',
      link_gh: 'https://github.com/adlnet/ecc-openlxp-authentication'
    },
    {
      tags: ['DLE', 'ECC'],
      color: 'blue',
      icon: 'fa-university',
      title: 'ecc-openlxp-xia',
      description: 'OpenLXP XIA is a Python package that provides the validation functionality of extracted metadata from the source. In addition, it helps transform metadata into target metadata and further load it into indexing services. The OpenLXP XIA package does not include the metadata extraction process because extraction methods can be different for different sources. But once metadata gets extracted from the source, OpenLXP-XIA continues the V-T-V-L (Validate-Transform-Validate-Load) cycle.',
      link_gh: 'https://github.com/adlnet/ecc-openlxp-xia'
    },
    {
      tags: ['DLE', 'ECC'],
      color: 'blue',
      icon: 'fa-university',
      title: 'ecc-openlxp-xds',
      description: 'The Experience Discovery Service (XDS) is the administration and configuration backend to the human-facing XDS application, enabling an Experience Consumer or Experience Facilitator to quickly locate a pertinent learning experience metadata record that has been indexed by the Experience Index Service (XIS).',
      link_gh: 'https://github.com/adlnet/ecc-openlxp-xds'
    },
    {
      tags: ['DLE', 'ECC'],
      color: 'blue',
      icon: 'fa-university',
      title: 'ecc-openlxp-xis',
      description: 'The primary funnel for learning experience metadata collected by the Experience Indexing Agent (XIA) components. <br><br> XIS Component is the primary funnel for learning experience metadata collected by the XIA components. In addition, the XIS can receive supplemental learning experience metadata – field name/value overrides and augmentations – from the Experience Management Service (XMS).',
      link_gh: 'https://github.com/adlnet/ecc-openlxp-xis'
    },
    {
      tags: ['DLE', 'ECC'],
      color: 'blue',
      icon: 'fa-university',
      title: 'ecc-openlxp-xse',
      description: 'XSE works to streamline the search capabilities relied upon by Experience Discovery Service (XDS). The Experience Indexing Service (XIS) loads records into XSE (assumed to be Elasticsearch).',
      link_gh: 'https://github.com/adlnet/ecc-openlxp-xse'
    },
    {
      tags: ['DLE', 'ECC'],
      color: 'blue',
      icon: 'fa-university',
      title: 'ecc-openlxp-xds-ui',
      description: 'This is the UI for the OpenLXP: Experience Discovery Service (XDS). It allows you to create and manage your own experience collection, subscribe to other people\'s experience collections, and search for experiences indexed in the service.',
      link_gh: 'https://github.com/adlnet/ecc-openlxp-xds-ui'
    },
    {
      tags: ['DLE', 'ELRR'],
      color: 'blue',
      icon: 'fa-file-text',
      title: 'elrr-documentation',
      description: 'Technical documentation on deploying and using the open source ELRR code.',
      link_gh: 'https://github.com/adlnet/elrr-documentation'
    },
    {
      tags: ['DLE', 'ELRR'],
      color: 'blue',
      icon: 'fa-user',
      title: 'elrr-datasync',
      description: 'The Datasync component of ELRR is a periodic process which polls data sources (at this time just the External Services proxy) to collect xAPI data and put it into a Kafka Topic for consumption and processing by ELRR.',
      link_gh: 'https://github.com/adlnet/elrr-datasync'
    },
    {
      tags: ['DLE', 'ELRR'],
      color: 'blue',
      icon: 'fa-user',
      title: 'elrr-services',
      description: 'This component of ELRR system houses the Learner API to allow the reading and writing of the P2997 data stored in ELRR Learner Profile.',
      link_gh: 'https://github.com/adlnet/elrr-services'
    },
    {
      tags: ['DLE', 'ELRR'],
      color: 'blue',
      icon: 'fa-user',
      title: 'elrr-aggregator',
      description: 'The ELRR Aggregator is a backend Java service within the Enterprise Learner Record Repository (ELRR) ecosystem. It has no end‑user UI and acts as the central intake, validation, and consolidation layer for learner record data flowing into ELRR.',
      link_gh: 'https://github.com/adlnet/elrr-aggregator'
    },
    {
      tags: ['DLE', 'ELRR'],
      color: 'blue',
      icon: 'fa-user',
      title: 'elrr-services-entities',
      description: 'This repository contains entity, repository, and service definitions for basic entities in ELRR Services and Aggregator. It was extracted out to support both of them using the same database properly.',
      link_gh: 'https://github.com/adlnet/elrr-services-entities'
    },
    {
      tags: ['DLE', 'ELRR'],
      color: 'blue',
      icon: 'fa-user',
      title: 'elrr-external-services',
      description: 'The External Services component of ELRR interacts with external datasources to get data for updates to ELRR Data. Currently the only implemented integration is with an LRS, so it acts as a proxy for LRS read calls. <br><br>Typically this proxy is called by Datasync which is a polling process that retrieves the data for processing by ELRR.',
      link_gh: 'https://github.com/adlnet/elrr-external-services'
    },
    {
      tags: ['DLE', 'ELRR'],
      color: 'blue',
      icon: 'fa-cog',
      title: 'elrr-dockercompose',
      description: 'A sample docker-compose file to aid in the deployment of the ELRR.',
      link_gh: 'https://github.com/adlnet/elrr-dockercompose'
    },
    {
      tags: ['DLE', 'ELRR'],
      color: 'blue',
      icon: 'fa-user',
      title: 'elrr-services-parent',
      description: 'Aggregator and Services both need the same entity definitions to run. This parent project allows for the build of entities before the Aggregator and Services jars are built in CI/CD.',
      link_gh: 'https://github.com/adlnet/elrr-services-parent'
    },
    {
      tags: ['DLE', 'ELRR'],
      color: 'blue',
      icon: 'fa-user',
      title: 'elrr-aggregator-parent',
      description: 'Aggregator and Services both need the same entity definitions to run. This parent project allows for the build of entities before the Aggregator jars are built in CI/CD.',
      link_gh: 'https://github.com/adlnet/elrr-aggregator-parent'
    },
    {
      tags: ['DLE', 'LDSS'],
      color: 'blue',
      icon: 'fa-tags',
      title: 'dle-ldss',
      description: 'The DLE Linked Data and Schema Service (LDSS) is an open-source service for managing, serving, and validating linked data schemas. <br><br>This repository contains the LDSS service source code along with Kubernetes manifests for deploying it in cloud-native environments.',
      link_gh: 'https://github.com/adlnet/DLE-LDSS'
    },
    {
      tags: ['DLE', 'ECCR'],
      color: 'blue',
      icon: 'fa-pencil-square-o',
      title: 'DLE-ECCR',
      description: 'Blueprints for developing the ECCR.  This is highly based on the ECCR.',
      link_gh: 'https://github.com/adlnet/DLE-ECCR'
    },
    {
      tags: ['DLE', 'LRS'],
      color: 'blue',
      icon: 'fa-university',
      title: 'SQL-LRS',
      description: 'SQL LRS is distinct from other LRSs developed at Yet Analytics for being SQL-based and supporting multiple SQL database management systems (DBMSs) like SQLite and Postgres.',
      link_gh: 'https://github.com/yetanalytics/lrsql'
    },
    {
      tags: ['DLE', 'LRS'],
      color: 'blue',
      icon: 'fa-university',
      title: 'LRS-Pipe',
      description: 'LRSPipe enables the Total Learning Architecture by acting as middleware between layers of data and by governing data flow directly based on xAPI Profiles. It’s more than an xAPI statement forwarder — it’s a forwarder that is governed by xAPI Profiles.',
      link_gh: 'https://github.com/yetanalytics/xapipe'
    },
    {
      tags: ['DLE', 'Portal'],
      color: 'blue',
      icon: 'fa-desktop',
      title: 'edlm-portal-ui',
      description: 'A Next.js-based web portal for enterprise digital learning management, built with React, Tailwind CSS, and integrated with xAPI for learning analytics.',
      link_gh: 'https://github.com/adlnet/edlm-portal-ui'
    },
    {
      tags: ['DLE', 'Portal'],
      color: 'blue',
      icon: 'fa-desktop',
      title: 'edlm-portal-backend',
      description: 'The Enterprise Digital Learning Management (EDLM) Portal Backend is the consolidated backend to the human-facing Portal UI application, enabling complex data processing across multiple data sources. Because the Portal Backend is a separate application, it can be deployed in a separate environment from the connected services. ',
      link_gh: 'https://github.com/adlnet/edlm-portal-backend'
    },
    {
      tags: ['DLE', 'Portal'],
      color: 'blue',
      icon: 'fa-desktop',
      title: 'edlm-portal-xia-jobs',
      description: 'The Enterprise Course Catalog (ECC) is one of the three Enterprise Digital Learning Modernization (EDLM) lines of an effort supported by ADL.  <br><br>The goal of the ECC is a learning experience discovery service designed to aggregate metadata describing learning experiences from various internal sources as well as external sources.',
      link_gh: 'https://github.com/adlnet/edlm-portal-xia-jobs'
    },
    {
      tags: ['DLE', 'MMT'],
      color: 'blue',
      icon: 'fa-desktop',
      title: 'mmt-ia-ace',
      description: 'The Modernized Military Transcript (MMT) Indexing Agent ACE follows the XIA design pattern but indexes mappings from ACE that provide suggestions on academic equivalencies to trainings and occupations.',
      link_gh: 'https://github.com/adlnet/mmt-ia-ace'
    },
    {
      tags: ['DLE', 'MMT'],
      color: 'blue',
      icon: 'fa-desktop',
      title: 'mmt-backend',
      description: 'The Modernized Military Transcript (MMT) Backend is the consolidated backend to the human-facing MMT Portal application, enabling complex data consolidation from multiple data sources and the generation and sharing of PDF transcripts.',
      link_gh: 'https://github.com/adlnet/mmt-backend'
    },
    {
      tags: ['DLE', 'MMT'],
      color: 'blue',
      icon: 'fa-desktop',
      title: 'mmt-portal',
      description: 'A modern web portal for managing Modernized Military Transcript (MMT) operations. Built with Next.js, React, and Tailwind CSS, this application provides a comprehensive solution for transcript management, academic institution administration, and user tracking.',
      link_gh: 'https://github.com/adlnet/mmt-portal'
    },
    
    // Keycloak Integration Slides 
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
      description: 'ADL’s Open Source Learning Record Store (LRS) is used to store learning data collected with the xAPI. It is a reference implementation of the system described in the <a href="https://github.com/adlnet/xAPI-Spec" target="_blank">xAPI Spec repository</a>. Use this project if you are looking to setup an LRS for testing purposes.',
      // link_ex: 'https://lrs.adlnet.gov',
      // link_ex_title: 'Public LRS',
      link_gh: 'https://github.com/adlnet/ADL_LRS'
    },
    {
      tags: ["LRSTools","xAPI"],
      color: 'blue',
      icon: 'fa-check-circle-o',
      title: 'LRS Conformance Test Suite',
      description: 'This is a NodeJS project that tests the \'MUST\' requirements of the xAPI Spec and is based on the ADL testing requirements repository. This has been archived and there is no further active develeopment on this repo.',
      // link_ex: 'https://lrstest.adlnet.gov/',
      // link_ex_title: 'Website',
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
      description: 'A datatables and bootstrap based xAPI statement viewer for easier reading.',
      // link_ex: 'http://adlnet.github.io/xapi-statement-viewer',
      // link_ex_title: 'Live Demo',
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
      tags: ["APTools","xAPI"],
      color: 'blue',
      icon: 'fa-gift',
      title: 'xAPI Unity Wrapper',
      description: 'A C# library to support generating and sending xAPI data within a Unity project.  This is compliant with xAPI 1.0.3.',
      link_ref_title: 'Reference Docs',
      link_gh: 'https://github.com/adlnet/Unity-xAPI-Wrapper'
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
      tags: ["APTools","xAPI", "Reporting"],
      color: 'blue',
      icon: 'fa-puzzle-piece',
      title: 'xAPI API Client Examples',
      description: 'These are client examples to help you learn and get started using the new API. These were created under the original Broad Agency Announcement (BAA) effort and have been updated to use the latest version of the xAPI. The samples include a Statement viewer, a Reporting example, and a Tetris game example. Use these examples to test out connectivity to a Learning Record Store or write learning content that is compatible with using the xAPI.',
      // link_ex: 'http://adlnet.github.io/experienceapi_client_examples/',
      // link_ex_title: 'Live Demo',
      link_gh: 'https://github.com/adlnet/experienceapi_client_examples'
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
      tags: ["APTools","xAPI", "Profile"],
      color: 'blue',
      icon: 'fa-file-text',
      title: 'xAPI Authored Profiles',
      description: 'A xAPI profiles that were hosted on the xAPI Profile server',
      link_gh: 'https://github.com/adlnet/xapi-authored-profiles'
    },
    {
      tags: ["APTools","xAPI", "Profile"],
      color: 'blue',
      icon: 'fa-cogs',
      title: 'SCORM to xAPI Wrapper',
      description: 'APIWrapper.js file commonly used with SCORM with xAPI calls embedded.',
      link_gh: 'https://github.com/adlnet/SCORM-to-xAPI-Wrapper'
    },
    {
      tags: ["Profile","xAPI"],
      color: 'blue',
      icon: 'fa-cog',
      title: 'xAPI SCORM Profile',
      description: 'Document describing how to report SCORM data to the Experience API.',
      link_ex: 'http://adlnet.github.io/xAPI-SCORM-Profile',
      link_ex_title: 'Website',
      link_gh: 'https://github.com/adlnet/xAPI-SCORM-Profile'
    },
    {
      tags: ["Profile",,"xAPI"],
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
      tags: ["Catapult"],
      color: 'blue',
      icon: 'fa-check-circle-o',
      title: "The Catapult Suite",
      description: 'A conformance testing suite for the cmi5 specification.  This includes tests both for cmi5 packahes as well as the conformance of an LMS to the cmi5 specification.',
      link_gh: "https://github.com/adlnet/CATAPULT",
      link_ex: 'https://adlnet.github.io/CATAPULT/',
      link_ex_title: 'Project Page',
    },
    {
      tags: [],
      color: 'grey',
      icon: 'fa-github',
      title: 'ADL on Github',
      description: 'The adlnet organization on github.',
      link_gh: 'https://github.com/adlnet'
    },
    // {
    //   tags: ["Documents"],
    //   color: 'blue',
    //   icon: 'fa-file-text',
    //   title: 'ADL on Published Documents',
    //   description: 'The adlnet organization\'s published documents',
    //   link_ex: 'https://drive.google.com/drive/folders/1Wpe7QUYcM7rroP3MGmhTAN79Mt9y_pxz',
    //   link_ex_title: 'ADL OneDrive',
    // },
    // {
    //   tags: ["Documents"],
    //   color: 'blue',
    //   icon: 'fa-folder-open-o',
    //   title: 'Technical Documents',
    //   description: 'A collection of system architecture documents and other technical resources for the DLE',
    //   link_ex: 'https://adlnet.github.io/Share-Documents/TechnicalDocuments',
    //   link_ex_title: 'View Docs',
    // },
    // {
    //   tags: ["Documents"],
    //   color: 'blue',
    //   icon: 'fa-folder-open-o',
    //   title: 'LDSS Documents',
    //   description: 'A collection of working documents for schemas as they would appear in the Linked Data and Schema Service (LDSS)',
    //   link_ex: 'https://adlnet.github.io/Share-Documents/LDSS',
    //   link_ex_title: 'View Docs',
    // },
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
