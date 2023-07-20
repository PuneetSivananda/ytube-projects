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
        return self.data.push(ele)

    def pop(self, ele):
        value = self.data[len(self.data)-1]
        del self.data[len(self.data) - 1]
        return value

    def min(self):
        minValue = 0
        for item in range(self.data.length - 1):
            if self.data[item] < min:
                minValue = self.data[item]
        return minValue

    def top(self):
        return self.data[self.data.length]


s1 = MyStack([2, 3, 5, 6])
print(s1.pop(1))
# s1.push(4)
# print(s1.min())
# print(s1.top())

# def say_hello():
#     print('Hello, World')

# for i in range(5):
#     say_hello()
