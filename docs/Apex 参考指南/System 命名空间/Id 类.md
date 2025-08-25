# Id 类

包含 ID 原始数据类型的方法。

## 命名空间

System

## 示例：从 ID 获取 sObject 令牌

此示例显示如何使用 getSObjectType 方法从 ID 获取 sObject 令牌。

此示例中的 updateOwner 方法接受要更新 ownerId 字段的 sObject 的 ID 列表。此列表包含相同类型 sObject 的 ID。第二个参数是新的所有者 ID。请注意，由于它是 future 方法，它不接受 sObject 类型作为参数；这就是为什么它接受 sObject 的 ID。此方法从列表中的第一个 ID 获取 sObject 令牌，然后进行 describe 以获取对象名称并动态构建查询。然后查询所有 sObject 并将其所有者 ID 字段更新为新的所有者 ID。

```apex
public class MyDynamicSolution {
    @future
    public static void updateOwner(List<ID> objIds, ID newOwnerId) {
        // Validate input
        System.assert(objIds != null);
        System.assert(objIds.size() > 0);
        System.assert(newOwnerId != null);
        
        // Get the sObject token from the first ID
        // (the List contains IDs of sObjects of the same type).
        Schema.SObjectType token = objIds[0].getSObjectType();
        
        // Using the token, do a describe 
        // and construct a query dynamically. 
        Schema.DescribeSObjectResult dr = token.getDescribe();
        String queryString = 'SELECT ownerId FROM ' + dr.getName() + ' WHERE ';
        for(ID objId : objIds) {
            queryString += 'Id=\'' + objId + '\' OR ';
        }    
        // Remove the last ' OR'
        queryString = queryString.subString(0, queryString.length() - 4);
        sObject[] objDBList = Database.query(queryString);
        System.assert(objDBList.size() > 0);
        
        // Update the owner ID on the sObjects
        for(Integer i=0;i<objDBList.size();i++) {
            objDBList[i].put('ownerId', newOwnerId);
        }        
        Database.SaveResult[] srList = Database.update(objDBList, false);
        for(Database.SaveResult sr : srList) {
            if (sr.isSuccess()) {
                System.debug('Updated owner ID successfully for ' + 
                    dr.getName() + ' ID ' + sr.getId());
            }
            else {
                System.debug('Updating ' + dr.getName() + ' returned the following errors.');
                for(Database.Error e : sr.getErrors()) {
                    System.debug(e.getMessage());
                }
            }
        }
    }
}
```

## Id 方法

以下是 Id 的方法。

### addError(errorMsg)
使用自定义错误消息标记触发器记录，并阻止任何 DML 操作发生。

**签名**
```apex
public Void addError(String errorMsg)
```

**参数**
- **errorMsg** - 类型：String
  - 用于标记记录的错误消息。

**返回值**
- 类型：Void

**用法**
此方法与 sObject 的 addError(errorMsg) 方法类似。

**注意**
此方法转义指定错误消息中的任何 HTML 标记。转义的字符包括：\n、<、>、&、"、\、\u2028、\u2029 和 \u00a9。因此，HTML 标记不会被渲染；相反，它会在 Salesforce 用户界面中显示为文本。

**示例**
```apex
Trigger.new[0].Id.addError('bad');
```

### addError(errorMsg, escape)
使用自定义错误消息标记触发器记录，指定是否应该转义错误消息，并阻止任何 DML 操作发生。

**签名**
```apex
public Void addError(String errorMsg, Boolean escape)
```

**参数**
- **errorMsg** - 类型：String
  - 用于标记记录的错误消息。
- **escape** - 类型：Boolean
  - 指示自定义错误消息中的任何 HTML 标记是否应该被转义（true）或不转义（false）。此参数在 Lightning Experience 和 Salesforce 移动应用中会被忽略，HTML 始终被转义。escape 参数仅适用于 Salesforce Classic。

**返回值**
- 类型：Void

**用法**
转义的字符包括：\n、<、>、&、"、\、\u2028、\u2029 和 \u00a9。因此，HTML 标记不会被渲染；相反，它会在 Salesforce 用户界面中显示为文本。

**警告**
如果您为 escape 参数指定 false，请谨慎。在 Salesforce 用户界面中显示的未转义字符串可能代表系统中的漏洞，因为这些字符串可能包含有害代码。如果您想在错误消息中包含 HTML 标记，请使用 false 的 escape 参数调用此方法。确保转义任何动态内容，例如输入字段值。否则，为 escape 参数指定 true 或改为调用 addError(String errorMsg)。

**示例**
```apex
Trigger.new[0].Id.addError('Fix & resubmit', false);
```

### addError(exceptionError)
使用自定义错误消息标记触发器记录，并阻止任何 DML 操作发生。

**签名**
```apex
public Void addError(Exception exceptionError)
```

