var categoryData = {
	mobTS: {
		name: "SQS Mobile Testing Service",
		description: "Find related links about Mobile Testing.",
		items: [
			{
				name: "SQS Local Head of Mobile Testing Service CH",
				descr:"",
				contact:"-",
				e_mail:"",
				link:"https://backoffice.sqs-group.com/services/ServiceManagement/Service%20Management/Forms/AllItems.aspx?RootFolder=%2fservices%2fServiceManagement%2fService%20Management%2f01%20Planning%20and%20Control&FolderCTID=0x012000D7B8F96E94D4A942ACF66F5EF3708025"
			},
			{
				name: "SQS Mobile Testing Service Team CH",
				descr:"",
				contact:"",
				e_mail:"",
				link:"https://backoffice.sqs-group.com/services/ServiceManagement/Service%20Management/Forms/AllItems.aspx"
			},
			{
				name: "SQS Head Mobile Testing Service",
				descr:"",
				contact:"",
				e_mail:"",
				link:""
			},
			{
				name: "Mobile Testing Group",
				descr:"",
				contact:"",
				e_mail:"",
				link:""
			},
			{
				name: "cat schulung",
				descr:"",
				contact:"",
				e_mail:"",
				link:""
			},
			{
				name: "ISTQB® Web & Mobile Apps Recognition",
				descr:"",
				contact:"",
				e_mail:"",
				link:"http://www.istqb.org/references/istqb-web-mobile-apps.html"
			},
			{
				name: "CMAP Mobile App Testing - Foundation Level",
				descr:"",
				contact:"",
				e_mail:"",
				link:"https://www.isqi.org/de/certview.html?CertificateID=50"
			},
			{
				name: "Wikipedia Mobile Testing",
				descr:"",
				contact:"",
				e_mail:"",
				link:"http://en.wikipedia.org/wiki/Mobile_application_testing"
			},
			{
				name: "SQS India Mobile Automation Testing",
				descr:"",
				contact:"",
				e_mail:"",
				link:"https://hub.sqs-group.com/UKISA/ProfServices/BU/India/Mobile%20Automation%20Testing/Forms/AllItems.aspx"
			},
			{
				name: "SQS SIG Automation Mobile Testinng",
				descr:"",
				contact:"",
				e_mail:"",
				link:"https://hub.sqs-group.com/sites/innovation/AUT/AUT/Automation/Automation%20Wiki/Mobile%20Testing%20Slides.aspx"
			},
			{
				name: "Best practices in mobile applications testing",
				descr:"",
				contact:"",
				e_mail:"",
				link:"http://www.infosys.com/flypp/resources/Documents/mobile-application-testing.pdf"
			},
			{
				name: "How to Detect SSL Leakage in Mobile Apps ",
				descr:"",
				contact:"",
				e_mail:"",
				link:"http://www.esecurityplanet.com/mobile-security/how-to-detect-ssl-leakage-in-mobile-apps.html"
			},
			{
				name: "How we secure our phones (SSL, cert pinning, PFS & more)",
				descr:"",
				contact:"",
				e_mail:"",
				link:"http://resetthenet.tumblr.com/post/84327981750/how-we-secure-our-phones-ssl-cert-pinning-pfs"
			}
		]
	},
	docum: {
		name: "Documentation",
		description: "Various Documents.",
		items: [
			{
				name: "Mobile Testing Docu",
				descr:"",
				contact:"",
				e_mail:"",
				link:""
			},
			{
				name: "Evaluation device or App",
				descr:"",
				contact:"",
				e_mail:"",
				link:"\\hub.sqs-group.com@SSL\DavWWWRoot\sites\dach\sqsch\LoHS_MT\Kriterienkatalog Evaluation.xlsx"
			},
			{
				name: "C",
				descr:"",
				contact:"",
				e_mail:"",
				link:""
			},
			{
				name: "D",
				descr:"",
				contact:"",
				e_mail:"",
				link:""
			},
			{
				name: "E",
				descr:"",
				contact:"",
				e_mail:"",
				link:""
			},
			{
				name: "F",
				descr:"",
				contact:"",
				e_mail:"",
				link:""
			},
			{
				name: "G",
				descr:"",
				contact:"",
				e_mail:"",
				link:""
			}
		]
	},
	
	
	mobTT: {
		name: "Mobile Testing Tools",
		description: "Various Tools you can use for mobile testing",
		items: [
			{
				name: "SOASTA",
				descr:"Automation, Performance,..",
				contact:"-",
				e_mail:"",
				link:"http://www.soasta.com/"
			},
			{
				name: "appium",
				descr:"Testautomatisierungswerkzeug für native und hybride mobile Anwendungen (Apps).",
				contact:"",
				e_mail:"",
				link:"http://appium.io/"
			},
			{
				name: "JAMO",
				descr:"Test Automation: iOs, Android, WindowsPhone, Windows Mobile/CE,  Blackberry",
				contact:"",
				e_mail:"",
				link:"http://www.jamosolutions.com/"
			},
			{
				name: "Perfecto Mobile",
				descr:"",
				contact:"",
				e_mail:"",
				link:"https://www.perfectomobile.com/"
			}
		]
	},
	mobAD: {
		name: "Mobile App Development",
		description: "Find Applications for mobile development.",
		items: [
			{
				name: "PHONEGAP",
				descr:"Code Basis für  Betriebssysteme:  iOS, Android™ and Windows® Phone 8",
				contact:"",
				e_mail:"",
				link:"http://phonegap.com/"
			},
			{
				name: "CODENAME ONE",
				descr:"",
				contact:"",
				e_mail:"",
				link:"http://www.codenameone.com/"
			},
			{
				name: "JO",
				descr:"Framework for HTML5 - works with Phonegap",
				contact:"",
				e_mail:"",
				link:"http://joapp.com/"
			},
			{
				name: "Mobjectify",
				descr:"",
				contact:"",
				e_mail:"",
				link:"http://www.mobjectify.com/"
			},
			{
				name: "JQueryMobile",
				descr:"Framework for HTML5  - all devices  --Library - responsive design",
				contact:"",
				e_mail:"",
				link:"http://jquerymobile.com"
			},
			{
				name: "Google WEB FUNDAMENTALS",
				descr:"Web App development -responsive design",
				contact:"",
				e_mail:"",
				link:"https://developers.google.com/web/fundamentals/"
			}
		]
	}
};



