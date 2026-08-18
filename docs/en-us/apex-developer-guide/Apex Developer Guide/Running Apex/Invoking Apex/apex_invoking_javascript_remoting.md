---
doc_id: "apex_invoking_javascript_remoting"
---

# JavaScript Remoting

Use JavaScript remoting in Visualforce to call methods in Apex controllers from JavaScript. Create pages with complex, dynamic behavior that isn’t possible with the standard Visualforce AJAX components.

Features implemented using JavaScript remoting require three elements:

-   The remote method invocation you add to the Visualforce page, written in JavaScript.
-   The remote method definition in your Apex controller class. This method definition is written in Apex, but there are some important differences from normal action methods.
-   The response handler callback function you add to or include in your Visualforce page, written in JavaScript.

In your controller, your Apex method declaration is preceded with the `@RemoteAction` annotation like this:

```apex
@RemoteAction
global static String getItemId(String objectName) { ... }
```

 Apex `@RemoteAction` methods must be `static` and either `global` or `public`.

Add the Apex class as a custom controller or a controller extension to your page.

```apex
"MyController" extension="MyExtension">
```

 

:::tip Warning
Adding a controller or controller extension grants access to all
                    `@RemoteAction` methods in that Apex class,
                even if those methods aren’t used in the page. Anyone who can view the page can
                execute all `@RemoteAction` methods and provide
                fake or malicious data to the controller.
:::

Then, add the request as a JavaScript function call. A simple JavaScript remoting invocation takes the following form.

```js
[namespace.]MyController.method(
    [parameters...,]
    callbackFunction,
    [configuration]
);
```

Table 1. Remote Request Elements
| Element | Description |
| --- | --- |
| `namespace` | The namespace of the controller class. The namespace element is required if your organization has a namespace defined, or if the class comes from an installed package. |
| `MyController`, `MyExtension` | The name of your Apex controller or extension. |
| `method` | The name of the Apex method you’re calling. |
| `parameters` | A comma-separated list of parameters that your method takes. |
| `callbackFunction` | The name of the JavaScript function that handles the response from the controller. You can also declare an anonymous function inline. `callbackFunction` receives the status of the method call and the result as parameters. |
| `configuration` | Configures the handling of the remote call and response. Use this element to change the behavior of a remoting call, such as whether or not to escape the Apex method’s response. |

For more information, see *JavaScript Remoting for Apex Controllers* in the *Visualforce Developer's Guide*.

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_pages.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_and_ajax.htm)
