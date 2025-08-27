# Messaging 类

包含发送单个或群发邮件时使用的消息传递方法。

## 命名空间

System

## Messaging 方法

以下是 Messaging 的方法。所有都是实例方法。

### extractInboundEmail(source, includeForwardedAttachments)
在您的电子邮件服务代码中使用此方法来控制如何解析和处理转发的或附加的电子邮件。从 RFC822 格式的数据流返回 Messaging.InboundEmail 的实例。数据流可以是现有 InboundEmail 附件中的转发电子邮件，或来自另一个源的流。

**签名**
```apex
public static Messaging.InboundEmail extractInboundEmail(Object source, Boolean includeForwardedAttachments)
```

**参数**
- **source** - 类型：Object
  - MimeTypeSubtype 为 message/rfc822 的 Messaging.InboundEmail.BinaryAttachment 实例或 Blob。如果 source 是 Blob，则提供 RFC822 格式的字节数组。
- **includeForwardedAttachments** - 类型：Boolean
  - 此参数控制如何处理嵌入或转发电子邮件的附件。设置为 true 以提供所有附件，包括返回值的 binaryAttachments 和 textAttachments 属性中嵌入电子邮件中的附件。设置为 false 以仅提供源电子邮件顶层的附件。

**返回值**
- 类型：Messaging.InboundEmail

### reserveMassEmailCapacity(amountReserved)
在当前事务提交后，保留向指定数量的电子邮件地址发送群发邮件的电子邮件容量。

**签名**
```apex
public Void reserveMassEmailCapacity(Integer amountReserved)
```

**参数**
- **amountReserved** - 类型：Integer

**返回值**
- 类型：Void

**用法**
当您预先知道事务将导致向多少个地址发送电子邮件时，可以调用此方法。如果事务会导致组织超过其每日电子邮件限制，使用此方法会导致以下错误：`System.HandledException: The daily limit for the org would be exceeded by this request.` 如果组织没有发送 API 或群发邮件的权限，使用此方法会导致以下错误：`System.NoAccessException: The organization is not permitted to send email.`

### reserveSingleEmailCapacity(amountReserved)
在当前事务提交后，保留向指定数量的电子邮件地址发送单个邮件的电子邮件容量。

**签名**
```apex
public Void reserveSingleEmailCapacity(Integer amountReserved)
```

**参数**
- **amountReserved** - 类型：Integer

**返回值**
- 类型：Void

**用法**
当您预先知道事务将导致向多少个地址发送电子邮件时，可以调用此方法。如果事务会导致组织超过其每日电子邮件限制，使用此方法会导致以下错误：`System.HandledException: The daily limit for the org would be exceeded by this request.` 如果组织没有发送 API 或群发邮件的权限，使用此方法会导致以下错误：`System.NoAccessException: The organization is not permitted to send email.`

### sendEmail(emails, allOrNothing)
发送使用 SingleEmailMessage 或 MassEmailMessage 实例化的电子邮件列表，并返回 SendEmailResult 对象列表。当组织首选项设置为保存 EmailMessage 对象并为 EmailMessage 对象定义触发器时，触发器会为每个 SingleEmailMessage 单独触发。sendEmail 方法在每个 Apex 事务中可以调用 10 次，每次方法调用最多可以包含 100 个"收件人"、25 个"抄送"和 25 个"密送"收件人。

**签名**
```apex
public Messaging.SendEmailResult[] sendEmail(Messaging.Email[] emails, Boolean allOrNothing)
```

**参数**
- **emails** - 类型：Messaging.Email[]
- **allOrNothing** - 类型：Boolean
  - 可选的 opt_allOrNone 参数指定当任何消息因错误而失败时，sendEmail 是否阻止所有其他消息的传递（true），或者是否允许没有错误的消息的传递（false）。默认为 true。

**返回值**
- 类型：Messaging.SendEmailResult[]

### sendEmailMessage(emailMessageIds, allOrNothing)
发送由指定电子邮件消息 ID 定义的草稿电子邮件消息，并返回 SendEmailResult 对象列表。

**签名**
```apex
public Messaging.SendEmailResult[] sendEmailMessage(List<ID> emailMessageIds, Boolean allOrNothing)
```

**参数**
- **emailMessageIds** - 类型：List<ID>
- **allOrNothing** - 类型：Boolean

**返回值**
- 类型：Messaging.SendEmailResult[]

