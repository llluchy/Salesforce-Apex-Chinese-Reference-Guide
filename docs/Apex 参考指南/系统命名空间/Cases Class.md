# Cases 类

Use the Cases class to interact with case records.

## 命名空间

System

## Cases 方法

> ### generateThreadingMessageId(caseId)

返回符合 RFC 2822 标准的消息标识符，该标识符包含用于将电子邮件及其回复与案例进行匹配的信息。

#### 签名

```apex
public static String generateThreadingMessageId(Id caseId)
```

#### 参数

**caseId**
- 类型：Id
- 描述：应附加此邮件回复的客户服务请求 SObject ID。

#### 返回值

- 类型：String

#### 用法

在 Apex 中发送与客户服务请求相关的邮件时使用返回的消息标识符。返回的消息标识符可用于 Message-ID 或 References 标头。但由于 Salesforce 不允许用户指定 Message-ID，我们会在 References 标头中设置此标识符。当用户回复已发送的邮件时，回复内容将附加到指定的客户服务请求中。

#### 示例

在此示例中，我们创建带有消息标识符的邮件，以便该邮件及所有回复都能与相关客户服务请求建立关联。

```apex
//Get your Case ID. Here we use a dummy ID
ID caseId = Id.valueOf('500xx000000bpkTAAQ');
//Create a SingleEmailMessage object
Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
//Set recipients and other fields
email.setToAddresses(new String[] {'test@salesforce.com'});
email.setPlainTextBody('Test Email Notification');
//........... more fields ...........
//Get the threading message identifier
String messageId = Cases.generateThreadingMessageId(caseId);
//Insert the message identifier into the References header
email.setReferences(messageId);
//Send out the email
Messaging.sendEmail(new Messaging.SingleEmailMessage[]{email});
```

> ### getCaseIdFromEmailHeaders(headers)

返回与指定邮件头信息对应的案例 ID，如果未找到则返回 null。

#### 签名

```apex
public static Id getCaseIdFromEmailHeaders(List<Messaging.InboundEmail.Header> headers)
```

#### 参数

**headers**
- 类型：List< Messaging.InboundEmail.Header>

#### 返回值

- 类型：Id

#### 用法

为了在自定义代码中优化邮件线程与客户服务请求的匹配查找，我们建议您使用此方法并结合 EmailMessages.getRecordIdFromEmail 来实现基于令牌和邮件头的混合线程追踪机制。  
若您正从引用 ID 线程追踪方式过渡，建议将 Cases.getCaseIdFromEmailThreadId 替换为 Cases.getCaseIdFromEmailHeaders 与 EmailMessages.getRecordIdFromEmail 的组合方案。若选择仅实施基于邮件头的线程追踪，请将 Cases.getCaseIdFromEmailThreadId 替换为 Cases.getCaseIdFromEmailHeaders 。  
headers 参数用于根据 RFC 2822 标准，通过 In-Reply-To 和 References 邮件头的值来匹配客户服务请求 ID。当邮件转客户服务请求功能无法找到含匹配的 In-Reply-To 或 References 邮件头的邮件时，系统会检查入站邮件中是否存在名为 Thread-Index 的 Outlook 特有邮件头。该邮件头的前 22 字节可唯一标识邮件线程。若检测到入站邮件存在 Thread-Index 邮件头，系统将在 EmailMessage 记录的 ClientThreadIdentifier 字段中查找匹配信息。一旦找到匹配项，客户的回复邮件便会关联至相应客户服务请求。  
此方法通常用于邮件服务场景，使您能够通过 Apex 代码自主处理入站邮件。

#### 示例

如果您当前在电子邮件服务中实现了基于邮件头的会话线程功能，我们建议您使用 Lightning 会话线程，它结合了基于令牌和基于邮件头的会话线程方式。为确保基于邮件头的会话线程持续有效，请将电子邮件存储为 EmailMessage 记录，并正确设置 MessageIdentifier 字段。通过 Lightning 会话线程，您可以将线程令牌作为主要会话方式，并将基于邮件头的会话线程作为备用方案，反之亦然。  
在此示例中，我们主要依赖线程令牌，并将基于邮件头的会话线程作为备用方案。

```apex
global class AttachEmailMessageToCaseExample implements Messaging.InboundEmailHandler {
    global Messaging.InboundEmailResult handleInboundEmail(Messaging.inboundEmail email, 
                Messaging.InboundEnvelope env) {
 
        // Create an InboundEmailResult object for returning the result of the 
        // Apex Email Service.
        Messaging.InboundEmailResult result = new Messaging.InboundEmailResult();
        
        // Try to find the Case ID using threading tokens in email attributes.
        Id caseId = EmailMessages.getRecordIdFromEmail(email.subject, email.plainTextBody, email.htmlBody);
        
        // If we haven't found the Case ID, try finding it using headers.
        if (caseId == null) {
            caseId = Cases.getCaseIdFromEmailHeaders(email.headers);
        }

        // If a Case isn’t found, create a new Case record.
        if (caseId == null) {
            Case c = new Case(Subject = email.subject);
            insert c;
            System.debug('New Case Object: ' + c);
            caseId = c.Id;
        }

        // Process recipients
        String toAddresses;
        if (email.toAddresses != null) {
            toAddresses = String.join(email.toAddresses, '; ');
        }

        // To store an EmailMessage for threading, you need at minimum
        // the Status, the MessageIdentifier, and the ParentId fields.
        EmailMessage em = new EmailMessage(
            Status = '0',
            MessageIdentifier = email.messageId,
            ParentId = caseId,
            // Other important fields.
            FromAddress = email.fromAddress,
            FromName = email.fromName,
            ToAddress = toAddresses,
            TextBody = email.plainTextBody,
            HtmlBody = email.htmlBody,
            Subject = email.subject
            // Other fields you wish to add.
        );
        
        // Insert the new EmailMessage.
        insert em;
        System.debug('New EmailMessage Object: ' + em );   
    
    // Set the result to true. No need to send an email back to the user 
    // with an error message.
    result.success = true;
    
    // Return the result for the Apex Email Service.
    return result;
  }
}
```

> ### getCaseIdFromEmailThreadId(emailThreadId)

返回与指定邮件线程 ID 对应的案例 ID。**（已弃用。请改用 getCaseIdFromEmailHeaders 和 EmailMessages.getRecordIdFromEmail。）**

#### 签名

```apex
public static ID getCaseIdFromEmailThreadId(String emailThreadId)
```

#### 参数

**emailThreadId**
- 类型：String

#### 返回值

- 类型：ID

#### 用法

emailThreadId 参数（也称为 Ref ID）的格式为 !00Dxx01gEW.!500xx0Yktl 。此格式在 Winter '24 版本中引入。为保持向后兼容性，仍支持旧格式 _00Dxx1gEW._500xxYktl ，但从 Winter '24 版本起发送的邮件将采用新格式。该方法不支持包含 ref: 或 \[ref: 的其他格式。

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm*
