var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'WiFi Analytics, Cloud Managed Wi-Fi',
    keywords: "Cloud managed Wi-Fi Hotspots, Wi-Fi Analytics, Wi-Fi Software, Cloud WiFi, Wi-Fi Sotware",
    description: "Manage your Wireless Hotspots from the cloud using from Cucumber Tony, the cloud-based Wi-Fi dashboard."
  });
});

/* GET captive portal page. */
router.get('/captive-portal', function(req, res) {
  res.render('captive_portal', {
    title: 'Wi-Fi Captive Portal, Meraki Captive Portal, Ruckus Captive Portal',
    keywords: "Captive Portal, Meraki Login Pages, Meraki Captive Portal, Ruckus Login Pages, Ruckus Captive Portal, WiFi Hotspot Login Pages",
    description: "Simple and beautiful captive portals for all types of networks including Meraki, Cisco and Ruckus."
  });
});

/* GET feeutres page. */
router.get('/features', function(req, res) {
  res.render('features', {
    title: 'Wi-Fi Captive Portal, Wi-Fi Management',
    keywords: "Captive Portal, Wi-Fi Hotspot Software, Cloud managed Wi-Fi, Wi-Fi hotspots",
    description: "Cloud managed wireless networks from PolkaSpots Wireless Hotspots."
  });
});

/* GET more feautres configure page. */
router.get('/features/configure', function(req, res) {
  res.render('configure', {
    title: 'Cloud Managed Wi-Fi Hotspots',
    keywords: "Cloud wifi, wifi hotspots, wifi, cloud managed wifi",
    description: "Manage your wifi hotspots from our cloud-based Wi-Fi Hotspot dashboard",
  });
});

/* GET more feautres create page. */
router.get('/features/create', function(req, res) {
  res.render('create', {
    title: 'Cloud Managed Wi-Fi Hotspot Systems',
    keywords: "Create Wi-Fi Hotspot, WiFi dashboard, Free Cloud Managed WiFi",
    description: "WiFi hotspots with facebook logins, Cloud managed Wi-Fi Dashboard",
  });
});

/* GET more feautres design page. */
router.get('/features/design', function(req, res) {
  res.render('design', {
    title: 'Facebook Wi-Fi Hotspot Captive Portal',
    keywords: "WiFi Hotspots, Cloud managed Wireless Networks, Cloud based Wireless, Cloud WiFi",
    description: "Cloud managed wireless networks for everyone, enterprise Wi-Fi features, everyday hardware",
  });
});

/* GET more feautres monitor page. */
router.get('/features/monitor', function(req, res) {
  res.render('monitor', {
    title: 'Cloud managed Wi-Fi Software',
    keywords: "Cloud-wifi, Cloud Managed WiFi, Cloud Managed Wireless Software, Cloud Public Wi-Fi",
    description: "Managed your Wireless Hotspots from our cloud-managed Wi-Fi Hotspot dashboard",
  });
});

/* GET more feautres secure page. */
router.get('/features/wifi-security', function(req, res) {
  res.render('secure', {
    title: 'Cloud managed Wi-Fi Security',
    keywords: "Cloud Wi-Fi, Cloud Wireless Services, cloud based wireless software",
    description: "Captive portal services and wireless hotspot management software",
  });
});

/* GET analytics page. */
router.get('/wifi-analytics', function(req, res) {
  res.render('analytics', {
    title: 'Wi-Fi Analytics, Retail Analytics',
    keywords: "Wi-Fi Analytics, Retail Analytics, Wi-Fi Hotspot Analytics, City Wi-Fi Analytics",
    description: "Retail analytics dashboard, city wifi analytics software, wifi analytics services",
  });
});

/* GET how it works page. */
router.get('/how-it-works', function(req, res) {
  res.render('how', {
    title: 'Cloud Managed Wi-Fi Networks',
    keywords: "Cloud managed Wi-Fi, Retail Analytics, Wi-Fi Analytics, City Wi-Fi, Town Wi-Fi",
    description: "Cloud based Wi-Fi services, retail analytics, wifi analytics sofware",
  });
});

/* GET how it works page. */
router.get('/virgins*', function(req, res) {
  res.render('virgins', {
    title: 'Getting your cloud-managed Wi-Fi Hotspot box set up',
    keywords: "Wireless hotspots, Wi-Fi Hotspots, Wireless Router",
    description: "Cloud managed wireless hotspots for businesses",
  });
});

/* GET wifi plans page. */
router.get('/wifi-plans', function(req, res) {
  res.render('plans', {
    title: 'Cloud Managed Wi-Fi Hotspot Plans',
    keywords: "WiFi Plans, Free Wi-Fi, Wireless Hotspots, WiFi Hotspots, Wi-Fi Services",
    description: "Cloud managed wireless hotspots and retail wifi analytics",
  });
});

