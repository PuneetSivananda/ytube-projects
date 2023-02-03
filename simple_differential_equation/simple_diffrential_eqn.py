import numpy as np

r =  0.05

# Simple compound
print(1+r)

# compound monthly
compund_with_interest = (1+r/12)**12
print(compund_with_interest)

# compound yearly 
compund_with_interest_yearly = (1+r/365)**365
print(compund_with_interest_yearly)

print(np.exp(r))