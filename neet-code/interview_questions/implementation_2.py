# Stack  push() , pop() , top() , min()

# top gets the top element
# push add item to stack
# pop removes itsm from stack
# min gets the minuimun value from stack

class MyStack:
    data = []

    def __init__(self, data):
        self.data = data

    def push(self, ele):
        self.data.append(ele)
        return self.data

    def pop(self):
        value = self.data[len(self.data)-1]
        del self.data[len(self.data) - 1]
        return value

    def min(self):
        minValue = self.data[0]
        for item in range(1, len(self.data)):
            if self.data[item] < minValue:
                minValue = self.data[item]
        return minValue

    def top(self):
        return self.data[len(self.data) - 1]


s1 = MyStack([2, 3, 5, 6])
print(s1.data)
print(s1.pop())
print(s1.data)
print(s1.push(4))
print(s1.data)
print("min:", s1.min())
print("Top:", s1.top())

# def say_hello():
#     print('Hello, World')

# for i in range(5):
#     say_hello()