/* GET wifi firmware page. */
router.get('/opensource-wifi-firmware', function(req, res) {
  res.render('firmware', {
    title: 'Opensource Wi-Fi Hotspot Firmware',
    keywords: "WiFi Firmware, Router Firware, Hotspot Firmware, Cloud managed wifi software",
    description: "Opensource router firmware from PolkaSpots Wireless Hotspots",
  });
});

/* GET cucumbertony page. */
router.get('/cucumber-tony', function(req, res) {
  res.render('tony', {
    title: 'Cucumber Tony Cloud Management',
    keywords: "Cucumber Tony, Wi-Fi Management, Cloud-based WiFi software, Retail WiFi Analytics",
    description: "Manage thousands of devices with Cucumber Tony, the cloud based wifi and wifi analytics software",
  });
});

/* GET contact page. */
router.get('/contact*', function(req, res) {
  res.render('contact', {
    title: 'Contact Cucumber Tony Wi-Fi Hotspots',
    keywords: "WiFi, Wireless, WiFi Hotspots, City Wi-Fi, Retail analytics, city analytics",
    description: "WiFi analytics software and cloud-based wifi hotspot management services",
  });
});

/* GET sync disabled page. */
router.get('/sync-disabled*', function(req, res) {
  res.render('sync_disabled', {
    title: 'Contact Cucumber Tony Wi-Fi Hotspots',
    keywords: "WiFi, Wireless, WiFi Hotspots, City Wi-Fi, Retail analytics, city analytics",
    description: "WiFi analytics software and cloud-based wifi hotspot management services",
  });
});

/* GET blob page. */
router.get('/blog*', function(req, res) {
  res.render('blog', {
    title: 'Cloud managed love wifi',
    keywords: "Wi-Fi blog, Wireless Hotspot Info",
    description: "Wireless hotspot services and tools. Cloud managed wifi hotspots",
  });
});


/* GET image attributio page. */
router.get('/thanks', function(req, res) {
  res.render('thanks', {
    title: 'Cloud managed WiFi with Cucumber Tony',
    keywords: "Wi-Fi blog, Wireless Hotspot Info",
    description: "Wireless hotspot services and tools. Cloud managed wifi hotspots",
  });
});


/* 301 301 301 301 301 301 */

/* GET discontinued smart wifi feature pages */
router.get('/smart-wifi', function(req, res) {
  res.render('smart-wifi', { title: 'Smart Wi-Fi, Cloud Managed Wi-Fi' });
});

router.get('/smart-wifi*', function(req, res) {
  res.redirect(301, "/smart-wifi");
  res.end();
});

router.get('/shop*', function(req, res) {
  res.redirect(301, "https://mywifi.polkaspots.com/buy?ref=www");
  res.end();
});

router.get('/support.html', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us");
  res.end();
});

router.get('/support', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us");
  res.end();
});

router.get('/:var(mailchimp|foursquare|campaignmonitor|sms|twillio|facebook-signups)', function(req, res) {
  res.render('integrations', { title: 'Analytics' });
});

router.get('/go', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/categories/200083588-Getting-Started");
  res.end();
});

router.get('/status', function(req, res) {
  res.redirect(301, "http://status.polkaspots.com");
  res.end();
});

router.get('/login', function(req, res) {
  res.redirect(301, "https://mywifi.polkaspots.com/login");
  res.end();
});

router.get('/signup', function(req, res) {
  res.redirect(301, "https://mywifi.polkaspots.com/signup?ref=www");
  res.end();
});

router.get('/what-are-internet-vouchers', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201253987");
  res.end();
});

router.get('/what-are-quickcodes', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201350736-What-are-Quick-Codes-and-how-do-I-generate-them-");
  res.end();
});

router.get('/admin-users', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201988518-What-are-Admin-agents-and-how-do-I-add-them-");
  res.end();
});

router.get('/paid-wifi', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201357886");
  res.end();
});

router.get('/foursquare_venues', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201460816");
  res.end();
});

router.get('/global-wifi-map', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201460866");
  res.end();
});

router.get('/sms-logins', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201460896");
  res.end();
});

router.get('/wifi-hotspot-login-page-hosted-design', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201579897");
  res.end();
});

router.get('/different-wifi-access-points', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201713083");
  res.end();
});

router.get('/wifi-billing-and-voucher-management', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/sections/200310597-Settings-and-People");
  res.end();
});

router.get('/copy-wifi-hotspot', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201928628");
  res.end();
});

