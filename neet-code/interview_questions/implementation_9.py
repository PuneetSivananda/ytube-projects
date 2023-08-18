# program to generate the sequences based on the length passed as an input, from the given input string.
# For example, if the input string is “abc”, and input length is 2, then the output must be {ab,bc} only (only the consecutive sequences allowed)
# If the input is “abcde” and length is 3, then output must be {abc, bcd, cde}


stringA = "abcde"

def genSeq(world, count):
    substring = ""
    output = []    
    countItem = 0
    for ix, ch in enumerate(world):
        countItem += 1
        substring += substring
        if(countItem == count):
            countItem = 0
            output.append(substring)
        # substring = ""
    return output
    
# print(genSeq(stringA, 3))

# program to right rotate the list by n position
# Input : n = 2, List_1 = [1, 2, 3, 4, 5, 6]
# Output : List_1 = [5, 6, 1, 2, 3, 4]

# Input :  n = 3, List_1 = [3, 0, 1, 4, 2, 3]
# Output : List_1 = [4, 2, 3, 3, 0, 1]
n = 3
List_1 = [3, 0, 1, 4, 2, 3]

def rotateList(List_1, n):
    return List_1[n:]+List_1[:n]
    
print(rotateList(List_1, n))



# [16:57] Prakash, Dheeraj

# You are given the Pandas DataFrame shown below, your task is to group the DataFrame rows into a list, and return a final DataFrame                                                                     # Input

# df = pd.DataFrame( {'a':['A','A','B','B','B','C'], 'b':[1,2,5,5,4,6]})                                                                                                                                                                                        #Output of the new column
# # Row 1, has value of [1,2]
# # Row 2, has value of [5, 5, 4]
# # Row 3, has value of [6]

select ROWNUM(DESC(salary), 3) from employees limit 3

# Ans:
SELECT * FROM employees 
WHERE salary = (
  SELECT DISTINCT salary FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rank 
    FROM employees
  ) t 
  WHERE rank = 3
)


Write a query to fetch the department-wise count of employees sorted by employees’s count in descending order.

select dept_name, emp_id from employees group by dept_id order by count(emp_id) DESC



select A.a, B,b, C.c from A, B, C join (
    select B.b, C.C from B, C
)