**参数**
- **exceptionError** - 类型：System.Exception
  - 包含用于标记记录的错误消息的 Exception 对象或自定义异常对象。

**返回值**
- 类型：Void

**用法**
此方法与 sObject 的 addError(exceptionError) 方法类似。

此方法转义指定错误消息中的任何 HTML 标记。转义的字符包括：\n、<、>、&、"、\、\u2028、\u2029 和 \u00a9。因此，HTML 标记不会被渲染；相反，它会在 Salesforce 用户界面中显示为文本。

**示例**
```apex
public class MyException extends Exception {}
Trigger.new[0].Id.addError(new myException('Invalid Id'));
```

### addError(exceptionError, escape)
使用自定义错误消息标记触发器记录，并阻止任何 DML 操作发生。

**签名**
```apex
public Void addError(Exception exceptionError, Boolean escape)
```

**参数**
- **exceptionError** - 类型：System.Exception
  - 包含用于标记记录的错误消息的 Exception 对象或自定义异常对象。
- **escape** - 类型：Boolean
  - 指示自定义错误消息中的任何 HTML 标记是否应该被转义（true）或不转义（false）。此参数在 Lightning Experience 和 Salesforce 移动应用中会被忽略，HTML 始终被转义。escape 参数仅适用于 Salesforce Classic。

**返回值**
- 类型：Void

**用法**
转义的字符包括：\n、<、>、&、"、\、\u2028、\u2029 和 \u00a9。因此，HTML 标记不会被渲染；相反，它会在 Salesforce 用户界面中显示为文本。

**警告**
如果您为 escape 参数指定 false，请谨慎。在 Salesforce 用户界面中显示的未转义字符串可能代表系统中的漏洞，因为这些字符串可能包含有害代码。如果您想在错误消息中包含 HTML 标记，请使用 false 的 escape 参数调用此方法。确保转义任何动态内容，例如输入字段值。否则，为 escape 参数指定 true 或改为调用 addError(Exception e)。

**示例**
```apex
public class MyException extends Exception {}
account a = new account();
a.addError(new MyException('Invalid Id & other issues'), false);
```

### getSObjectType()
返回与此 ID 对应的 sObject 的令牌。此方法主要用于描述信息。

**签名**
```apex
public Schema.SObjectType getSObjectType()
```

**返回值**
- 类型：Schema.SObjectType

**用法**
有关描述的更多信息，请参阅了解 Apex 描述信息。

**示例**
```apex
account a = new account(name = 'account');
insert a;
Id myId = a.id;
system.assertEquals(Schema.Account.SObjectType, myId.getSobjectType());
```

### to15()
将 18 字符的 Id 值转换为 15 字符的区分大小写的字符串。

**签名**
```apex
public static string to15()
```

**返回值**
- 类型：String

**示例**
```apex
String Id_15_char = '0D5B000001DVM9t';
String Id_18_char = '0D5B000001DVM9tkAh';
ID testId = Id_18_char;
System.assertEquals(testId.to15(), Id_15_char);
```

### valueOf(toID)
将指定的 String 转换为 ID 并返回 ID。

**签名**
```apex
public static ID valueOf(String toID)
```

**参数**
- **toID** - 类型：String

**返回值**
- 类型：ID

**示例**
```apex
Id myId = Id.valueOf('001xa000003DIlo');
```

**版本化行为更改**
在 API 版本 54.0 及更高版本中，将无效的 15 或 18 字符 ID 分配给变量会导致 System.StringException 异常。

### valueOf(str, restoreCasing)
将指定的字符串转换为 ID 并返回 ID。如果 restoreCasing 为 true，并且字符串表示具有不正确大小写的 18 字符 ID，则该方法返回与其编码大小写正确对齐的 18 字符 ID。

**签名**
```apex
public static Id valueOf(String str, Boolean restoreCasing)
```

**参数**
- **str** - 类型：String
  - 要转换为 ID 的字符串
- **restoreCasing** - 类型：Boolean
  - 如果设置为 true，并且 str 表示 18 字符 ID，则该方法返回与其大小写正确对齐的 18 字符 ID。

**返回值**
- 类型：Id
  - 返回值取决于 str 和 restoreCasing 参数值。

**注意**
如果 str 无效，该方法会抛出 System.StringException 异常。

| 参数 | restoreCasing=true | restoreCasing=false |
|------|-------------------|---------------------|
| 有效的 15 字符 str 值 | 由于 15 字符输入值无法编码大小写，该方法抛出 System.StringException。 | 该方法返回 15 字符 ID。 |
| 有效的 18 字符 str 值 | 该方法返回与其编码大小写正确对齐的 18 字符 ID。 | 该方法不尝试正确对齐 18 字符 ID 的大小写并返回 18 字符 ID。 |
