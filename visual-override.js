/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {   
    let output = '';

if(params.minFontSize !== '1' || params.maxFontSize !== '1.3') {
        output += `
html {
  font-size: ${params.minFontSize}rem;
}

@media screen and (min-width: 20rem) {
  html {
       font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 113));
  }
}

@media screen and (min-width: 133rem) {
  html { 
       font-size: ${params.maxFontSize}rem;
    }
  }`;    	 
}

if(params.textColor !== '#343434') {
        output += `
body {
       color: ${params.textColor};  
  }`;   
}
	
if(params.headingColor !== '#343434') {
        output += `
h1,
h2,
h3,
h4,
h5,
h6 {
       color: ${params.headingColor};           
  }`;    	 
}
	
if(params.linkColor !== '#343434') {
        output += `
a {
       color: ${params.linkColor}; 
}
.post__entry a:hover,
.post__entry a:active,
.post__entry a:focus {
       color: ${params.linkColor}; 
  }`;    	 
}	
	
if(params.linkHoverColor !== '#3949ab') {
        output += `
a:hover,
a:active,
a:focus {
       color: ${params.linkHoverColor};
}
.post__entry a {
       color: ${params.linkHoverColor};
}
.post__nav__link:hover h5 {
       color: ${params.linkHoverColor};
  }`;    	 
}	
	
if(params.primaryColor !== '#3949ab') {
        output += `      
.btn,
[type=button],
[type=submit],
button {
       background: ${params.primaryColor};           
  }`;    	 
}
	
if(params.primaryColor !== '#3949ab') {
        output += `      
[type=text]:focus,
[type=url]:focus,
[type=tel]:focus,
[type=number]:focus,
[type=email]:focus,
[type=search]:focus,
textarea:focus,
select:focus {
       -webkit-box-shadow: inset 0 0 2px ${params.primaryColor};
       box-shadow: inset 0 0 2px ${params.primaryColor};           
  }`;    	 
}
		
if(params.primaryColor !== '#3949ab') {
        output += `
[type=checkbox]:checked+.checkbox:before {
       color: ${params.primaryColor};           
  }`;    	 
}
	
if(params.primaryColor !== '#3949ab') {
        output += `
[type=radio]:checked+.radio:before {
       background: ${params.primaryColor};           
  }`;    	 
}

if(params.primaryColor !== '#3949ab') {
        output += `
select[multiple]:focus {
       border-color: ${params.primaryColor};           
  }`;    	 
}
	
if(params.primaryColor !== '#3949ab') {
        output += `
.box__title {
       color: ${params.primaryColor};           
  }`;    	 
}
	
if(params.primaryColor !== '#3949ab') {
        output += `
.page-header__title {
       color: ${params.primaryColor};           
  }`;    	 
}

if(params.mainWidth !== '42rem' || params.sidebarWidth !== '20rem') {
        output += `   
@media all and (min-width: 56.25em) {
.container {
       grid-template-columns: 1fr minmax(auto, ${params.mainWidth}) ${params.sidebarWidth} 1fr;
	}            
  }`;    	 
}	
	
if(params.submenu === 'custom') {
        output += `
@media all and (min-width: 56.25em) {
.navbar__submenu  {
       width: ${params.submenuWidth}rem;
    }
  }`;
}
if(params.linkColorMenu !== '#343434') {
        output += `
.navbar__menu li a,
.navbar__menu li span {
       color: ${params.linkColorMenu}; 
  }`;    	 
}
	
if(params.linkHoverColorMenu !== '#3949ab') {
        output += `
.navbar__menu li a:hover:not(span),
.navbar__menu li span:hover:not(span) {
       color: ${params.linkHoverColorMenu}; 
  }`;    	 
}	
	
if(params.heightHero !== '29rem') {
        output += ` 
.hero { 
       min-height: ${params.heightHero}
}
.hero__image { 
       min-height: ${params.heightHero}
  }`;    	 
}

if(params.headingHeroColor !== '#ffffff') {
        output += `   
.hero__text>h1 {
        color: ${params.headingHeroColor}; 
  }`;    	 
}
	
if(params.textHeroColor !== '#ffffff') {
        output += `   
.hero__text {
       color: ${params.textHeroColor}; 
  }`;    	 
}

 return output;
}

module.exports = generateOverride;
