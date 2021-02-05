class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
};


class DoublyLinkedList {
    constructor() {
        this.head = null;
		this.tail = null;
        this.length = 0;
    };
	
	addFirst(value) {
		const node = new Node(value);
		if (!this.head) {
		  this.head = node;
		  this.tail = node;
		} else {
		  this.head.prev = node;
		  node.next = this.head;
		  this.head = node;
		}
		this.length++;
		return node;
	};
	
	addLast(value) {
		let node = new Node(value);

		if (this.length === 0) {
			this.head = node; 
			this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
			let current = this.head;
		}
		this.length++;
		
		return node;
	};

	addByPosition(position, value) {
		if (position < 0 || position > this.length) {
			return 'Incorrect value of position';
		}

		if (position === 0) { 
			return this.addFirst(value);
		} 
		if (position === this.length){
			return this.addLast(value);
		}
		
		let node = new Node(value);

		let current = this.head;
		let previous = null;
		let index = 0;
		
		while (index < position) {
			previous = current;
			current = current.next;
			index++;
		}
		
		node.prev = previous;
		previous.next = node;
		current.prev = node;
		node.next = current;
		
		this.length++;
		return node;
	};
	
	isEmpty(){
		return this.length === 0;
	};
	
	getLength(){
		return this.length;
	};
	
	toString(){
		let str = "";
		if (this.length !== 0) {
			let current = this.head;
			while(current.next) {
				str += current.value + ", ";
				current = current.next;
			}
			str += current.value
		}
		return str;
	};
	
	indexOf(value) {
		let current = this.head;
		let index = 0; 

		while(current) {
			if (current.value === value) {
				return index;
			}
			current = current.next;
			index++;
		}

		return -1;
	};
	
	getNodeByValue(value){
		let current = this.head;
		
		while(current) {
			if (current.value === value) {
				return current;
			}
			current = current.next;
		}

		return null;
	};
	
	getNodeByIndex(position){
		if (position < 0 || position > this.length) {
			return 'Incorrect value of position';
		}
		
		let current = this.head;
		let index = 0;
		while (index++ < position) {
			current = current.next;
		}
		return current;
	};
	
	removeFirst(){
		if (!this.head) {
			return "The list is empty";
		}
		const node = this.head;
		const newHead = this.head.next;
		if (this.head !== this.tail) {
			newHead.prev = null;
			node.next = null;
		} else {
			this.tail = null;
		}
		
		this.head = newHead;
		this.length--;
		return node;
	};
	
	removeLast(){
		if (!this.head) {
			return "The list is empty";
		}
		const node = this.tail;
		const newTail = this.tail.prev;
		if (newTail) {
		  newTail.next = null;
		  this.tail.prev = null;
		} else { //if new tail is also a head
		  this.head = null;
		}
		this.tail = newTail;
		this.length--;

		return node;
	};
	
	removeByIndex(position) {
		if (position < 0 || position > this.length) {
			return 'Incorrect value of position';
		}

		let current = this.head; 

		if (position === 0) {
			return this.removeFirst();
		} 
		if (position == this.length - 1) {
			return this.removeLast();
		} 
		
		let prev = null;
		let index = 0;

		while(index < position) {
			prev = current;
			current = current.next;
			index++;
		}
		
		prev.next = current.next; 
		current.next.prev = prev;

		this.length--;
		return current;
	};
	
	removeByValue(value) {
		return this.removeByIndex(this.indexOf(value));
	};
	
	moveByPositionToStart(position){
		if (position < 0 || position > this.length) {
			return 'Incorrect value of position';
		}
		let node = this.removeByIndex(position);
		return this.addFirst(node.value);
	};
	
	moveByPositionToEnd(position){
		if (position < 0 || position > this.length) {
			return 'Incorrect value of position';
		}
		let node = this.removeByIndex(position);
		
		return this.addLast(node.value);
	};

	moveElement(position, desirablePostion){
		if (position < 0 || position > this.length) {
			return 'Incorrect value of position';
		}
		let node = this.removeByIndex(position);
		
		return this.addByPosition(desirablePostion, node.value);
	};
	
	moveByPostionNextToValue(position, value){
		if (position < 0 || position > this.length) {
			return 'Incorrect value of position';
		}
		let v = this.indexOf(value);
		if (v != -1){
			let val = this.removeByIndex(position).value;
			this.addByPosition(v, val);
		}
		return v;
	};

