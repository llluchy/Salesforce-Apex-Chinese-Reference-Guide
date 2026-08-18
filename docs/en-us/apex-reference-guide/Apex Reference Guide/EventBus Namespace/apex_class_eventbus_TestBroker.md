---
doc_id: "apex_class_eventbus_TestBroker"
---

# TestBroker Class

Contains methods that simulate the successful delivery or failed publishing of platform event or change event messages in an Apex test.

## Namespace

[EventBus](atlas.en-us.apexref.meta/apexref/apex_namespace_eventbus.htm "The EventBus namespace provides classes and methods for platform events and Change Data Capture events.")

## See Also

- [TestBroker Methods](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TestBroker.htm#apex_eventbus_TestBroker_methods)

## TestBroker Methods

The following are methods for `TestBroker`.

## See Also

- [deliver()](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TestBroker.htm#apex_eventbus_TestBroker_deliver)
- [fail()](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TestBroker.htm#apex_eventbus_TestBroker_fail)

### deliver()

Delivers platform event messages to the test event bus. Use this method to deliver test event messages multiple times and verify that event subscribers have processed the test events each step of the way.

#### Signature

`public void deliver()`

#### Return Value

Type: void

#### Usage

Enclose `Test.getEventBus().deliver()` within the `Test.startTest()` and `Test.stopTest()` statement block.

```apex
Test.startTest();
// Create test events
// ...
// Publish test events with EventBus.publish()
// ...
// Deliver test events
Test.getEventBus().deliver();
// Perform validation 
// ...
Test.stopTest();
```

## See Also

- [Platform Events Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.platform_events.meta/platform_events/platform_events_intro.htm)

### fail()

Causes the publishing of platform event messages to fail in the test event bus. Use this method to test Apex publish callbacks.

#### Signature

`public void fail()`

#### Return Value

Type: void

#### Usage

```apex
// Create test events
// ...
// Publish test events with EventBus.publish()
// ...
// Fail publishing of test events
Test.getEventBus().fail();
// Perform validation 
// ...
```

For more information, see <link>Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks<link/> in the *Platform Events Developer Guide*.