如果 emailMessageIds 参数为 null，该方法会抛出 `System.IllegalArgumentException` 异常。

**用法**
sendEmailMessage 方法假设可选的 allOrNothing 参数始终为 false 并忽略您设置的值。即使某些消息因错误而失败，也会尝试传递所有消息。

调用 sendEmailMessage 方法的用户的电子邮件地址会插入到电子邮件标题和电子邮件消息记录的"发件人地址"字段中。

**示例**
此示例显示如何发送草稿电子邮件消息。它创建一个案例和与该案例关联的新电子邮件消息。接下来，该示例发送草稿电子邮件消息并检查结果。

在运行此示例之前，请确保用有效地址替换电子邮件地址。

```apex
Case c = new Case();
insert c;
EmailMessage e = new EmailMessage();
e.parentid = c.id;
// Set to draft status.
// This status is required 
// for sendEmailMessage().
e.Status = '5'; 
e.TextBody = 'Sample email message.'; 
e.Subject = 'Apex sample'; 
e.ToAddress = 'customer@email.com'; 
insert e;
List<Messaging.SendEmailResult> results = 
  Messaging.sendEmailMessage(new ID[] { e.id });
System.assertEquals(1, results.size());
System.assertEquals(true, results[0].success);
```

**版本行为变更**
在 API 版本 54.0 及更高版本中，null emailMessageIds 参数会导致 `System.IllegalArgumentException` 异常。在 API 版本 53.0 及更早版本中，null emailMessageIds 参数会导致错误。

### renderEmailTemplate(whoId, whatId, bodies)
用 Salesforce 记录中的值替换电子邮件模板文本正文中的合并字段。返回 RenderEmailTemplateBodyResult 对象数组，每个对象对应于提供的文本正文数组中的一个元素。每个 RenderEmailTemplateBodyResult 提供成功或失败指示，以及错误代码或渲染文本。

**签名**
```apex
public static List<Messaging.RenderEmailTemplateBodyResult> renderEmailTemplate(String whoId, String whatId, List<String> bodies)
```

**参数**
- **whoId** - 类型：String
  - 数据库中对象的标识符，通常是联系人、潜在客户或用户。读取该对象的数据库记录并用于合并字段处理。
- **whatId** - 类型：String
  - 标识数据库中的对象，如账户或机会。读取该对象的记录并用于合并字段处理。
- **bodies** - 类型：List<String>
  - 检查合并字段引用的字符串数组。whoId 或 whatId 引用的对象中的相应数据替换合并字段引用。

**返回值**
- 类型：List<Messaging.RenderEmailTemplateBodyResult>

**用法**
在您想要动态组合用数据库中的数据丰富的文本块的情况下使用此方法。然后可以使用渲染的文本块来组合和发送电子邮件或更新另一个数据库记录中的文本值。

执行 renderEmailTemplate 方法会计入 SOQL 限制。此方法消耗的 SOQL 查询数量是 bodies 参数中传递的字符串列表中的元素数量。

### renderStoredEmailTemplate(templateId, whoId, whatId)
将数据库中存在的文本、自定义、HTML 或 Visualforce 电子邮件模板渲染为 Messaging.SingleEmailMessage 的实例。在返回的电子邮件消息中包含所有附件内容。

**签名**
```apex
public static Messaging.SingleEmailMessage renderStoredEmailTemplate(String templateId, String whoId, String whatId)
```

**参数**
- **templateId** - 类型：String
  - 数据库中存在的电子邮件模板，如文本、HTML、自定义和 Visualforce 模板。
- **whoId** - 类型：String
  - 数据库中对象的标识符，通常是联系人、潜在客户或用户。读取该对象的数据库记录并用于合并字段处理。
- **whatId** - 类型：String
  - 标识数据库中的对象，如账户或机会。读取该对象的记录并用于合并字段处理。

**返回值**
- 类型：Messaging.SingleEmailMessage

**用法**
执行 renderStoredEmailTemplate 方法会计入 SOQL 限制，计为一个查询。

### renderStoredEmailTemplate(templateId, whoId, whatId, attachmentRetrievalOption)
将数据库中存在的文本、自定义、HTML 或 Visualforce 电子邮件模板渲染为 Messaging.SingleEmailMessage 的实例。提供仅包含附件元数据、附件元数据和内容或排除附件的选项。