// Load the data for a specific category, based on
// the URL passed in. Generate markup for the items in the
// category, inject it into an embedded page, and then make
// that page the current active page.
function showCategory( urlObj, options )
{
	var categoryName = urlObj.hash.replace( /.*category=/, "" ),

		// Get the object that represents the category we
		// are interested in. Note, that at this point we could
		// instead fire off an ajax request to fetch the data, but
		// for the purposes of this sample, it's already in memory.
		category = categoryData[ categoryName ],

		// The pages we use to display our content are already in
		// the DOM. The id of the page we are going to write our
		// content into is specified in the hash before the '?'.
		pageSelector = urlObj.hash.replace( /\?.*$/, "" );

	if ( category ) {
		// Get the page we are going to dump our content into.
		var $page = $( pageSelector ),

			// Get the header for the page.
			$header = $page.children( ":jqmData(role=header)" ),

			// Get the content area element for the page.
			$content = $page.children( ":jqmData(role=content)" ),

			// The markup we are going to inject into the content
			// area of the page.
			markup = "<h2>" + category.description + "</h2><ul data-role='listview' data-inset='true' >",

			// The array of items for this category.
			cItems = category.items,

			// The number of items in the category.
			numItems = cItems.length;

		// Generate a list item for each item in the category
		// and add it to our markup.
		for ( var i = 0; i < numItems; i++ ) {
	markup += "<li>" + cItems[i].name+ "    <br> -       " + cItems[i].descr+"  <br> " + cItems[i].contact+" <br> " + cItems[i].e_mail+" <br> " + cItems[i].link +" </li>";
			
			
		}
		markup += "</ul>";

		// Find the h1 element in our header and inject the name of
		// the category into it.
		$header.find( "h1" ).html( category.name );

		// Inject the category items markup into the content element.
		$content.html( markup );

		// Pages are lazily enhanced. We call page() on the page
		// element to make sure it is always enhanced before we
		// attempt to enhance the listview markup we just injected.
		// Subsequent calls to page() are ignored since a page/widget
		// can only be enhanced once.
		$page.page();

		// Enhance the listview we just injected.
		$content.find( ":jqmData(role=listview)" ).listview();

		// We don't want the data-url of the page we just modified
		// to be the url that shows up in the browser's location field,
		// so set the dataUrl option to the URL for the category
		// we just loaded.
		options.dataUrl = urlObj.href;

		// Now call changePage() and tell it to switch to
		// the page we just modified.
		$.mobile.changePage( $page, options );
	}
}


// Listen for any attempts to call changePage().
$(document).bind( "pagebeforechange", function( e, data ) {
	// We only want to handle changePage() calls where the caller is
	// asking us to load a page by URL.
	if ( typeof data.toPage === "string" ) {
		// We are being asked to load a page by URL, but we only
		// want to handle URLs that request the data for a specific
		// category.
		var u = $.mobile.path.parseUrl( data.toPage ),
			re = /^#category-item/;
		if ( u.hash.search(re) !== -1 ) {
			// We're being asked to display the items for a specific category.
			// Call our internal method that builds the content for the category
			// on the fly based on our in-memory category data structure.
			showCategory( u, data.options );

			// Make sure to tell changePage() we've handled this call so it doesn't
			// have to do anything.
			e.preventDefault();
		}
	}
});