!function(e){if(module("jQuery#placeholder"),test("caches results of feature tests",function(){strictEqual(typeof e.fn.placeholder.input,"boolean","$.fn.placeholder.input"),strictEqual(typeof e.fn.placeholder.textarea,"boolean","$.fn.placeholder.textarea")}),!e.fn.placeholder.input||!e.fn.placeholder.textarea){var l=function(e){var l=e[0],a=l.getAttribute("placeholder");strictEqual(e.placeholder(),e,"should be chainable"),strictEqual(l.value,a,"should set `placeholder` text as `value`"),strictEqual(e.prop("value"),"","propHooks works properly"),strictEqual(e.val(),"","valHooks works properly"),ok(e.hasClass("placeholder"),"should have `placeholder` class"),e.focus(),strictEqual(l.value,"","`value` should be the empty string on focus"),strictEqual(e.prop("value"),"","propHooks works properly"),strictEqual(e.val(),"","valHooks works properly"),ok(!e.hasClass("placeholder"),"should not have `placeholder` class on focus"),e.blur(),strictEqual(l.value,a,"should set `placeholder` text as `value`"),strictEqual(e.prop("value"),"","propHooks works properly"),strictEqual(e.val(),"","valHooks works properly"),ok(e.hasClass("placeholder"),"should have `placeholder` class"),e.val("lorem ipsum"),strictEqual(e.prop("value"),"lorem ipsum","`$el.val(string)` should change the `value` property"),strictEqual(l.value,"lorem ipsum","`$el.val(string)` should change the `value` attribute"),ok(!e.hasClass("placeholder"),"`$el.val(string)` should remove `placeholder` class"),e.val(""),strictEqual(e.prop("value"),"",'`$el.val("")` should change the `value` property'),strictEqual(l.value,a,'`$el.val("")` should change the `value` attribute'),ok(e.hasClass("placeholder"),'`$el.val("")` should re-enable `placeholder` class'),strictEqual(e.prop("placeholder"),a,"$el.prop(`placeholder`) should return the placeholder value"),e.prop("placeholder","new placeholder"),strictEqual(e.prop("placeholder"),"new placeholder","$el.prop(`placeholder`, <string>) should set the placeholder value"),strictEqual(e.value,"new placeholder","$el.prop(`placeholder`, <string>) should update the displayed placeholder value"),e.prop("placeholder",a)};test("emulates placeholder for <input type=text>",function(){l(e("#input-type-text"))}),test("emulates placeholder for <input type=search>",function(){l(e("#input-type-search"))}),test("emulates placeholder for <input type=email>",function(){l(e("#input-type-email"))}),test("emulates placeholder for <input type=url>",function(){l(e("#input-type-url"))}),test("emulates placeholder for <input type=tel>",function(){l(e("#input-type-tel"))}),test("emulates placeholder for <input type=tel>",function(){l(e("#input-type-tel"))}),test("emulates placeholder for <input type=password>",function(){var l="#input-type-password",a=e(l),t=a[0],o=t.getAttribute("placeholder");strictEqual(a.placeholder(),a,"should be chainable"),a=e(l),t=a[0],strictEqual(t.value,o,"should set `placeholder` text as `value`"),strictEqual(a.prop("value"),"","propHooks works properly"),strictEqual(a.val(),"","valHooks works properly"),ok(a.hasClass("placeholder"),"should have `placeholder` class"),a.focus(),a=e(l),t=a[0],strictEqual(t.value,"","`value` should be the empty string on focus"),strictEqual(a.prop("value"),"","propHooks works properly"),strictEqual(a.val(),"","valHooks works properly"),ok(!a.hasClass("placeholder"),"should not have `placeholder` class on focus"),a.blur(),a=e(l),t=a[0],strictEqual(t.value,o,"should set `placeholder` text as `value`"),strictEqual(a.prop("value"),"","propHooks works properly"),strictEqual(a.val(),"","valHooks works properly"),ok(a.hasClass("placeholder"),"should have `placeholder` class")}),test("emulates placeholder for <textarea></textarea>",function(){l(e("#textarea"))})}}(jQuery);