---
doc_id: "apex_permission_set_group_testing"
---

# Permission Set Groups

To provide Apex test coverage for permission set groups, write tests using the `calculatePermissionSetGroup()` method in the `System.Test` class.

The `calculatePermissionSetGroup()` method forces an immediate calculation of aggregate permissions for a specified permission set group. As the forced calculation counts against Apex CPU limits, and can require complex data setup, it’s a best practice to minimize the number of times you perform this operation. Recalculating complex permission set groups with a large number of included permission sets or overall enabled permissions can cause Apex test failures because Apex CPU limits are exceeded. Apex CPU limits can also be exceeded if the included permission sets in the permission set group aren’t licensed and the permission set group is assigned to many users.

Set this test to run once in a Test setup method, then reuse the data in subsequent tests.

```plain
@isTest public class PSGTest {
  @isTest static void testPSG() {
    // get the PSG by name (may have been modified in deployment)
    PermissionSetGroup psg = [select Id, Status from PermissionSetGroup where DeveloperName='MyPSG'];
    
    // force calculation of the PSG if it is not already Updated
    if (psg.Status != 'Updated') {
      Test.calculatePermissionSetGroup(psg.Id);
    }
    
    // assign PSG to current user (this fails if PSG is Outdated)
    insert new PermissionSetAssignment(PermissionSetGroupId = psg.Id, AssigneeId = UserInfo.getUserId());

    // additional tests to validate permissions granted by PSG
  }
}
```

## See Also

- [Salesforce Help: Permission Set Groups](https://help.salesforce.com/s/articleView?id=platform.perm_set_groups.htm&amp;type=5&amp;language=en_US)

-   [*Apex Reference Guide*: Test Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_test.htm "Apex Reference Guide: Test Class - HTML (New Window)")
