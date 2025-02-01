


# def func(lst, target):
#     if len(lst) == 0:
#         return 0
#     for i in range(len(lst)):
#         if lst[i] == target:
#             return i 
#     return 0

# print(func([1,2,3,4,5,6], 8))


def func(lst, target):
    if len (lst) == 0:
        return 0
    
    for i in range(len(lst) - 1, -1, -1):  
        if lst[i] == target:
            return i  
    
    return 0 

print(func([1, 2, 3, 2]), 2)