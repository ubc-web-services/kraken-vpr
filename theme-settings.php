<?php

/**
 * @file
 * CLF THEME INFO.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function kraken_form_system_theme_settings_alter(&$form, FormStateInterface &$form_state)
{
  // Move the default theme settings to our custom vertical tabs for core theme
  // settings.
  $form['core'] = [
    '#type' => 'vertical_tabs',
    '#prefix' => '<h2><small>' . t('Override Global Settings') . '</small></h2>',
    '#weight' => 0,
  ];

  $form['theme_settings']['#group'] = 'core';
  $form['logo']['#group'] = 'core';
  $form['favicon']['#group'] = 'core';

  // CLF FORM SETTINGS.
  $form['clf_credits'] = [
    '#type' => 'fieldset',
    '#title' => t('UBC CLF 8.0 Drupal Theme Information'),
    '#prefix' => '<h1>' . t('UBC CLF for Drupal') . '</h1>',
    '#weight' => -10,
    '#description' => t(
      'The CLF 8.0 Drupal theme is a responsive theme, developed by the <a href=":url_web_services" title="Contact UBC IT Web Services" target="_blank">UBC IT Web Services Department</a>.<br><br>The <a href=":url_clf" title="Discover the UBC CLF Brand" target="_blank">CLF</a> is developed and distributed by Communications &amp; Marketing. For support <a href=":url_support" title="Contact UBC Communications & Marketing" target="_blank">please contact us</a>.<br><br>To report an issue with this theme, please visit <a href=":url_repo" target="_blank">the repository on Github</a>',
      [
        ':url_web_services' => 'https://web.it.ubc.ca/forms/webservices/',
        ':url_support' => 'https://clf.ubc.ca/support',
        ':url_repo' => 'https://github.com/ubc-web-services/kraken',
        ':url_clf' => 'https://brand.ubc.ca/clf',
      ]
    ),
  ];

  // Custom settings in Vertical Tabs container.
  $form['clf'] = [
    '#type' => 'vertical_tabs',
    '#prefix' => '<h2>' . t('CLF Settings') . '</h2>',
    '#weight' => -9,
    '#default_tab' => 'general',
  ];

  // CLF GENERAL OPTIONS.
  $form['general'] = [
    '#type' => 'details',
    '#title' => t('General Settings'),
    '#group' => 'clf',
  ];

  $form['general']['clf_unitname'] = [
    '#type' => 'textfield',
    '#prefix' => t('<h2>General Site Information</h2>'),
    '#title' => t(
      'This field will populate the <a href=":url_unit_name" title="View the location of the Unit Name" target="_blank">Unit Name</a> in the header and the <a href=":url_unit_sub_footer" title="View the location of the Unit Sub Footer" target="_blank">Unit Sub Footer</a>.',
      [
        ':url_unit_name' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-name',
        ':url_unit_sub_footer' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-sub-footer',
      ]
    ),
    '#default_value' => theme_get_setting('clf_unitname'),
    '#size' => 60,
    '#maxlength' => 128,
    '#required' => true,
  ];

  $form['general']['clf_version'] = [
    '#type' => 'select',
    '#title' => t('CLF Version'),
    '#description' => t(
      'Select the version of the CLF you\'d like to use. View <a href=":url" target="_blank">colour theme options</a> and design specifications. Note that CLF 7 verions load a minimal copy of the CLF files from Drupal, which is much better for performance.<br><strong>Warning</strong>: Advanced users only. This will require creating and adding your own css for non-clf regions of the site, including navigation.',
      [
        ':url' => 'https://clf.ubc.ca/design-specifications/#theme-options',
      ]
    ),
    '#default_value' => theme_get_setting('clf_version'),
    '#options' => [
      '8' => t('8.0.0 (not yet released)'),
      'legacy--bw' => t('7.0.4  - Blue on White'),
      'legacy--wb' => t('7.0.4  - White on Blue'),
      'legacy--wg' => t('7.0.4  - White on Grey'),
      'legacy--gw' => t('7.0.4  - Grey on White'),
    ],
  ];

  $form['general']['clf_layout'] = [
    '#type' => 'select',
    '#title' => t('Layout (CLF version 7 only)'),
    '#description' => t(
      'Make the CLF Full Width and Centered, Fluid Width and Left Aligned, or Fixed Width and Centered. You can <a href=":url" target="_blank">compare the layout options here</a>.',
      [
        ':url' => 'https://clf.ubc.ca/design-specifications/#layout-options',
      ]
    ),
    '#default_value' => theme_get_setting('clf_layout'),
    '#options' => [
      'full' => t('Full Width (Default)'),
      'centered' => t('Fixed width, centered with Grey Background'),
      'fluid' => t('Fluid Width, Left-Aligned'),
    ],
  ];

  $form['general']['clf_widen'] = [
    '#type' => 'checkbox',
    '#title' => t('<strong>Widen the CLF (v.7) to 1720px</strong>'),
    '#description' => t('By default, version 7 of the CLF is constrained to 1200px wide. This option adds an additional 1720px (adjustable in CSS) breakpoint to the CLF required regions (does not effect content regions)'),
    '#default_value' => theme_get_setting('clf_widen'),
  ];

  $form['general']['clf_widen_more'] = [
    '#type' => 'checkbox',
    '#title' => t('<strong>Widen the CLF (v.7) to 2400px</strong>'),
    '#description' => t('This option adds an additional 2400px (adjustable in CSS) breakpoint to the CLF required regions (does not effect content regions)'),
    '#default_value' => theme_get_setting('clf_widen_more'),
  ];

  $form['general']['clf_dark_mode'] = [
    '#type' => 'checkbox',
    '#title' => t('<strong>Load Dark Mode stylesheet</strong>'),
    '#description' => t('Allow a Dark Mode option to be loaded if a user\'s preferences ask for it. This option requires additional CSS and is only supported for CLF 8+.'),
    '#default_value' => theme_get_setting('clf_dark_mode'),
  ];

  $form['general']['clf_js'] = [
    '#type' => 'select',
    '#title' => t('Javascript library'),
    '#description' => t(
      'Select whether you\'d like to use the <a href=":url" target="_blank">vue.js</a> library for javascript components or <a href=":bootstrapurl" target="_blank">bootstrap 5</a> libraries (jquery not required). If you choose to use vue.js, you can choose between the development version with debugging tools or the full (production) version for live sites. You can find <a href=":buildsurl" target="_blank">an explanation of the differences here</a>.',
      [
        ':url' => 'https://vuejs.org',
        ':bootstrapurl' => 'https://getbootstrap.com/docs/5.0/getting-started/javascript/',
        ':buildsurl' => 'https://vuejs.org/v2/guide/installation.html#Explanation-of-Different-Builds',
      ]
    ),
    '#default_value' => theme_get_setting('clf_js'),
    '#options' => [
      'js-dev' => t('Full Vue.js Development version'),
      'js-prod' => t('Full Vue.js Production version'),
      'js-bootstrap' => t('Bootstrap 5'),
    ],
  ];

  $form['general']['clf_css'] = [
    '#type' => 'select',
    '#title' => t('CSS styles'),
    '#description' => t(
      'This theme uses the <a href=":url" target="_blank">PurgeCSS</a> library to scan your twig, html and javascript files and remove any CSS utility styles that are not in use. This is provided by the TailwindCSS utility-first CSS library - see <a href=":url2" target="_blank">the Tailwind CSS docs</a> for information on how to configure and control this.',
      [
        ':url' => 'https://purgecss.com',
        ':url2' => 'https://tailwindcss.com/docs/controlling-file-size#writing-purgeable-html',
      ]
    ),
    '#default_value' => theme_get_setting('clf_css'),
    '#options' => [
      'css-dev' => t('Load all CSS styles (development)'),
      'css-prod' => t('Load purged CSS styles (production)'),
    ],
  ];

  $form['general']['cwl_site'] = [
    '#type' => 'checkbox',
    '#title' => t('<strong>Display a CWL Login option</strong>'),
    '#description' => t(
      '<strong>Check this option if the site should display a CWL Login option on the <a href=":url" target="_blank">drupal login page</a>.</strong><br />Note that this does not implement CWL protection, but simply adds the form to the login page.',
      [
        ':url' => '/user',
      ]
    ),
    '#default_value' => theme_get_setting('cwl_site'),
  ];

  $form['general']['clf_fonts'] = [
    '#type' => 'select',
    '#title' => t('CLF typeface options'),
    '#description' => t(
      'UBC web branding uses two google fonts, <a href=":url" target="_blank">Merriweather</a> (serif, 400 & 700) and <a href=":url2" target="_blank">Open Sans</a> (sans-serif, 400, 600 and 700). Enabling this option loads them correctly from Google\'s CDN. If you\'d like to use the older Whitney webfont on the website, choose the version you will be using.<br /><small>Please note that the production version of Whitney is provided by Web Communications, requires authorization via <a href=":brandurl">this form</a>, and only includes two weights (400 and 600).</small>',
      [
        ':url' => 'https://fonts.google.com/?query=merriweather',
        ':url2' => 'https://fonts.google.com/?query=open+sans',
        ':brandurl' => 'http://brand.ubc.ca/font-request-form/',
      ]
    ),
    '#default_value' => theme_get_setting('clf_fonts'),
    '#options' => [
      '' => t("Don't load any webfonts"),
      'default' => t("Open Sans / Merriweather - Google CDN"),
      'legacy-dev' => t('Whitney - Development version'),
      'legacy-prod' => t('Whitney - Production version'),
    ],
  ];

  $form['general']['clf_sticky'] = [
    '#type' => 'checkbox',
    '#title' => t('<strong>Make the top navigation sticky?</strong>'),
    '#description' => t('This option allows the top navigation to stay pinned to the top of the page when scrolling.'),
    '#default_value' => theme_get_setting('clf_sticky'),
  ];

  // CLF GENERAL OPTIONS.
  $form['vpr'] = [
    '#type' => 'details',
    '#title' => t('VPR Settings'),
    '#group' => 'clf',
  ];

  $form['vpr']['vpr_acknowledgement_footer'] = [
    '#type' => 'select',
    '#prefix' => t('<h2>VPR specific settings</h2>'),
    '#title' => t('<strong>Sitewide footer</strong>'),
    '#description' => t('This option sets the sitewide footer that identifies the site as a member of the VPR suite of websites.'),
    '#default_value' => theme_get_setting('vpr_acknowledgement_footer'),
    '#options' => [
      'portfolio' => t('Portfolio'),
      'cluster' => t('Cluster'),
      'shared' => t('Shared Research Platforms'),
      'research' => t('Main Research Website'),
      '' => t('None'),
    ],
  ];

  $form['vpr']['vpr_portfolio_signature'] = [
    '#type' => 'managed_file',
    '#required' => false,
    '#title' => t('<strong>Portfolio signature (SVG)</strong><br>* ensure that svg is trimmed to artwork bounds.'),
    '#description' => t('This option allows an SVG of signature to be uploaded, which is then displayed in the unit footer. It will only display for sites with the Portfolio option chosen above.'),
    '#default_value' => theme_get_setting('vpr_portfolio_signature'),
    '#upload_location' => 'public://unit-signature/',
    '#upload_validators' => array(
      'file_validate_extensions' => array('svg'),
    ),
  ];

  $form['vpr']['clf_subunitname'] = [
    '#type' => 'textfield',
    '#prefix' => t('<h2>Secondary Unit Footer Address</h2><p>These fields populate a second address in the unit sub-footer, displayed to the right of the first. If the Second Unit Name is not supplied, none of the values will show.'),
    '#title' => t(
      'Second Unit Name',
      [
        ':url_unit_name' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-name',
        ':url_unit_sub_footer' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-sub-footer',
      ]
    ),
    '#default_value' => theme_get_setting('clf_subunitname'),
    '#size' => 60,
    '#maxlength' => 128,
    '#required' => false,
  ];

  $form['vpr']['clf_streetaddr2'] = [
    '#type' => 'textfield',
    '#title' => t('Street Address'),
    '#default_value' => theme_get_setting('clf_streetaddr2'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['vpr']['clf_streetaddr2_line2'] = [
    '#type' => 'textfield',
    '#title' => t('Street Address, Line 2'),
    '#default_value' => theme_get_setting('clf_streetaddr2_line2'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['vpr']['clf_locality2'] = [
    '#type' => 'textfield',
    '#title' => t('City'),
    '#default_value' => theme_get_setting('clf_locality2'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['vpr']['clf_region2'] = [
    '#type' => 'textfield',
    '#title' => t('Province / Region'),
    '#default_value' => theme_get_setting('clf_region2'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['vpr']['clf_country2'] = [
    '#type' => 'textfield',
    '#title' => t('Country'),
    '#default_value' => theme_get_setting('clf_country2'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['vpr']['clf_postal2'] = [
    '#type' => 'textfield',
    '#title' => t('Postal Code'),
    '#default_value' => theme_get_setting('clf_postal2'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['vpr']['clf_telephone2'] = [
    '#type' => 'textfield',
    '#title' => t('Telephone Number - format as xxx xxx xxxx (spaces only)'),
    '#default_value' => theme_get_setting('clf_telephone2'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['vpr']['clf_fax2'] = [
    '#type' => 'textfield',
    '#title' => t('Fax Number - format as xxx xxx xxxx (spaces only)'),
    '#default_value' => theme_get_setting('clf_fax2'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['vpr']['clf_email2'] = [
    '#type' => 'textfield',
    '#title' => t('Email'),
    '#default_value' => theme_get_setting('clf_email2'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['vpr']['clf_website2'] = [
    '#type' => 'textfield',
    '#title' => t('Website'),
    '#description' => t('Do not include the <em>https://</em>'),
    '#default_value' => theme_get_setting('clf_website2'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  // UBC unit information.
  $form['unit'] = [
    '#type' => 'details',
    '#title' => t('Unit Settings'),
    '#group' => 'clf',
  ];

  $form['unit']['clf_unit_campus'] = [
    '#type' => 'select',
    '#title' => t('Campus Identity'),
    '#prefix' => t('<h2>General Unit Information</h2>'),
    '#description' => t(
      'This field shows your unit\'s campus mandate: Vancouver Campus or Okanagan Campus.<br /><small>If your unit has an institution-wide mandate or if neither choice is applicable, select the third option. See <a href=":url" target="_blank">Campus Identity</a> for guidelines.</small>',
      [
        ':url' => 'https://clf.ubc.ca/parts-of-the-clf',
      ]
    ),
    '#default_value' => theme_get_setting('clf_unit_campus'),
    '#options' => [
      'vancouver' => t('Vancouver'),
      'okanagan' => t('Okanagan'),
      '' => t('Institution-wide mandate / Not applicable'),
    ],
  ];

  $form['unit']['clf_faculty'] = [
    '#type' => 'checkbox',
    '#title' => t('<strong>Is your unit part of a Faculty?</strong>'),
    '#default_value' => theme_get_setting('clf_faculty'),
  ];

  $form['unit']['clf_faculty_name'] = [
    '#type' => 'select',
    '#title' => t('If yes, choose your Faculty'),
    '#default_value' => theme_get_setting('clf_faculty_name'),
    '#options' => [
      'Allard School of Law' => t('Allard School of Law'),
      'Faculty of Applied Science' => t('Faculty of Applied Science'),
      'Faculty of Arts' => t('Faculty of Arts'),
      'Faculty of Dentistry' => t('Faculty of Dentistry'),
      'Faculty of Education' => t('Faculty of Education'),
      'Faculty of Forestry' => t('Faculty of Forestry'),
      'Faculty of Land and Food Systems' => t('Faculty of Land and Food Systems'),
      'Faculty of Medicine' => t('Faculty of Medicine'),
      'Faculty of Pharmaceutical Sciences' => t('Faculty of Pharmaceutical Sciences'),
      'Faculty of Science' => t('Faculty of Science'),
      'Graduate and Postdoctoral Studies' => t('Graduate and Postdoctoral Studies'),
      'Sauder School of Business' => t('Sauder School of Business'),
    ],
  ];

  $form['unit']['clf_theme_unitbar_colour'] = [
    '#type' => 'color',
    '#title' => t('Unit Bar Colour'),
    '#description' => t(
      'See design specifications for <a href=":url" title="Learn more about the Unit Name background colours" target="_blank">Unit Name background colours</a>. This colour will be set as a variable that can be used in your css as <code>--color-primary</code>.',
      [
        ':url' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-colors',
      ]
    ),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => theme_get_setting('clf_theme_unitbar_colour'),
    '#required' => true,
  ];

  $form['unit']['clf_theme_unit_colour'] = [
    '#type' => 'color',
    '#title' => t('Unit Primary Colour'),
    '#description' => t(
      'This colour will be set as a variable that can be used in your css as <code>--color-primary</code>. It is often also used as the Unit Bar Colour above.',
      [
        ':url' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-colors',
      ]
    ),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => theme_get_setting('clf_theme_unit_colour'),
    '#required' => true,
  ];

  $form['unit']['clf_theme_secondary_colour'] = [
    '#type' => 'color',
    '#title' => t('Unit Secondary Colour'),
    '#description' => t(
      'This colour will be set as a variable that can be used in your css as <code>--color-secondary</code>.)',
      [
        ':url' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-colors',
      ]
    ),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => theme_get_setting('clf_theme_secondary_colour'),
    '#required' => true,
  ];

  $form['unit']['clf_theme_tertiary_colour'] = [
    '#type' => 'color',
    '#title' => t('Unit Tertiary Colour'),
    '#description' => t(
      'This colour will be set as a variable that can be used in your css as <code>--color-tertiary</code>.',
      [
        ':url' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-colors',
      ]
    ),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => theme_get_setting('clf_theme_tertiary_colour'),
    '#required' => true,
  ];

  $form['unit']['clf_theme_accent_colour'] = [
    '#type' => 'color',
    '#title' => t('Unit Primary Accent Colour'),
    '#description' => t(
      'This colour will be set as a variable that can be used in your css as <code>--color-accent</code>. Ideally, this should be a darker version of your primary colour',
      [
        ':url' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-colors',
      ]
    ),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => theme_get_setting('clf_theme_accent_colour'),
    '#required' => true,
  ];

  $form['unit']['clf_theme_link_colour'] = [
    '#type' => 'color',
    '#title' => t('Unit Link Colour'),
    '#description' => t(
      'This colour will be set as a variable that can be used in your css as <code>--color-link</code>.',
      [
        ':url' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-colors',
      ]
    ),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => theme_get_setting('clf_theme_link_colour'),
    '#required' => true,
  ];

  $form['unit']['clf_theme_link_hover_colour'] = [
    '#type' => 'color',
    '#title' => t('Unit Link Hover Colour'),
    '#description' => t(
      'This colour will be set as a variable that can be used in your css as <code>--color-link-hover</code>.',
      [
        ':url' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-colors',
      ]
    ),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => theme_get_setting('clf_theme_link_hover_colour'),
    '#required' => true,
  ];

  $form['unit']['clf_theme_link_active_colour'] = [
    '#type' => 'color',
    '#title' => t('Unit Link Active Colour'),
    '#description' => t(
      'This colour will be set as a variable that can be used in your css as <code>--color-link-active</code>.',
      [
        ':url' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-colors',
      ]
    ),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => theme_get_setting('clf_theme_link_active_colour'),
    '#required' => true,
  ];

  $form['unit']['clf_theme_leading'] = [
    '#type' => 'textfield',
    '#title' => t('Theme Line Height'),
    '#description' => t('This will set a variable that can be used in your css as <code>--leading</code>. '),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => theme_get_setting('clf_theme_leading'),
    '#required' => true,
  ];

  $form['unit']['clf_theme_base_font_size'] = [
    '#type' => 'textfield',
    '#title' => t('Theme Base Font Size'),
    '#description' => t('This will set a variable that can be used in your css as <code>--base-font-size</code>. It should be set in px.'),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => theme_get_setting('clf_theme_base_font_size'),
    '#required' => true,
  ];

  // LOCATION INFORMATION.
  $form['location'] = [
    '#type' => 'details',
    '#title' => t('Location and Contact Settings'),
    '#group' => 'clf',
  ];

  $form['location']['clf_unitname_footer'] = [
    '#type' => 'textfield',
    '#title' => t('Unit Name to show in footer above address'),
    '#prefix' => t('<h2>Address and Location Information</h2>'),
    '#default_value' => theme_get_setting('clf_unitname_footer'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_streetaddr'] = [
    '#type' => 'textfield',
    '#title' => t('Street Address'),
    '#default_value' => theme_get_setting('clf_streetaddr'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_streetaddr_line2'] = [
    '#type' => 'textfield',
    '#title' => t('Street Address, Line 2'),
    '#default_value' => theme_get_setting('clf_streetaddr_line2'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_locality'] = [
    '#type' => 'textfield',
    '#title' => t('City'),
    '#default_value' => theme_get_setting('clf_locality'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_region'] = [
    '#type' => 'textfield',
    '#title' => t('Province / Region'),
    '#default_value' => theme_get_setting('clf_region'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_country'] = [
    '#type' => 'textfield',
    '#title' => t('Country'),
    '#default_value' => theme_get_setting('clf_country'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_postal'] = [
    '#type' => 'textfield',
    '#title' => t('Postal Code'),
    '#default_value' => theme_get_setting('clf_postal'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_telephone'] = [
    '#type' => 'textfield',
    '#title' => t('Telephone Number - format as xxx xxx xxxx (spaces only)'),
    '#default_value' => theme_get_setting('clf_telephone'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_fax'] = [
    '#type' => 'textfield',
    '#title' => t('Fax Number - format as xxx xxx xxxx (spaces only)'),
    '#default_value' => theme_get_setting('clf_fax'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_email'] = [
    '#type' => 'textfield',
    '#title' => t('Email'),
    '#default_value' => theme_get_setting('clf_email'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_website'] = [
    '#type' => 'textfield',
    '#title' => t('Website'),
    '#description' => t('Do not include the <em>https://</em>'),
    '#default_value' => theme_get_setting('clf_website'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  // CLF Land Acknowledgement
  $form['land'] = [
    '#type' => 'details',
    '#title' => t('Land Acknowledgement'),
    '#group' => 'clf',
  ];

  $form['land']['land_acknowledgement'] = [
    '#type' => 'checkbox',
    '#title' => t('<strong>Show the Land Acknowledgement at the bottom of each page?</strong>'),
    '#default_value' => theme_get_setting('land_acknowledgement'),
  ];

  $form['land']['land_acknowledgement_text'] = [
    '#type' => 'textarea',
    '#title' => t('Land Acknowledgement Text (plain text only)'),
    '#description' => t('Enter the Land Acknowledgement text to display.'),
    '#default_value' => theme_get_setting('land_acknowledgement_text'),
  ];

  // social.
  $form['social'] = [
    '#type' => 'details',
    '#title' => t('Social Media Settings'),
    '#group' => 'clf',
  ];

  $form['social']['clf_social_facebook'] = [
    '#type' => 'textfield',
    '#title' => t('Facebook Account Link'),
    '#prefix' => t('<h2>Add Social Media icons/links to the unit footer</h2>'),
    '#default_value' => theme_get_setting('clf_social_facebook'),
    '#size' => 60,
    '#maxlength' => 128,
    '#description' => t('Format of https://www.xyz.com'),
  ];

  $form['social']['clf_social_twitter'] = [
    '#type' => 'textfield',
    '#title' => t('Twitter Account Link'),
    '#default_value' => theme_get_setting('clf_social_twitter'),
    '#size' => 60,
    '#maxlength' => 128,
    '#description' => t('Format of https://www.xyz.com'),
  ];

  $form['social']['clf_social_bluesky'] = [
    '#type' => 'textfield',
    '#title' => t('Bluesky Account Link'),
    '#default_value' => theme_get_setting('clf_social_bluesky'),
    '#size' => 60,
    '#maxlength' => 128,
    '#description' => t('Format of https://www.xyz.com'),
  ];

  $form['social']['clf_social_instagram'] = [
    '#type' => 'textfield',
    '#title' => t('Instagram Account Link'),
    '#default_value' => theme_get_setting('clf_social_instagram'),
    '#size' => 60,
    '#maxlength' => 128,
    '#description' => t('Format of https://www.xyz.com'),
  ];

  $form['social']['clf_social_linkedin'] = [
    '#type' => 'textfield',
    '#title' => t('Linkedin Account Link'),
    '#default_value' => theme_get_setting('clf_social_linkedin'),
    '#size' => 60,
    '#maxlength' => 128,
    '#description' => t('Format of https://www.xyz.com'),
  ];

  $form['social']['clf_social_youtube'] = [
    '#type' => 'textfield',
    '#title' => t('YouTube Account Link'),
    '#default_value' => theme_get_setting('clf_social_youtube'),
    '#size' => 60,
    '#maxlength' => 128,
    '#description' => t('Format of https://www.xyz.com'),
  ];

  // search.
  $form['search'] = [
    '#type' => 'details',
    '#title' => t('Search Settings'),
    '#group' => 'clf',
  ];

  $form['search']['clf_searchdomain'] = [
    '#type' => 'textfield',
    '#title' => t('Search Domain'),
    '#default_value' => theme_get_setting('clf_searchdomain'),
    '#prefix' => t('<h2>Default Search Settings</h2>'),
    '#size' => 60,
    '#maxlength' => 128,
    '#description' => t('This option allows you to limit search results in the global UBC search field to a specific domain other than this site. e.g. <strong>*.arts.ubc.ca</strong> or <strong>www.publicaffairs.ubc.ca/category/</strong>. The default searches only this site.'),
  ];

  $form['search']['clf_searchlabel'] = [
    '#type' => 'textfield',
    '#title' => t('Search Field Placeholder (usually your unit name)'),
    '#default_value' => theme_get_setting('clf_searchlabel'),
    '#size' => 60,
    '#maxlength' => 128,
    '#description' => t('This appears inside the search field as placeholder text. e.g. <strong>Search Pharmacy</strong>'),
  ];

  $form['search']['clf_google_verify'] = [
    '#type' => 'textfield',
    '#title' => t('Google Site Verification Code'),
    '#description' => t('Adds a meta tag to your site to allow you to verify the property with Google'),
    '#default_value' => theme_get_setting('clf_google_verify'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['search']['clf_bing_verify'] = [
    '#type' => 'textfield',
    '#title' => t('Bing Site Verification Code'),
    '#description' => t('Adds a meta tag to your site to allow you to verify the property with Bing'),
    '#default_value' => theme_get_setting('clf_bing_verify'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  // social.
  $form['icons'] = [
    '#type' => 'details',
    '#title' => t('Icon Settings'),
    '#group' => 'clf',
  ];

  $form['icons']['svg_icon_cart'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-cart" viewBox="0 0 64 64" aria-labelledby="title-icon-cart" aria-describedby="description-icon-cart" role="img" style="width:2rem;height:2rem;display:inline-block;">
      <title id="title-icon-cart">E-commerce Cart</title>
      <desc id="description-icon-cart">A shopping cart.</desc>
      <path stroke="currentColor" stroke-miterlimit="10" d="M62 22H16M2 6h10l10 40h32" stroke-linejoin="round" stroke-linecap="round" fill="none"></path>
      <circle cx="24" cy="54" r="4" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" fill="none"></circle>
      <circle cx="50" cy="54" r="4" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" fill="none"></circle>
      <path stroke="currentColor" stroke-miterlimit="10" d="M59 30H26m30 8H28" stroke-linejoin="round" stroke-linecap="round" fill="none"></path>
      </svg> Cart icon.'),
    '#prefix' => t('<h2>Choose additional icons to load</h2>'),
    '#description' => t('Add a cart icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_cart'),
  ];

  $form['icons']['svg_icon_clock'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-clock" viewBox="0 0 64 64" aria-labelledby="title-icon-clock" aria-describedby="description-icon-clock" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-clock">Time</title>
      <desc id="description-icon-clock">A clock.</desc>
      <circle cx="32" cy="32" r="30" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></circle>
      <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M32 10v23l13 7" stroke-linejoin="round"></path>
      </svg> Clock icon.'),
    '#description' => t('Add a clock icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_clock'),
  ];

  $form['icons']['svg_icon_discussion'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-discussion" viewBox="0 0 64 64" aria-labelledby="title-icon-discussion" aria-describedby="description-icon-discussion" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-discussion">Chats</title>
      <desc id="description-icon-discussion">Two speech clouds.</desc>
      <path d="M49.6 28.5C56.8 30.1 62 35.4 62 41.6a12.4 12.4 0 0 1-5.1 9.7L60 59l-10.3-4.3a21 21 0 0 1-4.7.5c-8.2 0-15.1-4.7-16.7-10.9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M4 50l15.4-6.3a29.6 29.6 0 0 0 6.6.7c13.3 0 24-8.6 24-19.2S39.3 6 26 6 2 14.6 2 25.2C2 30.6 4.8 35.5 9.3 39z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg> Discussion icon.'),
    '#description' => t('Add a discussion icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_discussion'),
  ];

  $form['icons']['svg_icon_facebook'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-facebook" viewBox="0 0 64 64" aria-labelledby="title-icon-facebook" aria-describedby="description-icon-facebook" role="img"  style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-facebook">Facebook</title>
      <desc id="description-icon-facebook">The logo for the Facebook social media service.</desc>
      <path d="M39.312 13.437H47V2h-9.094C26.938 2.469 24.688 8.656 24.5 15.125v5.719H17V32h7.5v30h11.25V32h9.281l1.781-11.156H35.75v-3.469a3.714 3.714 0 0 1 3.562-3.938z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path>
      </svg> Facebook icon.'),
    '#description' => t('Add a Facebook icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_facebook'),
  ];

  $form['icons']['svg_icon_home'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-home" viewBox="0 0 64 64" aria-labelledby="title-icon-home" aria-describedby="title-icon-home" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-home">Home</title>
      <desc id="description-icon-home">A house in silhouette.</desc>
      <path d="M54 26.267l7.555 7.3a.25.25 0 0 1-.174.43H54V62H40V44H24v18H10V34H2.618a.25.25 0 0 1-.174-.43L32 5l13 12.567V12h9z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path>
      </svg> Home icon.'),
    '#description' => t('Add a Facebook icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_home'),
  ];

  $form['icons']['svg_icon_instagram'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-instagram" viewBox="0 0 64 64" aria-labelledby="title-icon-instagram" aria-describedby="description-icon-instagram" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
    <title id="title-icon-instagram">Instagram</title>
    <desc id="description-icon-instagram">The logo for the Instagram social media service.</desc>
    <path d="M44.122 2H19.87A17.875 17.875 0 0 0 2 19.835v24.2a17.875 17.875 0 0 0 17.87 17.834h24.252A17.875 17.875 0 0 0 62 44.034v-24.2A17.875 17.875 0 0 0 44.122 2zM55.96 44.034a11.825 11.825 0 0 1-11.838 11.812H19.87A11.825 11.825 0 0 1 8.032 44.034v-24.2A11.825 11.825 0 0 1 19.87 8.022h24.252A11.825 11.825 0 0 1 55.96 19.835zm0 0" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path>
    <path d="M32 16.45a15.484 15.484 0 1 0 15.514 15.484A15.519 15.519 0 0 0 32 16.45zm0 24.95a9.461 9.461 0 1 1 9.482-9.461A9.472 9.472 0 0 1 32 41.4zm19.263-24.834a3.719 3.719 0 1 1-3.719-3.711 3.714 3.714 0 0 1 3.719 3.711zm0 0" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path>
    </svg> Instagram icon.'),
    '#description' => t('Add a Facebook icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_instagram'),
  ];

  $form['icons']['svg_icon_linkedin'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-linkedin" viewBox="0 0 64 64" aria-labelledby="title-icon-linkedin" aria-describedby="description-icon-linkedin" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-linkedin">Linkedin</title>
      <desc id="description-icon-linkedin">The logo for the LinkedIn social media service.</desc>
      <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M3.078 22.331h12.188v36.844H3.078z" stroke-linejoin="round"></path>
      <path
        d="M46.719 21.112c-5.344 0-8.531 1.969-11.906 6.281v-5.062H22.625v36.844h12.281V39.206c0-4.219 2.156-8.344 7.031-8.344s7.781 4.125 7.781 8.25v20.063H62V38.269c0-14.532-9.844-17.157-15.281-17.157z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path>
      <path d="M9.219 4.425C5.188 4.425 2 7.331 2 10.894s3.188 6.469 7.219 6.469 7.219-2.906 7.219-6.469-3.188-6.469-7.219-6.469z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path>
      </svg> Linkedin icon.'),
    '#description' => t('Add a Linkedin icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_linkedin'),
  ];

  $form['icons']['svg_icon_location'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-location" viewBox="0 0 64 64" aria-labelledby="title-icon-location" aria-describedby="description-icon-location" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-location">Location Pin</title>
      <desc id="description-icon-location">A map location pin.</desc>
      <path stroke-miterlimit="10" stroke="currentColor" d="M32 62c0-17.1 16.3-25.2 17.8-39.7A18 18 0 1 0 14 20a18.1 18.1 0 0 0 .2 2.2C15.7 36.8 32 44.9 32 62z" stroke-linejoin="round" stroke-linecap="round"></path>
      <circle stroke-miterlimit="10" stroke="currentColor" r="6" cy="20" cx="32" stroke-linejoin="round" stroke-linecap="round"></circle>
      </svg> Location icon.'),
    '#description' => t('Add a Location icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_location'),
  ];

  $form['icons']['svg_icon_mail'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-mail" viewBox="0 0 64 64" aria-labelledby="title-icon-mail" aria-describedby="description-icon-mail" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-mail">Mail</title>
      <desc id="description-icon-mail">An envelope.</desc>
      <path stroke="currentColor" stroke-miterlimit="10" d="M2 12l30 29 30-29M42 31.6L62 52M2 52l20-20.4" stroke-linejoin="round" stroke-linecap="round"></path>
      <path stroke="currentColor" stroke-miterlimit="10" d="M2 12h60v40H2z" stroke-linejoin="round" stroke-linecap="round"></path>
      </svg> Mail icon.'),
    '#description' => t('Add a Mail icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_mail'),
  ];

  $form['icons']['svg_icon_pencil'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-pencil" viewBox="0 0 64 64" aria-labelledby="title-icon-pencil" aria-describedby="description-icon-pencil" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-pencil">Pencil</title>
      <desc id="description-icon-pencil">A pencil indicating that this is editable.</desc>
      <path stroke-miterlimit="10" stroke="currentColor" d="M55.737 16.309l3.674-3.67a5.675 5.675 0 1 0-8.025-8.025l-3.674 3.669" stroke-linejoin="round" stroke-linecap="round"></path>
      <path d="M17.337 54.667l38.4-38.358-8.025-8.026L9.307 46.642 2.926 61.049l14.411-6.382zm-8.03-8.025l8.03 8.025" stroke-miterlimit="10" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"></path>
      </svg> Pencil icon.'),
    '#description' => t('Add a Pencil icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_pencil'),
  ];

  $form['icons']['svg_icon_phone'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-phone" viewBox="0 0 64 64" aria-labelledby="title-icon-phone"
      aria-describedby="description-icon-phone" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-phone">Telephone</title>
      <desc id="description-icon-phone">An antique telephone.</desc>
      <path d="M58.9 47l-10.4-6.8a4.8 4.8 0 0 0-6.5 1.3c-2.4 2.9-5.3 7.7-16.2-3.2S19.6 24.4 22.5 22a4.8 4.8 0 0 0 1.3-6.5L17 5.1c-.9-1.3-2.1-3.4-4.9-3S2 6.6 2 15.6s7.1 20 16.8 29.7S39.5 62 48.4 62s13.2-8 13.5-10-1.7-4.1-3-5z" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round"></path>
      </svg> Phone icon.'),
    '#description' => t('Add a Phone icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_phone'),
  ];

  $form['icons']['svg_icon_play'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-play" viewBox="0 0 64 64" aria-labelledby="title-icon-play" aria-describedby="description-icon-play" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-play">Play</title>
      <desc id="description-icon-play">A media play button.</desc>
      <path stroke="currentColor" stroke-miterlimit="10" d="M24 18l24 14-24 14V18z" stroke-linejoin="round" stroke-linecap="round"></path>
      <circle cx="32" cy="32" r="30" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round"></circle>
      </svg> Play icon.'),
    '#description' => t('Add a Play icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_play'),
  ];

  $form['icons']['svg_icon_settings'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-settings" viewBox="0 0 64 64" aria-labelledby="title-icon-settings" aria-describedby="description-icon-settings" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-settings">Settings</title>
      <desc id="description-icon-settings">A single gear.</desc>
      <circle cx="32" cy="32" r="10" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></circle>
      <path d="M61 27h-6.551a22.857 22.857 0 0 0-3.041-7.336l4.634-4.634a1 1 0 0 0 0-1.414l-5.657-5.658a1 1 0 0 0-1.414 0l-4.634 4.634A22.857 22.857 0 0 0 37 9.552V3a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v6.552a22.857 22.857 0 0 0-7.336 3.041l-4.635-4.635a1 1 0 0 0-1.414 0l-5.657 5.657a1 1 0 0 0 0 1.414l4.634 4.634A22.857 22.857 0 0 0 9.552 27H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6.552a22.856 22.856 0 0 0 3.041 7.336l-4.635 4.635a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414 0l4.634-4.634A22.86 22.86 0 0 0 27 54.449V61a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6.551a22.86 22.86 0 0 0 7.336-3.041l4.634 4.634a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0 0-1.414l-4.634-4.634A22.856 22.856 0 0 0 54.449 37H61a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path>
      </svg> Settings icon.'),
    '#description' => t('Add a Settings icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_settings'),
  ];

  $form['icons']['svg_icon_speech'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-speech" viewBox="0 0 64 64" aria-labelledby="title-icon-speech" aria-describedby="description-icon-speech" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-speech">Speech Bubble</title>
      <desc id="description-icon-speech">A speech bubble.</desc>
      <path d="M42 8H22a20 20 0 0 0 0 40h2v10l12-10h6a20 20 0 1 0 0-40z" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round"></path>
      </svg> Speech icon.'),
    '#description' => t('Add a Speech icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_speech'),
  ];

  $form['icons']['svg_icon_star'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-star" viewBox="0 0 64 64" aria-labelledby="title-icon-star" aria-describedby="description-icon-star" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-star">Star</title>
      <desc id="description-icon-star">An outline of a star.</desc>
      <path stroke="currentColor" stroke-miterlimit="10" d="M32 47.2L13.5 61l7.1-22.2L2 25h23l7-22 7 22h23L43.4 38.8 50.5 61 32 47.2z" stroke-linejoin="round" stroke-linecap="round"></path>
      </svg> Star icon.'),
    '#description' => t('Add a Star icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_star'),
  ];

  $form['icons']['svg_icon_twitter'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-twitter" viewBox="0 0 64 64" aria-labelledby="title-icon-twitter" aria-describedby="description-icon-twitter" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-twitter">Twitter</title>
      <desc id="description-icon-twitter">The logo for the Twitter social media service.</desc>
      <path d="M60.448 15.109a24.276 24.276 0 0 1-3.288.968.5.5 0 0 1-.451-.853 15.146 15.146 0 0 0 3.119-4.263.5.5 0 0 0-.677-.662 18.6 18.6 0 0 1-6.527 2.071 12.92 12.92 0 0 0-9-3.75A12.363 12.363 0 0 0 31.25 20.994a12.727 12.727 0 0 0 .281 2.719c-9.048-.274-19.61-4.647-25.781-12.249a.5.5 0 0 0-.83.073 12.475 12.475 0 0 0 2.956 14.79.5.5 0 0 1-.344.887 7.749 7.749 0 0 1-3.1-.8.5.5 0 0 0-.725.477 11.653 11.653 0 0 0 7.979 10.567.5.5 0 0 1-.09.964 12.567 12.567 0 0 1-2.834 0 .506.506 0 0 0-.536.635c.849 3.282 5.092 7.125 9.839 7.652a.5.5 0 0 1 .267.87 20.943 20.943 0 0 1-14 4.577.5.5 0 0 0-.255.942 37.29 37.29 0 0 0 17.33 4.266 34.5 34.5 0 0 0 34.687-36.182v-.469a21.11 21.11 0 0 0 4.934-4.839.5.5 0 0 0-.58-.765z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path>
      </svg> Twitter icon.'),
    '#description' => t('Add a Twitter icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_twitter'),
  ];

  $form['icons']['svg_icon_user'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-user" viewBox="0 0 64 64" aria-labelledby="title-icon-user" aria-describedby="description-icon-user" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-user">User</title>
      <desc id="description-icon-user">A silhouette of a person.</desc>
      <path d="M46 26c0 6.1-3.4 11.5-7 14.8V44c0 2 1 5.1 11 7a15.5 15.5 0 0 1 12 11H2a13.4 13.4 0 0 1 11-11c10-1.8 12-5 12-7v-3.2c-3.6-3.3-7-8.6-7-14.8v-9.6C18 6 25.4 2 32 2s14 4 14 14.4z" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round"></path>
      </svg> User icon.'),
    '#description' => t('Add a User icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_user'),
  ];

  $form['icons']['svg_icon_vimeo'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-vimeo" viewBox="0 0 64 64" aria-labelledby="title-icon-vimeo" aria-describedby="description-icon-vimeo" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-vimeo">Vimeo</title>
      <desc id="description-icon-vimeo">The logo for the Vimeo video sharing service.</desc>
      <path d="M52.531 6.744c-7.594 0-13.594 4.969-16.219 14.25 2.813-1.312 7.875-2.063 8.344 2.625.375 4.688-6.656 16.687-9.75 16.687s-5.344-13.594-6.188-19.781C27.969 14.244 26.469 7.4 20.656 7.4 14.75 7.4 7.25 16.588 2 20.713l2.719 3.75s3.937-3.094 5.25-2.812c3.563.938 6.563 15.375 8.156 20.906s3.469 16.688 11.156 16.688C41.563 59.244 62 28.682 62 18.651c0-6.563-1.875-11.907-9.469-11.907z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path>
      </svg> Vimeo icon.'),
    '#description' => t('Add a Vimeo icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_vimeo'),
  ];

  $form['icons']['svg_icon_youtube'] = [
    '#type' => 'checkbox',
    '#title' => t('<svg id="icon-youtube" viewBox="0 0 64 64" aria-labelledby="title-icon-youtube" aria-describedby="description-icon-youtube" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;">
      <title id="title-icon-youtube">Youtube</title>
      <desc id="description-icon-youtube">The logo for the YouTube video sharing service.</desc>
      <path d="M49.539 12H14.461A12.4 12.4 0 0 0 2 24.327v17.346A12.4 12.4 0 0 0 14.461 54h35.078A12.4 12.4 0 0 0 62 41.673V24.327A12.4 12.4 0 0 0 49.539 12z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path>
      <path d="M41.111 33.844L24.7 41.585a.658.658 0 0 1-.938-.585V25.031a.659.659 0 0 1 .956-.581l16.407 8.225a.649.649 0 0 1-.014 1.169z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path>
      </svg> Youtube icon.'),
    '#description' => t('Add a Youtube icon that can be referenced on each page.'),
    '#default_value' => theme_get_setting('svg_icon_youtube'),
  ];

  // extras.
  $form['extra'] = [
    '#type' => 'details',
    '#title' => t('Extra Settings'),
    '#group' => 'clf',
  ];

  $form['extra']['clf_noindex'] = [
    '#type' => 'checkbox',
    '#title' => t('<strong>Do <em>not</em> allow the site to be indexed</strong>'),
    '#prefix' => t('<h2>Additional miscellaneous options</h2>'),
    '#description' => t('If this is <strong>not</strong> a production website, this checkbox will add a "nofollow" meta tag to all pages.'),
    '#default_value' => theme_get_setting('clf_noindex'),
  ];

  $form['extra']['clf_fontawesome'] = [
    '#type' => 'checkbox',
    '#title' => t('<strong>Use Fontawesome 4.7.x</strong>'),
    '#description' => t('Add all Fontawesome icon fonts to the site. <a href=":url" target="_blank">Read the documentation</a>.<br /><small>*Note: unless you\'re using the minimal CLF, version 3.x of the fontawesome library is included with the CLF package. Before enabling this option, please consider using a more efficient alternative, such as SVGs or a generating a free custom icon font through a service like <a href=":url_fontello" target="_blank">Fontello</a> or <a href=":url_icomoon" target="_blank">Icomoon</a>.</small>', [
      ':url' => 'http://fontawesome.io/icons/',
      ':url_fontello' => 'http://fontello.com',
      ':url_icomoon' => 'https://icomoon.io/app',
    ]),
    '#default_value' => theme_get_setting('clf_fontawesome'),
  ];

  if ($file_id = $form_state->getValue(['vpr_portfolio_signature', '0'])) {
    $file = \Drupal::entityTypeManager()->getStorage('file')->load($file_id);
    $file->setPermanent();
    $file->save();
  }
}