**签名**
```apex
public static Messaging.SingleEmailMessage renderStoredEmailTemplate(String templateId, String whoId, String whatId, Messaging.AttachmentRetrievalOption attachmentRetrievalOption)
```

**参数**
- **templateId** - 类型：String
  - 数据库中存在的电子邮件模板，如文本、HTML、自定义和 Visualforce 模板。
- **whoId** - 类型：String
  - 数据库中对象的标识符，通常是联系人、潜在客户或用户。读取该对象的数据库记录并用于合并字段处理。
- **whatId** - 类型：String
  - 标识数据库中的对象，如账户或机会。读取该对象的记录并用于合并字段处理。
- **attachmentRetrievalOption** - 类型：Messaging.AttachmentRetrievalOption
  - 指定在返回的 Messaging.SingleEmailMessage 的 fileAttachments 属性中包含附件的选项。设置为 Messaging.AttachmentRetrievalOption 值之一以仅包含附件元数据、附件元数据和内容，或排除附件。

**注意**
当 attachmentRetrievalOption 参数未设置为 NONE 时，Messaging.SingleEmailMessage 的 entityAttachments 属性包含要附加的 Salesforce 内容对象的 ID（ContentVersion 或 Document）。fileAttachments 属性包含附件的 ID，以及 entityAttachments 属性中的所有 ID。因此，entityAttachments 中的 ID 值是 fileAttachments 属性中 ID 的重复。如果您通过传递 METADATA_WITH_BODY 选项调用 renderStoredEmailTemplate() 并发送渲染的电子邮件消息，电子邮件将包含重复的附件。在使用 sendEmail(emails, allOrNothing) 使用返回的电子邮件消息之前，您可以从 fileAttachments 中删除在 entityAttachments 中重复的附件。

**返回值**
- 类型：Messaging.SingleEmailMessage

**用法**
执行 renderStoredEmailTemplate 方法会计入 SOQL 限制，计为一个查询。

### renderStoredEmailTemplate(templateId, whoId, whatId, attachmentRetrievalOption, updateEmailTemplateUsage)
将数据库中存在的文本、自定义、HTML 或 Visualforce 电子邮件模板渲染为 Messaging.SingleEmailMessage 的实例。提供仅包含附件元数据、附件元数据和内容或排除附件的选项。

**签名**
```apex
public static Messaging.SingleEmailMessage renderStoredEmailTemplate(String templateId, String whoId, String whatId, Messaging.AttachmentRetrievalOption attachmentRetrievalOption, Boolean updateEmailTemplateUsage)
```

**参数**
- **templateId** - 类型：String
  - 数据库中存在的电子邮件模板，如文本、HTML、自定义和 Visualforce 模板。
- **whoId** - 类型：String
  - 数据库中对象的标识符，通常是联系人、潜在客户或用户。读取该对象的数据库记录并用于合并字段处理。
- **whatId** - 类型：String
  - 标识数据库中的对象，如账户或机会。读取该对象的记录并用于合并字段处理。
- **attachmentRetrievalOption** - 类型：Messaging.AttachmentRetrievalOption
  - 指定在返回的 Messaging.SingleEmailMessage 的 fileAttachments 属性中包含附件的选项。设置为 Messaging.AttachmentRetrievalOption 值之一以仅包含附件元数据、附件元数据和内容，或排除附件。

**注意**
当 attachmentRetrievalOption 参数未设置为 NONE 时，Messaging.SingleEmailMessage 的 entityAttachments 属性包含要附加的 Salesforce 内容对象的 ID（ContentVersion 或 Document）。fileAttachments 属性包含附件的 ID，以及 entityAttachments 属性中的所有 ID。因此，entityAttachments 中的 ID 值是 fileAttachments 属性中 ID 的重复。如果您通过传递 METADATA_WITH_BODY 选项调用 renderStoredEmailTemplate() 并发送渲染的电子邮件消息，电子邮件将包含重复的附件。在使用 sendEmail(emails, allOrNothing) 使用返回的电子邮件消息之前，您可以从 fileAttachments 中删除在 entityAttachments 中重复的附件。

- **updateEmailTemplateUsage** - 类型：Boolean
  - 指定在成功渲染时是否更新 EmailTemplate 记录中的 usage 字段。

**返回值**
- 类型：Messaging.SingleEmailMessage

**用法**
执行 renderStoredEmailTemplate 方法会计入 SOQL 限制，计为一个查询。
