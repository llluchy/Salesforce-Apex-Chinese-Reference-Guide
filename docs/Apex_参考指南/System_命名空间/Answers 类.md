# Answers 类

表示区域答案。

## 命名空间

System

## 用法

Answers 是一个功能，允许用户提问并让区域成员发布回复。成员可以投票评价每个回复的有用性，提问者可以将一个回复标记为最佳答案。

有关答案的更多信息，请参阅 Salesforce 在线帮助中的"Answers Overview"。

## 示例

以下示例查找内部区域中与新问题标题相似的问题：

```apex
public class FindSimilarQuestionController {
   public static void test() {
   // 实例化一个新问题 
   Question question = new Question ();
   // 为新问题指定标题
   question.title = 'How much vacation time do full-time employees get?';
   // 指定要在其中查找相似问题的社区ID (INTERNAL_COMMUNITY)
   Community community = [ SELECT Id FROM Community WHERE Name = 'INTERNAL_COMMUNITY' ];
   question.communityId = community.id;
   ID[] results = Answers.findSimilar(question);
   }
}
```

以下示例将回复标记为最佳回复：

```apex
ID questionId = [SELECT Id FROM Question WHERE Title = 'Testing setBestReplyId' LIMIT 1].Id;
ID replyID = [SELECT Id FROM Reply WHERE QuestionId = :questionId LIMIT 1].Id;
Answers.setBestReply(questionId,replyId);
```

## Answers 方法

以下是 Answers 的方法。所有方法都是静态的。

### findSimilar(yourQuestion)

基于指定问题的标题返回相似问题的列表。

#### 签名

```apex
public static ID[] findSimilar(Question yourQuestion)
```

#### 参数

**yourQuestion**
- 类型：Question
- 描述：要查找相似问题的问题对象

#### 返回值

- 类型：ID[]

#### 用法

每个 findSimilar 调用都会计入进程允许的 SOSL 语句治理限制。

### setBestReply(questionId, replyId)

将指定问题的指定回复设置为最佳回复。因为一个问题可以有多个回复，设置最佳回复有助于用户快速识别包含最有用信息的回复。

#### 签名

```apex
public static Void setBestReply(String questionId, String replyId)
```

#### 参数

**questionId**
- 类型：String
- 描述：问题的ID

**replyId**
- 类型：String
- 描述：要设置为最佳回复的回复ID

#### 返回值

- 类型：Void

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_classes_answers.htm*
