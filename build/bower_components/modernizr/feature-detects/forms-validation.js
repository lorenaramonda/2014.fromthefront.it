!function(t,e){e.formvalidationapi=!1,e.formvalidationmessage=!1,e.addTest("formvalidation",function(){var n=t.createElement("form");if(!("checkValidity"in n&&"addEventListener"in n))return!1;if("reportValidity"in n)return!0;var i,a=!1;return e.formvalidationapi=!0,n.addEventListener("submit",function(t){window.opera||t.preventDefault(),t.stopPropagation()},!1),n.innerHTML='<input name="modTest" required><button></button>',e.testStyles("#modernizr form{position:absolute;top:-99999em}",function(t){t.appendChild(n),i=n.getElementsByTagName("input")[0],i.addEventListener("invalid",function(t){a=!0,t.preventDefault(),t.stopPropagation()},!1),e.formvalidationmessage=!!i.validationMessage,n.getElementsByTagName("button")[0].click()}),a})}(document,window.Modernizr);