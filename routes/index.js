var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET feeutres page. */
router.get('/features', function(req, res) {
  res.render('features', { title: 'Features' });
});

/* GET more feautres configure page. */
router.get('/features/configure', function(req, res) {
  res.render('configure', { title: 'Features' });
});

/* GET more feautres create page. */
router.get('/features/create', function(req, res) {
  res.render('create', { title: 'Features' });
});

/* GET more feautres design page. */
router.get('/features/design', function(req, res) {
  res.render('design', { title: 'Features' });
});

/* GET more feautres monitor page. */
router.get('/features/monitor', function(req, res) {
  res.render('monitor', { title: 'Features' });
});

/* GET more feautres secure page. */
router.get('/features/wifi-security', function(req, res) {
  res.render('secure', { title: 'Features' });
});

/* GET analytics page. */
router.get('/wifi-analytics', function(req, res) {
  res.render('analytics', { title: 'Analytics' });
});

/* GET how it works page. */
router.get('/how-it-works', function(req, res) {
  res.render('how', { title: 'Analytics' });
});

/* GET wifi plans page. */
router.get('/wifi-plans', function(req, res) {
  res.render('plans', { title: 'Analytics' });
});

/* GET wifi firmware page. */
router.get('/opensource-wifi-firmware', function(req, res) {
  res.render('firmware', { title: 'Analytics' });
});

/* GET cucumbertony page. */
router.get('/cucumber-tony', function(req, res) {
  res.render('tony', { title: 'Analytics' });
});

/* GET contact page. */
router.get('/contact*', function(req, res) {
  res.render('contact', { title: 'Analytics' });
});


/* 301 301 301 301 301 301 */

/* GET discontinued smart wifi feature pages */
router.get('/smart-wifi', function(req, res) {
  res.render('smart-wifi', { title: 'Analytics' });
});

router.get('/smart-wifi*', function(req, res) {
  res.redirect(301, "/smart-wifi");
  res.end();
});

router.get('/shop*', function(req, res) {
  res.redirect(301, "https://mywifi.polkaspots.com/shop?ref=www");
  res.end();
});

router.get('/support.html', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us");
  res.end();
});

router.get('/support/', function(req, res) {
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

router.get('/wifi-hotspot-software-instructions', function(req, res) {
  res.redirect(301, "https://polkaspots.zendesk.com/hc/en-us/articles/202267176");
  res.end();
});

router.get('*', function(req, res){
  res.render('404', { title: 'Express' });
});

module.exports = router;
