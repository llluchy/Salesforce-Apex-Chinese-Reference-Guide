---
doc_id: "apex_classes_iterable"
---

# Custom Iterators

An iterator traverses through every item in a collection. For example, in a procedural loop, you define a condition for exiting the loop, and you must provide some means of traversing the collection, that is, an iterator. In this example, `count` is incremented by 1 every time the loop is executed.

```apex
while (count < 11) {
   System.debug(count);
      count++;
   }
```

Using the `Iterator` interface you can create a custom set of instructions for traversing a List through a loop. The iterator is useful for data that exists in sources outside of Salesforce that you would normally define the scope of using a `SELECT` statement. Iterators can also be used if you have multiple `SELECT` statements.

## Using Custom Iterators

To use custom iterators, you must create an Apex class that implements the `Iterator` interface.

The `Iterator` interface has the following instance methods:

| Name | Arguments | Returns | Description |
| --- | --- | --- | --- |
| `hasNext` |  | Boolean | Returns `true` if there’s another item in the collection being traversed, `false` otherwise. |
| `next` |  | Any type | Returns the next item in the collection. |

All methods in the `Iterator` interface must be declared as `global` or `public`.

This example code uses a custom iterator to iterate through a list of strings.

```apex
IterableString x = new IterableString('This is a really cool test.');

while(x.hasNext()){
   system.debug(x.next());
}
```

## Using Custom Iterators with Iterable

If you don’t want to use a custom iterator with a list, but instead want to create your own data structure, you can use the `Iterable` interface to generate the data structure.

The `Iterable` interface has the following method:

| Name | Arguments | Returns | Description |
| --- | --- | --- | --- |
| `iterator` |  | Iterator class | Returns a reference to the iterator for this interface. |

The `iterator` method must be declared as `global` or `public`. It creates a reference to the iterator that you can then use to traverse the data structure.

In the following example a custom iterator iterates through a collection: 

```apex
public class CustomIterator
   implements Iterator{ 
 
   private List accounts;
   private Integer currentIndex;
 
   public CustomIterator(List accounts){
       this.accounts = accounts;
       this.currentIndex = 0;
   }
 
   public Boolean hasNext(){ 
       return currentIndex public Account next(){
       if(hasNext()) {
           return accounts[currentIndex++];
       } else {
           throw new NoSuchElementException('Iterator has no more elements.');
       }
   } 
}
```

 

```apex
public class CustomIterable implements Iterable {
   public Iterator iterator(){
      List accounts =
      [SELECT Id, Name,
       NumberOfEmployees 
       FROM Account
       LIMIT 10];
      return new CustomIterator(accounts);
   }
}
```

The following is a batch job that uses an iterator:

```apex
public class BatchClass implements Database.Batchable{
   public Iterable start(Database.BatchableContext info){
       return new CustomIterable();
   }
   public void execute(Database.BatchableContext info, List scope){
       List accsToUpdate = new List();
       for(Account acc : scope){
           acc.Name = 'changed';
           acc.NumberOfEmployees = 69;
           accsToUpdate.add(acc);
       }
       update accsToUpdate;
   }
   public void finish(Database.BatchableContext info){
   }
}
```