	reverse(){
		let cur = this.head;
        while(cur){
            let temp = cur.next;
            cur.next = cur.prev;
            cur.prev = temp;
            if(temp == null){
				let tempTail = this.tail;
				this.tail = this.head;
				this.head =  tempTail;
                return this;
			}
            else
                cur = temp;
        }
        return null;
	};
	
	toArray(){
		let resultArr = new Array();
		let current = this.head;
		while(current) {
			resultArr.push(current.value);
			current = current.next;
		}
		return resultArr;
	};
		
	sort(){
        if(!this.head){
            return;  
		}
		let current = this.head;
		while(current.next){  
			let index = current.next;  
			while(index){
				if(current.value > index.value){  
					let temp = current.value;  
					current.value = index.value;  
					index.value = temp;  
				}
				index = index.next  
			}
			current = current.next  
		}
		return this;
	};
	
	
	subList(first, last = this.length){
		let list = new DoublyLinkedList();
		
		if (first < 0 || first > this.length || last < 0 || last > this.length || first > last) {
			return 'Incorrect values of position';
		}
		
		let current = this.head;
		let index = 0;
		while (index < last) {
			if (index++ >= first){
				list.addLast(current.value);
			}
			current = current.next;
		}
		return list;				
	};
}

DoublyLinkedList.fromArray = function(array){
	let list = new DoublyLinkedList();
	array.forEach(function(item, index) {
		list.addLast(item);
	});
	return list;
}

let list1 =  new DoublyLinkedList();
//Должна быть возможность добавить новый элемент в начало списка, конец или после определенного элемента
list1.addLast(1);
list1.addLast(2);
list1.addLast(3);
list1.addLast(4);
list1.addLast(5);
list1.addLast(6);
list1.addLast(7);
list1.addFirst(0);
list1.addByPosition(0,"test_0"); // Элементы списка могут содержать любой тип данных
list1.addByPosition(9,"test_last");
list1.addByPosition(5,"test_somewhere");

list1.toString();
//test_0 0 1 2 3 test_somewhere 4 5 6 7 test_last

//Должна быть возможность проверить список на пустоту
list1.isEmpty();
//false
new DoublyLinkedList().isEmpty();
//true

//Должна быть возможность переместить элемент списка на другое место списка (начало, конец или после определенного элемента)
list1.moveByPositionToStart(3);
//2 test_0 0 1 3 test_somewhere 4 5 6 7 test_last

list1.moveByPositionToEnd(3);
//2 test_0 0 3 test_somewhere 4 5 6 7 test_last 1

list1.moveByPostionNextToValue(0,"test_last");
//test_0, 0, 3, test_somewhere, 4, 5, 6, 7, test_last, 2, 1

list1.toString();

//Должна быть возможность удалить произвольный элемент списка
list1.removeByIndex(1); //remove 1
//test_0, 3, test_somewhere, 4, 5, 6, 7, test_last, 2, 1

list1.removeByIndex(5); //remove 5
//test_0, test_somewhere, 4, 5, 7, test_last, 2, 1

list1.removeByValue("test_somewhere");
//test_0, 3, 4, 5, 7, test_last, 2, 1

list1.removeByValue(2);
//test_0, 3, 4, 5, 7, test_last, 1

list1.toString();

//Должна быть возможность получить доступ к произвольному элементу списка
list1.indexOf("test_last"); //5
list1.indexOf(3); // 1
list1.getNodeByValue(7); //Node with value =  7 
list1.getNodeByIndex(6); //Node with value = 2


// Должна быть возможность получить длину списка
list1.getLength(); //7

// Должна быть возможность сделать выборку из списка по указанным начальному и конечному элементу списка (на вход два параметра: номер элемента, с которого надо начать выборку, и номер элемента, который должен быть последним в выборке). Если первый параметр равен 0, то выборка идет с первого элемента списка. Если не указан второй параметр, то выбираются все элементы до конца списка.
list1.subList(0).toString(); ////test_0, 3, 4, 5, 7, test_last, 1
list1.subList(0, 3).toString(); //test_0, 3, 4
list1.subList(2, 3).toString(); //4
list1.subList(2, 4).toString(); //4 , 5


// Должен быть реализован любой алгоритм сортировки списка
list1.sort();
list1.toString();

// Должна быть возможность инвертировать список
list1.reverse();
list1.toString();

// Должна быть возможность преобразовать список в массив
let arr = list1.toArray();

// Должна быть возможность получить список из массива
DoublyLinkedList.fromArray(arr).toString();

// Должна быть возможность преобразовать список в строку
list1.toString();