router.get('/ct-events', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201070543");
  res.end();
});

router.get('/flapping', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201469166");
  res.end();
});

router.get('/stable-wifi', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201723053");
  res.end();
});

router.get('/wifi-hotspot-billing-software', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201357886");
  res.end();
});

router.get('/wifi-hotspot-login-page-template', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201579897-Can-I-design-my-own-login-page-from-scratch-External-CSS-");
  res.end();
});

router.get('/wifi-hotspot-login-page-design-overview', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201256076-Your-Wi-Fi-hotspot-login-page-an-overview");
  res.end();
});

router.get('/create-a-time-limit-in-my-wifi-hotspot', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201256026");
  res.end();
});

router.get('/wifi-hotspot-email-capture', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201711603");
  res.end();
});

router.get('/help', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us");
  res.end();
});

router.get('/generate-wifi-tickets-vouchers', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201717633--CODES-VOUCHERS-Setting-Up-Voucher-access");
  res.end();
});

router.get('/allow-facebook-checkin', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201783173");
  res.end();
});

router.get('/allow-facebook-message', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201602666");
  res.end();
});

router.get('/transfer-boxes', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201796723");
  res.end();
});

router.get('/login-page-help-video', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201776697");
  res.end();
});

router.get('/change-billing-details', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201386677-Where-can-I-see-my-payments-and-change-my-billing-details-");
  res.end();
});

router.get('/unifi-wifi-box-factory-reset', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/202217438-How-do-I-reset-my-Unifi-box-manually-");
  res.end();
});

router.get('/archived-location', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201854406");
  res.end();
});

router.get('/location-at-limit', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201804783-What-does-Daily-Sessions-Limit-mean-");
  res.end();
});

router.get('/wifi-hotspot-software-install-airrouter', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/202281948");
  res.end();
});

router.get('/docs_airrouter', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/202281948");
  res.end();
});

router.get('/docs_ubiquiti_unifi_one', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/202515248");
  res.end();
});

router.get('/docs_ubiquiti_unifi_two', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/202105533");
  res.end();
});

router.get('/docs_ubiquiti_unifi', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/202569758");
  res.end();
});

router.get('/docs_ubiquiti_unifi_ap_pro', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/202569758");
  res.end();
});

router.get('/fw_ubiquiti_unifi', function(req, res) {
  res.redirect(301, "https://s3-eu-west-1.amazonaws.com/ps-peep-downloads/p_140511_00_ubiquiti_unifi.bin");
  res.end();
});

router.get('/fw_ubiquiti_unifi_ap_pro', function(req, res) {
  res.redirect(301, "https://s3-eu-west-1.amazonaws.com/ps-peep-downloads/p_140522_00_ubiquiti_unifi_ap_pro.bin");
  res.end();
});

router.get('/fw_airrouter', function(req, res) {
  res.redirect(301, "https://s3-eu-west-1.amazonaws.com/ps-peep-downloads/p_140511_00_ubiquiti_airrouter.bin");
  res.end();
});

router.get('/fw_ubiquiti_airrouter', function(req, res) {
  res.redirect(301, "https://s3-eu-west-1.amazonaws.com/ps-peep-downloads/p_140511_00_ubiquiti_airrouter.bin");
  res.end();
});

router.get('/docs_ubiquiti_airrouter', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/202281948");
  res.end();
});

router.get('/fw_ubiquiti_unifiap_outdoor', function(req, res) {
  res.redirect(301, "https://s3-eu-west-1.amazonaws.com/ps-peep-downloads/p_140525_00_ubiquiti_unifiap_outdoor.bin");
  res.end();
});

router.get('/docs_ubiquiti_unifiap_outdoor', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/202569758");
  res.end();
});

router.get('/firmwares', function(req, res) {
  res.redirect(301, "https://mywifi.polkaspots.com/firmwares");
  res.end();
});

router.get('/compatible_wifi_access_points', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/202208793");
  res.end();
});

router.get('/firmware-installation', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/202267176");
  res.end();
});

router.get('/help/last_heartbeat*', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/202814496");
  res.end();
});

router.get('/wifi-hotspot-software-instructions', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/202267176");
  res.end();
});

router.get('/help/coova-login-pages', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/203318943");
  res.end();
});

router.get('/help/meraki-login-pages', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/201069833-Adding-A-Meraki-to-Cucumber-Tony");
  res.end();
});

router.get('/help/network-types', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/203318953");
  res.end();
});

router.get('/advanced-settings', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/203318963");
  res.end();
});

router.get('/help/*', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/");
  res.end();
});

router.get('*', function(req, res){
  res.render('404', { title: 'Express' });
});

module.exports = router;
