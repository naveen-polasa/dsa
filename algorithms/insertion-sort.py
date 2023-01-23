arr = [2,4,31,5,25,6]

for i in range(1,len(arr)):
    j = i-1
    while j>=0 and arr[j+1] < arr[j]:
        arr[j+1], arr[j] = arr[j], arr[j+1]
        j-=1

print(arr)