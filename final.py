import sys
import pickle

a = sys.argv[1]
b = sys.argv[2]
c = sys.argv[3]
d = sys.argv[4]
e = sys.argv[5]

a = float(a)
b = float(b)
c = float(c)
d = float(d)
e = float(e)

filename = 'model.sav'
loaded_model = pickle.load(open(filename, 'rb'))

# from sklearn.preprocessing import StandardScaler 
# sc = StandardScaler()
my_survival_scaled = [[a,b,c,d,e]]
# print(a)
# print(b)
# print(c)
# print(d)
# print(e)

#print prediction using Random Forest
pred = loaded_model.predict(my_survival_scaled)
print(pred[0])
