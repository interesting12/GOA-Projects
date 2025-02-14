import random

leaders = ["Kote Ximshiashvili", "Davit Adeishvili", "Data Popxadze", "Gobron Witlauri", "Nata Kvantaliani", "Giorgi Shavadze"]

students = [
    'mate chikaidze', 'giga kochalidze', 'zuka qoridze',  'gio mindorashvili', 'rati chigogidze',
    'ilia iremadze', 'davit mefarishvili', 'lasha giorgi azaladze', 'luka tatuashvili',
    'nika macharashvili', 'ilia dzindzibadze'
]

def distribution_in_groups(leaders, students):
    groups = []
    index = 0

    while index < len(students):
        for i in leaders:
            if index < len(students):
                group = {
                    'leader': i,
                    'students': []
                }
                students_num = random.randint(1,2)

                if students_num > len(students) - index:
                    students_num = len(students) - index

                for i in range(students_num):
                    if index < len(students):
                        group['students'].append(students[index])
                        index += 1
                
                groups.append(group)

    return groups
groups = distribution_in_groups(leaders, students)
for group in groups:
    print(f"{group['leader']}:")
    for student in group['students']:
        print(f" [{student}")
